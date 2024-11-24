import { Reducer } from 'redux';
import { ILayoutState, LayoutActionTypes, ThemeColors } from '@/types/ILayout';

// Type-safe initialState!
// TODO: End Redux for switching ViewMode
export const initialState: ILayoutState = {
  theme: 'unith',
};

const layoutReducer: Reducer<ILayoutState> = (state = initialState, action) => {
  switch (action.type) {
    case LayoutActionTypes.SET_THEME: {
      return { ...state, theme: action.payload as ThemeColors };
    }
    default: {
      return state;
    }
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { layoutReducer };
