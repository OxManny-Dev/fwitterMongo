const { createSlice } = require('@reduxjs/toolkit');
const  { createStore, combineReducers } = require('redux');

const INITIAL_BLOG_STATE = {
  blogs: ['Dear diary', 'Something'],
  selectedBlog: undefined,
}

const blogSlice = createSlice({
  name: 'blog',
  initialState: INITIAL_BLOG_STATE,
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
    selectBlog: (state, action) => {
      state.selectedBlog = state.blogs[action.payload];
    },
  },
});

const {
  addBlog,
  selectBlog,
} = blogSlice.actions;

const blogReducer = blogSlice.reducer;

// const rootReducer = combineReducers({
//   blog: blogReducer,
// });

const store = createStore(blogReducer);

store.dispatch(addBlog('Some new blog'));
store.dispatch(selectBlog(2));
console.log(store.getState());
