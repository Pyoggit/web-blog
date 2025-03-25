import { useRef } from 'react'
import './style.css'

// component: 게시물 작성 화면 컴포넌트 //
export default function BoardWrite(){


 // state: 본문 영역 요소 참조 상태 //
 const contentRef = useRef<HTMLTextAreaElement | null>(null);
 // state: 이미지 입력 요소 참조 상태 //
 const imageInputRef = useRef<HTMLInputElement | null>(null);


    // render: 게시물 작성 화면 컴포넌트 렌더링 //
    return(
        <div id='board-write-wrapper'>
            <div className='board-write-container'>
                <div className='board-write-box'>
                    <div className='board-write-title-box'>
                        <input className='board-write-title-input' type='text' placeholder='제목을 작성해주세요.' />
                    </div>
                    <div className='divider'></div>
                    <div className='board-write-content-box'>
                        <textarea ref={contentRef} className='board-write-content-textarea' placeholder='본문을 작성해주세요.' />
                        <div className='icon-button'>
                            <div className='image-box-light-icon'></div>
                        </div>
                        <input ref={imageInputRef} type='file' accept='image/*' style={{display: 'none'}}/>
                    </div>
                    <div className='board-write-images-box'>
                        <div className='board-write-image-box'>
                            <img className='board-write-image' />
                            <div className='icon-button image-close'>
                                <div className='icon close-icon'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}