import '.././App.css';
import homepagepic from './homepagepic.png';

const Home = () => {
    return (
    <div>
        <header className ="homecolor" style={{padding: "5px 16px"}}>
            <h1 style={{color: "white"}, {fontSize: "50px"}}>YAMUCATION</h1>
            <img src={homepagepic} height="500px" alt="homework pic" />
        </header>

        <div className = "BRO_WHAT_IS_THIS" style={{fontSize: "20px"}}>
            Yamucation is a collaborative effort of 3 high school students (Amrik, Marko, and Yash) to help you excell in school. We have all the resources, which will help you succeed and be on your way to your dream college! <br></br>
            Our website has different tools you can use: 
            <h2><u>Whiteboard</u></h2> Our Whiteboard tab is a place where you can draw or write your different ideas. This can also act as a discrete workspace! 
            <h2><u>Calculator</u></h2> Our Calculator tab is a simple tool you can use to help you with your math homework. We have both numerical and graphing calculators.
            <h2><u>School Review</u></h2> Our School Review has information about college courses and schools to help students discover what the best courses and schools for them are. 
        </div>

    </div>
    )
  };
  
  export default Home;