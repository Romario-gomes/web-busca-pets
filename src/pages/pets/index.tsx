import { useEffect, useState } from 'react';
import Container from '../../components/Container';
import style from "./create/pet.module.scss";
import Image from "next/image";
import panteraImg from "../../../public/pantera.jpg";
import Layout from '../../components/Layout';
import { api } from '../../services/apiClient';
import { setupAPIClient } from '../../services/api';
import { withSSRAuth } from '../../utils/withSSRAuth';


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
  /* useEffect(() => {
    api.get('/users/me').then(response => {
    console.log(response);

    })
  }, []) */

  return (
    <Layout>
      Pets cheguei
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

