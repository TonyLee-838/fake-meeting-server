# fake-meeting-server

## Usage
### 1. Install all the dependencies.
```
npm install
```

### 2. Run the start command.
```
npm start
```

At this time, the server should be listening on the given port `3002`(by default) and ready to take requests.

### 3. Send `POST` request to the endpoint `/api/auth` and grab the token.

### 4. Send some `GET` request to the server and get the data.
  - Please make sure you put your token into a header called `x-auth-token`.


## Available endpoints :
 - `GET`:`api/meetings`
 - `GET`:`api/members`
 - `GET`:`api/notifications`


