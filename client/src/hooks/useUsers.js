import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const useUsers = () => {
  const dispatch = useDispatch();
  // const { users } = useSelector(state => state.user);
  const [users, setUsers] = useState([]);
  // U had to send your api or an auth token on the headers
  useEffect(() => {
    axios.get('/api/users', { headers: { authorization: localStorage.getItem('token') } })
      .then(res => {
        console.log(res.data);
        setUsers(res.data);
        // dispatch(getUsers(res.data));
      })
      .catch(e => console.log(e));
  }, [dispatch]);

  return {
    users,
    // setUsers,
    // user,
    // errors,
  };
};

export default useUsers;


