import { useState } from 'react'

const CompletedTasks = ({ completedTaskList, handleDeleteTask, handleAddNewTask }) => {

    const [toggleAccordian, setToggleAccordian] = useState(false)

    const handleRecover = (index, task) => {
        handleDeleteTask(index, 'completed')
        handleAddNewTask(task)
    }

    return (
        <div className='set'>
            <h3 className='task-header'>Completed Tasks
            <span className='accordion' onClick={() => setToggleAccordian(!toggleAccordian)}>
                    {toggleAccordian ? <i className="fas fa-angle-up"></i> : <i className="fas fa-angle-down"></i>}
                </span>
            </h3>
            {toggleAccordian ? <div className='section group'>
                {completedTaskList !== null ? completedTaskList.map((task, index) => <div className='section group task-list' key={index}>

                    <div className='col span_4_of_6 '>
                        <span className='task-list-item completed'>{task.taskName ? task.taskName : '--No Name--'}</span>
                        <span className='task-list-item completed'>{task.priority}</span>
                        <span className='task-list-item completed'>{task.date ? task.date : '--'}</span>
                        <span className='task-list-item completed'>{task.time ? task.time : '--'}</span>
                    </div>
                    <div className='col span_2_of_6'>
                        <button onClick={() => handleRecover(index, task)}><i class="fas fa-redo"></i></button>
                        <button onClick={() => handleDeleteTask(index, 'completed')}><i class="far fa-trash-alt"></i></button>
                    </div>
                </div>) : 'No Tasks'}
            </div> : null}
        </div>
    )
}

export default CompletedTasks