import { useState } from "react";

const DiaryEditor = () => {

    const [state, setState] = useState({
        author: "",
        content: "",
        emotionScore: 1
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    };

    const handleSumbit = () => {
        alert("저장 성공");
    };

    return <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input 
                name="author"
                value={state.author}
                onChange={handleChangeState}
             />
        </div>
        <div>
            <textarea 
                name="content"
                value={state.content}
                onChange={handleChangeState}
            />
        </div>
        <div>
            <select 
                name="emotionScore" 
                value={state.emotionScore}
                onChange={handleChangeState}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSumbit}>저장하기</button>
        </div>
    </div>
};

export default DiaryEditor;