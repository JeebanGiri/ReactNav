import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
    {/* For Navbar components */} 
    <Navbar title="Logo" About="Our Page"/> 

    {/* For Textform component  */}
    <div className='container my-5'>
    <Textform heading="Enter some text to Manipulate"/>
    {/* <p id='input'></p> */}
    </div>    
    <h1>Learn react</h1>
    </> 
  );
}

export default App;
