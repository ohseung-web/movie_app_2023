import './style/style.css';
import React from 'react';

function Movie(mov) {
  return (
    <div className="movielist">
      <h3>I love {mov.title}</h3>
      <img src={mov.poster} />
      <h3>{mov.desc}</h3>
    </div>
  );
}

const movieLike = [
  {
    title: '디어 마이 러브',
    poster:
      'https://image.cine21.com/resize/cine21/poster/2023/0615/16_54_19__648ac3abdc38e[X230,330].jpg',
    desc: '영화가 너무 슬픔',
  },
  {
    title: '비밀의 언덕',
    poster:
      'https://image.cine21.com/resize/cine21/poster/2023/0703/13_29_38__64a24eb25f51f[X230,330].jpg',
  },
  {
    title: '작은 정원',
    poster:
      'https://image.cine21.com/resize/cine21/poster/2023/0622/16_02_30__6493f206cab15[X230,330].jpg',
  },
  {
    title: '미션 임파서블',
    poster:
      'https://image.cine21.com/resize/cine21/poster/2023/0703/14_02_31__64a25667b02c6[X230,330].jpg',
  },
  {
    title: '슬기로운 아내 수업',
    poster:
      'https://image.cine21.com/resize/cine21/poster/2023/0616/11_02_38__648bc2be60edf[X230,330].jpg',
  },
];

function App() {
  return (
    <>
      {movieLike.map((mov) => (
        <Movie title={mov.title} poster={mov.poster} desc={mov.desc} />
      ))}
    </>
  );
}

export default App;
