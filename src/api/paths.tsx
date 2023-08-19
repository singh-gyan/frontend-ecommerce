const url = process.env.PROD
  ? process.env.VITE_PROD_URL_PATH
  : process.env.VITE_URL_PATH;
export const baseUrl: string = `${url}/`;

export const getCatalog: string = `${url}/`;

export const login: string = `${url}/login`;

export const signup: string = `${url}/signup`;

export const user: string = `${url}/user`;
