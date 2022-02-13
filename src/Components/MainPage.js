import React, { Component } from 'react';
import Header from './Header';
import MainMenu from './MainMenu';
import Calendar from './Calendar';
import Tasks from './Tasks';
import Newtask from './Newtask';
import { Route, Routes } from 'react-router-dom';

import './MainPage.css';

export default class MainPage extends Component {
  render() {
    return (
      <div className='main-page'>
        < Header/>
        <main className='main-page_main'>
          <section className='main-page__main-menu'>
            < MainMenu/>
          </section>
          <section className='main-page__work-space'>        
          <Routes>
            <Route path="/" exact element={ <Calendar/> }></Route>
            <Route path="/tasks" element={ <Newtask/> }></Route>
          </Routes>
          </section>
        </main>
      </div>
    )
  }
}