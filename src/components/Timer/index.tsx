import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import './index.css'

function Timer() {
  const [myTime, setMyTime] = useState("00:00");

  useEffect(() => {
    const timer = setTimeout(() => {
      const date = moment().format('mm:ss');
      setMyTime(`${date}`);
    }, 1000);

    return () => clearTimeout(timer);
  }, [myTime]);

  return (
    <>
      <Row>
        <Col span={24} className="timer--container-time">{myTime}</Col>
      </Row>
      <Row>
        <Col span={24} className="timer--container-actions">
          <Button type="primary">Start</Button>
          {" "}
          <Button>Stop</Button>
          {" "}
          <Button>Clean</Button>  
        </Col>
      </Row>
    </>
  );
}

export default Timer;
