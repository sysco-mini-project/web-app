import Amplify, { Auth, Hub, API } from "aws-amplify";
import awsAuth from "../../awsauth";
import awsExports from "../../aws-exports";

const AuthProvider = () => {
  Amplify.configure(awsExports);
  Auth.configure({ oauth: awsAuth });

  const initializeUiListner = (cb) => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log("result received");
      switch (event) {
        case "signIn":
          console.log("data received");
          // console.log('sign in', event, data)
          // this.setState({ user: data})

          // console.log(data.signInUserSession.idToken.jwtToken);

          cb({
            idToken: data.signInUserSession.idToken.jwtToken,
          });
          break;
        case "signOut":
          console.log("sign out");
          // this.setState({ user: null })
          break;
      }
    });
  };

  const federatedSignIn = () => {
    Auth.federatedSignIn()
      .then((res) => {
        console.log("federation sign in result");
        console.log(res);
      })
      .catch((e) => {
        console.log("Error occurred");
        console.log(e);
      });
  };

  const getAccessToken = async() => {
    const session = await Auth.currentSession();
    return session.getIdToken().getJwtToken();
  }

  return { initializeUiListner, federatedSignIn, getAccessToken };
};

export { AuthProvider };
