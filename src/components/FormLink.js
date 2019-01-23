import React from 'react'
import { Link } from 'react-router-dom'

const FormLink = () => {
  return (
    <div>
      <button type="button" className="btn btn-secondary">
        <Link to='/postform'>Add Post</Link>
      </button>
    </div>
  )
}

export default FormLink
