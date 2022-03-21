import '.././App.css';
import homepagepic from './homepagepic.png';

const Home = () => {
    return (
    <div>
        <header className ="homecolor" style={{padding: "5px 16px"}}>
            <h1 style={{color: "white"}, {fontSize: "50px"}}>YAMUCATION</h1>
            <img src={homepagepic} height="500px" alt="homework pic" />
        </header>

        <div className = "colorContainer2" >
            Yamucation is a collaborative effort of 3 high school students to help you excell in school. We have all the resources, which will help you succeed and be on your way to your dream college! <br></br>
            Our website has different tools you can use: 
            <ul className = "colorContainer1">
                <li>
                    <h4>Whiteboard</h4> Our Whiteboard tab is a place where you can draw or write your different ideas. This can also act as a discrete workspace! 
                </li>
                <li>
                    <h4>Calculator</h4> Our Calculator tab is a simple tool you can use to help you with your math homework. We have both numerical and graphing calculators.
                </li>
                <li>
                    <h4>School Review</h4> Our School Review has information about college courses and AP class review to help students discover what the best course for them are. 
                </li>
               
            </ul>
          
        </div>

    </div>
    )
  };
  
  export default Home;