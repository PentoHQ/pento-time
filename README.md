# Production next steps:
- [ ] Split the docker configuration for the API and Client (if docker is desired deployment implementation)
- [ ] Abstract relevant variables (e.g. ports, database creds) to environment level variables
- [ ] Implement a validation middleware for the API
- [ ] Implement tests for both apps
- [ ] Implement a CI/CD pipeline
- [ ] Implement linting
- [ ] Establish and implement a Client to API auth mechanism
- [ ] Consider using a production-tuned process manager (pm2?)
- [ ] Implement server level error handling

# Pento Tech Challenge - Time tracker

Hi 👋  
Thanks for taking the time to do this challenge.

The time tracker app is a simple app for tracking time spent on work for freelancers. You can start a new time tracking session, name it and save it.
You can also view all past sessions.

Note that the app is a beta version on purpose.

**Your task is to:**

- There is a bug when you save a session. Find it and fix it.
- Either:
  - Add filtering on the sessions list, so the user can filter the sessions by year and month.
  - Add the ability to delete a session.
  - Add a persistent database, so the server can restart without loosing the data.
- Outline next steps to make this app production ready.

Once again, thanks for taking the time to perform this task. Below follows some documentation on the app and how to get started.

## Structure

The app is split into an API and a client.

### Client

The client is built using React and Redux. It consists of 2 pages - `NewSession` and `Sessions` that are in the `containers` directory and are directly connected to the Redux store. Any components in the `components` directory are not directly connected to either store or actions.

### Api

The API is a simple Express app, that uses dependency injection to make it easy to swap out implementations of different interfaces. As it is currently a simple CRUD app, it follows a simple flow from `routes` -> `stores` -> `db` and back.

## Getting started

Before getting started you will need Docker, Docker Compose and Node on your system.

- Clone this repo to your local machine
- Go to the `client` directory and run `npm install`
- Go to the `api` directory and run `npm install`
- Go to the root directory and run `docker-compose up`

This starts both the client and the server with automatic reloading when saving.
