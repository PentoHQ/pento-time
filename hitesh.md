**# Pento Tech Challenge - Time tracker**

**Your task is to:**

- [x] There is a bug when you save a session. Find it and fix it.
- [ ] Either:
	- [ ] Add filtering on the sessions list, so the user can filter the sessions by year and month.
	- [x] Add the ability to delete a session.
	- [ ] Add a persistent database, so the server can restart without loosing the data.
- [x] Outline next steps to make this app production ready. 

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