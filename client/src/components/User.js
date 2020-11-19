import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import useUsers from '../hooks/useUsers';

const User = () => {
  const [username, setUsername] = useState('');
  const { users, setUsers } = useUsers();
  const renderUsers = () => {
    if (users.length) {
      return users.map(({ id, username }) => {
        return (
          <div key={id}>
            <Link to={`/users/user/${id}`}>
              <p>Username: {username}</p>
            </Link>
          </div>
        );
      });
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    // The 2nd parameter, should be an object
    // this object will become what req.body is on the controller
    axios.post('/api/users', {
      username,
      password: 'isNotCool',
      moreStuff: true,
    })
      .then(res => {
        // push res.data into the users state
        const newUsers = [...users, res.data];
        setUsername('');
        setUsers(newUsers);
      });
  };
  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="standard-basic"
          label="Standard"
        />
        <Button
          type='submit'
          variant="contained"
          color="primary">
          Primary
        </Button>
      </form>
      <h1>Hello User page</h1>
      {renderUsers()}
    </div>
  );
};

export default User;
