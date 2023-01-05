import React from "react";

export default class ClickTracker extends React.Component {
    state = {
        lastClicked: "",
    }
handleTracker = (event) => {
    this.setState(prev => {
       return {lastClicked: event.target.innerHTML}
    })
}
    render() {
        return <div>
            <h1>The last button clicked was: {this.state.lastClicked}</h1>
            <button onClick={this.handleTracker}>First</button>
            <button onClick={this.handleTracker}>Second</button>
            <button onClick={this.handleTracker}>Third</button>
        </div>
    }
}