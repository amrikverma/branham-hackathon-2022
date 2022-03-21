import '.././App.css';


const ReviewSourcer = ({ reviews }) => {
    return (
      <div className="blog-list">
        {reviews.map(review => (
          <div className="REVIEW_boxContainer" key={review.id} >
            <h2 style={{textAlign:'center'}}>{ review.title }</h2>
            <p>Written by { review.author } for students at { review.schoolName }</p>
            <p>{ review.body }</p>
          </div>
        ))}
      </div>
    );
  }
   
  export default ReviewSourcer;