import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import "../Assets/style2.css";

function Timeline() {
    return(
        <div>
            <Header />
            <main class="view-wrap">
                {/* <!-- 자바스크립트로  spot 주소 받아오기 추가 --> */}
                <div class="spot-profile-grid">
                    <div class="photo-box">
                        <div class="inner"><img class="img-thumbnail"
                            src="https://user-images.githubusercontent.com/68391767/135757245-43bfcd01-d49d-4b08-85e3-33386263ddbf.png" alt="" /></div>
                    </div>
                    {/* <!-- 아래 버튼을 지도와 목록 토글키로 바꾸기 --> */}
                    <div class="text-button">지도에서 보기</div>
                    <div class="addr-box wrap flex-container">
                        <span id="marker-icon"></span>
                        <span class="address-font">서울특별시 용산구 청파동</span>
                    </div>
                </div>
                {/* <!-- DB 에서 1 게시자 프사, 2 게시자 이름, 3 게시 날짜, 4 게시글 사진, 5 게시글 태그, 6 좋아요 등록정보 7 게시글 내용 가져오기 --> */}
                <div class="item-wrap">
                    <div class="wrap my-post-label">
                        <div class="flex-container">
                            <div id="post-profile-photo"></div>
                            <div id="post-profile-name">김현애</div>
                        </div>
                        <div id="post-date">2021년 9월 29일</div>
                    </div>
                    <div class="wrap timeline-photo">
                        <img class="img-thumbnail" onclick="location.href='/viewpost/viewpost'"  alt="" src="https://user-images.githubusercontent.com/68391767/135757297-741d2ecf-c99d-4767-9e59-796e45da4b0c.png"/>
                    </div>
                    <div class="wrap my-post-label">
                        <ul class="post-tag">
                            <li>#건축</li>
                            <li>#스냅샷</li>
                            <li>#일상</li>
                        </ul>
                        <div id="like-btn"></div>
                    </div>
                </div>
                <div class="item-wrap">
                    <div class="wrap my-post-label">
                        <div class="flex-container">
                            <div id="post-profile-photo"></div>
                            <div id="post-profile-name">박혜수</div>
                        </div>
                        <div id="post-date">2021년 9월 25일</div>
                    </div>
                    <div class="wrap timeline-photo">
                        <img class="img-thumbnail" onclick="location.href='/viewpost'" src="https://user-images.githubusercontent.com/68391767/135757245-43bfcd01-d49d-4b08-85e3-33386263ddbf.png" alt="" />
                    </div>
                    <div class="wrap my-post-label">
                        <ul class="post-tag">
                            <li>#일상</li>
                            <li>#스냅샷</li>
                        </ul>
                        <div id="like-btn"></div>
                    </div>
                </div>
                <div class="item-wrap">
                    <div class="wrap my-post-label">
                        <div class="flex-container">
                            <div id="post-profile-photo"></div>
                            <div id="post-profile-name">정효림</div>
                        </div>
                        <div id="post-date">2021년 9월 24일</div>
                    </div>
                    <div class="wrap timeline-photo">
                        <img class="img-thumbnail" onclick="location.href='/viewpost/viewpost'"  alt="" src="https://user-images.githubusercontent.com/68391767/135757383-24595160-45c3-4376-a7b3-f8a0895bb5f3.jpeg"/>
                    </div>
                    <div class="wrap my-post-label">
                        <ul class="post-tag">
                            <li>#풍경</li>
                            <li>#일상</li>
                            <li>#자연</li>
                        </ul>
                        <div id="like-btn"></div>
                    </div>
                </div>
                <a id="add-post-btn" href='/newpost'>add post</a>
            </main>
            <Footer />
        </div>
    )
}

export default Timeline;