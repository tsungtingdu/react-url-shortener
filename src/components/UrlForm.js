import React from 'react';


const UrlForm = () => {
  return (
    <div className="urlForm d-flex justify-content-center align-items-center">
      <div className="urlForm__container d-flex flex-column">
        <input type="text" placeholder="Enter your url here" className="urlForm__container__input" />
        <div className="urlForm__container__buttons d-flex">
          <button className="createButton">Create short url</button>
          <button className="clearButton">clear</button>
        </div>
      </div>
    </div>
  )
}

export default UrlForm;
