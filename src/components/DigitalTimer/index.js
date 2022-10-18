import {Component} from 'react'
import './index.css'

const initialState = {
  timerRunning: false,
  timerStartsInSecond: 0,
  timerLimit: 75,
}

class DigitalTimer extends Component {
  state = initialState

  renderTime = () => {
    const {timerRunning} = this.state
    const timerRun = timerRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const startOrPauseAltText = timerRunning ? 'pause icon' : 'play icon'
    return timerRun, startOrPauseAltText
  }

  getTimerInFormate = () => {
    const {timerStartsInSecond, timerLimit} = this.state
    const totalSeconds = timerLimit * 60 - timerStartsInSecond
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = Math.floor(totalSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    console.log(stringifiedSeconds)
    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {timerRunning} = this.state
    const {timerRun, startOrPauseAltText} = this.renderTime()
    const label = timerRunning ? 'Running' : 'Pause'

    return (
      <div className="digitalApp">
        <h1>Digital Timer</h1>
        <div className="bg-app">
          <div className="bg-container">
            <div className="timer-bg">
              {this.getTimerInFormate()}
              <p className="para">{label}</p>
            </div>
          </div>
          <div className="con-about">
            <div className="start-stop">
              <button type="button">
                <img alt={startOrPauseAltText} src={timerRun} />
              </button>
            </div>
            <p>start timer</p>
            <div className="bg-c">
              <p>-</p>
              <button type="button">start</button>
              <p>+</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
