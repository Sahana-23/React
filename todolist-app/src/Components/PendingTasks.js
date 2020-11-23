import { useState } from 'react'

const PendingTasks = ({ taskList, handleDeleteTask, handleAddCompletedTask }) => {
    const [toggleAccordian, setToggleAccordian] = useState(false)
    return (
        <div className='set'>
            <h3 className='task-header'>Pending Tasks
            <span className='accordion' onClick={() => setToggleAccordian(!toggleAccordian)}>
                    {toggleAccordian ? <i className="fas fa-angle-up"></i> : <i className="fas fa-angle-down"></i>}
                </span>
            </h3>
            {toggleAccordian ? <div className='section group'>
                {taskList.length !== null ? taskList.map((task, index) => <div className='section group task-list' key={index}>

                    <div className='col span_4_of_6'>
                        <span className='task-list-item'>{task.taskName ? task.taskName : '--No Name--'}</span>
                        <span className='task-list-item'>{task.priority}</span>
                        <span className='task-list-item'>{task.date ? task.date : '--'}</span>
                        <span className='task-list-item'>{task.time ? task.time : '--'}</span>
                    </div>

                    <div className='col span_2_of_6'>
                        <button onClick={() => handleAddCompletedTask(index)}><i class="fas fa-check"></i></button>

                        <button onClick={() => handleDeleteTask(index, 'pending')}><i class="far fa-trash-alt"></i></button>
                    </div>

                </div>) : 'No Pending Tasks'}
            </div> : null}

        </div>
    )
}

export default PendingTasks