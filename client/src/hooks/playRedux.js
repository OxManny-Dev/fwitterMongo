// import { createStore } from 'redux';

const { createStore, combineReducers } = require('redux');
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INCREMENT_BY_VAL = 'INCREMENT_BY_VAL';

const ADD_BLOG = 'ADD_BLOG';
const SELECT_BLOG = 'SELECT_BLOG';

const selectBlog = (index) => {
  return {
    type: SELECT_BLOG,
    payload: index,
  };
}

const addBlog = (blog) => {
  return {
    type: ADD_BLOG,
    payload: blog,
  };
};

const INITIAL_BLOG_STATE = {
  blogs: ['Dear diary', 'Something'],
  selectedBlog: undefined,
}
// Select ALL of them one of them,
// a bunch other switches depending on what needs to be rendered or not
const blogReducer = (state = INITIAL_BLOG_STATE, action) => {
  console.log(state);
  console.log('INSIDE OF BLOG REDUCER');
  switch(action.type) {
    case ADD_BLOG:
      const newBlogs = [...state.blogs, action.payload ];
      return {...state, blogs: newBlogs};
    case SELECT_BLOG:
      state.blogs.push(action.payload);
      const selectedBlog = state.blogs[action.payload];
      return {...state, selectedBlog};
    default:
      return state;
  }
};


const handleIncrementByVal = (val) => {
  return {
    type: INCREMENT_BY_VAL,
    payload: val,
    mannyIsCool: false,
    hungry: true,
    canI: false,
  };
};


const handleIncrement = () => {
  return {
    type: INCREMENT,
  }
};

const handleDecrement = () => {
  return {
    type: DECREMENT,
  }
};



// const INITIAL_STATE = {
//   counter: 0,
//   mannyIsCool: false,
//   hungry: true,
// };
const INITIAL_STATE = 0;
// First parameter is the currentState, 2nd parameter is the action object
const counterReducer = (state = INITIAL_STATE, action) => {
  console.log('I AM INSIDE OF COUNTER REDUCER');
  console.log('COUNTER STATE', state);
  console.log('I AM THE ACTION', action);
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case INCREMENT_BY_VAL:
      return state + action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  blog: blogReducer,
});


const store = createStore(rootReducer);

// store.dispatch(handleIncrementByVal(9001));
store.dispatch(addBlog('Some blog i want to add'));
store.dispatch(selectBlog(0));
console.log(store.getState());
// store.dispatch(handleIncrement())
// console.log(store.getState());
// store.dispatch(handleDecrement());
// console.log(store.getState());
// store.dispatch(handleDecrement());
// console.log(store.getState());
