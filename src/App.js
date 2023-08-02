
import Display from "./Components/Display";
import SongInfo from "./Components/SongInfo";
function App() {
  return (
    <div className="App" style={{display:"flex",width: "60%", justifyContent:"space-between"}}> 
        <Display />
        <br/>
        <SongInfo />
    </div>
  );
}

export default App;
