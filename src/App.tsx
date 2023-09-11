
import './stylesheets/App.css';
import logo from './assets/js.png';

import { TodoMain } from './pages/TodoMain';
import { TaskProvider } from './TasksContext';
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
        <TodoMain />
      </TaskProvider>
    </div>
  );
}

export default App;
