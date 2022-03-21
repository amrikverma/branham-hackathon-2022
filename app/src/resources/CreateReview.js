import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateReview = () => {
  const [course, setCourse] = useState('');
  const [body, setBody] = useState('');
  const [school, setSchool]=useState('');
  const [author, setAuthor] = useState('');
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = { course, body, author, school };

    console.log(review);

    fetch('http://localhost:8080/allReviews/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review)
    }).then(() => {
      navigate('/schoolreviews')
    })
  }
  return (
    <div className="CREATEREVIEW_createContainer">
      <div className="everythin_else_for_this">
      <h2>Write a new review!</h2>
      <form onSubmit={handleSubmit}>
        <label>Course Name:</label>
        <input 
          type="text" 
          required 
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        /><br></br>
        <label>Your Review:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea><br></br>
        <label>Author:</label>
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
        <button className="hehe">Add Review</button>
      </form>
      </div>
    </div>
  );
}
 
export default CreateReview;