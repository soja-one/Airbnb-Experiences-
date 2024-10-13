import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./components/data"

function App() {
   const cardData = data.map(info => {
    return <Card 
    key = {info.id}
    rating = {info.stats.rating} 
    location = {info.location} 
    price = {info.price}  
    title= {info.title} 
    reviewCount = {info.stats.reviewCount} 
    img = {info.coverImg}
    openSpots = {info.openSpots} />

   }
     
   )
   

  return (
    <>
    <Navbar/>
    <Hero/>
     
     <div className="card--list">
     {cardData}
     </div>
    
    
    
    </>
    
  )
}

export default App



{/* //return <Jokes setup = {joke.setup} punchline = {joke.punchline} /> */}


{/* <Card
    rating= "5.0"
    reviewCount = {6} 
    country = "USA"
    title = "Life Lessons with Katie Zaferes"
    price = {136}
    /> */}