import { useRef, useState } from "react";

const DiaryEditor = () => {

    const authorInput = useRef();
    const contentInput = useRef();

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
        if (state.author.length < 1) {
            // alert("작성자는 최소 1글자 이상 입력하세요.");
            authorInput.current.focus();
            return;
        }
        if (state.content.length < 10) {
            // alert("내용은 최소 10글자 이상 입력하세요.");
            contentInput.current.focus();
            return;
        }
        alert("저장 성공");
    };

    return <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input 
                ref={authorInput}
                name="author"
                value={state.author}
                onChange={handleChangeState}
             />
        </div>
        <div>
            <textarea 
                ref={contentInput}
                name="content"
                value={state.content}
                onChange={handleChangeState}
            />
        </div>
        <div>오늘의 감정 점수 : &nbsp;
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