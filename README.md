## Hunger-Captian
```
Thsi project is created by using React and Redux for Frontend and Django for backend
```
Check out [FRONTEND LIVE DEMO](https://frontend-hungercaptain.herokuapp.com/) here!!
Check out [API LIVE DEMO](https://backend-hungercaptain.herokuapp.com/) here!!
## Tech used
```
* Frontend : React & Redux
* Backend : Django
```
## How to Install
1. Git Clone
```
git clone https://github.com/JosephAmbersley/hunger-captian-project.git
```
2. Backend setting
```
cd backend
Python -m venv env
(For Mac) source env/bin/activate
(For Windows) env/Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
# Open http://127.0.0.1:8000/posts/
# To have dummy data for testing run:
python manage.py fixtures/dummy-data.json
```
3. Frontend setting
```
cd frontend
npm install
npm start
# Open http://127.0.0.1:3000/
```






