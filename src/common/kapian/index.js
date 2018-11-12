import React, { Component } from 'react'
import { CSSTransition } from "react-transition-group";
import {PaiOfKapian,BottomPaiOfKapian} from './style'

import icon_fanhui from "../../static/iconfont/icon_fanhui.svg";
import icon_fenxiang from "../../static/iconfont/icon_fenxiang.svg";
import icon_logo from "../../static/iconfont/icon_logo.svg";
import Header from "../header";
import kapianSrc from '../../static/imgs/erjiniang.jpg'
export default class Kapian extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       thisComponentShow:false
    }
  }
  
    fanhui(){
        this.props.history.go(-1)
      }
      componentDidMount = () => {
        this.setState(()=>{
          return {
            thisComponentShow:true
          }
        })
      }
      componentWillUnmount=()=>{
        this.setState(()=>{
          return {
            thisComponentShow:false
          }
        })
      }
      
  render() {
    return (
      <CSSTransition  timeout={200}
      in={this.state.thisComponentShow}
      classNames="kapianAnimation">
        <div>
          <Header
            left={<img className="iconfont" src={icon_fanhui} alt={"返回"} onClick={()=>this.fanhui()}/>}
            text={"我的卡片"}
            right={<img className="iconfont" src={icon_fenxiang} alt={"分享"}  /> }
          />
          <div>
              <PaiOfKapian imgsrc={kapianSrc}>
                  <p>
                  Imported JSX component Bottom_PaiOfKapian must be in PascalCase  
                  </p>
                  <BottomPaiOfKapian>
                    <div className="leftpart">
                          <img className="iconfont" src={icon_logo}   alt="" />
                          <span>小日常APP</span>
                    </div>
                    <div className="rightpart">
                      <span>周六</span>
                      <span>11.10,2018</span>
                    </div>
                  </BottomPaiOfKapian>
              </PaiOfKapian>
          </div>
        </div>
      </CSSTransition>
    )
  }
}
