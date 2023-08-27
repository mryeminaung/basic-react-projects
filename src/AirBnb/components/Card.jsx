import star from "/assets/airbnb/images/star.png";

const Card = ({ coverImg, location, price, stats, title, openSpots }) => {

    let badgeText = openSpots === 0 ? "SOLD OUT" : location === "Online" ? "ONLINE" : "";

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`/assets/airbnb/images/${coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{stats.rating}</span>
                <span className="gray">({stats.reviewCount}) • </span>
                <span className="gray">{location}</span>
            </div>
            <p className="card--title">{title}</p>
            <p className="card--price"><span className="bold">From ${price}</span> / person</p>
        </div>
    );
};

export default Card;
