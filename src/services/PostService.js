import axios from 'axios';

class PostService {
    
    constructor() {
        this.postUrl = 'http://jsonplaceholder.typicode.com/posts';
    }
    getPosts() {
        return axios.get(this.postUrl);
    }
}

export default PostService;