import React, { useEffect } from "react";
import { AuthContext, AuthenticationProvider } from ".";
import { UserInterface, LoginInterface } from "../../types/users";
import { useCookies } from "react-cookie";
import get from "lodash/get";
import { assign } from "lodash";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [currentUser, setCurrentUser] = React.useState<UserInterface>();
  const [cookies, setCookie, removeCookie] = useCookies(["loginToken"]);
  let loginWithPassword = async (
    auth: LoginInterface
  ): Promise<UserInterface> => {
    let user = await AuthenticationProvider.loginWithPassword(auth);
    //AuthenticationProvider.currentUser = user;
    setCookie(`loginToken`, get(user, "credentials.loginToken", ""));
    setCurrentUser(user);
    return user;
  };

  let loginWithToken = async (auth: LoginInterface): Promise<UserInterface> => {
    const { loginToken } = cookies;

    let user = await AuthenticationProvider.loginWithToken(
      assign({}, auth, {
        username: "",
        provider: {
          provider: auth.provider.provider,
          data: loginToken,
        },
      })
    );
    if (user) {
      setCurrentUser(user);
    }
    return user;
  };
  let loginWithGoogle = async (
    auth: LoginInterface
  ): Promise<UserInterface> => {
    let user = await AuthenticationProvider.loginWithGoogle(auth);
    setCurrentUser(user);
    return user;
  };
  let me = async (auth: LoginInterface): Promise<UserInterface> => {
    let user = await AuthenticationProvider.me(auth);
    setCurrentUser(user);
    return user;
  };

  let logout = (): void => {
    /**
     * to cookies and currentUser
     */
    removeCookie("loginToken");
    setCurrentUser(undefined);
  };

  useEffect(() => {
    console.log("currentUser ?", currentUser);
  }, [currentUser]);

  let value = {
    currentUser,
    loginWithPassword,
    loginWithToken,
    loginWithGoogle,
    me,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
