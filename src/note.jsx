import React from 'react';

const Note = (props) => {

    const deletenote = (event) =>{
        event.preventDefault();
        props.deleteitem(props.id);
    } 

    return <>
        <div className="note col-md-6 col-lg-4 d-flex">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    {/* <h5 className="card-title">{props.title}</h5> */}
                    <p className="card-text">{props.content}</p>
                    {/* <p className="card-text">{props.content}</p> */}
                    <button className="btn btn-success" onClick={deletenote} >DELETE</button>
                </div>
            </div>
        </div>
    </>
};

export default Note;