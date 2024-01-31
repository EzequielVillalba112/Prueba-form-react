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

  let formItemsProduc = [
    {
      class: "input-grup",
      inputs: [
        {
          nameInput: "NombreProducto",
          type: "text",
          placeholder: "Nombre de Producto",
        },
        {
          nameInput: "PrecioProducto",
          type: "number",
          placeholder: "Precio",
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
        },
        {
          nameInput: "Stock",
          type: "number",
          placeholder: "Stock",
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
        },
        {
          nameInput: "DescripcionProducto",
          type: "text",
          placeholder: "Descripcion",
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
      <FormInputs formItems={formItemsProduc} nameForm={nameFormProd} />
      <FormInputs formItems={formItemsClient} nameForm={nameFormClien} />
    </>
  );
}

export default App;
