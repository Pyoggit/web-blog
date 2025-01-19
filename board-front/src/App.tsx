//import BoardItem from './components/BoardItem';
//import Top3Item from './components/Top3Item';
//import CommentItem from './components/CommentItem';
import FavoriteItem from './components/FavoriteItem';
import './App.css'
import { favoriteListMock, commentListMock, top3BoardListMock, latestBoardListMock } from './mocks';



//{latestBoardListMock.map(BoardListItem => <BoardItem boardListItem = {BoardListItem} />  )}
function App() {

  return (
    <>
      <div style={{ display: 'flex', columnGap: '30px', rowGap: '20px' }}>
          {favoriteListMock.map(favoriteListItem => (
              <FavoriteItem favoriteListItem={favoriteListItem} />
          ))}
      </div>
    </>
  )
}

export default App;
