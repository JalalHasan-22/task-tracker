import { useState, useContext } from 'react';
import { v4 } from 'uuid';
import TasksContext from '../context/TasksContext';

function AddTaskForm() {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const { addTask } = useContext(TasksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: v4(),
      text: text.trim(),
      day: day.length ? day.trim() : 'Sunday at 8:00 AM',
      reminder,
    };
    addTask(newTask);
    setText('');
    setDay('');
  };

  return (
    <form className={`add-form`} onSubmit={handleSubmit}>
      <div className='form-control'>
        <label htmlFor='name'>Task</label>
        <input
          type='text'
          value={text}
          placeholder='Add a Task'
          id='name'
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='day'>Day</label>
        <input
          type='text'
          id='day'
          value={day}
          placeholder='Sunday at 8:00 AM'
          onChange={(e) => {
            setDay(e.target.value);
          }}
        />
      </div>
      <div className='form-control form-control-check'>
        <label htmlFor='reminder'>Set Reminder</label>
        <input
          type='checkbox'
          id='reminder'
          value={reminder}
          onChange={(e) => setReminder(!reminder)}
        />
      </div>
      <button
        className={`btn btn-block ${text.length <= 6 && 'disabled'}`}
        type='submit'
      >
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;
