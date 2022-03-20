import { useState, useEffect } from 'react';


const schoolreviews = ()=> {
    const [reviews,updateReview] = useState(null);
    useEffect(()=>{
        fetch("http://localhost:8080/allReviews")
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            console.log(data)
            updateReview(data)
        })
    }, [])

    
    return (
        <div>
            <h1>Course Reviews!</h1>
            <p>Read reviews made by other students who are taking or taken the course which you have questions on!</p>

            <iframe src="https://www.google.com/maps/d/embed?mid=1r0NcKI21QnisjjXxcXwkz8fIZCI&ie=UTF8&msa=0&output=embed&ll=35.60992287806535%2C-88.54610372500002&z=4" title="MapOfCollege"></iframe>

            {/* this part here is gonna be the make a review */}


        </div>
    );
}
 
export default schoolreviews;