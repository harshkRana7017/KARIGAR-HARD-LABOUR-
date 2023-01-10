import { AppState } from 'redux/reducers';
import { KarigarState } from 'redux/reducers/karigar.reducer';
import { createSelector } from 'reselect';
import { rootState } from './base.selector';

export const karigarState = createSelector(
  rootState,
  (state: AppState) => state.karigar
);
export const karigarSelectors = createSelector(
  karigarState,
  (state: KarigarState) => state.karigars
);
