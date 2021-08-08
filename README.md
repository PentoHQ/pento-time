# Pento Tech Challenge - Time tracker - Houssam Yahiaoui Intake
![Alt text](img/pento-1.gif?raw=true "Delete Feature")

## Getting started

Before getting started you will need Docker, Docker Compose and Node on your system.

- Clone this repo to your local machine
- Go to the `client` directory and run `npm install`
- Go to the `api` directory and run `npm install`
- Go to the root directory and run `docker-compose up`

This starts both the client and the server with automatic reloading when saving.

## Project Oulines and Requirements
1. this project suffered from a bug within the **UI element responsible for saving the Session**.
as it was expecting a Promise resolution, without actually having one returned from the parent function, this was fixed.
![Alt text](img/pento-2.gif?raw=true "Delete Feature")
2. I've took the liberty to add support to both **DB Persistance** and **Support to Delete** Functionalties.

![Alt text](img/pento-3.gif?raw=true "Delete Feature")
3. I've took the liberty to **restrcuture** the project structure to match **my developmenent style** and **seperation of concerns** + **folder** and **file** management to keep thing clean.

## Production Deployment steps

It depends on the style of deployment we're trying to have, but from a best practise point of view i would suggest the following :

1. Get the React project off the app process, creating a seperate build process for it and deploy it as part of static website hoster aka **S3, Firebase ..etc**, this will ensure seperating logic and **seperating deployment effort** and **team and process management**. also we need to put it behind a **CDN** to ensure load time and have a **cache mechanism for continious update delivery**. a **cache strategy** should be defined to avoid the users getting old versions of the app, which can be harmful or have a malicious intent to our update new service API.
2. Go from a **self-managed DB instance** to a managed one, that will be either going full **scale** with Atlas in case of a MongoDB, Firebase, Google Cloud Database, AWS Managed DBs etc, this will ensure **security and countinious update and avoid down time**.
3. Have a clear **secrets management strategy**, as this project is still simply but will require some **envirenment variable**, **config files with secrets**, **credentials** ..etc, for this we can either using a **secret volt** or rely on custom solution, like a mixed solution between **Codebuild, SSM, aparamter store in case of AWS** and have everything ready on build time for extra security.
4. Deploy the NodeJS application as **dockernized** application to registery, public/private that was and have it behind some **scaling mechansim** that scale up and down depending on the request number, this will ensure the **resilence** of our application and will make sure it won't go down
5. Since we're introducing a Database to this application, it would be recommended to have a user management as well, this will ensure data consitancy and privacy to everyone's sessions.
6. Improve envirenment variables management and introduction of he production flag.
7. Have a clear bug/error/issue management strategy/platforms that can help identifying the correct problem source and might even b the key to a quick and durable fix.
8. Create Performance KPI Metrics and either use either of the custom provided platform for it. Else it would be great to have a custom solution with a time-series db combined with a Grafana-like solution for consuming/producing meanful metrics.
