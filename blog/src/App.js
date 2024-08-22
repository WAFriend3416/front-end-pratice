//import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


function App() {

  //let post = '강남 우동 맛집';
  let[modal,setModal] = useState(false); // UI의 현재 상태를 state 로 저장 ( 열림 : true / 닫힘 : false )
  let[글제목목록,changeTitle] = useState(['남자 코트 추천','JS 너무 신기해','아무튼 추천']) // ['남자 코드 추천' , 함수]
  let[likeCount,likeCountUp] = useState([0,0,0]);


  return (
    <div className="App">
      <div className="black-dev">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={()=>{
        let copy =[...글제목목록];
        copy.sort();
        changeTitle(copy)
      }}>
      정렬
      </button>
      <button onClick={()=>{

        //let arr = [1,2,3]; // 포인터 같음. [1,2,3] 은 램에 저장되어 있고 이 주소 값이 arr 에 있음.
        let copy = [...글제목목록]; // ... 같은 내용의 새로운 array 생성
        copy[0] = '여자코트 추천';
        changeTitle(copy)}}>

      </button>
      {/* <div className="list">
        <h4>{글제목목록[0]} <span onClick={()=> {likeCountUp(likeCount+1)}}>👍</span> {likeCount} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목목록[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{
            if(modal == false){
              setModal(true)
            }
            else{
              setModal(false)
            }
          }}>{글제목목록[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      
      {
        글제목목록.map(function(a,i){ // i :  반복문 돌 때 마다 0부터 1씩 증가하는 정수
          return(
            <div className="list">
              <h4 onClick={()=>{
            if(modal == false){
              setModal(true)
            }
            else{
              setModal(false)
            }
          }}>{글제목목록[i]} 
            <span onClick={()=> {
              let copy = [...likeCount]
              copy[i] = copy[i] +  1;
              likeCountUp(copy)
              }}>👍</span> {likeCount[i]} </h4>
              <p>2월 17일 발행</p>
            </div>
            )
        })
      }


      {
        // 조건문 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
        modal == true ? <Modal color = {'yellow'} 글제목목록={글제목목록} 글제목목록함수 ={changeTitle}/> : null
      }
      

    </div>    
  );
}

// function Content(){
//   return(
//     <div className="list">
//       <h4> 글제목목록 </h4>
//       <p>2월 17일 발행</p>
//     </div>
//   );
// }

// 컴포넌트
function Modal(props){
  return(          
  <>
    <div className="modal" style={{background:props.color}}>
      <h4>{props.글제목목록[2]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{
          let copy = [...props.글제목목록];
          copy[0] = '여자 코트 추천';
          props.글제목목록함수(copy);
      }}>글수정</button>
    </div>
    <div></div>
  </>
  );
}

const Modeal = () => {};

export default App;
