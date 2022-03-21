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
            <h2 style={{textAlign:'center'}}>{ review.course }</h2>
            <p>Written by { review.author } for students at { review.schoolName }</p>
            <p>{ review.body }</p>
          </div>
        ))}
      </div>
    );
  }
   
  export default ReviewSourcer;