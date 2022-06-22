import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";

describe("Pruebas en el hook useFetchGifs", () => {
  test("Debe de regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("Devil May Cry"));
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Debe de retornar un arreglo de imagenes y isLoading en false", async () => {

    const { result } = renderHook( () => useFetchGifs("Devil May Cry"));

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
      // Se puede agregar un tiempo en especifico de espera { timeout: 6000}, por defecto es 1 segundo
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});

// Con estas pruebas se pueden evaluar los estados del componente, cuando estan cargando los gifs (que seria el primer estado) y cuando ya han sigo cargados (segundo estado)
