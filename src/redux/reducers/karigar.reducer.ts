import produce from 'immer';
import { Karigar } from 'models/entities/Karigar';
import { Reducer } from 'redux';
import { KarigarActionType } from 'redux/actions/actions.constants';
import { EntityState } from '../base/EntityState';

export interface KarigarState extends EntityState<Karigar> {
  karigars: Karigar[];
}

const initialState: KarigarState = {
  entities: {},
  karigars: [],
};

export const karigarReducer: Reducer<KarigarState> = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: KarigarState = initialState,
  action
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case KarigarActionType.ADD: {
        const { payload } = action;
        draft.karigars = [draft.karigars, payload];

        break;
      }

      default: {
        break;
      }
    }
  });
