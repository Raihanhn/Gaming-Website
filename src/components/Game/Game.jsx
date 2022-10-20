import React, { useState } from 'react'
import Categories from './Categories'

const Game = () => {
      
    const [data, setData] = useState(Categories);
    const  filterResult = (catItem) =>{
        const result=Categories.filter((curData) =>{
            return curData.category===catItem;
        });
        setData(result);

    }

  return (
    <div className="games" id="games">
        <h2>Popular Games</h2>
        <ul>
            <li className="list"  onClick={() => setData(Categories)}>All</li>
            <li className="list" onClick={() => filterResult('pc')}>Pc games</li>
            <li className="list"  onClick={() => filterResult('mobile')}>Mobile games</li>
        </ul>
        
        <div className="cardBx">        
          {data.map((values) =>{
                const {id, title, price, image} = values;
                return (
                    <>
                        <div className="card" key={id}>
                           <img src={image} alt="" />
                            <div className="content">
                               <h4>{title}</h4>
                                <div className="progress-line"><span></span></div>
                                   <div className="info">
                                   <p>Pricing <br/> <span>${price}</span></p>
                                   <a href="#">Play Now</a>
                                </div>
                            </div>
                        </div>  
                    </>
                )
            })}

        </div>
     </div>
        
    
  )
}

export default Game