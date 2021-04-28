import "./styles/styles.css";
import React from "react";
import HeaderComp from "./components/header";
import FooterComp from "./components/footer";
import AddNoteForm from "./components/addNote";

//Css
import "./styles/styles.css";

function App() {
  return (
    <div>
      <HeaderComp />
      <AddNoteForm />
      <FooterComp />
    </div>
  );
}

export default App;
