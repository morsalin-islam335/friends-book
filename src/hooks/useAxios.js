import { useEffect } from "react";

import axios from "axios";
import { api } from "../api";
import useAuth from "./useAuth";

const useAxios = () => {
  const { auth, setAuth } = useAuth(); // auth will return user as user, token.token as auth token token.refreshToken as refresshToken

  useEffect(() => {
    // request intercepter

    api.interceptors.request.use(
      (config) => {
        const authToken = auth?.authToken;
        // auth token = auth.authtoken

        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      },

      (error) => Promise.reject(error)
    );

    api.interceptors.response.use(
      (response) => response, // first parametter will return response

      async (error) => {
        const orginalRequest = error.config;

        // if the error status is 401 that means this user is unauthorize user

        if (error.response.status === 401 && !orginalRequest._retry) {
          orginalRequest._retry = true;
          //
          // token has expired
          try {
            const refreshToken = auth?.refreshToken;
            const response = await axios.post(
              `${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`,
              { refreshToken }
            );

            const { token } = response.data;
            setAuth({
              ...auth,
              authToken: token, // auth token ensure that this user a authorized user  after logged in and a certain time letter auth token will include with auth
            });

            // Retry the original request with the new token
            orginalRequest.headers.Authorization = `Bearer ${token}`;
            return axios(orginalRequest);
          } catch {}
        }

        return Promise.eject(error);
      }
    );
  }, []);
};
