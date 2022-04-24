import React from "react";
import { UserInterface, LoginInterface } from "../../types/users";
import UsersService from "../../api/users/users.service";

export interface AuthContextType {
  currentUser: UserInterface | undefined;
  loginWithPassword: (auth: LoginInterface) => Promise<UserInterface>;
  loginWithToken: (auth: LoginInterface) => Promise<UserInterface>;
  loginWithGoogle: (auth: LoginInterface) => Promise<UserInterface>;
  me: (auth: LoginInterface) => Promise<UserInterface>;
  logout: () => void;
}

export const AuthenticationProvider = {
  currentUser: undefined,
  loginWithPassword: (auth: LoginInterface): Promise<UserInterface> => {
    return UsersService.loginWithPassword(auth);
  },
  loginWithToken: (auth: LoginInterface): Promise<UserInterface> => {
    return UsersService.loginWithToken(auth);
  },
  loginWithGoogle: (auth: LoginInterface): Promise<UserInterface> => {
    return UsersService.loginWithGoogle(auth);
  },
  me: (auth: LoginInterface): Promise<UserInterface> => {
    return UsersService.me(auth);
  },
  logout: (): void => {
    /**
     * to clean cache and cookies
     */
  },
};

export const AuthContext = React.createContext<AuthContextType>(null!);
