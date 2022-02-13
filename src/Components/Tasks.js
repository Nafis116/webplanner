import React, { Component } from 'react';
import Newtask from './Newtask';

import './Tasks.css';

export default class Tasks extends Component {
  state = {
    isActive: false
  }

  handleShow = () => {
    this.setState({
      isActive: true
    })
  }

  escFunction = (e) => {
    if (e.key === "Escape") {    
      this.setState({
        isActive: false
      })
    }
  }

  componentDidMount(){    
    document.addEventListener("keydown", this.escFunction, false);  
  }  
  componentWillUnmount(){    
    document.removeEventListener("keydown", this.escFunction, false);  
  }

  render() {
    const { isActive } = this.state;

    return (
      <div>
        {
         isActive ? <div>< Newtask /></div>
          :
            <div className='tasks'>
              <div className='tasks__header'>
                <div>
                  <ul className='tasks__header-list'>
                    <li className='header-item'>Поручил</li>
                    <li className='header-item'>Помогаю</li>
                    <li className='header-item'>Наблюдаю</li>
                  </ul>
                </div>
                <div>
                  <button onClick={this.handleShow} className='tasks__header-btn'>Добавить задачу</button>
                </div>
              </div>

              <div className='tasks-area'>
                <h1 className='tasks-area__title'>МОЙ ПЛАН</h1>
                <div>
                  <ul className='tasks-area__list'>
                    <li>Список</li>
                    <li>Календарь</li>
                    <li>Сроки:</li>
                  </ul>
                </div>
                <div className='tasks-area__checkbox'>
                  <label className="container">
                    <input className='container-checkbox' type="checkbox" />
                    <span className="checkmark"></span>
                    <span className='container-span'>Просрочено</span>
                  </label>

                  <label className="container container_second">
                    <input className='container-checkbox' type="checkbox"/>
                    <span className="checkmark"></span>
                    <span className='container-span'>На исполнении</span>
                  </label>

                  <label className="container">
                    <input className='container-checkbox' type="checkbox"/>
                    <span className="checkmark"></span>
                    <span className='container-span'>Подходит срок</span>
                  </label>
                </div>

                <div className='tasks-content'>
                  <div className='tasks-contetnt__div1'>
                    <div className='tasks-content__1'>
                      <h1 className='tasks-content__title'>Незапланированное</h1>
                    </div>
                    <p>{}</p>
                  </div>
                  
                  <div  className='tasks-contetnt__div2'>
                    <div className='tasks-content__2'>
                      <h1 className='tasks-content__title'>Задачи на неделю</h1>
                    </div>
                    <p>{}</p>
                  </div>
                </div>
              </div>
            </div>
        }
      </div>
    )
  }
}