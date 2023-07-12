function Movie({ title, poster }) {
  return (
    <div>
      <h1>i like {title}</h1>
      <img src={poster} />
    </div>
  );
}

export default Movie;
