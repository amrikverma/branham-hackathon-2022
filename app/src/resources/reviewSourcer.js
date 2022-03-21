import '.././App.css';
import CreateReview from "./CreateReview"
import { Outlet, Link } from "react-router-dom";

const ReviewSourcer = ({ reviews }) => {
    return (
    <div>
    <button className="go_to_create_review_button"><Link to="/makereview">Make a review</Link></button>
      <div style={{marginLeft:"30%"}}>
        {reviews.map(review => (
            <div className="REVIEW_boxContainer" key={review.id} >
                <strong><h2 className="REVIEW_titleStyle">{ review.course }</h2></strong>
                <p className="REVIEW_captionStyle">Written by { review.author } for students at { review.school }</p>
                <p className="REVIEW_contentStyle">{ review.body }</p>
            </div>
            ))}
        </div>
      </div>
    );
  }
   
  export default ReviewSourcer;