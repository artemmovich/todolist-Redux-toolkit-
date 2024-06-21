import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <Provider store={store}>
    <div className="app">
      
     <TodoList/>
    </div>
    </Provider>
  );
}

export default App;
