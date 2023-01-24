
import { SubmitHandler, useForm } from 'react-hook-form';
import Container from "../../../components/Container";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { Input } from "../../../components/Input";
import { api } from "../../../services/api";
import style from "./pet.module.scss";
import profile from "../../../../public/profile.svg";
import Image from 'next/image';
import { useRouter } from "next/router";


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
                  <Input type="text" id="name" {...register("name", { required: true })} />
                  {errors?.name?.type === "required" && (
                    <p className={style.errorMessage}>Nome é obrigatório</p>
                  )}

                </div>

                <div className={style.inputGroup}>
                  <div className={style.formController}>
                    <label htmlFor="type" className={style.labelForm}>Tipo</label>
                    <Input type="text" id="type" {...register("type", { required: true })} />
                    {errors?.type?.type === "required" && (
                    <p className={style.errorMessage}>Tipo é obrigatório</p>
                  )}
                  </div>

                  <div className={style.formController}>
                    <label htmlFor="age" className={style.labelForm}>Idade</label>
                    <Input type="number" id="age"  {...register("age", { required: true })} />
                    {errors?.age?.type === "required" && (
                      <p className={style.errorMessage}>Idade é obrigatório</p>
                    )}
                  </div>
                </div>

                <div className={style.inputGroup}>
                  <div className={style.formController}>
                    <label htmlFor="wight" className={style.labelForm}>Peso kg</label>
                    <Input type="number" id="weight"  {...register("weight", { required: true })} />
                    {errors?.weight?.type === "required" && (
                      <p className={style.errorMessage}>Peso é obrigatório</p>
                    )}
                  </div>

                  <div className={style.formController}>
                    <label htmlFor="genre" className={style.labelForm}>Sexo</label>
                    <Input type="text" id="genre"  {...register("genre", { required: true })} />
                    {errors?.genre?.type === "required" && (
                      <p className={style.errorMessage}>Sexo é obrigatório</p>
                    )}
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
