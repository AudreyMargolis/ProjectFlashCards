import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { createDeck, listDecks } from "../../utils/api"

export default function CreateDeckPage () {
    const [deck, setDeck] = useState({});
    
    const history = useHistory();

    useEffect(()=>{
        async function getData() {
            const response = await listDecks()
            setDeck({deckid: response.length + 1})
        }
        getData();
    },[])

    const handleChange = (event) => {
        setDeck({...deck, [event.target.name] : event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        createDeck(deck).then(()=> {
            history.push("/")
        }).catch((err)=>console.log(err))
    }

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
                </ol>
            </nav>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <h1>Create Deck</h1>
                    <div className="form-group">
                        <label>Name</label>
                            <input className="form-control w-75" name="name" placeholder="Deck Name" type="text" onChange={handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                            <textarea  className="form-control w-75" name="description" placeholder="" onChange={handleChange} required/>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}