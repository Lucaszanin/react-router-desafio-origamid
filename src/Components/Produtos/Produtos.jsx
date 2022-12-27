import { useEffect, useState } from "react";
import styles from "./Produtos.module.css";
import { Link } from "react-router-dom";
import Head from "../Head/Head";

function Produto() {
  const [produtos, setProdutos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      fetch("https://ranekapi.origamid.dev/json/api/produto")
        .then((r) => r.json())
        .then((json) => setProdutos(json));
    } catch (err) {
      setError("Um ocorreu ao carregar os produtos");
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (produtos === null) return null;
  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Head title={`Ranek`} description={`Estes são os produtos disponíveis`} />
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  );
}

export default Produto;
