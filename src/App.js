import './App.css';
import CircularSliderBar from './components/CircularSliderBar';
import LevelIndicator from './components/LevelIndicator';

function App() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '150px'}}>
      <div className='card'>
        <CircularSliderBar />
      </div>
      <div style={{marginLeft: '50px'}}>
        <div className='card'>
          <LevelIndicator />
        </div>
      </div>
    </div>
  );
}
export default App;
