import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions";
import { connect } from "react-redux";



export class ConnectedList extends Component {

  handleRemoveFav(movie) {
    this.props.removeMovieFavorite(movie.id)
  }

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.moviesFavourites?.map((movie) => {
            return (
              <div key={movie.id}>
                <li>
                  <Link to={`/movie/${movie.id}`}>
                    {movie.title}
                  </Link>
                  <button onClick={() => this.handleRemoveFav(movie)}>Remove Fav</button>
                </li>
              </div>)
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    moviesFavourites: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie))

  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
