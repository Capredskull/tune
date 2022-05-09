Tune is an online music streaming service that users can simply login to and listen to music, it also has a recommendation engine derived from reZonance project. Tune is a free and open source project.The user and playlist data is stored in mongodb and the music file and image is stored in firebase. If you want to clone the repository and test it for yourself you first need a few things:

1. Create a .env file in client, Server and adminDashboard. You need to add your own environment variables. The contents you need to add are as follows:

[client]: # Environment variables for client
REACT_APP_API_KEY=<your_api_key> for firebase
REACT_APP_AUTH_DOMAIN=<your_auth_domain>.firebaseapp.com
REACT_APP_PROJECT_ID=<your_project_id>
REACT_APP_STORAGE_BUCKET=<your_storage_bucket>.appspot.com
REACT_APP_MESSAGING_SENDER_ID=<your_messaging_sender_id>
REACT_APP_APP_ID=<your_app_id>
REACT_APP_BUCKET_URL=<your_bucket_url>
REACT_APP_API_URL=<your_api_url> for localhost

[server]: # Environment variables for server
DB = <your_db_url>
JWTPRIVATEKEY = <your_private_key> This can be anything eg: 123456789 does not matter. It is used to encrypt the JWT token.

[adminDashboard]: # Environment variables for adminDashboard
same as in client. You can remove variables but I'm too lazy so I just basically copy pasted my .env form client.

# INITIALIZING THE PROJECT

1. navigate to client,adminDashboard and server and do the following:
   --> npm install
   --> npm start
   for each client,adminDashboard and server.
2. Navigate to recom and do the following:
   --> python3 -m pip install -r requirements.txt
   --> python3 app.py
   note: you might have to change ports.

   ps: I HAVE WRITTEN THIS README hastily. I will improve on this later and add more details about the project. sorry if the README is not clear.
