import React, { useState } from 'react';

const CreateNote = (props) => {
    const [note,setNote]=useState({
        title:"",
        content:""
    });

    const inputevent = (event) =>{
        // const value = event.target.value;
        // const name = event.target.name;
        const {name,value} = event.target;

        setNote((prev) =>{
            return {
                ...prev,
                [name]:value,
            };
        });
    }

    const addevent = (event) =>{
        props.passnote(note);
        setNote({
            title:"",
            content:""
        }); 
        event.preventDefault();
    }

    return <>
        <div className="mainnote my-5">
            <form className="createnote">
            <div className="form-group">
                <input 
                type="text"
                name="title"
                onChange={inputevent} 
                value={note.title} 
                placeholder="Title" 
                autoComplete="off" 
                className="form-control"
                />
            </div>
            <div className="form-group">
                <textarea 
                rows="" column="" 
                name="content"
                onChange={inputevent} 
                value={note.content} 
                placeholder="Write a Note" 
                className="form-control" 
                ></textarea>
            </div>
            <div className="text-center">
            <button 
            type="submit" 
            onClick={addevent}
            className="btn button-small"
            >ADD NOTE
            </button>
            </div>
            </form>
        </div>
    </>
};

export default CreateNote;