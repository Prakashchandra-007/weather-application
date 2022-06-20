import { useState} from 'react';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import Card from './components/Card'
  const url="https://api.openweathermap.org/data/2.5/weather?";
  const id ="d4f1a5d22324b092bb66adbbfc86ccc8";


function App() {
  const [obj,setObj] = useState();

  async function FetchData(city){
    const response = await fetch(`${url}q=${city}&appid=${id}`);
    const data = await response.json();
    // console.log(data);
    setObj(data);  
   
  }
  //  console.log(obj+" out side");

  return (
    <div className="App">
      <Header />
      <div className="container">
        <SearchBox searchFunc={FetchData}/>
        
      {obj ? 
       <Card data={obj} />:null}
      </div>
      
      
    </div>
  );
}

export default App;
