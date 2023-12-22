# VERSTO APP

A fitness tracker app that helps users monitor their workouts, calculate BMI, and provides nutrition tips. Built with Material-UI, React with TypeScript for the frontend, and Express.js with Node.js for the backend. This app is developed by Alyuza Satrio & Ireng Febrian Sanjaya. This idea came to us after we figured out we have the same interest in working out. So here it goes, our Versto App.

## Table of Contents

- [VERSTO APP](#versto-app)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
    - [Frontend (React with TypeScript)](#frontend-react-with-typescript)
    - [Backend (Express.js with Node.js)](#backend-expressjs-with-nodejs)
  - [Usage](#usage)
  - [API Documentation](#api-documentation)
    - [User Endpoint](#user-endpoint)
    - [Workout Endpoint](#workout-endpoint)
    - [BMI Calculator Endpoint](#bmi-calculator-endpoint)
  - [BMI Calculator](#bmi-calculator)
  - [Nutrition Tips](#nutrition-tips)
  - [Acknowledgements](#acknowledgements)
  - [Access Link](#access-link)

## Features

- **Workout Tracker:**
  - Record and monitor your running, swimming, and cycling activities.
  - Track distance, time, and calories burned.

- **BMI Calculator:**
  - Calculate your Body Mass Index (BMI) based on height, weight and age.
  - Get personalized recommendations based on your BMI.

- **Nutrition Tips:**
  - Access helpful nutrition tips and advice to support your fitness goals.

- **Material-UI Design:**
  - Stylish and responsive user interface using Material-UI components.

- **Postman Documentation:**
  - Documentation for Backend Endpoint with request & response body json.
  
## Installation

### Frontend (React with TypeScript)

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/fitness-tracker.git
2. Navigate to the frontend directory:
   ```cd workout-tracker/frontend```
3. Install dependencies:
   ```npm install```
4. Start the development server:
   ```npm run dev```

### Backend (Express.js with Node.js)

1. Navigate to the frontend directory:
   ```cd workout-tracker/backend```
2. Install dependencies:
   ```npm install```
3. Start the development server:
   ```npm run start```


## Usage
Versto App is a user friendly app for all age, gender and race. We're providing a simple page for user from register, login, workout tracking (running, cycling, swimming), bmi calculator and nutrition tips. Here's below for more detail;
![register](Readme%20Documentation/Register%20Page.png)
![login](Readme%20Documentation/Login%20Page.png)
![running](Readme%20Documentation/Running%20Activity.png)
![addactivity](Readme%20Documentation/Add%20Activity.png)
![menu](Readme%20Documentation/Menu.png)
![cycling](Readme%20Documentation/Cycling.png)
![swimming](Readme%20Documentation/Swimming%20Activity.png)



## API Documentation

### User Endpoint

| Name                        |  Type Method  | Endpoint              |
| --------------------------- | ------------- | --------------------- |
| **Register**                | `POST`        | [/api/register]       |
| **Login**                   | `POST`        | [/api/login]          |

### Workout Endpoint

| Name                        |  Type Method  | Endpoint              |
| --------------------------- | ------------- | --------------------- |
| **Read All Workout**        | `GET`         | [/api/tasks]          |    
| **Create Running**          | `POST`        | [/api/tasks/running]  |
| **Create Cycling**          | `POST`        | [/api/tasks/cycling]  |
| **Create Swimming**         | `POST`        | [/api/tasks/swimming] |
| **Update Workout**          | `PUT`         | [/api/tasks/:id]      |
| **Delete Workout**          | `DELETE`      | [/api/tasks/:id]      |

### BMI Calculator Endpoint

| Name                        |  Type Method  | Endpoint              |
| --------------------------- | ------------- | --------------------- |
| **Read All BMI**            | `GET`         | [/api/bmicalculator]  |    
| **BMI Calculator**          | `POST`        | [/api/bmicalculator]  |
| **Delete BMI History**      | `DELETE`      | [/api/bmicalculator]  |


For more Documentation for Backend, here's the link: https://documenter.getpostman.com/view/29043469/2s9Ykraf9x


## BMI Calculator
On this app, you can use BMI Calculator by input the weight, height and age box and click submit. The result will appear on the right side box container. If you wondering about the result intepretation, here is the number below for you to intepret.

| BMI Category                |  BMI Standard |
| --------------------------- | ------------- |
| **Underweight**             |  < 18.5       |    
| **Normal Weight**           |  < 24.9       |
| **Overweight**              |  < 29.9       |
| **Obese**                   |  > 29.9       |

![bmicalculator](Readme%20Documentation/BMI%20Calculator.png)


## Nutrition Tips
Versto App also provide a landing page for nutrition tips, each page below will be updated with more relevant and accurate information based on expert and research paper. We believe user should have more access to accurate information for their health, mental and body improvement.
![nutrition1](Readme%20Documentation/Nutrition%20Tips.png)
![nutrition2](Readme%20Documentation/Nutrition%20Tips%202.png)
![nutrition](Readme%20Documentation/Nutrition%20Tips%203.png)

## Acknowledgements
- Material-UI
- React
- Express.js
- Node.js
- Postman
- Mongodb
- Vercel
- Swal Alert


## Access Link
You access Frontend and Backend with link below;
Frontend: https://www.versto.site
Backend: https://workout-tracker-server-navy.vercel.app