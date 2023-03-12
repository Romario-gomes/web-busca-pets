import { GetServerSideProps, GetStaticProps } from "next";
import { useParams } from 'react-router-dom';

import Container from "../../../components/Container";
import { api } from "../../../services/api";
import style from "./pet.module.scss";

/* type ParamsUrl = {
  id: string;
}; */

interface IPet{
  pet: {
    name: string;
    genre: string;
    type: string;
    age: number;
    weight: number;
  }
  
}


export default function ViewPet({pet}: IPet) {
  return (
    <>
    <Container>
    <h1>adasdas</h1>

      <h1 className={style.title}>{pet.name}</h1>
      <h1 className={style.title}>{pet.genre}</h1>
      <h1 className={style.title}>{pet.type}</h1>
      <h1 className={style.title}>{pet.age}</h1>
      <h1 className={style.title}>{pet.weight}</h1>
    </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params } ) => {
  
  const {id} = params as {id: string};
  const rest = await api.get(`pets/${id}`);
  const pet = await rest.data;

  return {
    props: {
      pet,
    }
  }
}

/* export async function getServerSideProps() {
  const { id } = useParams<ParamsUrl>();

  const rest = await api.get(`pets/${id}`)
} */