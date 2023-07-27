import axios from 'axios';
import React from 'react';
class App extends React.Component {
  // react.component의 기능들을 App가 상속받아 사용 할 수 있다.

  state ={
    isLoading: true,
    movie:[], // YTS API를 연동하여 작성 예정
  }
  componentDidMount(){
    // setTimeout(() => {
    //   this.setState({isLoading:false});
    // }, 6000);
    // axios는 릭액트에서 API를 연동하는 라이브러리이다.
    // axios.get() 메서드는 값을 출력할 때 사용한다.
    axios.get('http://yts-proxy.now.sh/list_movies.json');
  }
  render() {
     const {isLoading} = this.state;
    return (
    <>
      {isLoading?'Loading...':'We are ready'};
    </>
    );
  }
}
export default App;
