import { useEffect } from "react";
import Container from "../../../components/Container";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import { api } from "../../../services/api";
import style from "./pet.module.scss";

export default function CreatePet() {
  

  async function handleCreatePet() {
    const response = await api.get('pets/list');
    console.log("Resposta: ", response.data);
  }

  return (
    <div className={style.container}>
      <Header />
      <div className={style.contentCreatePet}>
        <Container>
          
          <form className={style.form}>
          <h1>Criar Conta</h1>
            <div>
              <label htmlFor="name" className={style.labelForm}>Nome</label>
              <Input type="text" id="name" name="name" />
            </div>

            <div className={style.inputGroup}>
              <div className={style.formController}>
                <label htmlFor="type" className={style.labelForm}>Tipo</label>
                <Input type="text" id="type" name="type" />
              </div>

              <div className={style.formController}>
                <label htmlFor="age" className={style.labelForm}>Idade</label>
                <Input type="number" id="age" name="age" />
              </div>
            </div>
            
            <div className={style.inputGroup}>
              <div className={style.formController}>
                <label htmlFor="wight" className={style.labelForm}>Peso kg</label>
                <Input type="number" id="weight" name="weight" />
              </div>

              <div className={style.formController}>
                <label htmlFor="genre" className={style.labelForm}>Sexo</label>
                <Input type="number" id="genre" name="genre" />
              </div>
            </div>
            
            <div className={style.buttonsSubmit}>
              <button>Cancel</button>
              <button type="button" onClick={handleCreatePet}>Save</button> 
            </div>
          </form>
        </Container>
      </div>
      <Footer />
    </div>
  )
}
