import * as api from '../api';

export const getItems= (job) => async (dispatch) =>{

    try {
        dispatch({type:'START_LOADING'});
        const {data} = await api.getItems(job);
        const action = {type: 'GET_ITEMS', payload: data};
        dispatch(action);
        dispatch({type:'END_LOADING'});
    } catch (error) {
        console.log(error);
        
    }
}