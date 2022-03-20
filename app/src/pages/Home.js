import '.././App.css';
import homepagepic from './homepagepic.png';

const Home = () => {
    return (
    <div>
        <header className ="homecolor" style={{padding: "128px 16px"}}>
            <h1 style={{color: "white"}}>Home</h1>
            <img src={homepagepic} alt="homework pic" />
        </header>
    </div>
    )
  };
  
  export default Home;