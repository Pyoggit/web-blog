import BoardItem from './components/BoardItem';
import './App.css'
import { latestBoardListMock } from './mocks';

function App() {

  return (
    <>
    {latestBoardListMock.map(BoardListItem => <BoardItem boardListItem = {BoardListItem} />  )}
     
    </>
  )
}

export default App;
