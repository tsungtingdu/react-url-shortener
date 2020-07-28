import React from 'react';
import Layout from '../Layout'
import UrlForm from '../components/UrlForm'
import UserDataTable from '../components/UserDataTable'
import '../utilities/auth'

const App = () => {
  return (
    <Layout>
      <UrlForm />
      <UserDataTable />
    </Layout>
  )
}

export default App;