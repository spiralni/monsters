import { Component } from "react"

import './monster-card.styles.css'

class MonsterCard extends Component {
    render() {
        const { id, name, email } = this.props

        return (
            <div className="card-container">
                <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2`} ></img>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}

export default MonsterCard