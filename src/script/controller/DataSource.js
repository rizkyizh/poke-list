class DataSource {
  static getPokemonList = async (results, endpoint) => {
    const respone = await fetch("https://pokeapi.co/api/v2/" + endpoint);
    const data = await respone.json();

    results(data);
  };

  static getPokemonURLID = async (url, res, err) => {
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((resJson) => {
        res(resJson);
      })
      .catch((error) => err(error));
  };
}

export default DataSource;
