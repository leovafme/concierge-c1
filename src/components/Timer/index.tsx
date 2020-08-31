import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import './index.css'

function Timer() {
  const [myTime, setMyTime] = useState("00:00");
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer:any = null;
    if (running) {
      timer = setInterval(() => {
        const date = moment().format('mm:ss');
        setMyTime(`${date}`);
      }, 1000);
    } else if (!running) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  const startTimer = () => {
    setRunning(true);
  }

  const stopTimer = () => {
    setRunning(false);
  }

  const cleanTimer = () => {
    setMyTime("00:00");
    setRunning(false);
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

export default Timer;
