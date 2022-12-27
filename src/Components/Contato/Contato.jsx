import React from "react";
import styles from "./Contato.module.css";
import contatoImg from "../Assets/contato.jpg";
import Head from "../Head/Head";

function Contato() {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato " description="Entre em Contato" />

      <img src={contatoImg} alt="Maquina de escrever" />
      <div>
        <h1>Entre em Contato.</h1>
        <ul className={styles.dados}>
          <li>(19)98774-4452</li>
          <li>andre@origamid.com</li>
          <li>Rua Valerio Braido 212 Jd Bela Vista</li>
        </ul>
      </div>
    </section>
  );
}

export default Contato;
