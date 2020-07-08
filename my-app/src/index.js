import React from 'react';
import ReactDOM from 'react-dom';
import TrData from './bookList';
import Login from './login';
import BookItems from './bookItems'; 
import AddBook from './addBook';
import { Router,Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Route exact path="/" component={Login} />
        <Route exact path="/bookList" component={TrData} />
         <Route exact path="/bookList/add" component={AddBook} />
         {/* <Route path="/bookList/:id" component={BookList} /> */}
    </Router>
    ,document.getElementById('root')
);