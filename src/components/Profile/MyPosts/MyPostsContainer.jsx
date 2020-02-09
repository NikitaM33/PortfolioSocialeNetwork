import { addPostActionCreater } from '../../../redux/propfileReduser';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return{
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  };
};

let mapDispatchToProps = (dispatch) => {
  return{
    addPost: (newPostText) => {
      dispatch(addPostActionCreater(newPostText));
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;