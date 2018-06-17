import React from 'react';
import PropTypes from "prop-types";
import './PostCard.scss';

const PostCard = ({title, body}) => {
    return (<div className='card' data-qa='post-card'>
                <div className='card__header'>{title}</div>
                <div className='card__body'>{body}</div>
            </div>);
};

PostCard.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
};

export default PostCard;
