import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from "react-router-dom"
import { deleteDeck, listCards } from "../utils/api"

export default function DeckDisplay ({ deck, edit, handleDelete }) {

    const history = useHistory();
    const { url } = useRouteMatch();
    

    return (
        <div className="border rounded p-3">
            <div className="deckDisplayTitle">
                <h2>{deck.name}</h2>
                <p>{deck.cards?.length} cards</p>
            </div>
                <p>{deck.description}</p>
            <div className="deckDisplayToolbar">
                {edit ? (<>
                    <button
                        className="btn btn-secondary mr-2"
                        onClick={()=>(history.push(`${url}/edit`))}
                    >Edit</button>
                    <button 
                        className="btn btn-primary mr-2"
                        onClick={()=>(history.push(`/decks/${deck.id}/cards/new`))}
                    ><span className="oi oi-plus" /> Add Card
                    </button>
                </>):
                    <button
                        className="btn btn-secondary mr-2"
                        onClick={()=>(history.push(`/decks/${deck.id}`))}
                    >View</button>
                }
                <button
                    className="btn btn-primary mr-2"
                    onClick={()=>(history.push(`/decks/${deck.id}/study`))}
                >Study</button>
                <button
                    className="btn btn-danger"
                    onClick={()=>handleDelete(deck.id)}
                ><span className="oi oi-trash" /></button>
            </div>
        </div>
    )
}