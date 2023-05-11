import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { withSSRAuth } from '../../utils/withSSRAuth';
import { api } from '../../services/apiClient';


interface IPet {
  id: string;
  name: string;
  type: string;
  age: number;
  weight: number;
  genre: string;
}

export default function Home() {

  const [pets, setPets] = useState<IPet[]>([]);
  
  useEffect(() => {
    api.get('/pets/list').then(response => {
    setPets(response.data);

    })
  }, [])

  return (
    <Layout>
      { pets.map(pet => {
        return(
          <>
            <h1>{pet.name}</h1>
            <hr />
          </>
        )
      }) }
    </Layout>
  )
}
export const getServerSideProps = withSSRAuth(async (ctx) => {
  /* const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get('/users/me');

  console.log(response.data) */

  return {
    props: {}
  }
})