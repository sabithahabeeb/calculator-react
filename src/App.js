import { useState } from 'react';
import './App.css';
import './calc.css'

function App() {
  const [values,setValues]= useState('')
 const handleequal = (e)=>{
  try{
    setValues(eval(values))
  }catch{
    setValues("ERROR")
  }

 }
  return (
    < >
      <div id='container'>
      <h1 style={{textAlign:'center',fontSize:'30px',padding:'30px',fontWeight:'700'}}>CALCULATOR</h1>

        <div id="calculator">
         <form>
            <div className='display'>
              <input type="utton " id='result' value={values} />
            </div>
            <div>
              <button type="button"  value="AC" className="btn" onClick={(e)=>setValues('')}>AC</button>
              <button type="button"  value="DE" className="btn" onClick={(e)=>setValues(values.slice(0,-1))}>DE</button>
              <button type="button" onClick={(e)=>setValues(values + e.target.value)} value="." className="btn">.</button>
              <button type="button" onClick={(e)=>setValues(values + e.target.value)} value="/" className="btn">/</button>
            </div>
            <div>
              <button type="button" onClick={(e)=>setValues(values + e.target.value)} value="7" className="btn">7</button>
              <button type="button" onClick={(e)=>setValues(values + e.target.value)} value="8" className="btn">8</button>
              <button type="button" onClick={(e)=>setValues(values + e.target.value)} value="9" className="btn">9</button>
              <button type="button" onClick={(e)=>setValues(values + e.target.value)} value="*" className="btn">*</button>
            </div>
            <div>
              <button type="button" onClick={(e)=>setValues(values + e.target.value)} value="4" className="btn">4</button>
              <button type="button" onClick={(e)=>setValues(values + e.target.value)} value="5" className="btn">5</button>
              <button type="button" onClick={(e)=>setValues(values + e.target.value)} value="6" className="btn">6</button>
              <button type="button" onClick={(e)=>setValues(values + e.target.value)} value="-" className="btn">-</button>
            </div>
            <div>
              <button type="button" onClick={(e)=>setValues(values + e.target.value)} value="1" className="btn">1</button>
              <button type="button" onClick={(e)=>setValues(values + e.target.value)} value="2" className="btn">2</button>
              <button type="button" onClick={(e)=>setValues(values + e.target.value)} value="3" className="btn">3</button>
              <button type="button" onClick={(e)=>setValues(values + e.target.value)} value="+" className="btn">+</button>
            </div>
            <div>
                          <button type="button" onClick={(e)=>setValues(values + e.target.value)} value="00" className="btn">00</button>
                          <button type="button" onClick={(e)=>setValues(values + e.target.value)} value="0" className="btn">0</button>
                          <button type="button" id="equal" className="btn" onClick={(e)=>handleequal(e)}>=</button>
                      </div>
         </form>
        </div>

      </div>
    </>
  );
}

export default App;
// onClick={(e)=>setValues(eval(values))}