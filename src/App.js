import './App.css';
import {useState} from 'react';

function App() {

  let [글제목, set글제목] = useState(['남자 코트 추천', '여자 코트 추천', '공부한다']);
  let [좋아용, 카운팅] = useState(0);

  function likeCounting(titleNumber){
    카운팅(++좋아용);
    console.log(글제목[titleNumber]+"의 좋아요가 클릭되었습니다.");
  }


  return (
    <div className="App">
      <div className="black-nav">
        <h4>WARGMAE</h4>
      </div>

      <div className="list">
        <h4>{글제목[0]} <span onClick={ () => likeCounting(0)}>👍</span> {좋아용} </h4>
        <p> 2월 17일 발행</p>

        <button onClick={ () => {
           let copy = [...글제목];
           copy[0] = '여자 코트 추천(변경 예야)'
           set글제목(copy);
           } }>제목 변경 버튼</button>
      </div>

    
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p> 2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p> 2월 17일 발행</p>
      </div>


    </div>
  );
}

export default App;
