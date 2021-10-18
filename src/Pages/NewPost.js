import React, { useEffect } from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import "../Assets/style2.css";
import $ from "jquery";

/*global kakao*/
function NewPost() {
    useEffect(()=>{
        //1. 사진 업로드
        // 1-1. 사진 미리보기
        var loadFile = function (event) {
            var output = document.getElementById('preview');
            output.src = URL.createObjectURL(event.target.files[0]);
            output.onload = function () {
                URL.revokeObjectURL(output.src) // free memory
            }
        };
        // 1-2. 사진 업로드 파일명 표출
        $(document).ready(function () {
            var fileTarget = $('.filebox .upload-hidden');
            fileTarget.on('change', function () {
                // 값이 변경되면 
                if (window.FileReader) { // modern browser 
                    var filename = $(this)[0].files[0].name;
                } else { // old IE 
                    var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출 
                }
            
                // 추출한 파일명 삽입 
                $(this).siblings('.upload-name').val(filename);
            });
        });
        
        //2. 주소표출 (좌표값=>주소로 변환하여 표출)
        var geocoder = new kakao.maps.services.Geocoder();

        var coord = new kakao.maps.LatLng(37.54679397126236, 126.96469159786623);
        var callback = function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
                const element = document.getElementById('spot-addr');
                element.textContent = result[0].address.address_name;
            }
        };

        geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);

        //3. 해시태그 리스트로 선택하여 추가하기
        const items = document.querySelector('.hashtags');
        const input = document.querySelector('#hashtag');
        function addTag() {
            const text = input.value;
            const tag_cnt = document.getElementsByClassName('item');
            const tag_length = tag_cnt.length;
        
            let overlap = false;
            function checkOverlap() {
                for (var i = 0; i < tag_length; i++) {
                    if (tag_cnt[i].title === text) {
                        overlap = true;
                        break;
                    } else {
                        overlap = false;
                    }
                }
            }
            checkOverlap();
        
            if (text !== '' && tag_length < 3 && overlap === false) {
                const item = createItem(text);
                items.appendChild(item);
            } else if (tag_cnt.length >= 3) {
                alert("해시태그는 최대 3개까지 입력가능합니다.");
            } else if (overlap === true) {
                alert("이미 추가한 해시태그입니다.");
            }
        }

        function createItem(text) {
            const itemRow = document.createElement('li');
            itemRow.setAttribute('class', 'item_row');
        
            const item = document.createElement('div');
            item.setAttribute('class', 'item');
            item.setAttribute('title', `${text}`);
        
            const name = document.createElement('span');
            name.setAttribute('class', 'item_name');
            name.innerText = text;
            console.log(text);
        
            const deleteBtn = document.createElement('div');
            deleteBtn.setAttribute('id', 'break-btn-pink');
            // deleteBtn.innerHTML = '<li id="break-btn-pink"></li>';
            deleteBtn.addEventListener('click', () => {
                items.removeChild(itemRow);
            });
        
            item.appendChild(name);
            item.appendChild(deleteBtn);
            itemRow.appendChild(item);
        
            return itemRow;
        }

        // 4.사진 설명 입력칸 > 글자수 표시 및 제한
        $(document).ready(function () {
            $('#exp-box').on('keyup', function () {
                $('#text-cnt').html("(" + $(this).val().length + " / 140)");
                if ($(this).val().length > 140) {
                    $(this).val($(this).val().substring(0, 140));
                    $('#text-cnt').html("(140 / 140)");
                }
            });
        });

    })
    return (
        <div>
            <Header />
            <main>
                <div class="view-wrap">
                    <div class="content">
                        <div class="new-photo wrap">
                            <div class="inner"><img id="preview" src="#" alt=""/></div>
                        </div>
                        <div class="filebox wrap">
                            <input class="upload-name" value="파일을 업로드하십시오" disabled="disabled"/>
                            <label for="ex_filename">사진 선택</label>
                            <input id="ex_filename" class="upload-hidden" type="file" accept="image/*" onchange="loadFile(event)"/>
                        </div>
                        <div class="wrap">
                            {/* <!-- 스팟 현재 위치 받아오기 --> */}
                            <label for="address" class="semi-title">위치</label>
                            <div id="spot-addr" class="void-box"></div>
                        </div>
                        <div class="wrap">
                            <label for="hashtag" class="semi-title">해시태그</label>
                            <select name="hashtag" id="hashtag" class="void-box" onchange="addTag()">
                                <option value="">해시태그를 입력하시오 (최대 3개)</option>
                                <option value="풍경">풍경</option>
                                <option value="일상">일상</option>
                                <option value="건축">건축</option>
                                <option value="인물">인물</option>
                                <option value="자연">자연</option>
                                <option value="바다">바다</option>
                                <option value="스냅샷">스냅샷</option>
                            </select>
                            <div>
                                <ul class="hashtags"></ul>
                            </div>
                        </div>
                        <div class="wrap">
                            <label for="photo-exp" class="semi-title">설명</label>
                            <textarea id="exp-box" name="photo-exp" cols="30" rows="10"
                                placeholder="사진을 설명하시오 (최대 140자)"></textarea>
                            <div id="text-cnt">(0 / 140)</div>
                        </div>
                        <input onclick="location.href='/'" type="submit" formaction="#" formenctype=".*" value="저장" class="void-box button wrap" />
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default NewPost;