import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import AppTab from './AppTab';
import DiaryApp from './diary/DiaryApp';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from "./NavBar";

const App = () => {
  return (
    <div className="App">
        {/* <Navbar /> */}
        <BrowserRouter>
          <Routes>
              {/* <Route path={"/"} element={<DiaryApp />}></Route> */}
              <Route path={"/"} element={<AppTab />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
/*     
      <DiaryEditor />
      <DiaryList diaryList={dummyList}/>
      <br/>
      <button onClick={() => handleOpenNewTab("https://www.naver.com/")}>
        Naver 이동
      </button> */
  );
}

export default App;
