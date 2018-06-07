import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import PostCard  from '../components/post-card/PostCard';

import postActions from '../actions/PostActions';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(postActions.getPost());
    }
    render() {
        const { posts } = this.props;
        return (
            <div>
                { posts.postList.data.length > 0 && posts.postList.data.map((post) => {
                    return (<PostCard key={post.id} title={post.title} body={post.body}></PostCard>);
                })}
            </div>
        );
    }
}
Home.propTypes = {
    posts: PropTypes.object,
    dispatch: PropTypes.func
};

function mapStateToProps(state) {
    const { posts } = state;
    return {
        posts,
    };
}


const connectedHomePage = connect(mapStateToProps)(Home);
export { connectedHomePage as HomePage };