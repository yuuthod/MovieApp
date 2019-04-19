import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // LifeCycle
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update compoenetWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> component

  state = {

  }

  componentDidMount(){
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(potato => potato.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
  }

  // 규칙 : 직접만든 함수는 앞에 _를 붙이자.
  // = () => {}
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) =>{
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies
  }

  render() {
    return (
      <div className="App">
      {this.state.movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;
