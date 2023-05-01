
import { SubmitHandler, useForm } from 'react-hook-form';
import Container from "../../../components/Container";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { Input } from "../../../components/Input";
import style from "./pet.module.scss";
import profile from "../../../../public/profile.svg";
import Image from 'next/image';
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
      <Can permissions={['users.create']}>
        <Layout>
          <div>Métricas</div>
        </Layout>  
      </Can>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get('/me');
  console.log("Response: ", response.data);
  return {
    props: {}
  }
}, {
  permissions: ['metrics.list'],
  roles: ['administrator'],
})
