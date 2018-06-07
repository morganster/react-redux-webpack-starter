import postConstants from '../constants/PostConstants';
import PostService from '../services/PostService';

const postService = new PostService();
 const postActions = {
    getPost,
};

export default postActions;

function getPost() {

    return (dispatch) => {
        dispatch(request());

        postService.getPosts()
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
