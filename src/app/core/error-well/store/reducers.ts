import { StoreAction } from '../../../store/model';
import { ErrorWellActions } from './actions';
import { IErrorWell } from './interface';

export const errorWellReducer = (
    state: IErrorWell = { message: null },
    action: StoreAction,
) => {
    switch (action.type) {
        case ErrorWellActions.SHOW:
            return {
                ...state,
                message: action.payload.message,
            };

        case ErrorWellActions.DISMISS:
            return {
                ...state,
                message: null
            };

        default:
            return state;
    }
};
