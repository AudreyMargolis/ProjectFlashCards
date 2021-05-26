import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { deleteDeck, listDecks, readDeck, updateDeck } from "../../utils/api"

import DeckDisplay from "../DeckDisplay"

export default function HomePage () {
    const [decks, setDecks] = useState([])

    const history = useHistory();
    
    
    useEffect (()=>{
        async function getData() {
            const response = await listDecks();
            setDecks(response);
        }
        getData();
    }, [])


    const handleDelete = (id) => {
        const doesConfirm = window.confirm("Are you sure you want to delete?");
        if(!doesConfirm) return;

        deleteDeck(id).then(()=>listDecks()).then((response)=>setDecks(response));
    }

    return (
        <div>
            
            <button
                className="btn btn-secondary mb-2"
                onClick={()=> history.push(`/decks/new`)}
            ><span className="oi oi-plus"></span> Create Deck</button>
            <div>
                {decks.map((deck)=>{
                    return (<DeckDisplay key={deck.id} deck={deck} edit={false} handleDelete={handleDelete}/>)
                })}
            </div>
        </div>
    )
}