const JournalCard = ({
    title,
    location,
    date,
    imgUrl,
    description,
    mapLink,
}) => {
    return (
        <div className="journal-card">
            <img src={imgUrl} alt={title} className="journal-img" />
            <div className="journal-info">
                <p className="info-location">
                    <span>{location}</span>
                    <a href={mapLink ? mapLink : "#"}>View on Google Maps</a>
                </p>
                <h1 className="info-header">{title}</h1>
                <p className="info-date">
                    <strong>{date}</strong>
                </p>
                <p className="info-text">{description}</p>
            </div>
        </div>
    );
};

export default JournalCard;
