import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Devil May Cry"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    //Esto evita mandar valores duplicados.

    setCategories([newCategory, ...categories]);
    //  Segunda opcion: setCategories( cat => [ ...cat, "Resident Evil"])
    // Se intenta no utilizar push() para no mutar objetos, que es lo que React evita. En este caso se usa el operador spread para crear una copia del arreglo actual y añadirle lo que deseo.
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories={ setCategories }
        onNewCategory={onAddCategory}
        currentCategories={categories}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

/* 
Notas: La key debe ser unica, si alguien escribe los mismo 2 veces puede generar un conflicto.

- Si hubiera intentado retornas las categorias sin mas, aparecerian pegadas una al lado de la otra.

- Se utiliza una expresion que en este caso es un metodo de los arreglos .map para retornas un <li> por cada elemento que se encuentre dentro de categories. */

// NO UTILIZAR LA POSICION EN EL INDICE COMO KEY, ya que al modificar los elementos (Eliminar uno por ej) esto puede generar errores.
