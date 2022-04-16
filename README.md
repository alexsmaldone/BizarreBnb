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

## Select Features / Pages

### Home/Splash Page
![image](https://user-images.githubusercontent.com/76414535/163684518-fab12392-ec8f-45c6-b2bd-c43dfa451860.png)

### Browse Bizarre Bookings
![image](https://user-images.githubusercontent.com/76414535/163684541-931a612d-3cf6-4704-b6c6-5d19f805b3b1.png)

### Bizarre Booking Detail Page
![image](https://user-images.githubusercontent.com/76414535/163684561-a94dea69-48b2-4003-ace9-c52656a62fff.png)

### Bizarre Booking Create Form
![image](https://user-images.githubusercontent.com/76414535/163684586-8d0ae4f3-125e-435f-8bd7-35f1bb960307.png)

### View Your Listings
![image](https://user-images.githubusercontent.com/76414535/163684718-6ee4a570-62a6-42d3-aedf-98ba396d4e4f.png)

### Edit Your Listing
![image](https://user-images.githubusercontent.com/76414535/163684608-24d0b9df-9a3d-458a-a038-8bf3cb8e0e6f.png)

### Delete Listing
![image](https://user-images.githubusercontent.com/76414535/163684642-63f4ea75-7e84-4824-b7cd-102ce9603904.png)

### Review a Listing
![image](https://user-images.githubusercontent.com/76414535/163684661-bec8b639-ed86-4e40-ad83-c6732c2385d4.png)

### Edit/Delete Your Review
![image](https://user-images.githubusercontent.com/76414535/163684689-2615253f-eb21-4665-97d4-e050875abfb5.png)


## Installation on your local machine
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

