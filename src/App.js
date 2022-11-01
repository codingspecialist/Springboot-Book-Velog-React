import './App.css';
import Header from './components/layout/Header';
import { Routes, Route} from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import MyPage from './pages/MyPage';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import MyInfoPage from './pages/MyInfoPage';
import EditPage from './pages/EditPage';
import WritePage from './pages/WritePage';


function App() {
  const lists = useSelector(state=>state.bloglists.lists);
  const userId = useSelector(state=>state.bloglists.selectList.userId);
  const memberLists = lists.filter(list=> list.userId === userId)
  return (
    <div className="App">
      <Header/>
      <Routes>
         <Route path="/" element={<HomePage lists={lists}/>} />
         <Route path="/search" element={<SearchPage />} />
         <Route path="/listview/:id" element={<DetailPage/>} />
         <Route path="/login" element={<LoginPage/>}/>
         <Route path="/join" element={<JoinPage />}/>
         <Route path="/setting" element={<MyInfoPage/> }/>
         <Route path="/useredit" element={<EditPage/> } />
         <Route path="/myvalog" element={<MyPage memberLists={memberLists} />} />
         <Route path="/write" element={<WritePage/>} />
      </Routes>   
     
    </div>
  );
}

export default App;
