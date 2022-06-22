import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  test("Debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    // textbox, no input.

    fireEvent.input(input, { target: { value: "Sparda" } });

    expect(input.value).toBe("Sparda");
  });

  test("Debe de llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "Sparda";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");

    // test de funciones

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("No debe de llamar el onNewCategory si el input esta vacio", () => {

    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    // expect(onNewCategory).not.toHaveBeenCalledTimes(0);
  });
});

// Para testear el submit puedo poner un console.log en la funcion onSubmit.

// Si el form no tiene un aria-label el getByRole, no lo reconocera.
