import { Component } from "react";

class CardList extends Component {
    
    render() {
        const { monsters } = this.props

        return (
            <div>
                {
                    monsters.map(m => <div key={m.id}><h1>{m.name}</h1></div>)
                }
            </div>
        )
    }
}

export default CardList