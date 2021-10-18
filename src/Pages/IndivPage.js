import React, { useEffect } from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import "../Assets/style2.css";

function IndivPage() {
    useEffect(()=>{
       
    })

    return(
        <div>
            <Header />
            <main class="view-wrap">
                {/* <!-- 자바스크립트로  spot 주소 받아오기 추가 --> */}
                <div class="addr-box wrap flex-container">
                    <span id="marker-icon"></span>
                    <span class="address-font">서울특별시 용산구 청파동</span>
                </div>
                <div class="item-wrap">
                    <div class="wrap my-post-label">
                        <div class="flex-container">
                            <div id="post-profile-photo"></div>
                            <div id="post-profile-name">김현애</div>
                        </div>
                        <div id="post-date">2021년 9월 29일</div>
                    </div>
                    <div class="wrap timeline-photo big">
                        <img class="img-thumbnail" src="https://user-images.githubusercontent.com/68391767/135757297-741d2ecf-c99d-4767-9e59-796e45da4b0c.png"/>
                    </div>
                    <div class="wrap my-post-label">
                        <ul class="post-tag">
                            <li>#건축</li>
                            <li>#스냅샷</li>
                            <li>#일상</li>
                        </ul>
                        <div id="like-btn"></div>
                    </div>
                    <div id="post-exp" class="wrap">날씨 좋은 날에 학교에서 찍은 사진</div>
                </div>
                <div id="add-post-btn" onclick="location.href='/newpost'">add post</div>
            </main>
            <Footer />
        </div>
    )
}

export default IndivPage;