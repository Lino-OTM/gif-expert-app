import { useState } from "react";
import { PropTypes } from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  //Perfectamente se puede desestructurar el target para ahorrar escribir event.

  const onSubmit = (event) => {
    event.preventDefault();
    //Esta funcion previene el refresh del navegador
    if (inputValue.trim().length <= 1) return;
    //Esta funcion evita mandar espacios vacios o un solo caracter.
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
    // Al enviar algo se limpia el input
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
