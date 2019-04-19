import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{
    
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <img src={this.props.poster} alt="영화이미지"/>
            </div>
        );
    }
}
export default Movie