import { Component } from "react";

class CardList extends Component {
    
    render() {
        const { monsters } = this.props
        
        return (
            <div>
                {
                    monsters.map(m => <h1>{m.name}</h1>)
                }
            </div>
        )
    }
}

export default CardList