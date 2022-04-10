import api, { createApi } from "unsplash-js";

const getUrlForCoffeeStores = (latLong, query, limit) => {
  return `https://api.foursquare.com/v3/places/nearby?ll=${latLong}&query=${query}&limit=${limit}&v=20220405`;
};

export const fetchCoffeeStores = async () => {
  const url = getUrlForCoffeeStores('43.65267326999575,-79.39545615725015', 'coffee store', 6)
  const response = await fetch(url, {
    "headers": {
      'Accept': 'application/json',
      'Authorization': 'fsq39uo8wckv8E9ttrmACtekwSELd65AUkZm9jTzv8q2YS0='
    }
  })

  return await response.json();
}

const serverApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY
})

export const fetchImage = async () => {
  const photos = await serverApi.search.getPhotos({
    query: "coffee store",
    page: 1,
    perPage: 10,
    color: 'green',
    orientation: 'landscape'
  })

  const results = photos.response.results;
  return results.map(result => result.urls["small"])
}
