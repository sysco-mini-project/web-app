const awsAuth = {
    "domain": "sysco-mini-pro.auth.us-east-1.amazoncognito.com",
    "scope": [
      "phone",
      "email",
      "profile",
      "openid",
      "aws.cognito.signin.user.admin"
    ],
    "redirectSignIn": "http://localhost:3000",
    "redirectSignOut": "http://localhost:3000/signout",
    "responseType": "token"
  }

  
export default awsAuth;
