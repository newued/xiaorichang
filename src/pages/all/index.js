import React, { Component } from 'react'
import Header  from '../../common/header'
import ItemLog from '../../common/itemLog'
import {ImgXiguanItemInList} from './style'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import icon_action_kantiankong from '../../static/iconfont/icon_action_kantiankong.svg'
import icon_action_hecha from '../../static/iconfont/icon_action_hecha.svg'
class ImgXiguanItemList extends Component{
  render() {
    return (
     <React.Fragment>
         <Header /*  left={<img className="iconfont" src={icon_kapian} alt={'卡片'}/>}  */
         text={'全部习惯'}
        /*  right={<img className="iconfont" src={icon_zhengli} alt={'整理'}/>}  */
         />
        <ul  style={{padding:'10px'}}>
        <Link to="/ItemLog">
        <ImgXiguanItemInList className="flex-direction-row item">
          <div >
            <img className="iconfont" src={icon_action_kantiankong} alt={"习惯图标"}/>
            <div  className="flex-direction-column">
              <span>早睡</span>
              <span>千锤百炼，才能成刚</span>
            </div>
          </div>
          <div className="flex-direction-column">
              <span> 2天 </span><span>共计坚持</span>
          </div>
        </ImgXiguanItemInList>
        </Link>
        <Link to="/ItemLog">
        <ImgXiguanItemInList className="flex-direction-row item">
          <div>
            <img className="iconfont" src={icon_action_hecha} alt={"喝茶"}/>
            <div  className="flex-direction-column">
              <span>喝茶</span>
              <span>多喝开水，有利于身体健康</span>
            </div>
          </div>
          <div className="flex-direction-column">
              <span> 1天 </span><span>共计坚持</span>
          </div>
        </ImgXiguanItemInList>
        </Link>
        </ul>
        </React.Fragment>
    )
}}

export default class All extends Component {
      render(){
        return (
        <Router basename="/All">
          <div>
            <Route path="/" exact component={ImgXiguanItemList} />
            <Route  path="/ItemLog" component={ItemLog}/>
          </div>
        </Router>
        
      )
    }  
}
