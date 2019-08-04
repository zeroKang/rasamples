import React, {Component} from 'react'



export default class SampleButton extends Component {


    showAlert = () => {
        alert("Hello World")
    }

    render(){
        return(
            <button onClick={this.showAlert}>CLICK ME </button>
        )
    }


}