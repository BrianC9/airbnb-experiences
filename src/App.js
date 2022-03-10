import './App.css';
import Header from './components/Header';
import photo from './images/photo-grid.png';
import Card from './components/Card';
import data from './data.js'

function App() {
  const cards = data.map((exp) => {
    return (
      <Card img={exp.coverImg} title={exp.title} spots={exp.openSpots} location={exp.location} rating={exp.stats.rating} numReviews={exp.stats.reviewCount} price={exp.price} />
    )
  })

  return (
    <div className='app' >
      <Header />
      <img className='photo' src={photo} />
      <h1>Online Experiences</h1>
      <p className='App--p'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
      <section className='app--experiences'>
        {cards}
      </section>
    </div>

  );
}

export default App;
