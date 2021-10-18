import React, { useEffect } from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import "../Assets/style2.css";

function MyAccount() {
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
        // // 1-2. 사진 업로드 파일명 표출
        // $(document).ready(function () {
        //     var fileTarget = $('.filebox .upload-hidden');
        //     fileTarget.on('change', function () {
        //         // 값이 변경되면 
        //         if (window.FileReader) { // modern browser 
        //             var filename = $(this)[0].files[0].name;
        //         } else { // old IE 
        //             var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출 
        //         }
            
        //         // 추출한 파일명 삽입 
        //         $(this).siblings('.upload-name').val(filename);
        //     });
        // });
        // //인사말 입력 글자수 계산 & 100자 제한
        // $(document).ready(function () {
        //     $('#exp-box').on('keyup', function () {
        //         $('#text-cnt').html("(" + $(this).val().length + " / 100)");
        //         if ($(this).val().length > 100) {
        //             $(this).val($(this).val().substring(0, 100));
        //             $('#text-cnt').html("(100 / 100)");
        //         }
        //     });
        // });

        //이름 받아오기
        // let myname = document.querySelector("name");
        // function getName()
    })

    return(
        <div>
            <Header />
            <main class="view-wrap">
                <div class="title wrap">회원정보 수정</div>
                <div class="new-photo wrap">
                    <div class="inner"><img id="preview" src="#" alt="" /></div>
                </div>
                <div class="filebox wrap">
                    <input class="upload-name" value="파일을 업로드하십시오" disabled="disabled" />
                    <label for="ex_filename">사진 선택</label>
                    <input id="ex_filename" class="upload-hidden" type="file" accept="image/*"
                        onchange="loadFile(event)" />
                </div>
                <div class="wrap">
                    <label for="name" class="semi-title">이름</label>
                    <div id="spot-addr" class="void-box">김현애</div>
                    {/* <!-- 원본은 밑줄.. 절대 삭제 금지 -->
                    <!-- <input type="text" id="name" name="name" class="void-box" required> --> */}
                </div>
                <div class="wrap">
                    <label for="nickname" class="semi-title">닉네임</label>
                    <input value="김현애" type="text" name="nickname" class="void-box" required />
                    {/* <!-- 원본은 밑줄.. 절대 삭제 금지 -->
                    <!-- <input type="text" name="nickname" class="void-box" required> --> */}
                </div>
                <div class="wrap">
                    <label for="id" class="semi-title">E-mail</label>
                    <input value="abcd1234@apps.com" type="email" name="id" class="void-box" required />
                    {/* <!-- 원본은 밑줄.. 절대 삭제 금지 -->
                    <!-- <input type="email" name="id" class="void-box" required> -->*/}
                </div>
                <div class="wrap">
                    <label for="pw" class="semi-title">비밀번호</label>
                    <input type="password" name="pw" class="void-box" required />
                </div>
                <div class="wrap">
                    <label for="pw" class="semi-title">비밀번호 확인</label> 
		        	<input type="password" name="pw-confirm" class="void-box" required />
                </div>
                <div class="wrap">
                    <label for="user-bio" class="semi-title">인사말</label>
                    <textarea id="exp-box" name="user-bio" cols="30" rows="10"
                        placeholder="인사말을 입력하시오. (최대 100자)">안녕하세요. 심채영입니다...</textarea>
                    {/* <!-- 원본은 밑줄.. 절대 삭제 금지 -->
                    <!-- <textarea id="exp-box" name="user-bio" cols="30" rows="10"
                        placeholder="인사말을 입력하시오. (최대 100자)"></textarea> --> */}
                    <div id="text-cnt">(16 / 100)</div>
                </div>
                <input class="void-box button wrap" type="submit" formaction="#" formenctype=".*" value="저장" onclick="location.href='/mypage/mypage'" />
            </main>
            <Footer />
        </div>
    )
}

export default MyAccount;