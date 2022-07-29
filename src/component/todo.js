import React from "react";
import {useState} from 'react';
import To from './to'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Todo(){
    const [todo, AddTodo]=useState({
        txt:"",
        mission:[]
    })
    const inputChange=(e)=>{
        AddTodo({
            ...todo,txt:e.target.value
        });
    }
    const adding=()=>{
        AddTodo({
             ...todo, mission:(todo.txt==="")?todo.mission:todo.mission.concat(todo.txt),
            txt:""
        })
    };
    return <> 
    <div className="container rounded-3 border border-secondery mt-5 p-2 bg-dark">
        <div className="p-5 bg-success rounded">
            <h1 className="text-white">ToDo App</h1>
            <input placeholder="your Mission" type="text" name="text" className="from-control mt-4 mb-3 rounded p-2 text-center" onChange={(e)=>inputChange(e)}
            id="exampleInput" required />
            <button type="submit" className="btn btn-outline-light mt-2 m-3" onClick={adding}>Add</button>

        </div>
        <div className="py-5 bg-light-striped">
            <table className='table table-striped '>
                <tbody className="text-light">
                    {todo.mission.map((m,index)=><To prop={m} key={index}/>)}
                </tbody>
            </table>
        </div>
    </div>
    </>
   
}
