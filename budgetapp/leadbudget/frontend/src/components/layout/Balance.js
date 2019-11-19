import React,{Component} from 'react'

//try to change values
import { BudgetConsumer} from '../../store'

export class Balance extends Component {
    constructor(props){
        super(props)
    }
    render(){
       return <h1>Balance <input type="text"/></h1>
     
    }
}
export default Balance