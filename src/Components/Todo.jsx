import React from 'react';
import { useNavigate } from 'react-router-dom';

const Todo = ({todos}) => {
    let {id,title,completed} =todos

    let navigate=useNavigate()

    let handleShow=()=>{
        navigate(`/todos/${id}`)
    }
    return (
        <div className='border border-2 rounded-lg p-5 justify-center items-center flex flex-col'>

            <h1>ID:{id}</h1>
            <p>Title:{title}</p>
            <div className='flex-grow'>
            {
                completed? <p>Completed: Yes</p>:<p>Completed: No</p>
            }
            </div>
            

            <button onClick={handleShow} className='btn btn-error mt-3'>Show Details</button>
            
        </div>
    );
};

export default Todo;