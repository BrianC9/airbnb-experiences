import './App.css';
import Header from './components/Header';
import photo from './images/photo-grid.png';
import Card from './components/Card';

function App() {
  return (
    <div className='app' >
      <Header />
      <img className='photo' src={photo} />
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
      <Card />
    </div>
  );
}

export default App;
