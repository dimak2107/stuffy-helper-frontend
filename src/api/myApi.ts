import { Api } from "./__generated__/api";
import { NavigateFunction, useHistory } from "react-router-dom";

const api = new Api({ headers: { "Content-Type": "application/json" } });

function addInterceptor(token: string, navigate: NavigateFunction) {
  api.instance.interceptors.request.use(
    async (config) => {
      // const value = await redisClient.get(rediskey)
      // const keys = JSON.parse(value)
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  api.instance.interceptors.response.use(
    (res) => res,
    (error) => {
      if (401 === error.response.status) {
        navigate("/login");
      }
    }
  );
}

export default api;
export { addInterceptor };
