import './style.css'

//  component: 푸터 레이아웃//
export default function Footer(){

    // event handler: 인스타 아이콘 버튼 이벤트 처리//
    const onInstaIconButtonClickHandler =() =>{
        window.open('http://www.instagram.com');
    };
    
    // event handler: 네이버 블로그 아이콘 버튼 이벤트 처리//
    const onNaverBlogIconButtonClickHandler =() =>{
        window.open('http://blog.naver.com');
    };
    

    
// render: 푸터 레이아웃 렌더링 //
return(
    <div id='footer'>
        <div className='footer-container'>
            <div className='footer-top'>
                <div className='footer-logo-box'>
                    <div className='icon-box'>
                        <div className='icon logo-main-icon'></div>
                    </div>
                    <div className='footer-logo-text'>{'pyocompany'}</div>
                </div>
                <div className='footer-link-box'>  
                    <div className='footer-email-link'>{'wkdvy122851@gmail.com'}</div>
                    <div className='icon-button' onClick={onInstaIconButtonClickHandler}>
                        <div className='icon insta-icon'></div>
                    </div>
                    <div className='icon-button' onClick={onNaverBlogIconButtonClickHandler}>
                        <div className='icon naver-blog-icon'></div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='footer-copyright'>{'Copyright © 2025 pyocompany. All Rights Reserved.'}</div>
            </div>
        </div>
    </div>
)

}
