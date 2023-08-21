import React,{useState,useEffect} from 'react'
import './Tour.css'
const Tour = ({tour,onRemove}) => {
  const {id,name,info,image,price} = tour;
  const [readmore,setReadMore] = useState(false);
  const [lists,setList] = useState([tour]);
  return (
    <div key={id} className='tour_section'>
      <img src={image} alt={name}/>
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h3 className='tour-name'>{name}</h3>
        <p className='tour-para'>{
        readmore?info: `${info.substring(0, 200)}...`
        }<a className='show' onClick={() => setReadMore(!readmore)}>{readmore?"show Less" : "Read More"}</a></p>
        
      </div>
      <button className='not-interested' onClick={() => onRemove(id)}>Not Interested</button>
    </div>
  )
}

export default Tour