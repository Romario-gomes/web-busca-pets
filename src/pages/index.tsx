import { SetStateAction, useEffect, useState } from 'react';
import { setupAPIClient } from '../services/api'
import Layout from '../components/Layout';
import { withSSRGuest } from '../utils/withSSRGuest';
import { withSSRAuth } from '../utils/withSSRAuth';
import { api } from '../services/apiClient';
import { Can } from '../components/Can';

interface IPet{
  name: string;
  type: string;
  age: number;
  weight: number;
  genre: string;
}

export default function Home() {

  const [ pets, setPets ] = useState<IPet[]>([]);
  useEffect(() => {
    api.get('users/me')
      .then(response => console.log(response))
  }, [])


  return (
    <Can permissions={['metrics.list']}>
      <Layout>
        <div>Métricas</div>
      </Layout>
    </Can>
    
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {}
  }
})