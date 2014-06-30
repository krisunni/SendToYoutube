SendToYoutube
=========

Node app to send YouTube url to xbmc using JSON-RPC API

  - Paste URL on the text box
  - Click the XBMC host you want to send it to
  - Enjoy



> This is my first take at making XBMC play YouTube videos from my iPhone and any browser.


Version
----

0.0.1

Tech
-----------

SendToYoutube uses the follow node modules:

* NodeJS >= v0.8.17
* NPM >= 1.4.17

Installation
--------------

```sh
git clone https://github.com/krisunni/SendToYoutube SendToYoutube
cd SendToYoutube
npm install
```

The following is optional if don’t want to use google CDN for Angular and Twitter's Bootstrap

```sh
cd SendToYoutube/public
bower install
```

##### Configure Host XBMC in the following json file

* public/systems.json



```sh
  {
    "name": "Ouya",
    "host": "ouya.ku",
    "port": 8080,
    "description": "The Ouya xbmc system in the living room ",
    "status": false
    }
```

Change the port and host according to your xbmc settings. The name is what is displayed on the app. 
Status is future use.

Tech
To run the server run the following command 
```sh
node server.js
```

Or either using  forever [https://github.com/nodejitsu/forever]  
```sh
forever start server.js
```
Then go to localhost:5000 

License
----

BSD


