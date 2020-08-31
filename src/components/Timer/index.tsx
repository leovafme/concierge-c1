import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Button } from 'antd'
import { Row, Col } from 'antd'
import './index.css'

function Timer() {
  const [myTime, setMyTime] = useState('00:00:00')
  const [running, setRunning] = useState(false)

  /**
   * listen when running changed
   */
  useEffect(() => {
    let timer:any = null

    if (running) {
      timer = setInterval(() => {
        const date = moment().format('HH:mm:ss')
        setMyTime(`${date}`)
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
    setRunning(false)
  }

  return (
    <>
      <Row>
        <Col span={24} className="timer--container-time">{myTime}</Col>
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
