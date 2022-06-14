import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]); //프로그램 최초 실행 시 빈 [] 어레이를 가지고 시작
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return; //toDo항목이 비었을 때는 변화 X
    }
    setToDo(""); // 비지 않아 submit이 실행이 되었을 때, setToDo 는 공백으로 리셋되고
    setToDos((currentArray) => [toDo, ...currentArray]) //input을 통해 작성된 toDo의 value 값이 submit 이벤트를 통해 currentArray로 들어감 그러면 최초 값은 ["" 공백인 todo는 생성되지 않았으므로 currentArray 가 포함된 배열이 완성]
  }
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text"
          placeholder="Write your to do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
        <ul>
          {toDos.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
  );
}

export default App;