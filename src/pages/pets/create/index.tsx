
import { useForm } from 'react-hook-form';
import Container from "../../../components/Container";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { Input } from "../../../components/Input";
import { api } from "../../../services/api";
import style from "./pet.module.scss";
import profile from "../../../../public/profile.svg";
import Image from 'next/image';

export default function CreatePet() {
  const { register, handleSubmit } = useForm();

  function handleCreatePet(values: any) {
    console.log("Valores:", values);
    /* const response = await api.get('pets/list');
    console.log("Resposta: ", response.data); */
  }

  return (
    <div className={style.container}>
      <Header />
      <div className={style.contentCreatePet}>
        <Container>
          <form
            onSubmit={handleSubmit(handleCreatePet)}
            className={style.form}
          >
            <div className={style.contentForm}>
              <div className={style.containerPhoto}>
                <Image
                  src={profile}
                  alt="Perfil upload"
                  priority={true}
                />
                <h6>Carregar Foto</h6>
                <div className={style.contentUpload}>
                  <h6>Identificação do Pet</h6>
                  <p>Carregar foto do seu pet para identificação</p>
                </div>
              </div>
              
              <div className={style.contentInputs}>
                <h1>Cadastrar Pet</h1>
                <div>
                  <label htmlFor="name" className={style.labelForm}>Nome</label>
                  <Input type="text" id="name" {...register("name")} />
                </div>

                <div className={style.inputGroup}>
                  <div className={style.formController}>
                    <label htmlFor="type" className={style.labelForm}>Tipo</label>
                    <Input type="text" id="type" {...register("type")} />
                  </div>

                  <div className={style.formController}>
                    <label htmlFor="age" className={style.labelForm}>Idade</label>
                    <Input type="number" id="age"  {...register("age")} />
                  </div>
                </div>

                <div className={style.inputGroup}>
                  <div className={style.formController}>
                    <label htmlFor="wight" className={style.labelForm}>Peso kg</label>
                    <Input type="number" id="weight"  {...register("weight")} />
                  </div>

                  <div className={style.formController}>
                    <label htmlFor="genre" className={style.labelForm}>Sexo</label>
                    <Input type="text" id="genre"  {...register("genre")} />
                  </div>
                </div>

                <div className={style.buttonsSubmit}>
                <button type="button">Cancel</button>
                <button type="submit">Save</button>
              </div>
              </div>
            </div>

          </form>
        </Container>
      </div>
      <Footer />
    </div>
  )
}
