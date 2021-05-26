import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"

import { readDeck, updateDeck} from "../../utils/api/index"





export default function EditDeckPage () {
    const params = useParams();
    const history = useHistory();

    const [deck, setDeck] = useState({})

    useEffect(()=>{
        async function getData() {
            const response = await readDeck(params.deckId);
            setDeck(response)
        }
        getData();
    },[])

    const handleChange = (event) => {
        setDeck({...deck, [event.target.name] : event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        updateDeck(deck).then(()=> history.push(`/`));
    }

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
                    <li className="breadcrumb-item" aria-current="page"><a href={`/decks/${deck.id}`}>{deck.name}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit Deck</li>
                </ol>
            </nav>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="row">
                        <label>Name</label>
                    </div>
                    <input className="form-control w-75" type="text" name="name" value={`${deck?.name}`} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <div className="row">
                        <label>Description</label>
                    </div>
                    <textarea  className="form-control w-75" name="description" value={`${deck?.description}`} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <button
                        className="btn btn-secondary mr-2"
                        onClick={()=> history.push(`/`)}
                    >Cancel</button>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}