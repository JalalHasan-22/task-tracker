import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import TasksList from './components/tasks list/TasksList';
import AddTaskForm from './components/add form/AddTaskForm';
import TasksContext from './components/context/TasksContext';
import Footer from './components/footer/Footer';
import About from './components/pages/About';

function App() {
  const { showForm } = useContext(TasksContext);
  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                {showForm && <AddTaskForm />}
                <TasksList />
                <Footer />
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
