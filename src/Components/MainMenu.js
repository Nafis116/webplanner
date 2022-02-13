import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MainMenu.css';

export default class MainMenu extends Component {
  state = {

  }
  render() {
    return (
      <div className='mainmenu'>
        <div className='m-menu'>
          <div className='m-menu__user'>
            <div className='m-user__foto'></div>
            <div className='m-user__name'>Зиангиров Нафис</div>
          </div>
          <div className='main-menu'>
            <ul className='m__list'>
              <Link className='m__item' to='/department'><li>Группа ГМ</li></Link>
              <Link className='m__item' to='/hierarchy'><li>Вертикаль п-ва</li></Link>
              <Link className='m__item' to='/tasks'><li>Задачи</li></Link>
              <Link className='m__item' to='/order'><li>Распоряжения</li></Link>
              <Link className='m__item' to='/contact'><li>Чат и звонки</li></Link>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}