import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id:1,
    author:"정약용",
    content:"목민심서",
    emotion:3,
    createDate: new Date().getTime()
  },
  {
    id:2,
    author:"뉴턴",
    content:"중력, 그것은 무엇인가",
    emotion:4,
    createDate: new Date().getTime()
  },
  {
    id:3,
    author:"아무개",
    content:"아무개 저무개",
    emotion:3,
    createDate: new Date().getTime()
  }
]

const DiaryApp = () => {
  return (
    <div className="diaryApp">
      <DiaryEditor />
      <DiaryList diaryList={dummyList}/>
    </div>
  );
};

export default DiaryApp;
