import "./App.css";
import Employees from "./components/Employees";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Disney Super Heroes</Navbar.Brand>
        </Container>
      </Navbar>
      <Employees />
    </div>
  );
}

export default App;
