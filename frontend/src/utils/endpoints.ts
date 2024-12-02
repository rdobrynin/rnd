/** this would wrap all the api endpoints and base urls */
export const baseUrl = import.meta.env.VITE_API_URL;

export const url = {
  currency: '/rate/crypto',
  rates: '/rate/pairs',
};
