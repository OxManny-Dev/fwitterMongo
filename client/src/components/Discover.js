import React from 'react';
import Card from './Card';
import MatchBar from './MatchBar';
import { useSelector } from 'react-redux';
import { useDiscover } from '../hooks/useDiscover';

const Discover = () => {
  const {
    friendCount,
    image,
    showMatchBar,
    handleLike,
    handleDislike,
  } = useDiscover();


  return (
    <div>
      <h1>{friendCount}</h1>
      <Card
        handleLike={handleLike}
        handleDislike={handleDislike}
        image={image}
      />
      <MatchBar
        open={showMatchBar}
      />
    </div>
  );
};
// class Discover extends Component {
//   state = {
//     image: '',
//     friendCount: 0,
//     showMatchBar: false,
//   };
//
//   componentDidMount() {
//     this.loadNextDog();
//   }
//
//   loadNextDog = () => {
//     API.search()
//       .then(res => {
//         console.log(res.data);
//         this.setState({ image: res.data.message });
//       });
//   };
//
//   handleLike = () => {
//
//   };
//
//   handleDislike = () => {
//     if (this.state.showMatchBar) {
//       this.setState({ showMatchBar: false });
//     }
//     this.loadNextDog();
//   };
//
//   render() {
//     const { friendCount, image, showMatchBar } = this.state
//     return (

//     );
//   }
// }

export default Discover;
