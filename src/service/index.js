import { GIPHY_API } from '../config';

export function getGif(searchText) {
  const reqUrl = `${GIPHY_API.SEARCH_URL}?q=${searchText}&api_key=${GIPHY_API.KEY}&limit=1`;
  return fetch(reqUrl)
    .then(res => res.json())
    .then(body => ({
      giphyUrl: body.data[0].url,
      gifUrl: body.data[0].images.downsized_medium.url
    }))
    .catch(err => err);
}
