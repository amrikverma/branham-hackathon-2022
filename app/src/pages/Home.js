import '.././App.css';
import homepagepic from './homepagepic.png';

const Home = () => {
    return (
    <div>
        <header className ="homecolor" style={{padding: "128px 16px"}}>
            <h1 style={{color: "white"}}>YAMUCATION</h1>
            <img src={homepagepic} alt="homework pic" />
        </header>

        <p>
        Yamucation is a collaborative effort of 3 high school students to help you excell in school.   <br></br>
        We have all the resources, which will help you succeed and be on your way to your dream college!
        </p>

        <hr></hr>
        <p>
        Our website has different tools you can use. <br></br>
        Our Whiteboard tab is a place where you can draw or write your different ideas. This can also act as a discrete workspace! <br></br>
        Our Calculator tab is a simple tool you can use to help you with your math homework. We have a geometric, numerical, and graphing calculator. 

        </p>

    </div>
    )
  };
  
  export default Home;