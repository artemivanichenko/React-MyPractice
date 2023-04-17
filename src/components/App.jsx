// import { Button } from './Button/Button';
import { Component } from 'react';
import movies from '../data/movies.json';
import { Modal } from './Modal/Modal';
import { MoviesGallery } from './MoviesGallery/MoviesGallery';
const MOVIES_KEY = 'movies';
export class App extends Component {
  state = {
    movies: movies,
    currentPoster: null,
  };

  componentDidMount() {
    const data = localStorage.getItem(MOVIES_KEY);
    console.log(data);
    if (data !== null) {
      this.setState({ movies: JSON.parse(data) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.movies !== prevState.movies) {
      localStorage.setItem(MOVIES_KEY, JSON.stringify(this.state.movies));
    }
  }
  //  componentWillUnmount()
  handleDelete = id => {
    this.setState(prevState => {
      return {
        movies: prevState.movies.filter(movie => movie.id !== id),
      };
    });
  };
  openModal = data => {
    this.setState({ currentPoster: data });
  };
  closeModal = () => {
    this.setState({ currentPoster: null });
  };
  render() {
    const { movies } = this.state;
    return (
      <>
        <MoviesGallery
          movies={movies}
          onDelete={this.handleDelete}
          openModal={this.openModal}
        />
        {this.state.currentPoster && (
          <Modal
            closeModal={this.closeModal}
            poster={this.state.currentPoster}
          />
        )}
      </>
    );
  }
}
