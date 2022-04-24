import React, { useEffect } from "react";
import { AuthContext, AuthenticationProvider } from ".";
import { UserInterface, LoginInterface } from "../../types/users";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [currentUser, setCurrentUser] = React.useState<UserInterface>();

  let loginWithPassword = async (
    auth: LoginInterface
  ): Promise<UserInterface> => {
    let user = await AuthenticationProvider.loginWithPassword(auth);
    //AuthenticationProvider.currentUser = user;
    setCurrentUser(user);
    return user;
  };
  let loginWithToken = async (auth: LoginInterface): Promise<UserInterface> => {
    let user = await AuthenticationProvider.loginWithToken(auth);
    setCurrentUser(user);
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
     * to clean cache and cookies
     */
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
