import { useState } from "react";

const CreateReview = () => {
  const [course, setCourse] = useState('');
  const [body, setBody] = useState('');
  const [school, setSchool]=useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = { course, body, author, school };

    console.log(review);

    fetch('http://localhost:8080/allReviews/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review)
    }).then(() => {
      history.go(-1)
    })
  }
  return (
    <div className="CREATEREVIEW_createContainer">
      <h2>Write a new review!</h2>
      <form onSubmit={handleSubmit}>
        <label>Course Name:</label>
        <input 
          type="text" 
          required 
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        /><br></br>
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea><br></br>
        <label>Blog author:</label>
        <input 
            type="text" 
            required 
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
        /><br></br>
        <label>School name:</label>
        <input 
            type="text" 
            required 
            value={school}
            onChange={(e) => setSchool(e.target.value)}
        /><br></br>
        <button>Add Review</button>
      </form>
    </div>
  );
}
 
export default CreateReview;