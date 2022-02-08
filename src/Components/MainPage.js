import React, { Component } from 'react';
import Header from './Header';
import MainMenu from './MainMenu';
import Calendar from './Calendar';
import './MainPage.css';
import { Route, Routes } from 'react-router-dom';

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
              <Route path="/" element={ <Calendar/> }></Route>
            </Routes>
          </section>
        </main>
      </div>
    )
  }
}