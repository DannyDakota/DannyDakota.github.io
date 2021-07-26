# DannyDakota.github.io

To run the app:
# 1. Clone repo
in your CLI:
  1) git clone git@github.com:DannyDakota/DannyDakota.github.io.git / you can download the folder and open it in visual studio
  2) cd DannyDakota.github.io
# 2. Setup MongoDB
  #  Local MongoDB
Install it from here

Create .env file in root folder

Set MONGODB_URL=mongodb://localhost/relaxshopping

# Atlas Cloud MongoDB

Create database at https://cloud.mongodb.com

Create .env file in root folder

Set MONGODB_URL=mongodb+srv://your-db-connection

# 3. Run Backend

In your CLI(in the code folder):

    1) npm install
    
    2) npm start
    
    3) Run Frontend
    
# 4. Open new terminal

In your CLI(in the code folder):

    1) cd frontend
    
    2) npm install
    
    3) npm start
    
# 5. Seed Users and products

Run this on chrome: http://localhost:5000/api/users/seed

Run this on chrome: http://localhost:5000/api/products/seed

This creates 6 sample products


Note: 


-To access seller dedicated application:

User : admin@example.com

Password: 1234


-Also note that we process insert each search scrape into the mongoDB server so refrain from searching the same string twice as it will result in duplicate elements popping up in the product screen. Instead, proceed to categories on the left to select the previously searched string.
