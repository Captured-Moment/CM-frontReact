import React from 'react';

function Header() {

    const section = {
        overflow: "hidden",
        zIndex: "100",
        position: "relative",
        width: "100%",
        height: "52px",
        background: "#A96280"
    }
    const inner = {
        maxWidth: "980px",
        padding: "10px",
        margin: "0 auto",
        boxSizing: "borderBox",
        position: "relative"
    }
    // const navBar = {
    //     width: "100%",
    //     float: "left",
    //     overflow: "hidden",
    //     zIndex: "100",
    //     display: "flex",
    //     height: "100%",
    //     alignItems: "center",
    // }
    const logo = {
        padding: "2px",
        display: "block",
        margin: "0px auto"
    }
    // const back1 = {
    //     marginLeft: "10px",
    //     backgroundRepeat: "noRepeat",
    //     width: "30px",
    //     height: "40px",
    //     display: "block",
    //     textIndent: "-9999px",
    //     outline: "0"
    // }
    return (
        <div style={section}>
            <div style={inner}>
                {/* <div style={navBar}>
                    <button style={back1} type="button" onClick="history.go(-1)"><img src={require('../Assets/images/back_white.svg').default} alt="" /></button>
                </div> */}

                <div>
                    <a href="/"><img style={logo} src={require('../Assets/images/logo.svg').default} alt="" /></a>
                </div>

            </div>
        </div>
    )
}

export default Header;