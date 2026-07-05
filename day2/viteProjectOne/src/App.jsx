import "./App.css";

import Header from "./Header";
import Navbar from "./Navbar";
import Story from "./Story";
import Cards from "./Cards";
import Form from "./Form";
import Table from "./Table";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <h1>Welcome To React JS</h1>

      <Header />
      <Navbar />
      <Story />
      <Cards />
      <Form />
      <Table />
      <Footer />
    </div>
  );
}

export default App;