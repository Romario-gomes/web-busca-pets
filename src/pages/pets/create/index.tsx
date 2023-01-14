import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import style from "./pet.module.scss";

export default function CreatePet() {
  return (
    <div className={style.container}>
      <Header></Header>
      <div className={style.contentCreatePet}>

      </div>
      <Footer />
    </div>
  )
}
