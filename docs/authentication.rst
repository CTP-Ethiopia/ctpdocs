============
Identity, Authentication and Account Management 
============

************
For easier instructions, read the simpler doc page on CTP Tech `here. <https://tech.ctpethiopia.org/>`_  
************

| We will primarily be using Authentication with OAuth2 by Google.
| For the people who don't have Google Accounts, we have planned to provide OpenID based *CTP IDs* so they can securely access our learning platform. In the long run, however, we are planning to build an authentication platform based off of simpleSAMLphp on an LDAP server, but that is for another day.
|
| So, all the instructors, students and admins will have an account primarily using authentication with Google oAuth2. If necessary, we will include manual accounts, i.e, using username and passwords(*deprecated*), or other OAuth2 platforms like *CTP ID*.
|
| What is different this time is that when visiting a course, you will automatically be redirected to the login page. We have hidden the manual account login form, and the only way one can login is using the Google OAuth2/ CTP ID. That way, we will have less heckle with resetting passwords and less confusion for starters.
|
| It does, however, have a drawback. What if a person have an email account not hosted on Google? We are mostly used to people with Gmail accounts but we have come across some with yahoo accounts the summer of 2020. Not only did we have a problem with authentication, but also the yahoo mail servers kept putting emails from our servers to the spam and students were not able to get notifications and forum updates from within the website. 
|
| So what? We highly recommend an email address hosted on Google, but if not possible we will use *CTP ID* and integrate other login methods. 
|
| We will also try to overcome the spam issue by including a Telegram integration and when there are updates, people would actually get notified through Telegram. This feature will be available to everyone and we will be testing it out.
