import {  Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import getDate from '../../utils/getDate';
import './TaskBody.scss'
import Task from '../../utils/task';

const TaskBody = () => {
    const [tasks, setTasks] = useState<Array<Task>>([])
    const [state, setState] = useState<boolean>(false)

    let URL: string = 'http://localhost:3000/api/v1/';

    // fetch api
    useEffect( () => {
        const fetchData = async () => {
            console.log(state);
            
            await fetch(`${URL}read/`)
                .then( res => res.json())
                .then( data => {
                    setTasks(data)
                })
        }
        fetchData()
    }, [state])

    const addTask = async (task: any) => {
        await fetch(`${URL}create/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        }).then( (res) => {
            setState(!state)
        })
    }
    
    const handleSubmit = () => {
        const inputName = (document.getElementById('task-name') as HTMLInputElement)
        const inputDesc = (document.getElementById('task-desc') as HTMLInputElement)

        let task = {
            name: `${inputName.value}`,
            description: `${inputDesc.value}`,
            date: new Date(Date.now()).toUTCString(),
            done: false,
        }

        inputName.value = ''
        inputDesc.value = ''

        addTask(task)
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
                                tasks.map( (task, index) => {

                                    //task.done = task.done === undefined ? false : task.done
                                    if (task.done){

                                    }
                                    else {
                                        return <li key={task._id} className={index === tasks.length ? '': 'seperate-list'}>
                                            <div className="task-element-container">
                                                <i className="bi bi-grip-vertical drag"></i>
                                                <div className="task-element">
                                                    <span className='task-title'>{task.name}</span>
                                                    <p className='task-para'>{task.description}</p>
                                                </div>
                                                <button className='task-checkbox' onClick={ async () => {
                                                    await fetch(`${URL}update/`, {
                                                        method: 'PATCH',
                                                        headers: {
                                                            "Content-Type": "application/json",
                                                        },
                                                        body: JSON.stringify({
                                                            _id: task._id,
                                                            done: true,
                                                        })
                                                    })
                                                    console.log('success');
                                                    setState(!state)
                                                }}></button>
                                            </div>
                                        </li>
                                    }
                                }
                                )
                            }
                            <li className='control-func-btn ' onMouseOver={buttonUI} onMouseOut={removeButtonUI} >
                                <button className="add-items open" onClick={openForm}>
                                    <i className='add-icon bi bi-plus-circle ' ></i>
                                    Add Task
                                </button>
                            </li>
                            <li className="control-func-form ">
                                <div className="task-editor">
                                    <input type="text" placeholder='Task name' id='task-name' />
                                    <input type="text" placeholder='Description' id='task-desc' />
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