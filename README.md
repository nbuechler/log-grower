# log-grower
A microservice, part of _Logro_, and the front-end 'writing' part of the software architecture. _Logro_ is engineered to be an introspective learning tool for self-education, and the 'log-grower' piece of that service is meant to allow the end-user to write about their life via description of their activities, experiences, and other entries (logs).

# History
The purpose is to allow other people and myself to become more skeptical about our own emotions. There is a concept of an activity, experience, and log hierarchy. Every experience is the intersection of two activities, and every experience can have a set of logs. An activity can also be associated with any number of experiences.

This app was originally based on the MEAN stack found via http://meanjs.org/ before it was refactored from the 'evgroio' application: https://github.com/nbuechler/evgroio

Additionally as a post alpha state of the so-called _Logro_ project, the 'log-grower' app continues in the attempt to address the attention deficit humans have in achieving self-actualization. It provides a basic framework that additionally can be tailored by end users. _Logro_ is a set of tools to provide visualizations and other information about the user's attention with an aim to aid in reaching self-actualization.

_Logro_ is a project that makes use of natural language processing, affect computing, and other techniques for analyzing humans.

# Goals
Every human needs to fulfill certain basic needs before they are able to deeply reflect on their own. In other words, self-actualization in humans tends to occur stigmergically. This self-actualization can be stifled when humans have their attention overly-focused on daily physical, emotional , analytical, cultural, ethereal tasks. Examples of these tasks are...
* Running, gardening, singing, painting.
* Talking, smiling, hugging, helping.
* Learning, reading, focussing, thinking.
* Advocating, changing, participating, making.
* Believing, dreaming, mediating, meditating.

# Notes
* This project has not been secured or hardened, so use it at your own risk.
* The 'securing of credentials' idea is to use JWT tokens as a microservice approach is planned (beginning in 2016) for 'fixed-gateway': https://github.com/nbuechler/fixed-gateway/
* The aim of the 'log-grower' service is to actually take inputs from users and to store those inputs through the core service layer 'hungry-interceptor': https://github.com/nbuechler/hungry-interceptor

# Tech stack via http://meanjs.org/
Make sure you have installed all these prerequisites on your development machine.
* Node.js - [Download & Install Node.js](http://www.nodejs.org/download/) and the npm package manager, if you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages, in order to install it make sure you've installed Node.js and npm, then install bower globally using npm:
```
$ npm install -g bower
```
* Grunt - You're going to use the [Grunt Task Runner](http://gruntjs.com/) to automate your development process, in order to install it make sure you've installed Node.js and npm, then install grunt globally using npm:
```
$ npm install -g grunt-cli
```

# Getting started

Run npm install
```
$ npm install
```

# Running Your Application
Simply run the command for starting grunt
```
$ grunt
```

# License
GPLv3
