import { useState } from "react";
import "./App.css";
import FormInputs from "./components/Form-Inputs/FormInputs";

function App() {
  const nameFormProd = "Producto";
  const nameFormClien = "Cliente";
  const [categoria, setCategoria] = useState([
    "Lacteos",
    "Alcohol",
    "Higiene",
    "Prueba",
  ]);

  const [nombreProd, setNombreProd] = useState();
  const [precioProd, setPrecioProd] = useState();
  const [categoriaProd, setCategoriaProd] = useState();
  const [stockProd, setStockProd] = useState();
  const [codBarProd, setCodBarProd] = useState();
  const [descripcionProd, setDescripcionProd] = useState();

  const submit = () =>{
    console.log(nombreProd);
    console.log(precioProd);
    console.log(categoriaProd);
    console.log(stockProd);
    console.log(codBarProd);
    console.log(descripcionProd);
  }

  let formItemsProduc = [
    {
      class: "input-grup",
      inputs: [
        {
          nameInput: "NombreProducto",
          type: "text",
          placeholder: "Nombre de Producto",
          onchange: setNombreProd,
        },
        {
          nameInput: "PrecioProducto",
          type: "number",
          placeholder: "Precio",
          onchange: setPrecioProd,
        },
      ],
    },

    {
      class: "input-grup",
      inputs: [
        {
          nameInput: "Categoria",
          type: "select",
          option: categoria,
          onchange: setCategoriaProd,
        },
        {
          nameInput: "Stock",
          type: "number",
          placeholder: "Stock",
          onchange: setStockProd,
        },
      ],
    },

    {
      class: "input-grup",
      inputs: [
        {
          nameInput: "CodBarra",
          type: "number",
          placeholder: "Cod. Barra",
          onchange: setCodBarProd,
        },
        {
          nameInput: "DescripcionProducto",
          type: "text",
          placeholder: "Descripcion",
          onchange: setDescripcionProd,
        },
      ],
    },
  ];

  let formItemsClient = [
    {
      class: "input-grup",
      inputs: [
        {
          nameInput: "NombreCliente",
          type: "text",
          placeholder: "Nombre de Cliente",
        },
        {
          nameInput: "ApellidoCliente",
          type: "text",
          placeholder: "Apellido Cliente",
        },
      ],
    },

    {
      class: "input-grup",
      inputs: [
        {
          nameInput: "LimiteCC",
          type: "number",
          placeholder: "Limite de CC.",
        },
        {
          nameInput: "NumeroTelefono",
          type: "number",
          placeholder: "Numero de Telefono",
        },
      ],
    },
  ];

  return (
    <>
      <FormInputs formItems={formItemsProduc} nameForm={nameFormProd} submit={submit}/>
    </>
  );
}

export default App;
