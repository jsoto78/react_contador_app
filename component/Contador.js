const Contador = () => {
  const [contador, SetContador] = React.useState(0);
  const aumentar = () => SetContador(contador + 1);
  const disminuir = () => SetContador(contador - 1);
  return (
    <div>
      <h1 className={contador <= 0 ? "menor" : "mayor"}>
        Contador: {contador}
      </h1>
      <hr />
      <br />
      <button onClick={aumentar}>+</button>
      <button onClick={disminuir}>-</button>
    </div>
  );
};
