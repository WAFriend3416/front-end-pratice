//import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


function App() {

  let post = '강남 우동 맛집';
  let[logo,setLogo] = useState('ReactBlog') // 이런 블로그 제목은 굳이 state?
  let[글제목목록,b] = useState(['남자 코드 추천',
                              'JS 너무 신기해',
                              '아무튼 추천']) // ['남자 코드 추천' , 함수]

  return (
    <div className="App">
      <div className="black-dev">
        <h4>{logo}</h4>
      </div>1
      <div className="list">
        <h4>{글제목목록[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목목록[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목목록[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
