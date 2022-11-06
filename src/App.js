import './App.css';
import image from './list1.jpg';
import { List } from './List'

function App() {
  return (
    <div className="app">
      <div className='container'>
        <img src={image} alt="list" width="300px" />
      </div>
      <div className='container'>
        <h2>TO-DO-LIST</h2>
      </div>
      <List />
    </div>
  );
}

export default App;
