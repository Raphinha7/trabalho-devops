import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setData(JSON.stringify(data)))
      .catch(() => setData("Erro ao conectar API"));
  }, []);

  return (
    <div>
      <h1>Sistema de Pedidos</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
