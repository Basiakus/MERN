import React, { PropTypes } from 'react';

// Import Components
import PostListItem from './PostListItem/PostListItem';

function PostList(props) {
  return (
    <div className="listView">
      {
        props.posts.map(post => (
          <PostListItem
            post={post}
            key={post.cuid}
            onThumbUp={() => props.handleThumbUpPost(post.cuid)}
            onThumbDown={() => props.handleThumbDownPost(post.cuid)}
          />
        ))
      }
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    voteCount: PropTypes.number.isRequired,
  })).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
  handleThumbUpPost: PropTypes.func.isRequired,
  handleThumbDownPost: PropTypes.func.isRequired,
};

export default PostList;
