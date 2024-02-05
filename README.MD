# Simple project with TS to practice hexagonal architecture concept

### Concepts covered

- Standard ports and adapters
- Polymorphism
- Dependency inversion
- Middleware (chain of responsibility)
- Multiple ways to inject different technologies

### Technologies used:

- Node-js
- TypeScript
- Express
- Docker
- Postgresql

### How to run the project:

- Install node-js (https://nodejs.org/en/download)
- Install docker and docker-compose (https://docs.docker.com/compose/install)
- Clone the project
- In the root directory, run:

1 - `npm install`

2 - `docker-compose up -d`

3 - `clone .env.example to a new .env file and edit according to your environment variables`

4 - `npm run dev`

### This way, you should now be able to access the available APIs, they are:

`http://localhost:4000/api/users/register`
`http://localhost:4000/api/users/login`
`http://localhost:4000/api/products/:id`
