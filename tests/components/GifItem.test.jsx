import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en el componente <GifItem />", () => {
  const title = "Sparda";
  const url = "https://devil-may-cry-sparda.jpg/";

  test("Debe de coincidir con la snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    // Para evitar escribir varios expect( screen.getByRole("img").src o .alt o etc etc).toBe(url o title); se hace una desestructuracion de screen.getByRole("img"); y se obtiene lo siguiente:
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("Debe de mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});

// La funcion render viene de react testing library para poder crear el snapshot, en este caso se crea del GifItem.

// Si no se pone los parametros que se indicaron con los propTypes en GifItem.jsx saltara un error en consola.

// Como el titulo y el url lo puedo llegar a utilizar varias veces, es buena idea crear una constante fuera del test para poder acceder a ellas en varios lados.

// Screen.debug() sirve para ver que se esta renderizando, se debe importar de React-testing-library
