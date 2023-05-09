
import { useForm } from 'react-hook-form';
import { useRouter } from "next/router";
import { Can } from '../../../components/Can';
import Layout from '../../../components/Layout';
import { api } from '../../../services/apiClient';
import { setupAPIClient } from '../../../services/api';
import { withSSRAuth } from '../../../utils/withSSRAuth';

type ICreatePet = {
  name: string;
  genre: string;
  type: string;
  age: number;
  weight: number;
}


export default function CreatePet() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  async function handleCreatePet({name, age, type, weight, genre}: any) {
    await api.post('pets', {name, age, type, weight, genre});
    router.push('/');
    return;
  }

  return (
    <>      
        <Layout>
          <Can permissions={['users.create']}>
            <div>Métricas</div>
          </Can>
        </Layout>  
      
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  /*  const apiClient = setupAPIClient(ctx);
  
  const response = await apiClient.get('/users/me');
  console.log("Response: ", response.data); */
  return {
    props: {}
  }
}, {
  permissions: [
		"metrics.list",
		"view_product"
	],
  roles: ['administrator'],
})
