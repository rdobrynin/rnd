import React from 'react';
import { ReactReduxContext } from 'react-redux';

import * as layoutActions from '../store/actions/layoutActions';
import { IApplicationState } from '@/store';
import { ThemeColors } from '@/types/ILayout';
import '../styles/_main.scss';
interface ILayoutContainerProps {
  theme: ThemeColors;
  setTheme: (theme: ThemeColors) => void;
}

interface ILayoutContainerRenderProps {
  render?: (props: ILayoutContainerProps) => React.ReactNode;
  children?: (props: ILayoutContainerProps) => React.ReactNode;
}

export const LayoutContainer: React.FC<ILayoutContainerRenderProps> = ({ render, children }) => {
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => {
        const state = store.getState() as IApplicationState;
        const { theme } = state.layout;
        const setTheme = (tc: ThemeColors) => store.dispatch(layoutActions.setTheme(tc));
        return render ? render({ theme, setTheme }) : children && children({ theme, setTheme });
      }}
    </ReactReduxContext.Consumer>
  );
};
