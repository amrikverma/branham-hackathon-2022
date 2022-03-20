import '.././App.css';


const ReviewSourcer = ({ reviews }) => {
    return (
      <div className="blog-list">
        {reviews.map(review => (
          <div className="REVIEW_boxContainer" key={review.id} >
            <h2 className="REVIEW_titleStyle">{ review.title }</h2>
            <p className="REVIEW_captionStyle">Written by { review.author } for students at { review.schoolName }</p>
            <p className="REVIEW_contentStyle">{ review.body }</p>
          </div>
        ))}
      </div>
    );
  }
   
  export default ReviewSourcer;