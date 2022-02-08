import React, { Component } from 'react';
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
              <li className='m__item'>Группа ГМ</li>
              <li className='m__item'>Вертикаль п-ва</li>
              <li className='m__item'>Задачи</li>
              <li className='m__item'>Распоряжения</li>
              <li className='m__item'>Чат и звонки</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}