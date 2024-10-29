import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Todo from './todo';

const Todos = () => {

    let todos=useLoaderData()
    return (
        <div className='mt-40'>

            <h2>Todos Total length:{todos.length}</h2>

            <div className='grid md:grid-cols-4 gap-5'>
            {
                todos.map(item=><Todo todos={item}></Todo>)
            }
            </div>
            
        </div>
    );
};

export default Todos;