import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';


import { useSelector, useDispatch } from 'react-redux';
import { setViewerToken } from '../pages/Viewer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const { token } = useSelector(state => state.viewer);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    dispatch(setViewerToken(null));
    history.push('/');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button
            component={Link}
            to='/'
            color="inherit">
            About</Button>
          <Button
            to='/discover'
            component={Link}
            color="inherit">
            Discover
          </Button>
          <Button
            to='/search'
            component={Link}
            color="inherit">
            Search
          </Button>
          {
            token ?
              <Button
                to='/users'
                component={Link}
                color="inherit">
                User
              </Button> : null
          }
          {
            token ?
              <Button
                color='inherit'
                onClick={ handleSignOut}
              >
                Sign Out
              </Button> :
              <div>
                <Button
                  to='/signup'
                  component={Link}
                  color="inherit">
                  Sign Up
                </Button>
                <Button
                  to='/signin'
                  component={Link}
                  color="inherit">
                  Sign In
                </Button>
              </div>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}


// function ButtonAppBar(props) {
//   const classes = useStyles();
//   const { token } = useSelector(state => state.viewer);
//   const dispatch = useDispatch();
//
//   console.log(props);
//   const handleSignOut = () => {
//     localStorage.removeItem('token');
//     dispatch(setViewerToken(null));
//
//   };
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <Button
//             component={Link}
//             to='/'
//             color="inherit">
//             About</Button>
//           <Button
//             to='/discover'
//             component={Link}
//             color="inherit">
//             Discover
//           </Button>
//           <Button
//             to='/search'
//             component={Link}
//             color="inherit">
//             Search
//           </Button>
//           <Button
//             to='/users'
//             component={Link}
//             color="inherit">
//             User
//           </Button>
//           {
//             token ?
//               <Button
//                 color='inherit'
//               >
//                 Sign Out
//               </Button> :
//               <div>
//                 <Button
//                   to='/signup'
//                   component={Link}
//                   color="inherit">
//                   Sign Up
//                 </Button>
//                 <Button
//                   to='/signin'
//                   component={Link}
//                   color="inherit">
//                   Sign In
//                 </Button>
//               </div>
//           }
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
//
// export default withRouter(ButtonAppBar);
