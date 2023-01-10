import { Karigar } from 'models/entities/Karigar';
import { KarigarActionType } from './actions.constants';

export const karigarAddAction = (payload: Karigar) => ({
  type: KarigarActionType.ADD,
  payload,
});
