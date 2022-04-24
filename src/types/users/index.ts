export enum Provider {
  PASSWORD = "password",
  GOOGLE = "google",
  TOKEN = "token",
}
export interface LoginProviderInterface {
  provider: Provider;
  data: string;
}
export interface LoginInterface {
  username: string;
  provider: LoginProviderInterface;
}

export interface CredentialsInterface {
  hash: string;
  isAdmin: boolean;
  loginToken: string;
  lastLogin: Date;
  googleToken: string;
}

export interface UserInterface {
  _id: string;
  username: string;
  email: string;
  credentials: CredentialsInterface;
  name: string;
  surname: string;
  phoneNumber: string;
  address: string;
  title: string;
}
