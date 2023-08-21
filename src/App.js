import React,{useState,useEffect} from "react";
import TourList from "./TourList";
import Tour from "./Tour";
import Loading from "./Loading";
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading,isLoading] = useState(true);
  const [error,setIsError] = useState(false);
  const [tours,setTour] = useState([]);
  useEffect(() =>{
    fetch(url)
    .then((resp)=>{
      if(resp.status>=200 && resp.status<=299){
        return resp.json();
      }
      else{
        isLoading(false)
        setIsError(true)
      }
    })
    .then((tour)=>{
      setTour(tour);
      isLoading(false);
    })
    .catch((error)=>setIsError(true))
  },[])
  if(loading){
    return <Loading/>
  }
  if(error){
    return(
      <h1>Error...</h1>
    )
  }
  return(<>
    <TourList tours={tours}/>
    </>
  )
}

export default App;
