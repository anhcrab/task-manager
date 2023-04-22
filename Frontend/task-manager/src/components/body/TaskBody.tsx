import {  Row, Col } from 'react-bootstrap';

import getDate from '../../utils/getDate';
import './TaskBody.scss'
import Task from '../../utils/task';

const TaskBody = () => {
    let URL: string = '';
    let task: Task
    let listTask = []
    // fetch api
    const  addTask = async () => {
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        })
    }
    const getTask = async () => {
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            listTask = data
        })
    }
    return (
        <>
            <Row id='task-body' fluid>
                <Col id='left-side'>
                    <ul className='side-menu'>
                        <li className="side-menu-list">
                            <i className="bi bi-inbox-fill"></i>
                            Inbox
                        </li>
                        <li className="side-menu-list">
                            <i className="bi bi-calendar-check"></i>
                            Today
                        </li>
                        <li className="side-menu-list">
                            <i className="bi bi-calendar"></i>
                            Upcoming
                        </li>
                    </ul>
                </Col>

                <Col id='main-content'>
                    <Row id='view-header'>
                        <header className="header-content">
                            <span className='simple-content'>Today</span> {getDate}
                        </header>
                    </Row>

                    <Row id='view-content'>
                        <ul className='items'>
                            {/* sẽ map các list items vs <li> */}
                            <li>
                                <button className="add-items">
                                    <i className="bi bi-plus-circle add-icon"></i>
                                    Add Task
                                </button>
                            </li>
                        </ul>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default TaskBody