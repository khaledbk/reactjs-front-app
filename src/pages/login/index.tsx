import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/hooks/useAuth";
import get from "lodash/get";
import { Provider } from "../../types/users";

export const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = get(location, "state.from.pathname", "/"); //location?.state?.from?.pathname || "/";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username") as string;
    let password = formData.get("password") as string;
    let data = {
      username,
      provider: {
        provider: Provider.PASSWORD,
        data: password,
      },
    };

    auth.loginWithPassword(data);
    navigate(from, { replace: true });
  };

  return (
    <div>
      <p>Login Page</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <label>
          Password: <input name="password" type="password" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
