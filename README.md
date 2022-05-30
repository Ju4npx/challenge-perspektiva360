# Challenge Perspektiva360

Technical test for the company perspektiva360.

* Requirements: <a href="./challenge.pdf" target="_blank">Open PDF</a>
* Requirements page preview: <a href="./requirements-preview.pdf" target="_blank">Open PDF</a>

*MERN, API, CRUD, Frontend image upload.*

## [Try demo](https://perspektiva360-challenge.herokuapp.com/)

<img src="./preview.jpeg">

### Table of contents 📃

- [Challenge Perspektiva360](#challenge-perspektiva360)
  - [Try demo](#try-demo)
    - [Table of contents 📃](#table-of-contents-)
  - [Starting 🚀](#starting-)
    - [Pre-requirements 📋](#pre-requirements-)
    - [Installation 🔧](#installation-)
  - [Deployment 📦](#deployment-)
  - [Built with 🛠️](#built-with-️)

## Starting 🚀
  
### Pre-requirements 📋

* [Git](https://git-scm.com/)
* [npm](https://www.npmjs.com/)
* [Mongo database](https://www.mongodb.com/)

### Installation 🔧

Local installation:

```bash
# Clone this repository
$ git clone https://github.com/Ju4npx/challenge-perspektiva360.git

# Change directory to the project path
$ cd challenge-perspektiva360
```

---

**Backend setup:**
```bash
# Change directory to the backend path
$ cd backend

# Install dependencies
$ npm install

# Copy .env file
$ cp .env.example .env
```

backend **.env** file setup example:

```shell
PORT=5000
FRONTEND_URL="http://localhost:3000"

MONGODB_CNN="mongodb+srv://user:password@cluster.rgq1n.mongodb.net/schema"
JWT_SECRET_KEY="RANDOMKEY"
```

---

**Frontend setup:**
```bash
# Go back to the project path
$ cd ..

# Change directory to the frontend path
$ cd frontend

# Install dependencies
$ npm install

# Copy .env file
$ cp .env.example .env
```

frontend **.env** file setup example:

```shell
VITE_BACKEND_URL="http://localhost:5000/api"
```

## Deployment 📦

```bash
# Open terminal in project path and run
$ cd frontend
$ npm run dev

# Open another terminal in project path and run
$ cd backend
$ npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Built with 🛠️

* [React](https://reactjs.org/) - Frontend framework
* [React Redux Tk](https://redux-toolkit.js.org/) - State management
* [Node.js](https://nodejs.org/) - Javascript runtime environment
* [Express.js](https://expressjs.com/) - Backend framework
* [MongoDB](https://www.mongodb.com/) - NoSQL database

---
⌨️ with ❤️ by [Juan Pablo Machado](https://github.com/Ju4npx ) 😊 