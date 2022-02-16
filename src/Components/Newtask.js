import React, { Component } from "react";
import store from "../Redux/store";
import Tasks from "./Tasks";

import './Newtask.css';

export default class Newtask extends Component {
  state = {
      id: '',
      nameTask: '',
      inCharge: '',
      deadline: '',
      stages: '',
      result: false
  }

  handleChange = (e) => {
    if (e.target.id === "nameTask") {
      this.setState({
        nameTask: e.target.value
      })
    } if (e.target.id === "inCharge") {
      this.setState({
        inCharge: e.target.value
      })
    } if (e.target.id === "stages") {
      this.setState({
        stages: e.target.value
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch({
      type: 'ADD_TO-LIST',
      payload:{
        nameTask: this.state.nameTask,
        incharge: this.state.inCharge,
        deadline: this.state.deadline,
        stage1: this.state.stage1
      }
  })
  console.log('Добавил:' + this.state)
  };

  render() {
    return (
      <div className="new-task">
        <h1 className="new-task__title">Новая задача</h1>
        <div className="task">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label></label>
              <input 
                  type='text' 
                  id="nameTask"
                  ref='nameTask'
                  value={this.state.nameTask} 
                  onChange={this.handleChange} 
                  className='form-name'
                  placeholder="Введите название задачи"
                  >
                </input>
            </div>
            <div className="form__div">
              <label className="label" for='inCharge'>Ответственный</label>
              <input                  
                  type='text'
                  id="inCharge"
                  ref='inCharge'
                  name="inCharge"
                  value={this.state.inCharge} 
                  onChange={this.handleChange} 
                  className='form-inCharge'
                  placeholder="Фамилия Имя">
              </input>
              <button className="form__inCharge-btn">+ Добавить еще</button>
            </div>
            <div  className="form__div">
              <label className="label" for='deadline'>Cрок выполнения</label>
              <input                  
                  type='text'
                  id="deadline"
                  ref='deadline'
                  name="deadline"
                  value={this.state.deadline} 
                  onChange={this.handleChange} 
                  className='form-inCharge deadline'>
              </input>
            </div>
            <div className="form__div" id="form-stages">
              <div>
              <label className="label" for='stages'>Этапы реализации</label>
              <input                  
                  type='text'
                  id="stages"
                  ref='stages'
                  name="stages"
                  value={this.state.stages} 
                  onChange={this.handleChange} 
                  className='form-inCharge stages'>
              </input>
              <button className="form__inCharge-btn">+ Добавить еще</button>
              </div>
              
            </div>
            <div className="form__div">
              <label className="label" for='result'>Результат </label>
              <input                  
                  type='checkbox'
                  id="result"
                  ref='result'
                  name="result"
                  value={this.state.result} 
                  onChange={this.handleChange} 
                  className='form-result'>
              </input>
              <label className="label-result">Отметка о завершении задачи</label>
            </div>
            <button className="new-task__btn">Поставить задачу</button>
          </form>
        </div>
      </div>
    )
  }
}