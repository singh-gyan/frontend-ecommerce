const url = import.meta.env.DEV
  ? import.meta.env.VITE_PROD_URL_PATH
  : import.meta.env.VITE_URL_PATH;
export const baseUrl: string = `${url}/`;

export const getCatalog: string = `${url}/`;

export const login: string = `${url}/login`;

export const signup: string = `${url}/signup`;

export const user: string = `${url}/user`;
