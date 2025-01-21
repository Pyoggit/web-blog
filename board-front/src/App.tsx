//import BoardItem from './components/BoardItem';
//import Top3Item from './components/Top3Item';
//import CommentItem from './components/CommentItem';
// import FavoriteItem from './components/FavoriteItem';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Authentication from './views/Authentication';
import Main from './views/Main';
import Search from './views/Search';
import User from './views/User';
import BoardWrite from './views/Board/Write';
import BoardUpdate from './views/Board/Update';
import BoardDetail from './views/Board/Detail';
import Container from './layouts/Container';
import { AUTH_PATH, BOARD_DETAIL_PATH, BOARD_PATH, BOARD_UPDATE_PATH, BOARD_WRITE_PATH, MAIN_PATH, SEARCH_PATH, USER_PATH } from './constant';
// import { favoriteListMock, commentListMock, top3BoardListMock, latestBoardListMock } from './mocks';
// import InputBox from './components/InputBox';
//import { useState } from 'react';
//import Footer from './layouts/Footer';



// component: Application 컴포넌트 //
function App() {
  
  // render: Application 컴포넌트 렌더링 //

  return (
    <Routes>
      <Route element={<Container/>}>
      <Route path={MAIN_PATH()} element={<Main />} />
        <Route path={AUTH_PATH()} element={<Authentication />} />
        <Route path={SEARCH_PATH(':{searchWord')} element={<Search />} />
        <Route path={USER_PATH(':userEmail')} element={<User />} />
        <Route path={BOARD_PATH()}>
            <Route path={BOARD_WRITE_PATH()} element={<BoardWrite />} />
            <Route path={BOARD_DETAIL_PATH(':boardNumber')} element={<BoardDetail />} />
            <Route path={BOARD_UPDATE_PATH(':boardNumber')} element={<BoardUpdate />} />
        </Route>
        <Route path='*' element={<h1> 404 Not Found</h1>} />
      </Route>  
    </Routes>
);

}

export default App;
