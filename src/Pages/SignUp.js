import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import "../Assets/style.css";

function SignUp() {
    return (
        <div>
            <Header />
            <div className="section2">
                <div className="bodyDiv">
	    	        <div className="mainDiv">
	    	        	<form id="joinForm" action="./member/join_member.do" method="post" enctype="multipart/form-data">
	    	        		<p>
	    	        			<label className="label1">Nickname</label> 
	    	        			<input className="input1" type="text" name="nickname" required /> 
	    	        		</p>
	    	        		<p>
	    	        			<label className="label1">name</label> 
	    	        			<input className="input1" type="text" name="name" required /> 
	    	        		</p>
	    	        		<p>
	    	        			<label className="label1">ID(Email)</label> 
	    	        			<input  className="input1" type="email" id="id" name="id" required /> 
	    	        			<span id="id_check" className="w3-text-red"></span>
	    	        		</p>
	    	        		<p>
	    	        			<label className="label1">비밀번호</label> 
	    	        			<input className="input1" id="pw" name="pw" type="password" required />
	    	        		</p>
	    	        		<p>
	    	        			<label className="label1">비밀번호 확인</label> 
	    	        			<input className="input1" id="pw2" type="password" required />
	    	        		</p>
	    	        		<p className="filebox">
                                <label className="label1">Profile</label>
	    	        			<input className="upload-name" value="파일선택" disabled="disabled" />
	    	        			<label className="label2" for="ex_filename">업로드</label>
	    	        			<input type="file" id="ex_filename" className="upload-hidden" />
	    	        		</p>

	    	        		<p>
	    	        			<label className="label1">Comment</label> 
	    	        			<input className="input1" type="text" />
	    	        		</p>

	    	        		<p className="buttonP">
	    	        			<button type="submit" id="joinBtn">가입하기</button>
	    	        			<button type="button" onclick="history.go(-1);">Cancel</button>
	    	        		</p>
	    	        	</form>
	    	        </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SignUp;

{/* <script>
    	$(function(){
    		$("#joinForm").submit(function(){
    			if($("#pw").val() !== $("#pw2").val()){
    				alert("비밀번호가 다릅니다.");
    				$("#pw").val("").focus();
    				$("#pw2").val("");
    				return false;
    			}else if ($("#pw").val().length < 8) {
    				alert("비밀번호는 8자 이상으로 설정해야 합니다.");
    				$("#pw").val("").focus();
    				return false;
    			}
				// else if($.trim($("#pw").val()) !== $("#pw").val() || $.trim($("#email").val()) !== $("#email").val() || $.trim($("#id").val()) !== $("#id").val()){
    			// 	alert("공백은 입력이 불가능합니다.");
    			// 	return false;
    			// }
    		})
        
    		$("#id").keyup(function() {
    			$.ajax({
    				url : "../member/check_id.do",
    				type : "POST",
    				data : {
    					id : $("#id").val()
    				},
    				success : function(result) {
    					if (result == 1) {
    						$("#id_check").html("중복된 아이디가 있습니다.");
    						$("#joinBtn").attr("disabled", "disabled");
    					} else {
    						$("#id_check").html("");
    						$("#joinBtn").removeAttr("disabled");
    					}
    				},
    			})
    		});
        
    		$("#email").keyup(function(){
    			$.ajax({
    				url : "./check_email.do",
    				type : "POST",
    				data : {
    					email : $("#email").val()
    				},
    				success : function(result) {
    					if (result == 1) {
    						$("#email_check").html("중복된 이메일이 있습니다.");
    					} else {
    						$("#email_check").html("");
    					}
    				},
    			})
    		});
			$(document).ready(function(){ 
				var fileTarget = $('.filebox .upload-hidden'); 
				fileTarget.on('change', function(){
					// 값이 변경되면 
					if(window.FileReader){ // modern browser 
						var filename = $(this)[0].files[0].name; 
					} else { // old IE 
						var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출 
					} 
					
					// 추출한 파일명 삽입 
					$(this).siblings('.upload-name').val(filename); 
				}); 
			});

    	})
</script> */}