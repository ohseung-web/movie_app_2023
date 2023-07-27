import React from 'react';
class App extends React.Component {
  // react.component의 기능들을 App가 상속받아 사용 할 수 있다.
  state = {
    count: 0,
  };

  constructor(props){ // 컴포넌트가 생성될 때 호출하는 메서드
    super(props);
    console.log('hello');
  }
  componentDidMount(){  // 컴포넌트가 Dom 삽입될 때 호출되는 메서드
    console.log('componentDidmount');
  }

  componentDidUpdate(){ // 컴포넌트가 수정된 직후 호출되는 메서드
    console.log('i just update');
  }

  componentWillUnmount(){ // 컴포넌트가 삭제되기 전에 호출되는 메서드
    console.log('Good by~~')
  }
  add = () => {
    // setState() => state의 count 값을 변경함.
    // count = this.state.count+1
    // count++ => count = count + 1
    // currnt는 현재 state를 의미한다.
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  render() {
    console.log("I'am rendering");
    return (
      <>
        {/* this는 current 현재를 의미하며, 현재 state안의 count 변수의 값을 출력하라 라는 의미 */}
        <h1>The number is {this.state.count}</h1>
        <button type="button" onClick={this.add}>
          Add
        </button>
        <button type="button" onClick={this.minus}>
          Minus
        </button>
      </>
    );
  }
}
export default App;
