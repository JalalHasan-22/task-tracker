import Button from '../shared/Button';
import { useContext } from 'react';
import TasksContext from '../context/TasksContext';
import { useLocation } from 'react-router-dom';

function Header({ title }) {
  const { showForm, setShowForm } = useContext(TasksContext);
  const location = useLocation();
  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={`${!showForm ? 'green' : 'red'}`}
          text={`${!showForm ? 'Add' : 'Close'}`}
          onClick={() => setShowForm(!showForm)}
        />
      )}
    </header>
  );
}

Header.defaultProps = {
  title: 'Tasks Tracker',
};
export default Header;
