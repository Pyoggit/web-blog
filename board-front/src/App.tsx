//import BoardItem from './components/BoardItem';
//import Top3Item from './components/Top3Item';
//import CommentItem from './components/CommentItem';
import FavoriteItem from './components/FavoriteItem';
import './App.css'
import { favoriteListMock, commentListMock, top3BoardListMock, latestBoardListMock } from './mocks';
import InputBox from './components/InputBox';
import { useState } from 'react';



//{latestBoardListMock.map(BoardListItem => <BoardItem boardListItem = {BoardListItem} />  )}
function App() {

  const [value, setValue] = useState<string>('');

  return (
    <>
    <InputBox label='이메일' type='text' placeholder='이메일 주소를 입력해주세요' value={value} error={false} setValue={setValue} message='aaaa' />
    </>
  )
}

export default App;
