import logo from './logo.svg';
import './App.css';
import Search from './Components/Search';
import MovieDetails from './Components/MovieDetails';

function App() {
  return (
    <div style={{backgroundColor:"black",height:"100%",width:"100vw",display:"flex",justifyContent:"center"}}>
      <Search />
      {/* <MovieDetails/> */}
    </div>
  );
}

export default App;
