import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        
        onAdd({text, day, time, reminder})

        setText('')
        setDay('')
        setTime('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input className='textInput' type='text' placeholder='Add task title' value={text} onChange={(e) => setText(e.target.value)} required/>
            </div>
            <div className='form-control'>
                <label>Day</label>
                <input type='date' value={day} default={Date.now()} onChange={(e) => setDay(e.target.value)} required pattern="\d{4}-\d{2}-\d{2}" required/>
            </div>
            <div className='form-control'>
                <label>Time</label>
                <input type='time' value={time} onChange={(e) => setTime(e.target.value)} required/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input className='btn btn-block' type='submit' value='Save Task' />
        </form>
    )
}

export default AddTask
