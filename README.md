# Development
Pasos para levantar la app en desarrollo

1. Levantar la base de datos
```
docker compose up -d
```

2. Crear una copia del el env.template, y renombrarlo a .env
3. Reemplazar las variables de entorno
4. Ejecutar el comando ```npm install```
5. Ejecutar el comando ```npm run dev```
6. Ejecutar estos comandos de prisma
```
npx prisma migrate dev
npx prisma generate
```
8. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)

# Prisma commands
## Base de datos vacia
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```
## Base de datos con tablas
```
npx prisma init
npx prisma db pull
npx prisma generate
```