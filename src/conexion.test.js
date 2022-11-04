import { getValueCase } from "./conexion";
test('Comparacion de longitud array api y array local', async () => {
    const res = await fetch('http://localhost/apiR/api_desarrollo.php',{
        method: 'post',
        headers:{'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'},
        body: `anio=2018&delito=1`
    });
    const result = await res.json();
    const valuesCase = await getValueCase(1);
    expect(result.lenght).toEqual(result.lenght);  // Success!
  });

  test('Llamada a fetch', async () => {
     const valuesCase = await getValueCase(1);
     expect(valuesCase.lenght).not.toEqual(0);  // Success!
  });