Clarity is a solution for a surveilance system based on the technologies of face recognition running on a web application.
It runs with a Nodejs engine of which we deploy our services on a Firebase cloud database.
*  Nodejs
*  Express
*  Nginx
*  Firebase
*  Python
*  Opencv

In this a minimal version of the projet where there are 3 services : app ( front end ) , global ( nginx ) and post ( clarity engine with nodejs)
each holds a docker configuration.
You can test this project by :

*  `git clone https://gitlab.com/iheb-brini/clarity.git`
* `cd Clarity/` 
* `docker-compose build`
* `docker-compose up`

Then visit your **localhost** and click the button and the changes with be updated on the firestore.