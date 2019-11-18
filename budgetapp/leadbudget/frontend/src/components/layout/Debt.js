import React, {Component} from 'react'


class Debt extends Component {
    constructor(props){
        super(props)
        this.state={
            debtAmount: 0
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }
    handleChange(e){
        console.log("changing",(e.target.value))
        this.setState({
            debtAmount:e.target.value
        })
    }
    handleClick(){
        console.log("debt amount", this.state.debtAmount)
    }
    render(){
        return(
            <div>
                <h2>Debt</h2>
                <input type='text' value={this.state.debtAmount} onChange={(e) =>{this.handleChange(e)}}/>
                <button onClick={this.handleClick} >Debt</button>
            </div>
        )

    }

   
}
export default Debt