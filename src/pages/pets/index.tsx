import { useEffect, useState } from 'react';
import Container from '../../components/Container';
import { api } from '../../services/api';
import style from "./create/pet.module.scss";
import Image from "next/image";
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
          <h1 className={style.title}>Últimos Pets adicionados</h1>
        </div>

        <div className={style.contentPets}>
          {pets.map(pet => {
            return (
              <a href={`pets/${pet.id}`} key={pet.id}>
                <div className={style.cardPet}>
                  <Image src={panteraImg} className={style.petImageProfile} width={260} height={250} alt="test" />
                  <div className={style.container}>
                    <h3 className={style.titleCardPet}>{pet.name}</h3>
                    <h3 className={style.descriptionPetCard}>{pet.age} anos,{pet.type}, {pet.genre == 'female' ? 'Femêa' : 'Macho'}, {pet.weight}Kg </h3>
                    <h3 className={style.descriptionPetCard}></h3>
                  </div>
                </div>
              </a>
            )
          })}
        </div>



        <div className={style.contentTitle}>
          <h1 className={style.title}>Latest on the Property Dogs</h1>
        </div>

        <div className={style.contentPets}>
          {pets.map(pet => {
            return (
              <a href={`pets/${pet.id}`} key={pet.id}>
                <div className={style.cardPet}>
                  <Image src={panteraImg} className={style.petImageProfile} width={260} height={250} alt="test" />
                  <div className={style.container}>
                    <h3 className={style.titleCardPet}>{pet.name}</h3>
                    <h3 className={style.descriptionPetCard}>{pet.age} anos,{pet.type}, {pet.genre == 'female' ? 'Femêa' : 'Macho'}, {pet.weight}Kg </h3>
                    <h3 className={style.descriptionPetCard}></h3>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>

    </Container>
  )
}
