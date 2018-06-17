import axios from 'axios';
import postConstants from '../constants/PostConstants';

const postUrl = 'http://jsonplaceholder.typicode.com/posts';
const postActions = {
    getPost,
};

export default postActions;

function getPost() {

    return (dispatch) => {
        dispatch(request());

        axios.get(postUrl)
            .then(
                posts => {
                    dispatch(success(posts));
                },
                error => {
                    dispatch(failure(error));
                });
    };

    function request(posts) { return { type: postConstants.GET_ALL_REQUEST, posts }; }

    function success(posts) { return { type: postConstants.GET_ALL_SUCCESS, posts }; }

    function failure(error) { return { type: postConstants.GET_ALL_FAILURE, error }; }
}
