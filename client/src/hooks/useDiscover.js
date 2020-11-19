import { useState, useEffect } from 'react';
import API from '../utils/API';
import { getUsers } from '../redux';
export const useDiscover = () => {
  // Returns is an array.
  // Rule of hooks is to put them all at the top
  // Dont call a hook inside of another hook
  //
  // An array that contains 2 elements
  // the default value and a function to change the default value
  // In our case the default value will be 0
  // The 1st element in the array is the default value
  // The 2nd element in the array is the function to change the default value
  const [friendCount, setFriendCount] = useState(0);
  const [image, setImage] = useState('');
  const [showMatchBar, setShowMatchBar] = useState(false);
  // Use Effect is a hook that takes a function and an array as the second parameter
  // The useEffect hook behaves like componentDidMount, componentWillUnmount, and componentDidUpdate all in one
  // The array parameter to the 2nd arg to useEffect is what we call dependency
  // we could pass it many values. If any of the values that we pass into the array changes at any time
  // the useEffect function will be called again
  useEffect(() => {
    loadNextDog();
  }, []);

  const loadNextDog = () => {
    API.search()
      .then(res => setImage(res.data.message))
      .catch(e => console.log(e));
  };

  const handleLike = () => {
    const match = 3 === Math.floor(Math.random() * 5 + 1);
    if (match) {
      setFriendCount(friendCount + 1);
      setShowMatchBar(true);
    } else {
      setShowMatchBar(false);
    }
    loadNextDog();
  };

  const handleDislike = () => {
    loadNextDog();
  };

  return {
    friendCount,
    image,
    showMatchBar,
    handleLike,
    handleDislike,
  }

};
