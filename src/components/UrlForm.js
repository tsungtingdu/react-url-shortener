import React, { useState } from 'react';
import axios from 'axios'

const UrlForm = () => {
  // state
  const [longUrl, setLongUrl] = useState('');

  // handlers
  const handleChange = e => {
    setLongUrl(e.target.value)
  }

  const submitData = e => {
    e.preventDefault()
  }

  const clearFormData = e => {
    e.preventDefault()
    setLongUrl('')
  }

  return (
    <div className="urlForm d-flex justify-content-center align-items-center">
      <form className="urlForm__container d-flex flex-column" onSubmit={submitData}>
        <input
          type="text"
          placeholder="Enter your url here"
          className="urlForm__container__input"
          value={longUrl}
          onChange={handleChange} />
        <div className="urlForm__container__buttons d-flex">
          <button type="submit" className="createButton" >Create short url</button>
          <button type="button" className="clearButton" onClick={clearFormData}>clear</button>
        </div>
      </form>
    </div>
  )
}

export default UrlForm;
