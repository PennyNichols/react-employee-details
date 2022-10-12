import './App.css';
import EmployeeCard from './components/employeeCard/EmployeeCard';
import Header from './components/header/Header';
import data from './helpers/data';

function App() {
  return (
    <div className="App bg-dark">
      <Header title='Employee Details'/>
      <EmployeeCard data={data}/>
    </div>
  );
}

export default App;
