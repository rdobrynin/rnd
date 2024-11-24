export interface IoAuthToken {
  access_token: string;
}

export const initialOAuthTokenState: IoAuthToken = {
  access_token: '',
};
