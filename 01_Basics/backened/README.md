# Chai aur Backened

## Initialisation
- npm init
- npm install express

## Make a new File of index.js
- when u start the server it requires reloading for which we need to stop reloading and then start again..


## DEPOLY YOUR SERVER
- use render 
- make a new repo
- add .gitignore file and node modulus and .env to it

## to assmble all files 
- type : module in package.json

## to send request to server from frontend part
- api's fetch : use of axios 
- npm i axios
- CORS : cross origin request : if url and port is different from which request is coming so it blocked that request
so origin needs to be same 

## solutions of CORS policy
- id whitelist  // allow all request comming from any src
- domain whitelist
- every time we can't white whole url so here proxy came in game

## Proxy
- add localhost url with proxy 
- For react app : use proxy in package.json file
- For vite : go tho vite.config.js
- From this step - Backened Server url connect with frontend it means whenever u send request from any server but proxy will replaced it by its origin .

## DataBase
- Paid : Moon Mongoose
- Free : eraser which help u make the model of data which is called data modelling
- helper : can be Prisma or mongoose
- Data modelling : statements 

- ---import mongoose from 'mongoose'
- ---new mongoose.Schema({})
- export const User = mongoose.model(kya model bnau , kiske base par bnau)  ex: ("User" , userSchema) : user stored in database as users --> it is the feature of mongoose

- timestamps is also an basic feature which is createdAt , updatedAt

- go on StackBlitz to watch data Modelling sets..


## Started With a new Project
- npm init
- after installasation of Backened Project starts with public folder And gitkeep file to it 
- make a gitignore file and take data from .gitignore generator 
- .env file for project 
- src folder with app.js index.js file 

