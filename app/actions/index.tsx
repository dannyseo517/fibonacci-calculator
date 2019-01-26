import { REQUEST_FIBONACCI } from 'Constants/action-types';

export const requestFibonacci = (value: number) => {
    return (dispatch: any) => {
        dispatch({
            type: REQUEST_FIBONACCI,
            data: {
                value,
            },
        })
    }
}