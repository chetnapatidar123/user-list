import Layout from '@/components/Layout'
import axios from 'axios'
import React from 'react'

const UserId = ({user}) => {
  return (
    <Layout>
    <div className='container'>
        <h1>User Details Page</h1>
        {/* <h1>{user.name}</h1> */}

        <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Website</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
        <td>{user.phone}</td>
    </tr>
  </tbody>
</table>

    </div>
    </Layout>
  )
}

export default UserId


export async function getServerSideProps(context) {
    try {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${context.query.id}`)
        return{
            props: {
                user:data
            }
        }
    } catch (error) {
        console.log(error)
    }
}