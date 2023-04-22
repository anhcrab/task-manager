import {  Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import getDate from '../../utils/getDate';
import './TaskBody.scss'
import Task from '../../utils/task';

const TaskBody = () => {
    const [tasks, setTasks] = useState<Array<Task>>([])
    let task: Task
    let URL: string = '';

    // fetch api
    useEffect( () => {
        fetch('url')
            .then( res => res.json())
            .then( data => {
                setTasks(data)
            })
    }, [])
    const  addTask = async () => {
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        })
    }
    
    
    const handleSubmit = async () => {
        await addTask()
    }
    

    // open form
    const openForm = () => {
        document.querySelector('.add-items')?.classList.remove('open')
        document.querySelector('.control-func-form')?.classList.add('open-form')
    }

    const closeForm = () => {
        document.querySelector('.add-items')?.classList.add('open')
        document.querySelector('.control-func-form')?.classList.remove('open-form')
    }

    // handle 
    
    const buttonUI = () => {
        const button = document.querySelector('.add-icon')
        button?.classList.remove('bi-plus-circle')
        button?.classList.add('bi-plus-circle-fill')
    }
    const removeButtonUI = () => {
        const button = document.querySelector('.add-icon')
        button?.classList.add('bi-plus-circle')
        button?.classList.remove('bi-plus-circle-fill')
    }
    return (
        <>
            <Row id='task-body' fluid='true'>
                <Col id='left-side'>
                    <ul className='side-menu'>
                        <li className="side-menu-list">
                            <i className="bi bi-inbox-fill" style={{color: '#246fe0'}}></i>
                            Inbox
                        </li>
                        <li className="side-menu-list">
                            <i className="bi bi-calendar-check" style={{color: '#058527'}}></i>
                            Today
                        </li>
                        <li className="side-menu-list">
                            <i className="bi bi-calendar" style={{color: '#692fc2'}}></i>
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
                            {/* sẽ map các list items vs <li> */
                                tasks.map( (task) => (
                                    <li key={task.id}>{task.name}</li>
                                ))
                            }
                            <li className='control-func-btn ' onMouseOver={buttonUI} onMouseOut={removeButtonUI} >
                                <button className="add-items open" onClick={openForm}>
                                    <i className='add-icon bi bi-plus-circle ' ></i>
                                    Add Task
                                </button>
                            </li>
                            <li className="control-func-form ">
                                <div className="task-editor">
                                    <input type="text" placeholder='Task name' />
                                    <input type="text" placeholder='Description' />
                                </div>

                                <div className='submit-func-btn'>
                                    <button onClick={closeForm} className='close-btn'>Cancel</button>
                                    <button onClick={handleSubmit} className='submit-btn'>Add task</button>
                                </div>

                            </li>
                        </ul>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default TaskBody