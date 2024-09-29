# TechTrek

> [!IMPORTANT]
>
> TechTrek is currently in development and not yet recommended for production use, however you can take part in improving our project!

## :wrench: Stack

- NextJS (App Router)
- TailwindCSS
- Framer motion

## :whale: Start

### :hammer: Running via Pre-built

First, download the pre-built `release.zip` from `https://github.com/Zach677/TechTrek/releases`. Then unzip it.

```sh
cd standalone
vim .env # modify your ENV variables
export PORT=2323
node server.js
```

### :books: Recommended for use Docker Compose

```sh
mkdir TechTrek
cd TechTrek

wget https://raw.githubusercontent.com/Zach677/TechTrek/main/docker-compose.yml
wget https://raw.githubusercontent.com/Zach677/TechTrek/main/.env.template .env

vim .env # 修改你的 ENV 变量
docker compose up -d

docker compose pull # 后续更新镜像
```

## 🥰 Acknowledgements

Some inspiration and code references from GPT-4o and [Innei](https://github.com/Innei/Shiro) and [daidr](https://github.com/daidr/douLog)。

Copyright © 2024 Zach. All Rights Reserved.
