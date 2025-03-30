import { Dispatch, SetStateAction } from 'react';
import './style.css'

// interface: 페이지네이션 컴포넌트 properties //
interface Props {
  currentPage: number;
  currentSection: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setCurrentSection: Dispatch<SetStateAction<number>>;

  viewPageList: number[];
  totalSection: number;
}

// component: 페이지네이션 컴포넌트 //
export default function Pagination(props: Props) {

  // state: Properties //
  const { currentPage, currentSection, viewPageList, totalSection } = props;
  const { setCurrentPage, setCurrentSection } = props;

  console.log('Pagination 상태', { currentPage, currentSection, viewPageList, totalSection });

  // event handler: 페이지 번호 클릭 이벤트 처리 //
  const onPageClickHandler = (page: number) => {
    setCurrentPage(page);
  }
  
  // event handler: 이전 버튼 클릭 이벤트 처리 //
  const onPreviousClickHandler = () => {
    if(currentSection === 1) return;
    setCurrentSection(currentSection - 1);
    setCurrentPage((currentSection - 1) * 10);
  }

  // event handler: 다음 버튼 클릭 이벤트 처리 //
  const onNextClickHandler = () => {
    if(currentSection === totalSection) return;
    setCurrentSection(currentSection + 1);
    setCurrentPage(currentSection * 10 + 1);
  }

  // render: 페이지네이션 컴포넌트 렌더링 //
  return (
    <div id='pagination-wrapper'>
      <div className='pagination-change-link-box'>
        <div className='icon-box-small' onClick={onPreviousClickHandler}>
          <div className='icon expand-left-icon'></div>
        </div>
        <div className='pagination-change-link-text' onClick={onPreviousClickHandler}>{'이전'}</div>
      </div>
      <div className='pagination-divider'>{'|'}</div>

    {viewPageList.map(page => 
    page === currentPage ? 
    <div key={page} className='pagination-text-active'>{page}</div> :
    <div key={page} className='pagination-text' onClick={() => onPageClickHandler(page)}>{page}</div>
    )}
    
      <div className='pagination-divider'>{'|'}</div>
      <div className='pagination-change-link-box'>
        <div className='pagination-change-link-text' onClick={onNextClickHandler}>{'다음'}</div>
        <div className='icon-box-small'onClick={onNextClickHandler}>
          <div className='icon expand-right-icon'></div>
        </div>
      </div>
    </div>
  )
}
