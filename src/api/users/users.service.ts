import rest from "../../utils/common";
import { LoginInterface, UserInterface } from "../../types/users";
import get from "lodash/get";
import { AxiosResponse } from "axios";

class UserService {
  async loginWithPassword(auth: LoginInterface): Promise<UserInterface> {
    return rest
      .post("/api/auth", {
        data: { auth },
        auth: {
          username: auth.username,
          password: auth.provider.data,
        },
      })
      .then(
        (response: AxiosResponse): UserInterface => get(response, "data", {})
      );
  }

  loginWithToken(auth: LoginInterface): Promise<UserInterface> {
    //console.log("[loginWithToken]", auth);
    return rest
      .post("/api/auth", {
        data: { auth },
        auth: {
          username: auth.username,
          password: auth.provider.data,
        },
      })
      .then(
        (response: AxiosResponse): UserInterface => get(response, "data", {})
      );
  }

  loginWithGoogle(auth: LoginInterface): Promise<UserInterface> {
    console.log("[loginWithGoogle]", auth);
    return rest.get("/api/auth");
  }

  me(auth: LoginInterface): Promise<UserInterface> {
    console.log("[me]", auth);
    return rest.get("/api/auth");
  }
}

export default new UserService();
