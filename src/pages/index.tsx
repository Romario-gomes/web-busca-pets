import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { api } from '../services/api'

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
    const pets =  api.get('/pets/list').then(response => setPets(response.data))
  }, [])


  return (
    <>
    <h1>listagem de pets</h1>
    { pets.map(pet => {
      return (
        <div key={pet.name}>
        <h3>Nome: {pet.name}</h3>
        <br />
        <h3>Idade: {pet.age}</h3>
        <br />
        <h3>Type: {pet.type}</h3><br />
        <h3>Peso: {pet.weight}</h3><br />
        </div>
      ) 
    }) }

    </>
  )
}
