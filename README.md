# Prisimename NODE

## Susikurti nauja projekta

## Kaip pradeti?

1. inicijuoti git, .gitignore - done
2. inicijuoti npm - done
3. isirasyti express, cors, morgan, colors, dotenv, mysql2,(devDep) eslint, nodemon,
4. eslint --init - sukonfiguruoti eslint
5. package.json - susukiriam scripts
6. susikurti back end serveri su express
7. 404 - response in json
8. isijungi morgan, cors, json() (app.use)
9. sukurti .env ir ideti PORT
10. config.js pasiimti prisijungimo duomenis is .env
11. Pasileisti Xammp/mamp ir pasitkrinti ar veikia db

## DB

13. sukurti duomenu baze "db-19"
14. sukurti lentele "trips" su laukais: id, name, date, country, city, rating, description, price, is_deleted
15. sukurti du kelis irasus i lentele

## Routes

12. Susikurti routes folderi
13. sukurti trips.routes.js
14. sukurti routus:
    - GET /trips - grazinti visus irasus
    - GET /trips/:id - grazinti viena irasa pagal id
    - POST /trips - sukurti nauja irasa
    - PUT /trips/:id - atnaujinti irasa
    - DELETE /trips/:id - istrinti irasa
15. isbandyti ar veikia su postman ar rest client
