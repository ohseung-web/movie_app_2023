import axios from 'axios';
import React from 'react';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  // react.component의 기능들을 App가 상속받아 사용 할 수 있다.

  state = {
    isLoading: true,
    movies: [], // YTS API를 연동하여 작성 예정
  };

  // async(비동기) getMovies()가 비동기이니 좀 기다려 달라고 자바스크립트에게 명령 함
  // await는 axios.get()이 실행이 끝날때까지 기다렸다가 다음을 실행해 달라는 명령어 임
  // 자바스크립트가 단일스레드로 동기식방식이므로 비동기식으로 변경해주는 작업 임
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span>Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              // console.log(movie);
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}
export default Home;
