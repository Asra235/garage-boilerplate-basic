# Feature Testing: Auth and Redirect

The following flow was tested on the live deployed URL.

## Create Account

Multiple accounts were tested using [temporary email addresses](https://temp-mail.org/en/) to create
accounts. Steps followed were:

1. fill in user form
2. submit form
3. check email received
4. click link in email
5. verify log in

**Edge cases tested:**

1. existing email detected
2. invalid email validated and rejected
3. invalid password validated and rejected

## Log in

Existing accounts log in tested after following create account process.

## Redirect

Redirection to team page after login tested on multiple logins with live deployment.