import React, { FC } from 'react';
import { Home } from '@/modules/Home/Home';
import { HomePermission } from '@/modules/Home/HomePermission';
import { ACCESS_HOME_PAGE } from '@/constants';
import { getItemFromLocalStorage } from '@/services/localStorageService';

export const HomePage: FC = () => {
  const isAccessHomePage = getItemFromLocalStorage(ACCESS_HOME_PAGE);
  return <>

  <h3>Test</h3>
  </>;
};
