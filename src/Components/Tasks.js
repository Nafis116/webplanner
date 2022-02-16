import React, { Component } from 'react';
import Newtask from './Newtask';
import { Link } from 'react-router-dom';
import store from '../Redux/store';

import './Tasks.css';

export default class Tasks extends Component {
  state = {
    isActive: false,
    tasks:[]
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
      console.log('Clicked Esc')
    }
  }

  componentDidMount(){    
    document.addEventListener("keydown", this.escFunction, false); 

    const state = store.getState();
    this.setState({ 
      tasks: state.tasks 
    });

    store.subscribe(() => {
      const state = store.getState();
      this.setState({ 
        tasks: state.tasks 
      });
    });
  };
  
  componentWillUnmount(){    
    document.removeEventListener("keydown", this.escFunction, false);  
  }

  deleteTask = (id) => {
    store.dispatch({
        type: 'DELETE_TASK-FROM_LIST',
        payload:{
          id: id
        }
    })
  }

  getID = (id) => {
    store.dispatch({
        type: 'GET_ID',
        payload:{
          id: id
        }
    })
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
                <Link className='task__item' to='/tasks/newtask'>
                  <button onClick={this.handleShow} className='tasks__header-btn'>Добавить задачу</button>
                </Link>
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
                  </div>
                  
                  <div  className='tasks-contetnt__div2'>
                    <div className='tasks-content__2'>
                      <h1 className='tasks-content__title'>Задачи на неделю</h1>
                    </div>
                    <ul>
                      {
                        this.state.tasks.map((item) => (
                          <div className='tasks__list'>
                          <Link onClick={() => this.getID(item.id)} className='task__item' to={`/tasks/info_${item.id}`}>
                            <li className='tasks-content__2-li' key={item.id}> {item.nameTask} </li>
                          </Link>
                          <button onClick={() => this.deleteTask(item.id)} type="button" className="task-delete">X</button>
                          </div>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        }
      </div>
    )
  }
}