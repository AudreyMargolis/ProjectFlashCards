import React, {useEffect, useState } from 'react'
import { useParams, useHistory } from "react-router-dom";
import { readDeck } from '../../utils/api';

import StudyCardDisplay from "../StudyCardDisplay"

export default function StudyPage () {
    const [deck, setDeck] = useState({});
    const [cards, setCards] = useState([]);

    const params = useParams();
    const history = useHistory();

    useEffect(()=>{
        async function getDeck(){
            const response = await readDeck(params.deckId);
            setDeck(response);
            setCards(response.cards);
        }
        getDeck();
    },[])

    if(cards.length <= 2)
        return (<div>
                    <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
                    <li className="breadcrumb-item" aria-current="page"><a href={`/decks/${deck?.id}`}>{deck?.name}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Study</li>
                </ol>
            </nav>
            <h1>Study: {deck?.name}</h1>
                    <h3>Not enough Cards</h3>
                    <p>You need at least 3 cards to study. There are 2 cards in this deck.</p>
                    <button
                        className="btn btn-primary"
                        onClick={()=>history.push(`/decks/${deck?.id}/`)}>Add Cards</button>
                </div>)

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
                    <li className="breadcrumb-item" aria-current="page"><a href={`/decks/${deck?.id}`}>{deck?.name}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Study</li>
                </ol>
            </nav>
            <h1>Study: {deck?.name}</h1>
            <StudyCardDisplay cards={cards} />
        </div>
    )
}