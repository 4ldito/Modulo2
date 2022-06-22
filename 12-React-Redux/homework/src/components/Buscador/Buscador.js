import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from 'react-router-dom';
import { addMovieFavorite, getMovieDetail, getMovies, removeMovieFavorite } from "../../actions";
import './Buscador.css';

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {this.props.moviesLoaded?.map((movie) => {
            return (
              <div key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}>
                  <li>{movie.Title}</li>
                </Link>
                <button onClick={() => this.props.addMovieFavorite({ title: movie.Title, id: movie.imdbID })}>Fav</button>
              </div>
            )
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    moviesLoaded: state.moviesLoaded,
    movieDetail: state.movieDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: title => dispatch(getMovies(title)),
    getMovieDetail: movie => dispatch(getMovieDetail(movie)),
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie)),

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);