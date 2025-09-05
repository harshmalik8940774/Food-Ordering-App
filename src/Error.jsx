import React from 'react'

//this hook given by react router dom (its gives detailed error)
import { useRouteError } from 'react-router-dom'


const Error = () => {
  const err = useRouteError();//object
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something went wrong</h2>
      <h3>
        { err.status}:{err.statusText}
      </h3>
    </div>
  )
}

export default Error