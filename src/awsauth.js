const awsAuth = {
    "domain": "sysco-mini-pro.auth.us-east-1.amazoncognito.com",
    "scope": [
      "phone",
      "email",
      "profile",
      "openid",
      "aws.cognito.signin.user.admin"
    ],
    "redirectSignIn": "https://sysco-eag-mini.online",
    "redirectSignOut": "https://sysco-eag-mini.online",
    "responseType": "token"
  }

export default awsAuth;
