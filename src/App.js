import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Note from './note';
import CreateNote from './createnote';
import Footer from './footer';

function App() {
  const[additem,setadditem] = useState([]);

  const addnote = (note) => {
      setadditem((prev)=>{
        return [...prev,note];
      });
    }
  const ondelete = (id) =>{
    setadditem((olddata) =>
      olddata.filter((currentdata,indx) => {
        return indx!=id;
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <CreateNote passnote={addnote} />
      <div className="notegroup container my-5">
      <div className="row">
      {/* <Note /> */}
      {additem.map((val,index) => {
        return (<Note
        key={index}
        id={index}
        title={val.title}
        content={val.content} 
        deleteitem={ondelete}
        />);
      })}
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
