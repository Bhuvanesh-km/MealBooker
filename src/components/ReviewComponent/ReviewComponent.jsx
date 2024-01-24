import { ReviewsData } from "../../data/ReviewsData";
import "../styles/ReviewComponent.css";
import ReviewCard from "./ReviewCard";

const ReviewComponent = () => {
  return (
    <section className="Reviews" id="Reviews">
      <h2>Reviews</h2>
      <div className="container-review">
        {ReviewsData.map((data) => (
          <ReviewCard data={data} />
        ))}
      </div>
    </section>
  );
};

export default ReviewComponent;
