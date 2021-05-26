import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { readCard, updateCard } from "../../utils/api";

export default function EditCardPage () {
    const [card, setCard] = useState({});
    const params = useParams();
    const history = useHistory();
    useEffect(()=>{
        async function getData(){
            const response = await readCard(params.cardId);
            setCard(response);
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
        updateCard(card);
        history.push(`/decks/${card.deckId}`)return (
            <button
                onClick={clickHandler}
                className="btn btn-primary"
                >Home</button>
        )
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Front:</label>
                        <textarea className="form-control" defaultValue={card.front}  onChange={changeFront}/>
                </div>
                <div className="form-group">
                    <label>Back:</label>
                        <textarea  className="form-control" defaultValue={card.back} onChange={changeBack}/>
                </div>
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
        </>
    )
}