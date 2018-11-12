import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header  from '../../common/header'
import Kapian from '../../common/kapian'
import FinishXiguan from './components/FinishXiguan'

import icon_shezhi from '../../static/iconfont/icon_shezhi.svg'
import icon_action_dayin from '../../static/iconfont/icon_action_dayin.svg'
import icon_action_xinfeng from '../../static/iconfont/icon_action_xinfeng.svg'
import icon_action_hecha from '../../static/iconfont/icon_action_hecha.svg'
const loginUnit={
    'marginTop':'10px',
    'height':'80px',
    'lineHeight':'80px',
    'textAlign':'center',
    'fontSize':'28px',
    'boxShadow':'0px 2px 4px 0px rgba(0,0,0,0.1)',
}
const container_UnitInMy={
  'display':'inline-block',
  'width':'33%',
  'margin':'6px',
  'padding':'3px',
  'textAlign':'center',
  'boxSizing':'border-box',
  'borderRadius':'3px',
  'border':'1px solid #e6e6e6',
  'boxShadow':'0 2px 4px 0px rgba(0,0,0,.1)'
/*     'flex-def' */
},img_UnitInMy={
  'width':'48px'
},p_UnitInMy={
  'fontSize':'16px'
}
const UnitInMy=(props)=>{

  return (
    <Link to={props.route_path} style={container_UnitInMy}>
      <img alt="" src={props.img} style={img_UnitInMy}/>
      <p style={p_UnitInMy}>{props.text}</p>
    </Link>
  )
}

class Default extends Component{

  render() {
    return (
     <React.Fragment>
         <Header /*  left={<img className="iconfont" src={icon_kapian} alt={'卡片'}/>}  */
         text={'个人中心'}
         right={<img className="iconfont" src={icon_shezhi} alt={'设置'}/>}  
         />
         <div className="loginUnit" style={loginUnit}>
           注册/登录
         </div>
        <ul  style={{padding:'10px'}}>
        <li style={{display:'flex','justifyContent':'space-between'}}>
          <UnitInMy img={icon_action_dayin} text='已结束习惯' route_path="/FinishXiguan" ></UnitInMy>
          <UnitInMy img={icon_action_dayin} text='我的卡包' route_path="/Kapian" ></UnitInMy>
          <UnitInMy img={icon_action_dayin} text='蜕变记录' route_path="/" ></UnitInMy>
        </li>
        <li style={{display:'flex','justifyContent':'space-between'}}>
          <UnitInMy img={icon_action_dayin} text='习惯备份' route_path="/" ></UnitInMy>
          <UnitInMy img={icon_action_xinfeng} text='一封书信' route_path="/" ></UnitInMy>
          <UnitInMy img={icon_action_dayin} text='问题反馈' route_path="/" ></UnitInMy>
        </li>
        </ul>
        </React.Fragment>
    )
}}

export default class My extends Component {
      render(){
        return (
        <Router basename="/My">
          <div>
            <Route path="/" exact component={Default} />
            <Route  path="/FinishXiguan" component={FinishXiguan}/>
            <Route path="/Kapian" component={Kapian} />
          </div>
        </Router>
        
      )
    }  
}
