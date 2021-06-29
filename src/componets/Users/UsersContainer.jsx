import { connect } from 'react-redux';
import { followActionCreator, setUserActionCreator, unfollowActionCreator } from '../../redux/users-reducer';
import Users from './users';

const mapStateToProps = (state) => {
  return {
    Users: state.usersPage.Users
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId))
    },
    setUsers: (users) => {
      dispatch(setUserActionCreator(users))
    },
  }
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default MyPostsContainer;