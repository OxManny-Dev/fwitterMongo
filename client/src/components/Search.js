import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import API from '../utils/API';


const dogOptions = [
  { title: 'affenpinscher' },
  { title: 'african' },
  { title: 'airedale' },
  { title: 'akita' },
  { title: 'australian' },
  { title: 'shepherd' },
];


class Search extends Component {
  state = {
    breedToSearch: '',
    dogs: [],
  }

  handleBreedSearchChange = (event, value) => {
    this.setState({ breedToSearch: value });
  }


  handleBreedSearchSelectChange = (event, value) => {
    // console.log(event);
    // console.log(value);
    this.setState({ breedToSearch: value });
  }

  handleBreedSearch = event => {
    event.preventDefault();
    API.searchByBreed(this.state.breedToSearch)
      .then(res => {
        console.log(res);
        this.setState({ dogs: res.data.message });
      });
  }



  renderDogs = () => {
    return this.state.dogs.map(dog => {
      console.log(dog);
      return <img key={dog} src={dog} alt='dog'/>
    })
  }

  render() {
    console.log(this.state.dogs.length);
    return (
      <form  noValidate autoComplete="off" onSubmit={this.handleBreedSearch}>
        {/*<TextField*/}
        {/*  value={this.state.breedToSearch}*/}
        {/*  onChange={this.handleBreedSearchChange}*/}
        {/*  id="standard-basic"*/}
        {/*  label="Standard"*/}
        {/*  fullWidth/>*/}
        <Autocomplete
          onInputChange={this.handleBreedSearchChange}
          onChange={this.handleBreedSearchSelectChange}
          id="combo-box-demo"
          noOptionsText="that breed doesn't exist in our database"
          inputValue={this.state.breedToSearch}
          options={dogOptions}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
        />
        <Button
          onClick={ this.handleBreedSearch }
          type='submit'
          variant="contained"
          href="#contained-buttons"
          fullWidth>
          Search Breed
        </Button>
        {
          this.renderDogs()
        }
      </form>
    );
  }
}

export default Search;
