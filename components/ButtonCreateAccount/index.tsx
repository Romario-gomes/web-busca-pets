import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./buttonCreateAccount.module.scss";




export default function ButtonCreateAccount() {
  const { isAuthenticated, signOut } = useContext(AuthContext)

  function handleSignOut() { 
    signOut();
 }

  if (!isAuthenticated) {
    <button type="submit" className={styles.buttonCreate}>Criar Conta</button>
  }
  
  return (
    <button type="submit" className={styles.buttonCreate} onClick={handleSignOut}>Sair</button>
  )
}