import './index.css'
import React, {useState,useEffect} from 'react'
import Tour from './Tour'

const TourList = ({tours}) => {
  const [filteredTours, setFilteredTours] = useState(tours);
  const handleClick = (id) => {
    const updatedTours = filteredTours.filter((tour) => tour.id !== id);
    setFilteredTours(updatedTours);
  };
  const handleRefresh = ()=>{
    window.location.reload();
  }
  return (
    <main>
        <section>
          {filteredTours.length==0?
          <div>
            <h2 className='heading'>No Tours Left</h2>
            <button className='refresh-btn' onClick={handleRefresh}>Refresh</button>
            </div>:<div>
            <div className='title'>
                <h2 className='heading'>Our Tours</h2>
                <div className='heading-underline'></div>
            </div>
            <div className='list'>
            {
              filteredTours.map((tour)=>{
                return (
                <Tour key={tour.id} tour={tour} onRemove={handleClick}/> 
                )
              })
            }  
            </div></div>
        }
        </section>
    </main>
    
  )
}

export default TourList