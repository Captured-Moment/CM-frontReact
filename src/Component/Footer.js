import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    const footer = {
        position: "absolute",
        width: "100%",
        height: "52px",
        bottom: "0",
        padding: "0",
        margin: "0 auto",
        borderTop: "1px solid #A96280",
        overflow: "hidden",
        zIndex: "3",
        background: "white"
    }
    const ulList = {
        maxWidth: "980px",
        margin: "0 auto",
        paddingTop: "12px",
        paddingLeft: "20px"
    }
    const ulLi = {
        display: "table",
        float: "left",
        width: "24%",
        height: "36px"
    }
    const mypageBtn = {
        backgroundColor: "#A96280",
        margin: "0 auto",
        marginTop: "2px",
        borderRadius: "50%",
        width: "28px",
        height: "28px",
        textIndent: "-9999px"
    }


    return (
    <div style={footer}>
        <div className="inner">
            <ul style={ulList}>
                <li style={ulLi}><Link to={'/'}><img src={require('../Assets/images/main.svg').default} alt="" /></Link></li>
                <li style={ulLi}><Link to={'/timeline'}><img src={require('../Assets/images/friends.svg').default} alt="" /></Link></li>
                <li style={ulLi}><Link to={'/mypage'}><div style={mypageBtn}></div></Link></li>
                <li style={ulLi}><Link to={'#'}><img src={require('../Assets/images/toggle-btn.svg').default} alt="" /></Link></li>
            </ul>
        </div>
    </div>
    )
}

export default Footer;