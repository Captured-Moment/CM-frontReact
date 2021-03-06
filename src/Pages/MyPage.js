import React, { useEffect } from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import "../Assets/style2.css";

/*global kakao*/
function MyPage() {
    useEffect(()=>{
        //#my-map 마이페이지에 지도 생성하기
        var mapContainer = document.getElementById('my-map'),
        mapOption = {
            center: new kakao.maps.LatLng(37.52937249581941, 126.93267631786996),
            level: 9
        };
        var map = new kakao.maps.Map(mapContainer, mapOption);

        // 마커가 표시될 위치입니다
        // *** 유저가 올린 게시글 위치 받아오기

        var positions = [
        {
            title: '숙명여대',
            address: '서울특별시 용산구 청파동',
            latlng: new kakao.maps.LatLng(37.54675143914647, 126.96471305553834)
        },
        {
            title: '서울식물원',
            address: '서울특별시 강서구 마곡동',
            latlng: new kakao.maps.LatLng(37.56938884525118, 126.83538882643076)
        },
        {
            title: '여의도 한강공원',
            address: '서울특별시 영등포구 여의도동',
            latlng: new kakao.maps.LatLng(37.52937249581941, 126.93267631786996)
        }
        ]

        var markers = []
        // var iwContent = []
        for (var i = 0; i < positions.length; i++) {
        markers[i] = new kakao.maps.Marker({
            map: map, //마커를 표시할 지도 #my-map
            position: positions[i].latlng,
            title: positions[i].title,
            clickable: true
        });
        }
        // 마커가 지도 위에 표시되도록 설정합니다
        // marker.setMap(map);

        // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
        // marker.setMap(null);

        var iwContent = [];
        for (var j = 0; i < positions.length; i++) {
        iwContent[i] = `<a style="padding:5px;" href='/mypost'">${positions[i].title}</div>`
        console.log(iwContent[i]);
        }

        for (var n = 0; i < positions.length; i++) {
        const marker = markers[i];
        const IW = new kakao.maps.InfoWindow(
            {
                content: iwContent[i],
                removable: true
            });
        kakao.maps.event.addListener(marker, 'click', function () {
            // 마커 위에 인포윈도우를 표시합니다
            IW.open(map, marker);
        });

        }



        const myPostBtn = document.querySelector('#post-list-btn')
        const myMapBtn = document.querySelector('#my-map-btn')
        const myPostList = document.querySelector('.timeline-tab')
        const myMap = document.querySelector('.my-map-cont')

        myPostBtn.addEventListener('click', () => {
        if (myPostList.className === 'timeline-tab') {
            myPostList.classList.toggle('active');
            myMap.classList.toggle('active');
        }
        // } else { location.href = "#"; }
        })
        myMapBtn.addEventListener('click', () => {
        if (myMap.className === 'my-map-cont') {
            myPostList.classList.toggle('active');
            myMap.classList.toggle('active');
            map.relayout();
            map.setCenter(mapOption.center);
        }
        // } else { location.href = "#"; }
        })
    })

    return(
        <div>
            <Header />
            <main class="view-wrap-new">
            {/* <!-- data 요청 1.유저 프로필사진 2. 닉네임 3. 자기소개--> */}
            <div class="user-profile-grid">
                <div class="photo-box">
                    <div class="inner"><img class="img-thumbnail"
                        src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80" />
                    </div>
                </div>
                <div class="gap"></div>
                {/* <!-- <div class="username">닉네임</div> --> */}
                <div class="username">김현애</div>
                {/* <!-- ** 수정페이지로 이동시키기 --> */}
                <div class="text-button2" onclick="location.href='/myaccount'">수정</div>
                <div class="user-bio">안녕하세요. 심채영입니다...</div>
            </div>
            <div class="myPage-tab">
                <ul class="myPage-tab-container">
                    <li><button id="post-list-btn" type="button"></button></li>
                    <li><button id="my-map-btn" type="button"></button></li>
                </ul>
            </div>

            <div class="my-map-cont"><div id="my-map"></div></div>
            {/* <!-- DB 에서 1 사용자 프로필 사진 2 사용자 닉네임, 3 사용자 자기소개, 4 게시글 위치정보, 5 게시글 날짜 6 게시글 해시태그 가져오기 --> */}
            <div class="timeline-tab active">
                <div class="item-wrap">
                    <div class="wrap my-post-label">
                        <div class="flex-container">
                            <span id="marker-icon"></span>
                            <span class="address-font">서울특별시 용산구 청파동</span>
                        </div>
                        <div id="post-date">2021년 9월 29일</div>
                    </div>
                    <div class="wrap timeline-photo">
                        <a href="/mypost/mypost"><img class="img-thumbnail"
                             src="https://user-images.githubusercontent.com/68391767/135757297-741d2ecf-c99d-4767-9e59-796e45da4b0c.png"/></a>
                    </div>
                    <div class="wrap my-post-label">
                        <ul class="post-tag">
                            <li>#건축</li>
                            <li>#스냅샷</li>
                            <li>#일상</li>
                        </ul>
                        <div id="gear-btn" onclick="location.href='/mypost-change'"></div>
                    </div>
                </div>
                <div class="item-wrap">
                    <div class="wrap my-post-label">
                        <div class="flex-container">
                            <span id="marker-icon"></span>
                            <span class="address-font">서울특별시 강서구 마곡동</span>
                        </div>
                        <div id="post-date">2021년 9월 28일</div>
                    </div>
                    <div class="wrap timeline-photo">
                        <a href="/mypost/mypost"><img class="img-thumbnail"
                            src="https://user-images.githubusercontent.com/68391767/135757777-24317b38-d3b3-4e12-9734-45d8ff73d449.png"/></a>
                    </div>
                    <div class="wrap my-post-label">
                        <ul class="post-tag">
                            <li>#여행</li>
                            <li>#자연</li>
                        </ul>
                        <div id="gear-btn" onclick="location.href='/mypost-change'"></div>
                    </div>
                </div>
                <div class="item-wrap">
                    <div class="wrap my-post-label">
                        <div class="flex-container">
                            <span id="marker-icon"></span>
                            <span class="address-font">서울특별시 영등포구 여의도동</span>
                        </div>
                        <div id="post-date">2021년 8월 12일</div>
                    </div>
                    <div class="wrap timeline-photo">
                        <a href="/mypost/mypost"><img class="img-thumbnail"
                            src="https://user-images.githubusercontent.com/68391767/135757983-a3f55b85-b5c3-4795-971d-3536b16abc06.png"/></a>
                    </div>
                    <div class="wrap my-post-label">
                        <ul class="post-tag">
                            <li>#풍경</li>
                            <li>#스냅샷</li>
                            <li>#일상</li>
                        </ul>
                        <div id="gear-btn" onclick="location.href='/mypost-change'"></div>
                    </div>
                </div>
            </div>
        </main>
            <Footer />
        </div>
    )
}

export default MyPage;