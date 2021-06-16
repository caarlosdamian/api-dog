const getBreeds = async () => {
    const url = "https://api.thedogapi.com/v1/breeds";
    const res = await fetch(url);
  
    if (!res.ok) {
      const { url, status, statusText } = res;
      throw Error(`Error: ${status} ${statusText} in fetch  ${url}`);
    }
  
    const data = await res.json();
  
    return data;
  };
  
  export default getBreeds;
  