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


**Observations**

The bug with save session was #5afb68f 

Added delete session on inMemory database and expresss routers as well as the react components on the client side. 

**Next steps to make this app production ready**
- [ ] The application needs UNIT testing in place for both client side and server to make sure risk on automatic deployments and trusted CI/CD could be reduced to minimal. Also there should be a high and low level deployment strategy defined in case this application can grow in terms of features and end consumers. And then the deployment strategy could be automated.
- [ ] Creating semver for releases and using git (perhaps?) for release cycle management to make sure rollbacks are easy in case of failures.
- [ ] The application for ease off development runs on on single Docker network. May be we need to deploy in it Kubernetes cluster making sure server can be scaled up and down on some parameters  while client side can be deployed on a CDN?
- [ ] As a scale necessary step, there should be a STRESS test of at-least the server side of it and results should point us towards memory leaks or physical limitations of devices or file size limits(Imagine JSON based persistence storage). Should also help us exploring BIG-O notations of some algorithms we could improve.
- [ ] Adding a persistent database layer, as stated in tasks as well. Since information on Product side was out of scope, it was not performed. (eg. What kind of database and to achieve what goals?)
- [ ] On the client side, the error handling needs to be taken care of. Present state is pretty raw. 
- [ ] The obvious steps for client sides are adding WebPack /Babel etc to optimise size and bandwidth of the application before we ship.
- [ ] As a necessary step for API, the LOG management is highly missing. The production version should send us error logs and a timed usage logs etc.