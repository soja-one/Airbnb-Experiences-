import collage from "../images/collage.png"

export default function Hero(){
    return(
        <div className="hero">
            <img className="hero--img" src={collage} alt="collage image"></img>
            <div className="hero--text">
            <h2 className="hero--header">Online Experiences</h2>
            <p className="hero--p">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
            </div>
            
        </div>
    )
}