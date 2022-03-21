import '.././App.css';
import Container from './container/Container';

const Whiteboard = () => {

    return (
    <div>
        <header className ="whiteboardcolor" style={{color: "padding: 128px 16px"}}>
               <h1 style={{color: "black"}}><center>Whiteboard</center></h1>
        </header>

        <Container/>
    </div>
    );
  }
  
  export default Whiteboard;