import React, { Component } from 'react'
import Map from '../Component/Map';

export default class Main extends Component {

    render() {

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
        const navBar = {
            float: "left",
            overflow: "hidden",
            zIndex: "100",
            display: "flex",
            height: "100%",
            alignItems: "center",
        }
        const login = {
            textDecoration: "none",
            position: "absolute",
            right: "15px",
            top: "17px",
            display: "flex",
            float: "right",
            fontSize: "15px",
            marginRight: "15px",
            color : "#ffffff"
        }
        const searchBtn = {
            position:"absolute",
            left: "50px",
            top: "10px",
            width: "32px",
            height: "32px",
            marginLeft: "10px",
            display: "block",
            border: "0",
            outline:"0"
        }


        if(this.props.user){
            return(
                <div>
                    <div style={section}>
                        <div style={inner}>
                            <div style={navBar}>
                                <div>
                                    <a href="/search"><img style={searchBtn} src={require('../Assets/images/search-btn.svg').default} alt="" /></a>
                                </div>
                            </div>
                
                            <div>
                                <a href="/" class="logo"><img src={require('../Assets/images/logo.svg').default} alt="" /></a>
                            </div>
                
                            <div>
                                <a href="/login" style={login}>
                                  <span> {this.props.name}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <Map />
                </div>
            )
        }
        return (
            <div>
                <div style={section}>
                    <div style={inner}>
                        <div style={navBar}>
                            <div>
                                <a href="/search"><img style={searchBtn} src={require('../Assets/images/search-btn.svg').default} alt="" /></a>
                            </div>
                        </div>
    
                        <div>
                            <a href="/" class="logo"><img src={require('../Assets/images/logo.svg').default} alt="" /></a>
                        </div>
    
                        <div>
                            <a href="/login" style={login}>
                              <span>Login</span>
                            </a>
                        </div>
                    </div>
                </div>
                <Map />
            </div>
        )
    }
}