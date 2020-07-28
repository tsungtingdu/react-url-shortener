import React, { useState, useEffect } from 'react'
import axios from 'axios'
const BASEURL = 'http://www.td.coffee'

const UserDataTable = () => {
  const [userdata, setUserdata] = useState(null)
  useEffect(() => {
    const token = global.auth.getToken()
    if (token) {
      axios.get(`${BASEURL}/api`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }).then(res => {
        console.log(res)
        setUserdata(res.data.userData)
      })
    }
  }, [])

  return (
    < div className="dataTable d-flex justify-content-center" >
      {userdata ? (
        <div className="dataTable__container">
          <table>
            <thead>
              <tr>
                <th>Short URL</th>
                <th>Original URL</th>
                <th>Views</th>
                <th>Created at</th>
              </tr>
            </thead>
            <tbody>
              {userdata.map(i => {
                return (
                  <tr>
                    <td><a href={BASEURL + "/" + i.shortUrl} target="_blank">{i.shortUrl}</a></td>
                    <td>{i.originalUrl}</td>
                    <td>{i.view}</td>
                    <td>{i.createdAt}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )
        : null}
    </div >
  )
}

export default UserDataTable