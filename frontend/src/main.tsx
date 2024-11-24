import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Store } from 'redux';
import { History } from 'history';
import { ThemeProvider } from '@emotion/react';
import * as themes from './styles';

import { LayoutContainer } from '@/containers/LayoutContainer';
import { IApplicationState } from '@/store';
import { Routes } from '@/routes';
import { GoogleOAuthProvider } from '@react-oauth/google';
interface IMainProps {
  store: Store<IApplicationState>;
  history: History;
}

const clientId = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID;
export const Main: React.FC<IMainProps> = ({ store, history }) => (
  <GoogleOAuthProvider clientId={clientId}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <LayoutContainer>
          {({ theme }) => (
            <ThemeProvider theme={themes["coin"]}>
              <Routes />
            </ThemeProvider>
          )}
        </LayoutContainer>
      </ConnectedRouter>
    </Provider>
  </GoogleOAuthProvider>
);
