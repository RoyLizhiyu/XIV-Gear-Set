const item = (state={fetchedItems: {}, isLoading:false, }, action) => {
    switch(action.type){
        case 'START_LOADING':
            return {...state, isLoading:true};
        case 'END_LOADING':
            return {...state, isLoading:false};
        case 'GET_ITEMS':
            return {...state, fetchedItems: action.payload};
            
        default:
            return state;
    }

};


export default item;