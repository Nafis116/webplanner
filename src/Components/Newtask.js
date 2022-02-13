import React, { Component } from "react";

import './Newtask.css';

export default class Newtask extends Component {
  state = {
    nameTask: '',
    inCharge: ''
  }

  handleChange = (e) => {
    this.setState({
      nameTask: e.target.value
    })
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault();
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
                  name="deadline"
                  value={this.state.deadline} 
                  onChange={this.handleChange} 
                  className='form-inCharge deadline'>
              </input>
            </div>
          </form>
        </div>
      </div>
    )
  }
}