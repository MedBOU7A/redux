

import './App.css';
import Addtask from './compoment/Addtask';
import ListTask from './compoment/ListTask';
import Search from './compoment/Search';



function App() {
  return (
    <div className="App">
     <Addtask/>
     <ListTask />
     <Search />
    </div>
  );
}

export default App;
