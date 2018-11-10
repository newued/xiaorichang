import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import appstore from "./store";
import Today from "./pages/today";
import All from "./pages/all";
import My from "./pages/my";
import icon_jinri from './static/iconfont/icon_jinri.svg'
import icon_quanbu from './static/iconfont/icon_quanbu.svg'
import icon_wode from './static/iconfont/icon_wode.svg'
import icon_shichang from './static/iconfont/icon_shichang.svg'
class App extends Component {
  render() {
    return (
      <Provider store={appstore}>
      <Router>
        <div className="App">
          <Route exact path="/" component={Today}/>
          <Route exact path="/All" component={All}/>
          <Route exact path="/My" component={My}/>
          <Link to="/All">
             <img className="iconfont"
              src={icon_shichang} 
              style={{width:'48px',position:'fixed',bottom:'88px','right':'10px','boxShadow':'2px 2px 10px rgba(0,0,0,.4)','borderRadius':'5px'}}
              alt={'习惯市场'
            }
             />
          </Link>
          <ul className="bottom_app">
            <li>
              <Link to="/">
              <img className="iconfont icon-jinri" alt={'ss'} src={icon_jinri}/>
                <i>今日</i>
              </Link>
            </li>
            <li>
              <Link to="/All">
              <img className="iconfont icon-quanbu" alt={'ss'} src={icon_quanbu}/>
                <i>全部</i>
              </Link>
            </li>
            <li>
              <Link to="/My">
              <img className="iconfont icon-wode" alt={'ss'} src={icon_wode}/>
                <i>我的</i>
              </Link>
            </li>
          </ul>

        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
