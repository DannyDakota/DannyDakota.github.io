# DannyDakota.github.io

To run the app:
1. Clone repo
$ git clone git@github.com:DannyDakota/DannyDakota.github.io.git
$ cd DannyDakota.github.io
2. Setup MongoDB
Local MongoDB
Install it from here
Create .env file in root folder
Set MONGODB_URL=mongodb://localhost/relaxshopping
Atlas Cloud MongoDB
Create database at https://cloud.mongodb.com
Create .env file in root folder
Set MONGODB_URL=mongodb+srv://your-db-connection
3. Run Backend
$ npm install
$ npm start
4. Run Frontend
# open new terminal
$ cd frontend
$ npm install
$ npm start
5. Seed Users and products
Run this on chrome: http://localhost:5000/api/users/seed
Run this on chrome: http://localhost:5000/api/products/seed
This creates 6 sample products
