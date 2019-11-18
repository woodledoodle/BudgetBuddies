import React, {Component} from 'react'


class Deposit extends Component {
    constructor(props){
        super(props)
        this.state={
            depositAmount: 0
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }
    handleChange(e){
        console.log("changing",(e.target.value))
        this.setState({
            depositAmount:e.target.value
        })
    }
    handleClick(){
        console.log("depositing amount", this.state.depositAmount)
    }
    render(){
        return(
            <div>
                <h2>Deposit</h2>
                <input type='text' value={this.state.depositAmount} onChange={(e) =>{this.handleChange(e)}}/>
                <button onClick={this.handleClick} >Make Deposit</button>
            </div>
        )

    }

   
}

export default Deposit