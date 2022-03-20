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
  }

  return (
    <div className="REVIEW_createContainer">
      <h2>Write a new review!</h2>
      <form onSubmit={handleSubmit}>
        <label>Course Name:</label>
        <input 
          type="text" 
          required 
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <input 
            type="text" 
            required 
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
        />
        <label>School name:</label>
        <input 
            type="text" 
            required 
            value={school}
            onChange={(e) => setSchool(e.target.value)}
        />
        <button>Add Review</button>
      </form>
    </div>
  );
}
 
export default CreateReview;