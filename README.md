# CG Emotions App

## Authentication with Auth0 Account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Configuration

The project needs to be configured with Auth0 domain and client ID in order to work. In the root of the sample, copy `auth_config.json.example` and rename it to `auth_config.json`. Open the file and replace the values with those from your Auth0 tenant:

```json
{
  "domain": "<YOUR AUTH0 DOMAIN>",
  "clientId": "<YOUR AUTH0 CLIENT ID>"
}
```

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:3000`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Run Using Docker

You can build and run the sample in a Docker container by using the provided scripts:

```bash
# In Linux / MacOS
sh exec.sh

# Windows Powershell
./exec.ps1
```

## Author

[CodeGym](https://codegym.vn)
