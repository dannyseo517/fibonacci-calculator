import { REQUEST_FIBONACCI } from 'Constants/action-types';
import { AnyAction } from 'redux';

export const requestFibonacci = (value: number, mode: string): any => {
    return (dispatch: any): AnyAction => {
        return dispatch({
            type: REQUEST_FIBONACCI,
            data: {
                value,
                mode,
            },
        });
    };
};