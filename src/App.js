import axios from 'axios';
import React from 'react';
import Movie from './Movie'; 
import './style/App.css';

class App extends React.Component {
  // react.component의 기능들을 App가 상속받아 사용 할 수 있다.

  state = {
    isLoading: true,
    movies: [], // YTS API를 연동하여 작성 예정
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'
    );

    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className='container'>
        {isLoading
          ? (<div className='loader'><span className='loader_text'>Loading...</span></div>)
          : ( 
           <div className='movies'>
            {movies.map( movie => (
                <Movie 
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
             ))}
          </div> 
         )} 
      </section>
    );
  }
}
export default App;
