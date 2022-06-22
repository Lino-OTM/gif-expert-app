import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import { PropTypes } from "prop-types";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h4>{category}</h4>
      {isLoading && <h4> Cargando...</h4>}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
/*
{ ...image}
El operador spread me permite extraer las propiedades sin tener que llamarlas una por una ( title={image.title}, etc etc)
MUY UTIL SI TENGO VARIAS PROPIEDADES */
