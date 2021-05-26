import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import { deleteDeck, readDeck } from "../../utils/api/index"

import DeckDisplay from "../DeckDisplay";
import DeckCardDisplay from "../DeckCardDisplay";

export default function DeckPage () {
    const params = useParams();
    const history = useHistory();
    const [deck, setDeck] = useState({});
    const [cards, setCards] = useState([]);

    

    useEffect (() => {
        async function getData() {
            const response = await readDeck(params.deckId);
            setDeck(response);
            //response.cards.pop();
            setCards(response.cards);

        }
        getData();
    },[])

    const handleDelete = (id) => {
        const doesConfirm = window.confirm("Are you sure you want to delete?");
        if(!doesConfirm) return;

        deleteDeck(id).then(()=> history.push(`/`))
    }

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{deck?.name}</li>
                </ol>
            </nav>
            <DeckDisplay key={deck.id} deck={deck} edit={true} handleDelete={handleDelete} />
            <h2>Cards</h2>
            {cards.map((card)=>{
                return <DeckCardDisplay key={card.id} card={card} />
            })}
        </div>
    )
}