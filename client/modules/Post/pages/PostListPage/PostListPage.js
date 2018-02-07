import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

// Import Components
import PostList from '../../components/PostList';
import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';

// Import Actions
import { addPostRequest, fetchPosts, deletePostRequest, thumbDownRequest, thumbUpRequest  } from '../../PostActions';
import { toggleAddPost } from '../../../App/AppActions';

// Import Selectors
import { getShowAddPost } from '../../../App/AppReducer';
import { getPosts } from '../../PostReducer';

// Import Style
import styles from './PostListPage.css';

class PostListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  handleDeletePost = post => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      this.props.dispatch(deletePostRequest(post));
    }
  };
  handleThumbDownPost = post => {
    if (confirm('Do you want to note this post')) { 
      this.props.dispatch(thumbDownRequest(post.cuid, post.voteCount));
    }
  };
  handleThumbUpPost = post => {
    if (confirm('Do you want to note this post')) { 
      this.props.dispatch(thumbUpRequest(post.cuid, post.voteCount));
    }
  };

  handleAddPost = (name, title, content) => {
    this.props.dispatch(toggleAddPost());
    this.props.dispatch(addPostRequest({ name, title, content }));
  };

  toggleAddPost = (name, title, content) => {
    this.props.dispatch(toggleAddPost());
  };

  toggleAddPost = (name, title, content) => {
    this.props.dispatch(toggleAddPost());
  };


  render() {
    return (
      <div>
        <a className={styles['add-post-button']} href="#" onClick={this.toggleAddPost}><FormattedMessage id={this.props.showAddPost ? "close" : "addPost"} /></a>
        <PostCreateWidget addPost={this.handleAddPost} showAddPost={this.props.showAddPost} />
        <PostList handleDeletePost={this.handleDeletePost} handleThumbUpPost={this.handleThumbUpPost} handleThumbDownPost={this.handleThumbDownPost} posts={this.props.posts} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
PostListPage.need = [() => { return fetchPosts(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPost: getShowAddPost(state),
    posts: getPosts(state),
  };
}

PostListPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  showAddPost: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

PostListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(PostListPage);
