import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from "../../actions";

import './Movie.css';

class Movie extends React.Component {

    handleMovieDetails() {
        const { match: { params: { id } } } = this.props; // GUARDA EN ID
        this.props.getMovieDetail(id)
    }

    test() {
        console.log(this.props.movieDetail);

    }

    render() {
        const { match: { params: { id } } } = this.props; // GUARDA EN ID
        this.props.getMovieDetail(id);
        return (
            <div className="movie-detail">
                Detalle de la pelicula
                <button onClick={() => this.test()}>a</button>
                {this.props.movieDetail.Title ?
                    <>
                        <p>Titulo: {this.props.movieDetail.Title}</p>
                        <p>Pais: {this.props.movieDetail.Country}</p>
                        <p>Director: {this.props.movieDetail.Director}</p>
                        <p>Género: {this.props.movieDetail.Genre}</p>
                        <p>Idiomas: {this.props.movieDetail.Language}</p>
                        <p>Duración: {this.props.movieDetail.Runtime}</p>
                        <p>Premios: {this.props.movieDetail.Awards}</p>
                        <img alt='Imagen pelicula' src={this.props.movieDetail.Poster} />
                    </>
                    : <p>No se encontró la pelicula =(</p>}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        movieDetail: state.movieDetail
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: movie => dispatch(getMovieDetail(movie))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movie);