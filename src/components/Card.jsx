import zaferes from "../images/zaferes.png"
import star from "../images/star.png"

export default function Card() {
    return(
        <div className="card">
            <img className="card--img" src={zaferes} alt="katie zaferes image"></img>
            <div className="rating">
                <img className="card--star" src={star} alt="star" />
                <span>5.0</span>
                <span className="grey">(6)</span>
                <span className="grey">USA</span>

            </div>

            <p>Life lessons with Katie Zaferes</p>
            <p><span className="card--price"> From $136 </span>/ person</p>

        </div>
    )
}