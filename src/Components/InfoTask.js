import React, { Component } from "react";
import store from "../Redux/store";
import './InfoTask.css';

export default class InfoTask extends Component {
  state = {
    infotask:[]
  }

  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState();
      this.setState({ 
        infotask: state.infotask 
      });
      console.log(state)
      console.log(this.state)
    });
  }

  render() {
    return(
      <div className="info-task">
        <h1 className="info-task__title">{}</h1>
        <div className="info">
          <div className="info-name">
            <h3>Задача</h3>
          </div>
          <div className="info-stages">
            <div className="info-stages__title">Этапы:</div>
            <div className="info-stages__stages">
              <p>123</p>
              <p>123</p>
              <p>123</p>
            </div>
          </div>
          <div className="info-stages">
            <div className="info-stages__title inCharge">Ответственный:</div>
            <div className="info-stages__stages">
              <p>123</p>
            </div>
          </div>
          <div className="info-stages">
            <div className="info-stages__title deadline1">Срок выполнения:</div>
            <div className="info-stages__stages">
              <p>123</p>
            </div>
          </div>
          <button className="info-stages__btn">Готово</button>
        </div>
      </div>
    )
  }
}