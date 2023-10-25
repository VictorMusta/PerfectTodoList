
import "./stylesheets/App.css";
import logo from "./assets/logo2.png";
import { TodoList } from "./pages/TodoList";
import { TaskProvider } from "./TasksContext";
import { AddTaskForm } from "./components/addTaskForm/addTaskForm";

function App() {

	return (
		<div className="App">
			<div className="TodoList">
				<header className="App-header">
					<div className="Logo-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1>My ReactJS TodoList!</h1>
					</div>
				</header>
				<TaskProvider>
					<AddTaskForm />
					<div className="ListOfTaskList">
						<TodoList listId={1} />
						<TodoList listId={2} />
					</div>
				</TaskProvider>
			</div>
		</div >
	);
}


export default App;
