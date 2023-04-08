class DataSource {
  static getPokemonList = async (results, endpoint) => {
    const respone = await fetch("https://pokeapi.co/api/v2/" + endpoint);
    const data = await respone.json();

    results(data);
  };

  static getPokemonImgPNG = async (url, res) => {
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((resJson) => {
        res(resJson.sprites["front_default"]);
      });
  };
}

export default DataSource;
