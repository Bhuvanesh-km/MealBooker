export const stars = () => {
  return <span className="star">&#9733;</span>;
};

const ReviewCard = ({ data }) => {
  return (
    <div className="review-card">
      <div className="logo-customer">
        <img src={data.imageSrc} alt={data.altName} className="circle-logo" />
      </div>
      <h3>{data.name}</h3>
      <p className="review-content">{data.review}</p>
      <div className="rating">
        {/* <stars /> */}
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
      </div>
    </div>
  );
};

export default ReviewCard;
