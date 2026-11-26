# Деплой и инфраструктура

## TL;DR

Стек: Next.js 15 (standalone) → Docker → виртуальная машина в Yandex Cloud → Nginx + Let's Encrypt.

Альтернативы:

- **Selectel** — дешевле, российская юрисдикция, тоже подходит для 152-ФЗ.
- **VK Cloud** — государственный, для проектов с госсектором.
- **Своё железо** — если параноите.

**НЕ** деплоим на Vercel/Netlify для прод-формы, потому что серверы за рубежом. Статическая часть Vercel работает, но обработка форм с ПДн должна быть на сервере в РФ.

## Локальный запуск

```bash
cp .env.example .env
# заполните TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID
npm install
npm run dev
# открыть http://localhost:3000
```

Для прод-сборки локально:

```bash
npm run build
npm start
```

## Telegram-уведомления для формы

1. Открой @BotFather, создай бота: `/newbot`. Получаешь токен вида `12345:AAA...`.
2. Создай **приватный** канал или чат, добавь бота как админа.
3. Узнай chat_id:
   - отправь любое сообщение в чат с упоминанием бота;
   - открой `https://api.telegram.org/bot<TOKEN>/getUpdates`;
   - найди поле `chat.id`. Для канала — отрицательное число вида `-1001234567890`.
4. Положи в `.env`:
   ```
   TELEGRAM_BOT_TOKEN=12345:AAA...
   TELEGRAM_CHAT_ID=-1001234567890
   ```
5. Перезапусти приложение. Тестовая отправка формы должна прийти в канал.

## Деплой через Docker на VM в Yandex Cloud

### 1. Создать VM

```
- Платформа: Intel Cascade Lake
- vCPU: 2, RAM: 2 GB (для старта хватит)
- Диск: 20 GB SSD
- Образ: Ubuntu 22.04 LTS
- Сеть: публичный IPv4 (статический)
- Зона: ru-central1-a (например)
```

### 2. Подготовить VM

```bash
ssh ubuntu@<IP>
sudo apt update && sudo apt upgrade -y
sudo apt install -y docker.io docker-compose-v2 nginx certbot python3-certbot-nginx git
sudo usermod -aG docker $USER
# Перелогиниться, чтобы группа применилась
```

### 3. Залить код

```bash
git clone <ваш-репозиторий> /opt/dilik
cd /opt/dilik
cp .env.example .env
# отредактируйте .env: токены, домен, реквизиты
docker compose up -d --build
```

### 4. Настроить Nginx + SSL

`/etc/nginx/sites-available/dilik.ru`:

```nginx
server {
    server_name dilik.ru www.dilik.ru;
    client_max_body_size 5M;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade           $http_upgrade;
        proxy_set_header Connection        "upgrade";
        proxy_buffering off;
    }

    listen 80;
}
```

```bash
sudo ln -s /etc/nginx/sites-available/dilik.ru /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d dilik.ru -d www.dilik.ru
```

Certbot сам пропишет HTTPS и редирект с HTTP.

### 5. Обновление кода

```bash
cd /opt/dilik
git pull
docker compose up -d --build
```

Можно автоматизировать через GitHub Actions / GitLab CI + webhook.

## Аналитика — Яндекс.Метрика

1. Зарегистрируйся на https://metrika.yandex.ru/
2. Создай счётчик для домена. Включи **Вебвизор**, карту скроллинга и кликов.
3. Получи ID счётчика (число вида `99999999`).
4. Положи в `.env`: `NEXT_PUBLIC_YM_ID=99999999`.
5. Перебилди (`docker compose up -d --build`). Счётчик подключается автоматически в `app/layout.tsx`.

## Мониторинг (минимум)

- **Uptime:** UptimeRobot (бесплатно, 50 чеков) или Яндекс.Cloud Monitoring.
- **Ошибки:** Sentry (бесплатно для маленьких проектов). Подключение — отдельная задача.
- **Логи:** `docker compose logs -f web` или Yandex Cloud Logging.

## Безопасность

- Закрой SSH-доступ только по ключу, отключи парольный вход.
- Включи UFW: `sudo ufw allow OpenSSH && sudo ufw allow 'Nginx Full' && sudo ufw enable`.
- Регулярные обновления: `sudo unattended-upgrades`.
- Не храни `.env` в git (он уже в `.gitignore`).

## Резервное копирование

Снэпшоты диска VM раз в сутки через консоль Yandex Cloud. Этого достаточно для landing-сайта без БД.
