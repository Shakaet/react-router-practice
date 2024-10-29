import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    let er= useNavigate();

    let handleerror=()=>{
        er(-1)
    }

  console.error(error);

    return (
        <div className='flex flex-col justify-center items-center mt-44'>

            <p>Sorry Not Found</p>
            <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      {
        error.status=== 404 && <div>
            <p>Error Found</p>
            <button onClick={handleerror} className='btn btn-error mt-5'>Go back</button>
            </div>
      }
            
        </div>
    );
};

export default ErrorPage;