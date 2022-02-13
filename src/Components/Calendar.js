import React, {Component} from 'react';
import moment from 'moment';
import Moment from 'react-moment';

import 'moment/locale/ru';

import './Calendar.css';
export default class Calendar extends Component {
  state = {
    weekdayshort: moment.weekdaysShort(),
    dateObject: moment(),
    blanks: []
  }

  daysInMonth = () => {
    return this.state.dateObject.daysInMonth();
  };
  year = () => {
    return this.state.dateObject.format("Y");
  };
  currentDay = () => {
    return this.state.dateObject.format("D");
  };

  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
                 .startOf("month")
                 .format("d"); 
   return firstDay;
  };

  render() {
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td className="calendar-day empty">{""}</td>
      );
    }

    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      // eslint-disable-next-line eqeqeq
      let currentDay = d == this.currentDay() ? "today" : "";
      daysInMonth.push(
        <td key={d} className={`calendar-day ${currentDay}`}>
          {d}
        </td>
      );
    }

    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row); 
      } else {
        rows.push(cells); 
        cells = []; 
        cells.push(row); 
      }
      if (i === totalSlots.length - 1) { 
        rows.push(cells);
      }
    });
    let daysinmonth = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });

    
    return (
      <div className='calendar'>
        <h1 className='calendar__title' onClick={this.handleConsole}>Мой календарь</h1>
        <div className='calendar__header'>
          <div className='calendar__header-menu'>
            <ul className='header__list'>
              <li className='header__item'>День</li>
              <li className='header__item'>Неделя</li>
              <li className='header__item'>Месяц</li>
              <li className='header__item header__item-last'>Расписание</li>
            </ul>
          </div>
          <div>
            <p className='header__date-info'><Moment format='MMMM, YYYY'></Moment></p>
          </div>
        </div>
        <table className='calendar__table'>
          <thead>
            <tr>
              { this.state.weekdayshort.map((day) => (
                <th key={day} className="week-day">
                {day}
              </th>
              ))}
            </tr>
          </thead>
          <tbody className='calendar__tbody'>
            {daysinmonth}
          </tbody>
        </table>
      </div>
    )
  }
}