// A custom hook that builds on useLocation to parse
// the query string for you.
import { useLocation } from 'react-router-dom';
import React from 'react';

const useRouteQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};

export default useRouteQuery;
