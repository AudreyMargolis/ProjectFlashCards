import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { createCard, readDeck } from "../../utils/api";

export default function CreateCardPage() {
    const params = useParams();
    const [deck, setDeck] = useState({})
    const [card, setCard] = useState({front: "", back:"", deckId: params.deckId});
    const history = useHistory();
    
    useEffect(()=>{
        async function getData () {
            const response = await readDeck(params.deckId);
            setDeck(response);
        }
        getData();
    },[])
    const changeFront = (e) => {
        e.preventDefault();
        setCard({...card, front: e.target.value})
    }
    const changeBack = (e) => {
        e.preventDefault();
        setCard({...card, back: e.target.value})
    }
    const handleSubmit= () => {
        createCard(params.deckId, card);
        history.push(`/decks/${params.deckId}`)
    }

    return (
        <>  
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
                    <li className="breadcrumb-item" aria-current="page"><a href={`/decks/${deck.id}`}>{deck.name}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Add Card</li>
                </ol>
            </nav>
            <h2>{deck?.name}: Add Card</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Front:</label>
                        <textarea className="form-control w-75" defaultValue="Front side of Card" onChange={changeFront}/>
                </div>
                <div className="form-group">
                    <label>Back:</label>
                        <textarea  className="form-control w-75" defaultValue="Back side of Card" onChange={changeBack}/>
                </div>
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
        </>
    )
}