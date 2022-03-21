import '.././App.css';
import Container from './container/Container';

const Whiteboard = () => {

    return (
    <div>
        <header style={{padding: "5px 16px"}}>
            <h1 style={{color: "white"}, {fontSize: "30px"}}><center>Whiteboard</center></h1>
        </header>

        <Container/>
    </div>
    );
  }
  
  export default Whiteboard;