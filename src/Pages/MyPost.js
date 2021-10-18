import React, { useEffect } from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import "../Assets/style2.css";

function MyPost() {
    return(
        <div>
            <main class="view-wrap">
                {/* <!-- 자바스크립트로  spot 주소 받아오기 추가 --> */}
                {/* <!-- DB 에서 1 게시글 위치정보 2 게시글 날짜, 3 사진 4 해시태그 가져오기 --> */}
                <div class="item-wrap">
                    <div class="wrap user-post-grid">
                        <span><img src="../images/marker.svg"/></span>
                        <span class="address-font">서울특별시 용산구 청파동</span>
                        <div id="gear-btn" onclick="location.href='/mypost-change'"></div>
                        <div class="gap"></div>
                        <div id="post-date">2021년 9월 29일</div>
                    </div>
                    <div class="wrap timeline-photo big">
                        <a href="myIndivPost.ejs"><img class="img-thumbnail"
                            src="https://user-images.githubusercontent.com/68391767/135757297-741d2ecf-c99d-4767-9e59-796e45da4b0c.png"/></a>
                    </div>
                    <ul class="wrap my post-tag">
                        <li>#건축</li>
                        <li>#스냅샷</li>
                        <li>#일상</li>
                    </ul>
                    <div id="post-exp" class="wrap">날씨 좋은 날에 학교에서 찍은 사진</div>
                </div>
            </main>
        </div>
    )
}

export default MyPost;