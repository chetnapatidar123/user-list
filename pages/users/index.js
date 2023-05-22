import Layout from '@/components/Layout'
import axios from "axios"
import { useRouter } from 'next/router'

const index = ({users}) => {
    const router = useRouter()
  return (
    
    <Layout>
        <div className='container'>
        <h1>All User List</h1>
        {/* <h1>{users.length}</h1> */}

<table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
    </tr>
  </thead>
      <tbody>
        {users.map((user) => (
            <tr key={user.id}>
              <td  onClick={() => {router.push(`/users/${user.id}`)}}>{user.name}</td>
            </tr>
        ))}
      </tbody>
</table>
        </div>
        
    </Layout>
  )
}


export default index;


export async function getStaticProps() {
    try {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        return{
            props: {
                users:data
        }
        }
    } catch (error) {
        
    }
}



// export const getStaticProps = async () => {
