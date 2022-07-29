import React, { Component } from "react";
import './to.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class To extends Component{
    constructor(){
        super();
        this.state={
            remove:false,
            done:false
        }
    }

    delete=()=>{
        this.setState({remove:true});
    }
    Done=()=>{
        this.setState({done:!this.state.done});
    }
   render(){
    let x=this.props.prop
    return <>
    {this.state.remove? <></>:<tr>
        <td className={`${(this.state.done)?`throughline`:``}`} id="font">{x}</td>
        <td className='d-flex justify-content-end'>
        <button type="button" className="mx-3 btn btn-outline-success" onClick={this.Done}>Done</button>
        <button type="button" className=" btn btn-outline-danger" onClick={this.delete}>Delete</button>            
        </td>
    </tr> }
    </>
   }
}