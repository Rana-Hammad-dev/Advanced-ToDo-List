import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import MainContainer from './component/MainContainer';
import NewTask from './component/NewTask';
import Filter from './component/Filter';

const App = () => {
  const [mode, setMode] = useState(true);
  const [Task, setTask] = useState([]);
  const [filter, setFilter] = useState({ category: "", priority: "" });


  const filteredTasks = Task.filter((task) => {
    const categoryMatch = filter.category ? task.catagory === filter.category : true;
    const priorityMatch = filter.priority ? task.priority === filter.priority : true;
    return categoryMatch && priorityMatch;
  });

  return (
    <div className={mode ? 'app' : 'app dark'}>
      <div className={mode ? 'container' : 'container cdark'}>
        <Navbar mode={mode} setMode={setMode} />
        <NewTask setTask={setTask} task={Task} />
        <Filter filter={filter} setfilter={setFilter} />
        <MainContainer
          mode={mode}
          task={filteredTasks}
          filter={filter}
          setTask={setTask}
        />
      </div>
    </div>
  );
};

export default App;
