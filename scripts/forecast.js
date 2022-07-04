const apiKey = 'UYZUzXtSCsm9GXbmpJ3n8RltieimURty'; // API key que eu criei na minha conta AccuWeather API, na aba MyAPPS
/*conta gratuita na accuweather nos permite criar apenas um app por vez e este app pode ter apenas 50 requests por dia.*/

// get weather information
const getWeather = async (id) =>{
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${apiKey}`;
  
  const response = await fetch(base + query)
  const data = await response.json();

  return data[0];
}

// get city information
const getCity = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'; //the base resource URL que peguei em City Search
  const query = `?apikey=${apiKey}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];

};

