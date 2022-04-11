import Amplify, { Auth, Hub, API } from "aws-amplify";
import awsAuth from "../../awsauth";
import awsExports from "../../aws-exports";

Amplify.configure(awsExports);
Auth.configure({ oauth: awsAuth });

function AuthProvider() {
  const initializeUiListner = (cb) => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          cb({
            idToken: data.signInUserSession.idToken.jwtToken,
          });
          break;
        case "signOut":
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

  const getAccessToken = async () => {
    let session = await Auth.currentSession();

    if (!session.isValid()) {
      const cognitoUser = await Auth.currentAuthenticatedUser();
      const currentSession = await Auth.currentSession();

      await cognitoUser.refreshSession(currentSession.refreshToken);
      session = await Auth.currentSession();
    }

    session = await Auth.currentSession();

    return session.getIdToken().getJwtToken();
  };

  const logout = async () => {
    await Auth.signOut();
  };

  return { initializeUiListner, federatedSignIn, getAccessToken, logout };
}

export { AuthProvider };
