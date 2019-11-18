import React, {Component} from 'react'


class Withdraw extends Component {
    constructor(props){
        super(props)
        this.state={
            withdrawAmount: 0
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }
    handleChange(e){
        console.log("changing",(e.target.value))
        this.setState({
            withdrawAmount:e.target.value
        })
    }
    handleClick(){
        console.log("withdrawing amount", this.state.withdrawAmount)
    }
    render(){
        return(
            <div>
                <h2>Withdraw</h2>
                <input type='text' value={this.state.withdrawAmount} onChange={(e) =>{this.handleChange(e)}}/>
                <button onClick={this.handleClick} >Make Withdraw</button>
            </div>
        )

    }

   
}

export default Withdraw