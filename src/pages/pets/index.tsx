import { useEffect, useState } from 'react';
import Container from '../../components/Container';
import { api } from '../../services/api';
import style from "./create/pet.module.scss";
import Image  from "next/image";
import panteraImg from "../../../public/pantera.jpg";


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
    api.get('/pets/list').then(response => setPets(response.data))
    console.log(pets);
  }, [])

  return (
    <Container>
      <div className={style.content}>
        <div className={style.contentTitle}>
          <h1 className={style.title}>Latest on the Property Listing</h1>
        </div>

        <div className={style.contentPets}>
          {pets.map(pet => {
            return (
              <div key={pet.id} className={style.cardPet}>
                <Image src={panteraImg} className={style.petImageProfile} width={250} height={250} alt="test"/>
                <div className={style.container}>
                  <h3 className={style.titleCardPet}>{pet.name}</h3>
                  <h3 className={style.descriptionPetCard}>Idade: {pet.age} anos, Classe: {pet.type}, Sexo: {pet.genre == 'female' ? 'Femêa' : 'Macho'}</h3>
                  <h3 className={style.descriptionPetCard}>Peso: {pet.type}</h3>
                </div>
              </div>


            )
          })}
        </div>



        <div className={style.contentTitle}>
          <h1 className={style.title}>Latest on the Property Dogs</h1>
        </div>

        <div className={style.contentPets}>
          {pets.map(pet => {
            return (
              <div key={pet.id} className={style.cardPet}>
                <Image src={panteraImg} className={style.petImageProfile} width={250} height={250} alt="test"/>
                <div className={style.container}>
                  <h3 className={style.titleCardPet}>{pet.name}</h3>
                  <h3 className={style.descriptionPetCard}>Idade: {pet.age} anos, Classe: {pet.type}, Sexo: {pet.genre == 'female' ? 'Femêa' : 'Macho'}</h3>
                  <h3 className={style.descriptionPetCard}>Peso: {pet.type}</h3>
                </div>
              </div>
            )
          })}
        </div>

      </div>

    </Container>
  )
}
