import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Button } from 'antd'
import { Row, Col } from 'antd'
import './index.css'

function Timer() {
  const [myTime, setMyTime] = useState('00:00:00')
  const [running, setRunning] = useState(false)
  const [myTimeElapsed, setMyTimeElapsed] = useState('00:00:00')

  /**
   * listen when running changed
   */
  useEffect(() => {
    let timer:any = null

    if (running) {
      const myTimeInit = new Date()

      timer = setInterval(() => {
        const dateInitial = moment(myTimeInit)
        const dateCurrent = moment()

        setMyTime(`${dateCurrent.format('HH:mm:ss')}`)

        const duration = moment.duration(dateCurrent.diff(dateInitial))
        const durationHours = Math.floor((duration.asMilliseconds() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const durationMinutes = Math.floor((duration.asMilliseconds() % (1000 * 60 * 60)) / (1000 * 60));
        const durationSeconds = Math.floor((duration.asMilliseconds() % (1000 * 60)) / 1000);

        setMyTimeElapsed(`${durationHours}:${durationMinutes}:${durationSeconds}`)
      }, 1000)
    } else if (!running) {
      clearInterval(timer)
    }

    return () => clearInterval(timer)
  }, [running])

  /**
   * @method startTimer init count hours
   */
  const startTimer = () => {
    setRunning(true)
  }

  /**
   * @method stopTimer stop momment hours
   */
  const stopTimer = () => {
    setRunning(false)
  }

  /**
   * @method cleanTimer stop running and clean hours
   */
  const cleanTimer = () => {
    setMyTime('00:00:00')
    setMyTimeElapsed('00:00:00')
    setRunning(false)
  }

  return (
    <>
      <Row>
        <Col span={24} className="timer--container-time">
          <span className="timer--container-time-date">{myTime}</span>
          <br/>
          <span className="timer--container-time-elapsed">Duration: {myTimeElapsed}</span>
        </Col>
      </Row>
      <Row>
        <Col span={24} className="timer--container-actions">
          <Button disabled={running} type="primary" onClick={startTimer}>Start</Button>
          {" "}
          <Button onClick={stopTimer} danger disabled={!running}>Stop</Button>
          {" "}
          <Button onClick={cleanTimer}>Clean</Button>  
        </Col>
      </Row>
    </>
  );
}

export default Timer
