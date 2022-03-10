import katia from "../images/katie-zaferes.png"
import star from "../images/star.png"
import "../styles/Card.css"

export default function Card() {
    return (
        <div className="card">
            <img src={katia} />
            <span className="card--status">SOLD OUT</span>
            <div className="card--details">
                <div className="card--details--rating">
                    <img src={star} className="star" />
                    <span>5.0 (6)·USA</span>
                </div>
                <p className="card--details--desc">
                    Life lessons with Katie Zaferes<br />
                    <strong>From $136</strong>/ person</p>
            </div>
        </div>
    )
}