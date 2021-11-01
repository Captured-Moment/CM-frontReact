import React, { useEffect } from 'react'


/*global kakao*/
const Map=()=>{
    useEffect(()=>{
      
        var container = document.getElementById('map');
        var options = {
          center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
          level: 10
        };
        var map = new kakao.maps.Map(container, options);

        if (navigator.geolocation) {
      
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(function(position) {
                
                var lat = position.coords.latitude, // 위도
                  lon = position.coords.longitude; // 경도
                
                var locPosition = new kakao.maps.LatLng(lat, lon) // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
                  message = '<div style="text-align:center;padding:5px;color: red">현재위치</div>'; // 인포윈도우에 표시될 내용입니다
                
                // 마커와 인포윈도우를 표시합니다
                displayMarker(locPosition);
                    
              });
            
        } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
            
            var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
              message = 'geolocation을 사용할수 없어요..'
                
            displayMarker(locPosition, message);
        }
        var imageSrc = 'https://myfirstmap.s3.ap-northeast-2.amazonaws.com/circle.png', // 마커이미지의 주소입니다    
        imageSize = new kakao.maps.Size(24 , 24), // 마커이미지의 크기입니다
        imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

        // 마커를 생성합니다
        // function displayMarker(locPosition, message)
        // 지도에 마커와 인포윈도우를 표시하는 함수입니다
        function displayMarker(locPosition) {
        
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({  
              map: map, 
              position: locPosition,
              image: markerImage
            }); 


            var iwContent = message, // 인포윈도우에 표시할 내용
              iwRemoveable = true;
        
            // 인포윈도우를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({
              content : iwContent,
              removable : iwRemoveable
            });

            // 인포윈도우를 마커위에 표시합니다 
            infowindow.open(map, marker);

            // 지도 중심좌표를 접속위치로 변경합니다
            map.setCenter(locPosition);      
        }    
    

        // 마커가 표시될 위치입니다 
        var mP1 = new kakao.maps.LatLng(37.458479760269256, 126.63678289519116); 
        var mP2 = new kakao.maps.LatLng(37.54667913449386, 126.96462722456926);
        var mP3 = new kakao.maps.LatLng(37.52862607541303, 126.93314247059297);
        var mP4 = new kakao.maps.LatLng(37.26656556920354, 126.99931962865256);
        var mP5 = new kakao.maps.LatLng(37.62077042738591, 126.7107485859373);

        //마커를 생성합니다
        var marker = new kakao.maps.Marker({
          position: mP1
        });
        var marker2 = new kakao.maps.Marker({
          position: mP2
        });
        var marker3 = new kakao.maps.Marker({
          position: mP3
        });
        var marker4 = new kakao.maps.Marker({
          position: mP4
        });
        var marker5 = new kakao.maps.Marker({
          position: mP5
        });
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
        marker2.setMap(map);
        marker3.setMap(map);
        marker4.setMap(map);
        marker5.setMap(map);
    }, [])

    const map = {
        position: "absolute",
        display: "block",
        margin: "0px",
        padding: "0px",
        top: "0px",
        left: "0px",
        overflow: "visible",
        width: "100%",
        height: "100%",
        zIndex: "1"
    }

    return (
        <div>
        	<div id="map" style={map}></div> 
        </div>
    )
}



export default Map;