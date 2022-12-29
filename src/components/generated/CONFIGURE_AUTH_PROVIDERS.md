
# Follow this guide to configure your Authentication Providers

## Provider: auth0 (OpenID Connect)

### Authorization Callback URL

Make sure to register this URL on your Authentication Provider.
If you don't or misspell the URL, you'll get an invalid callback URL error when trying to log in a user.
Remember that the authentication flow is handled server-side, on the WunderNode.
It's not handled on the server that's hosting the frontend.

```
http://///auth/cookie/callback/auth0
```
