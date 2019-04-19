import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // LifeCycle
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update compoenetWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> component

  state = {
    greeting: 'Hello!',
    movies: [
     {
       title: "title01",
       poster: "http://img.hani.co.kr/imgdb/resize/2018/0313/00500561_20180313.JPG"
     },
     {
       title: "title02",
       poster: "http://pet.chosun.com/images/news/healthchosun_pet_201802/20180205193238_1635_4749_2414.jpg"
     },
     {
       title: "title03",
       poster: "http://www.hanion.co.kr/news/photo/201705/5146_17620_2457.jpg"
     },
     {
       title: "title04",
       poster: "https://image-notepet.akamaized.net/resize/620x-/seimage/20190318%2F0ef3f7d3dc9be4c89fab5ab5cd2fcbce.jpg"
     }
   ]
 }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          // 추가 , 없으면 movies 전체가 변경되어버림
          // 위치를 맨 맽으로 내리면 추가컨텐츠가 맨 위에 생성되게 됨.
          ...this.state.movies,
          {
            title: "title05",
            poster: "https://dispatch.cdnser.be/wp-content/uploads/2017/10/20171025103736_dm0rex6uiaa5w1t.jpg"
          }
        ]
      })
    }, 1000);
  }



  render() {
    return (
      <div className="App">
      {this.state.movies.map((movie, index) =>{
        return <Movie title={movie.title} poster={movie.poster} key={index}/>
      })}
      </div>
    );
  }
}

export default App;
