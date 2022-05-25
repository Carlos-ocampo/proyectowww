# BECAS

## whc2

```sh
# virtual env 
python -m venv env

# activate:
## linux: p
# source env/bin/activate
## windows
.\env\Scripts\activate

# dependencias
pip install django djangorestframework httpie pillow django-cors-headers

# generate the proejct
django-admin startproject becas_api

# enter on project
cd becas_api/

# create application
django-admin startapp api

# migrate
python manage.py makemigrations
python manage.py migrate


# create the super user
python manage.py createsuperuser
# root:12345678


```

```sh
http POST http://127.0.0.1:8000/api_generate_token/ username="root" password="12345678"
http -a root:12345678 GET  http://127.0.0.1:8000/api/paises/ 

```

```sh
npm create vite@latest beca_vue -- --template vue
cd beca_vue
npm install
npm run dev
```

css

- [tailwind](https://tailwindcss.com/docs/guides/vite)
- [daisyui](https://daisyui.com/docs/install/)

route

- [route](https://router.vuejs.org/installation.html#npm)

axios by api

- [Axios](https://axios-http.com/docs/intro) not use this, just see documentation
- [Axios wit vue](https://www.npmjs.com/package/vue-axios)