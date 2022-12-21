import './App.css';
import clear from './weather-icons/clear.svg'
import mostlyCloudy from './weather-icons/mostlycloudy.svg'
function App() {
  return (
    <>
    <div className='page'>
    <div className='main'>
    <header className='headerdiv'>
      <div className="search-container">
      <form>
        <label for='searchlabel' className='london'>london</label>
        <input id='searchlabel' type="text" name="search" />
        <button className='btn' type="submit">FIND WEATHER</button>
      </form>
      </div>
    </header>
    <div  className='middlecolumn'>
    <img src={mostlyCloudy} alt="clear"/>
      <p className='strongwhite'>overcast clouds</p>
      <div className='thirdrow'>
        <p className='strong'>Temperature</p>
        <p>10 to 11 *C</p>
      </div>
      <div className='fourthrow'>
        <p className='strong'>Humidity</p>
        <p>78%</p>
        <p className='strong'>Pressure</p>
        <p>1008.48</p>
      </div>
    </div>
  <div className='dailyweather'>
    <div className='firstrow'>
      <p>03:00</p>  
      <p>06:00</p>  
      <p>9:00</p>  
      <p>12:00 </p>  
      <p>15:00 </p>
      <p>18:00 </p>  
      <p>21:00</p>
    </div>
    <div className='picrow'>
    <img src={mostlyCloudy} alt="clear"/>
    <img src={mostlyCloudy} alt="clear"/>
      <img src={clear} alt="clear"/>
      <img src={clear} alt="clear"/>
      <img src={clear} alt="clear"/>
      <img src={clear} alt="clear"/>
      <img src={mostlyCloudy} alt="clear"/>
    </div>
    <div className='temp'>
      <p>8*c</p>
      <p>9*c</p>
      <p>14*C</p>
      <p>17*c</p>
      <p>18*C</p>
      <p>16*C</p>
      <p>13*C</p>
    </div>
  </div>  
</div>
    </div>
 
  </>
  );
}

export default App;
