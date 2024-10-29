import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const SingleTodo = () => {

    let singletodo=useLoaderData()

    let {id,title,completed}=singletodo

    let go=useNavigate()
    let handlego=()=>{
        go(-1)
    }
    return (
        <div className='flex flex-col justify-center items-center mt-20 border border-2 p-5'>
            


            <h1>ID:{id}</h1>
            <p>Title:{title}</p>
            <div className='flex-grow'>
            {
                completed? <p>Completed: Yes</p>:<p>Completed: No</p>
            }

            </div>

            <button onClick={handlego} className='btn btn-warning mt-3'>Go back</button>
        </div>
    );
};

export default SingleTodo;