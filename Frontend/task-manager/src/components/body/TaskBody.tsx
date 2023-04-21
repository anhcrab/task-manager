import { useState } from 'react';
import {  Row, Col } from 'react-bootstrap';

import getDate from '../../utils/getDate';
import './TaskBody.scss'

const TaskBody = () => {
     


    return (
        <>
            <Row id='task-body' fluid>
                <Col id='left-side' lg={2}>
                    <ul>
                        <li className="side-menu">
                            <i className="bi bi-inbox-fill"></i>
                            Inbox
                        </li>
                        <li className="side-menu">
                            <i className="bi bi-calendar-day"></i>
                            Today
                        </li>
                        <li className="side-menu">
                            <i className="bi bi-calendar"></i>
                            Upcoming
                        </li>
                    </ul>
                </Col>

                <Col id='main-content' lg={10}>
                    <Row id='view-header'>
                        Today, {getDate}
                    </Row>

                    <Row id='view-content'></Row>
                </Col>
            </Row>
        </>
    )
};

export default TaskBody