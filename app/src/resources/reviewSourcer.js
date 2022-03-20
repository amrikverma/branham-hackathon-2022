const ReviewSourcer = ({ reviews }) => {
    return (
      <div className="blog-list">
        {reviews.map(review => (
        //   <div className="blog-preview" key={blog.id} >
        <div key={review.id} >
            <h2>{ review.title }</h2>
            <p>Written by { review.author }</p>
          </div>
        ))}
      </div>
    );
  }
   
  export default ReviewSourcer;