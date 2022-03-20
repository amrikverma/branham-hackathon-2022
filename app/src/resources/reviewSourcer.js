import '.././App.css';
import CreateReview from "./CreateReview"

const ReviewSourcer = ({ reviews }) => {
    return (
    <div>
    <CreateReview />
      <div style={{marginLeft:"33%"}}>
        {reviews.map(review => (
            <div className="REVIEW_boxContainer" key={review.id} >
                <strong><h2 className="REVIEW_titleStyle">{ review.title }</h2></strong>
                <p className="REVIEW_captionStyle">Written by { review.author } for students at { review.schoolName }</p>
                <p className="REVIEW_contentStyle">{ review.body }</p>
            </div>
            ))}
        </div>
      </div>
    );
  }
   
  export default ReviewSourcer;