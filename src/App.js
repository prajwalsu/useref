import logo from './logo.svg';
import './App.css';
import UserefComponent from './componenets/UserefComponent';
import ComponentOne from './componenets/ComponentOne';
import ComponentTwo from './componenets/ComponentTwo';

function App() {
  return (
    <div className="App">
      {/* <UserefComponent/> */}
      <ComponentOne/>
      <ComponentTwo/>

    </div>
  );
}

export default App;

// if function taking function as an argument it is higher order argument
