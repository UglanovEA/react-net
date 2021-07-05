import { connect } from 'react-redux';
import { followActionCreator, setUserActionCreator, unfollowActionCreator } from '../../redux/users-reducer';
import Users from './Users.jsx';


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
};
let mapDispatchToProps = (dispatch) => {
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
export default connect(mapStateToProps, mapDispatchToProps)(Users);