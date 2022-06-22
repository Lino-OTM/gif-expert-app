export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=sOhmHKZHf2pH4gJNqLwgAfCsRkMW8SIi&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));
  return gifs;
};

//Buena practica porque evita reprocesar la funcion! (Volver a asignar espacio en memoria cuando se redibuje el componente). Y evitar mandar la peticion cada vez.