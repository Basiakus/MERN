import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_POST = 'ADD_POST';
export const ADD_POSTS = 'ADD_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const THUMB_UP = 'THUMB_UP';
export const THUMB_DOWN = 'THUMB_DOWN';

// Export Actions
export function addPost(post, voteCount = 0) {
  return {
    type: ADD_POST,
    post,
    voteCount,
  };
}

export function addPostRequest(post, voteCount = 0) {
  return (dispatch) => {
    return callApi('posts', 'post', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content,
        voteCount,
      },
    }).then(res => dispatch(addPost(res.post)));
  };
}

export function addPosts(posts) {
  return {
    type: ADD_POSTS,
    posts,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    return callApi('posts').then(res => {
      dispatch(addPosts(res.posts));
    });
  };
}


export function fetchPost(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`).then(res => dispatch(addPost(res.post)));
  };
}

export function deletePost(cuid) {
  return {
    type: DELETE_POST,
    cuid,
  };
}
export function thumbUp(cuid, voteCount, post) {
  return {
    type: THUMB_UP,
    cuid,
    voteCount,
    post,
  };
}
export function thumbDown(cuid, voteCount, post) {
  return {
    type: THUMB_DOWN,
    cuid,
    voteCount,
    post,
  };
}


export function deletePostRequest(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'delete').then(() => dispatch(deletePost(cuid)));
  };
}

export function thumbUpRequest(cuid, post) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'put', {
      post: {
        voteCount: post.voteCount,
      },
    }).then(() => dispatch(thumbDown(cuid)));
  };
}


export function thumbDownRequest(cuid, post) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'put', {
      post: {
        voteCount: post.voteCount,
      },
    }).then(() => dispatch(thumbDown(cuid)));
  };
}


export function editPost(cuid, post) {
  return {
    type: EDIT_POST,
    cuid,
    post,
  };
}
export function editPostRequest(cuid, post) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'put', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content,
      },
    }).then(() => dispatch(editPost(cuid, post)));
  };
}
