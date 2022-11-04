const url = "http://localhost/apiR/api_desarrollo.php";

const getValueCase = async (id) => {
    const response = await fetch(url,{
        method: 'post',
        headers:{'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'},
        body: `anio=2018&delito=${id}`
    });
    return await response.json();
}

export { getValueCase }