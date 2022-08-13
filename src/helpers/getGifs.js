export const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=zs1vWngGE0PnD4RjBuieM4FiizR5xg1j&q=${category}&limit=7`;
  const resp = await fetch(url)
  const {data} = await resp.json();

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images?.fixed_height_small.url

  }))

  return gifs
};
