const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_USERS = 'SET_CURRENT_USERS'

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 21,
  currentPage: 3,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        // users: [...state.users],
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        // users: [...state.users],
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u;
        })
      }
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] }
    }
    case SET_CURRENT_USERS: {
      return { ...state, currentPage: action.currentPage }
    }
    default:
      return state;
  }
}
export const followActionCreator = (userId) => ({
  type: FOLLOW, userId
})
export const unfollowActionCreator = (userId) => ({
  type: UNFOLLOW, userId
})
export const setUserActionCreator = (users) => ({
  type: SET_USERS, users
})
export default usersReducer;