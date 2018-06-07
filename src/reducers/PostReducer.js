import postConstants from '../constants/PostConstants';

const initialState = {
    requesting: false,
    postList: {
        data: []
    }
};

export function posts(state = initialState, action) {
    switch (action.type) {
        case postConstants.GET_ALL_REQUEST:
            return Object.assign({}, state,{
                requesting: true,
                postList: initialState.postList
           });
        case postConstants.GET_ALL_SUCCESS:
            return Object.assign({}, state,{
                requesting: false,
                postList: action.posts
            });
        case postConstants.GET_ALL_FAILURE:
            return Object.assign({}, state,{
                requesting: false,
                postList: initialState.postList
            });
        default:
            return state;
    }
}