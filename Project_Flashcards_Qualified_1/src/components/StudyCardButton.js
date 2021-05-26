import React from "react"

export default function StudyCardButton ({ home, clickHandler }) {
       return( <button
                className="btn btn-primary"
                onClick={clickHandler}
                >Next</button>
       )
}