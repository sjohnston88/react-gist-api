You are welcome to run this locally, or visit [https://blooming-atoll-68899.herokuapp.com](https://blooming-atoll-68899.herokuapp.com) to use the production app.

## To Install Locally

```git clone https://github.com/sjohnston88/react-gist-api.git
npm i
npm start
```

## Usage

By default the app redirects to `/defunkt` and fetches this users Gists showing the first one automatically. You can open the left drawer to select additional gists if they're avaliable.

Enter a different username in the URL bar to retrieve Gists from other users. You can provide a `?since-YYYY-MM-DD` query parameter to filter results by creation date.

## Front End 

I've used the React Material-UI libary to get up and running quickly. A basic UI allows you to browse through up to 10 Gists from any user. React router handles redirects and dynamic username paths. Error handling is in place to ensure server-side (Gist API) and client-side (invalid usernames, invalid query strings) are handled or reported elegantly. I've also used [react-gist](https://www.npmjs.com/package/react-gist) to render Gists in the window. I've forked the repository as it was missing the functionality I needed, but I believe doing this still saved me time overall.

## Back End

Normally I would have created a simple ExpressJS server to interact with the Gist API, format/process JSON responses and setup endpoints, but for this project I have instead used async/await and [Axios](https://github.com/axios/axios) to get up and running quickly. 

## Development and Deployment

I've chosen Travis CI and Heroku for the CI/CD implementation. The Heroku API key is stored securely and passed in at build time as an enviroment variable and Travis runs unit tests before deploying automatically to Heroku.
