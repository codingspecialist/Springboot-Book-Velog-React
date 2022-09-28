import './App.css';
import Header from './components/Header';
import ListDetail from './components/ListDetail';
import Main from './components/Main';
import { Routes, Route} from 'react-router-dom';
import Search from './components/Search';
import Login from './components/Login';
import Setting from './components/Settiing';
import UserEdit from './components/UserEdit';
import MyVelog from './components/MyVelog';
import { useSelector } from 'react-redux';
import Write from './components/Write';


function App() {
  const lists = useSelector(state=>state.bloglists.lists);
  const userId = useSelector(state=>state.bloglists.selectList.userId);
  const memberLists = lists.filter(list=> list.userId === userId)
  return (
    <div className="App">
      <Header/>
      <Routes>
         <Route  path="/" element={<Main lists={lists}/>} />
         <Route  path="/search" element={<Search/>} />
         <Route  path="/listview/:id" element={<ListDetail/>} />
         <Route path="/login" element={<Login/>}/>
         <Route path="/setting" element={<Setting/>}/>
         <Route path="/useredit" element={<UserEdit/> } />
         <Route path="/myvalog" element={<MyVelog memberLists={memberLists}/>} />
         <Route path="/write" element={<Write/>} />
      </Routes>   
     
    </div>
  );
}

export default App;
