import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Login from './view/login/login';
import Collection from './view/home/collection';
import Newsingle from './view/page/personal/newsingle';
import GroupNewsingle from './view/page/group/newsingle';
import Note from './view/page/note/index';
import Query from './view/page/query/query';
import './common/css/style.css';
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/collection' component={Collection} />
        <Route path='/newsingle' component={Newsingle} />
        <Route path='/groupnewsingle' component={GroupNewsingle} />
        <Route path='/note' component={Note} />
        <Route path='/query' component={Query} />
      </Switch>
    );
  }
}

export default App;
