# BizarreBnb

**BizarreBnB** is a web application for browsing and booking the quirkiest collection of BnBs on the internet. It was inspired by AirBnb and built using React, Redux, Express with PostgreSQL database.

Browse live link to **BizarreBnB** [here](https://bizarrebnb.herokuapp.com/).

## Technologies Used
* Javascript
* Express
* React
* Redux
* Sequelize
* PostgreSQL
* CSS
* Git
* Heroku

## Instalation on your local machine
1. To be able to install BizarreBnB on your local machine, please clone this project repository. 
```
git clone git@github.com:alexsmaldone/BizarreBnb.git
```

2. Install dependencies from the root directory.
```
npm install
```

3. Create s PostrgeSQL user with CREATEDB and PASSWORD in PSQL
```
psql -U CREATE USER <name> WITH PASSWORD <'password'> CREATEDB;
```

4.Create a.env file in the backend directory based on the .env.example found within the respective directory.

5. Enter your username and password information into your .env file along with your desired database name, a secured combination of characters for your JWT_SECRET, and your desired PORT (preferably 5000).

6. Add the following proxy to your package.json file within your frontend directory, replacing or keeping the 5000 port to match your port configuration found in your .env file.
```
"proxy": "http://localhost:5000"
```

7. Create a database, migrate, and seed models.
```
npx dotenv sequelize db:create
npx dotenv sequelize db:migrate
npx dotenv sequelize db:seed:all
```

8. Start the server in the backend directory.
```
npm start
```

9. Start the server in your frontend directory, which should open the project in your default browser. If not, navigate to https://localhost:3000 .
```
npm start
```

You are all set. You can use the Demo user or create an account to start using BizarreBnB.


## Development

## Main Features

## Challenges (put examples of code)
