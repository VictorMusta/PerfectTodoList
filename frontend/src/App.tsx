
import './stylesheets/App.css';
import logo from './assets/js.png';

import { TodoList } from './pages/TodoList';
import { TaskProvider } from './TasksContext';
import { AddTaskForm } from './components/addTaskForm/addTaskForm';
function App() {


  return (
    <div className="App">
      <header className="App-header">
        <div className="Logo-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>My ReactJS TodoList!</h1>
        </div>
      </header>
      <TaskProvider>
        <AddTaskForm />
        <TodoList listId={1} />
        <TodoList listId={2} />
      </TaskProvider>
    </div>
  );
}

export default App;
