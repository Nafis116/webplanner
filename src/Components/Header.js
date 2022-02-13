import React, { Component } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

import './Header.css';

export default class Header extends Component {
  state = {
    searchLine: ''
  }

  searchLineChangeHandler = (e) => {
    this.setState({ searchLine: e.target.value });
    console.log(this.state)   
  }

  searchBoxSubmitHandler = (e) => {
    e.preventDefault();
  } 

  render() {
    const { searchLine } = this.state;
    return (
      <div className='header'>
        <div className='header__logo'>
          <Link to='/'><div className='header__logo_logo'></div></Link>
        </div>
        <div className='header__search'>
          <form className="header-search__form" onSubmit={this.searchBoxSubmitHandler}>
            <input
                value={searchLine}
                type="text"
                className="header-search__form-input"
                onChange={this.searchLineChangeHandler}
            />
            <button
                type="submit"
                className="header-search__form-submit"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
          </form>
        </div>
        <div className='time'>
          < Moment format='HH:mm' interval={1000} />
        </div>
      </div>
    )
  }
}

