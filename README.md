# Streaming Application

The goal of this project was to create a streaming platform by utilizing React, React-Router, Redux, Redux-Thunk, Redux-Form, and Google OAuth. 


### About

When this project is run, the user will only be able to view other people's live streams on the server. After a user uses google to sign into their account, they will then be able to create, edit, and delete their own streams. The streams use the google users' ids to securely interact with the API. After the user creates a stream, they also must run a type of broadcasting software such as OBS. If run locally, the server will be rtmp://localhost/live and the Stream Key will be the ID that is shown in the stream's url.


### Setup

In order to run this application, a client ID must be created through the Google Developers website. https://console.cloud.google.com/apis/dashboard
In the file src/components/GoogleAuth.js, a client ID must be provided so that the OAuth can complete.

To obtain an API client ID, create a new project on the Google Developers website. After it has been created, select it from the dropdown and move to the credentials tab. Click on the create credentials button and select OAuth Client ID. Fill out the App name and email fields to complete the form. A OAuth Client ID will be generated in the credentials section.

### Running the application `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The api and rtmp server must be run with `npm start` prior to running the primary directory to enable full functionality.
