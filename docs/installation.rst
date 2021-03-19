============
Authentication
============

| We will primarily be using Authentication with oAuth2 by Google. We are planning to build an authentication platform based off of simpleSAMLphp on an LDAP server, but that is for another day.
-------

| So, all the instructors, students and admins will have an account primarily using authentication with Google oAuth2. If necessary, we will include manual accounts, i.e, using username and passwords, or other oAuth2 platforms like CTP SSO on Auth0 or Nextcloud Auth like in the summer of 2020.
-------

| What is different this time is that when visiting /app, you will automatically be redirected to the login page. We have hidden the manual account login form, and the only way one can login is using the Google oAuth2. That way, we will have less heckle with resetting passwords and less confusion for starters.
-------

| It does, however, have a drawback. What if a person have an email account not hosted on Google? We are mostly used to people with Gmail accounts but we have come across some with yahoo accounts las summer. Not only did we have a problem with authentication, but also the yahoo mail servers kept putting emails from our servers to the spam and students were not able to get notifications and forum updates from within the website. 
-------

| So what? We hihgly recommend an email address hosted on Google, but if not possible we will use CTP SSO and integrate other login methods. 
-------

| We will also try to overcome the spam issue by including a Telegram integration and when there are updates, people would actually get notified through Telegram. This feature will be available to everyone and we will be testing it out.
