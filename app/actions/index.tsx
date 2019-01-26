import { REDUX_TEST } from 'Constants/action-types';

export const testRedux = (message: string) => {
    return (dispatch: any) => {
        dispatch({
            type: REDUX_TEST,
            data: {
                text: message,
            }
        })
    }
}