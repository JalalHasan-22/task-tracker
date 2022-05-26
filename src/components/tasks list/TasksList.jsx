import { useContext } from 'react';
import TasksContext from '../context/TasksContext';
import Task from '../task/Task';
import Spinner from '../shared/Spinner';

function TasksList() {
  const { tasks, isLoading } = useContext(TasksContext);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : tasks.length ? (
        tasks.map((item) => {
          return <Task key={item.id} task={item} />;
        })
      ) : (
        'No tasks have been added yet!'
      )}
    </>
  );
}

export default TasksList;
