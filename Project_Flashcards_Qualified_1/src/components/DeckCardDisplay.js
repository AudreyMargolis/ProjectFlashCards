import React from "react"
import { useHistory, useRouteMatch } from "react-router-dom"

export default function DeckCardDisplay ({ card }) {
    const history = useHistory();
    const { url } = useRouteMatch();
    return (
        <div className="border rounded p-3">
            <div className="row">
                <div className="col align-self-center">
                    <p>{card.front}</p>
                </div>
                <div className="col align-self-center">
                    <p>{card.back}</p>
                </div>
            </div>
            <div className="row justify-content-end">
                <button 
                    onClick={()=>history.push(`${url}/cards/${card.id}/edit`)}
                    className="btn btn-secondary"
                    >Edit
                </button>
                <button className="btn btn-danger ml-2">
                    <span className="oi oi-trash" />
                </button>
            </div>
        </div>
    )
}