export async function getDataFromAPI(link) {
  return await fetch(link)
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
}
