import "../styles/Card.css"

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <img src={props.img} alt={`Foto de ${props.title}`} />
            <span className="card--status">{parseInt(props.spots) > 0 ? "LIVE" : "SOLD OUT"}</span>
            <div className="card--details--rating">
                <img src='https://img.icons8.com/ios-glyphs/344/fa314a/star--v1.png' className="star" />
                <span>{props.rating} ({props.numReviews}) · {props.location}</span>
            </div>
            <p className="card--details--title">
                {props.title}</p>
            <p className="card--price"><strong>From ${props.price}</strong>/ person</p>

        </div>
    )
}