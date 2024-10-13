
import star from "../images/star.png"

export default function Card(props) {
let badgeText
if (props.openSpots === 0){
    badgeText = "SOLD OUT"
} else if (props.location === "Online"){
    badgeText = "ONLINE"
}

    return(
        
            <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--img" src={props.img} alt="katie zaferes image"></img>
            <div className="rating">
                <img className="card--star" src={star} alt="star" />
                <span> {props.rating}</span>
                <span className="grey">({props.reviewCount})</span>
                <span className="grey">.{props.location}</span>

            </div>
            <p>{props.title}</p>
            <p><span className="card--price"> From ${props.price} </span>/ person</p>

        </div>
        
    )
}