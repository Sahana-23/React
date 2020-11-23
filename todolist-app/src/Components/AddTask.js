import { useState } from 'react'

const AddTask = ({ handleAddNewTask }) => {

    const [addTaskToggle, setAddTaskToggle] = useState(true)
    const [taskName, setTaskName] = useState('')
    const [priority, setPriority] = useState('Normal')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    const handleAddTaskToggle = () => {
        if (addTaskToggle === false) {
            setAddTaskToggle(true)
            setTaskName('')
            setPriority('Normal')
            setDate('')
            setTime('')
        }

        setAddTaskToggle(!addTaskToggle)
    }

    const handleSubmitTask = () => {

        handleAddNewTask({ taskName, priority, date, time })
        setAddTaskToggle(true)
        setTaskName('')
        setPriority('Normal')
        setDate('')
        setTime('')

    }

    return (
        <>
            <button onClick={handleAddTaskToggle}>
                {addTaskToggle ? <><i className="fas fa-plus"></i> Add Task</> : <><i className="fas fa-times"></i> Cancel</>}</button>
            {addTaskToggle ? null :
                <div className='section group'>
                    <div className='col span_1_of_6'>
                        <label>Enter Task:</label>
                        <input type='text' placeholder="Add Task...." value={taskName} onChange={(e) => setTaskName(e.target.value)}></input>
                    </div>
                    <div className='col span_1_of_6'>
                        <label>Choose Priority:</label>
                        <select defaultValue='' onChange={(e) => setPriority(e.target.value)}>
                            <option value='' disabled hidden>Choose</option>
                            <option value='Low'>Low</option>
                            <option value='Normal'>Normal</option>
                            <option value='High'>High</option>
                        </select>
                    </div>
                    <div className='col span_2_of_6'>
                        <label>Select Date:</label>
                        <input type='date' value={date} onChange={(e) => setDate(e.target.value)}></input>
                    </div>
                    <div className='col span_1_of_6'>
                        <label>Select Time:</label>
                        <input type='time' value={time} onChange={(e) => setTime(e.target.value)}></input>
                    </div>

                    <div className='col span_1_of_6'>
                        <button onClick={handleSubmitTask}><i className="fas fa-plus"></i></button>
                    </div>



                </div>}
        </>
    )
}

export default AddTask