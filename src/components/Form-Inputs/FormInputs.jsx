import './formInputs.css'
import PropTypes from "prop-types";

export default function FormInputs({ formItems, nameForm }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formItems);
  };

  console.log(formItems);
  return (
    <div className='container-form-inputs'>
      <h1>Agregar {nameForm}</h1>

      <form onSubmit={handleSubmit} className='form-inputs'>
        {formItems.map((inputForm, formIndex) => (
            /*Divido los inputs en grupos para poder ordenar el formulario de
            una forma mas sencilla con css
            */
          <div key={formIndex} className={inputForm.class}>
            
            {/*Mape el array de inputs resivido, y verifico si tiene un select
            para poder mapear todas las posibles selecciones, en el caso de que no
            encuentre un select carga un input de forma normal
            */}
            {inputForm.inputs.map((input, indexInput) => (
              <div key={`${input.nameInput}-${input.type}-${indexInput}`}>

                {input.type == "select" ? (
                  <select>
                    <option>Categoria</option>
                    {input.option.map((opt, i) => (
                      <option key={i}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    name={input.nameInput}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                )}

              </div>
            ))}
          </div>
        ))}
      </form>
    </div>
  );
}

// Definición de PropTypes
FormInputs.propTypes = {
  formItems: PropTypes.array.isRequired,
  nameForm: PropTypes.string.isRequired,
};
