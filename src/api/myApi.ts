import { Api } from "./__generated__/api";

const api = new Api();

function addInterceptor(token: string) {
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
}

export default api;
export { addInterceptor };
