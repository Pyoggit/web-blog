import React from 'react'
import './style.css'

export default function Top3Item() {
  return (
    <div className='top-3-list-item'>
        <div className='top-3-list-item-main-box'>
            <div className='top-3-list-item-top'>
                <div className='top-3-list-item-profile-box'>
                    <div className='top-3-list-item-profile-image' style={{ backgroundImage: `url()` }}></div>
                </div>
                <div className='top-3-list-item-write-box'>
                    <div className='top-3-list-item-nickname'>{'젠인 토우지'}</div>
                    <div className='top-3-list-item-write-date'>{'2025. 01. 17.'}</div>
                </div>
            </div>
            <div className='top-3-list-item-middle'>
                <div className='top-3-list-item-title'>{'고죠사토루를 잡아라'}</div>
                <div className='top-3-list-item-content'>{'현상금은 1000억'}</div>
            </div>
            <div className='top-3-list-item-bottom'>
                <div className='top-3-list-item-counts'>
                    {`댓글 0. 좋아요 0. 조회수 0`}
                </div>
            </div>
        </div>
    </div>
  )
}
