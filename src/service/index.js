import { GIPHY_API } from '../config';

export async function getGif(searchText) {
  const reqUrl = `${GIPHY_API.SEARCH_URL}?q=${searchText}&api_key=${GIPHY_API.KEY}&limit=1`;
  try {
    const resBody = await (await (fetch(reqUrl))).json();
    return {
      giphyUrl: resBody.data[0].url,
      gifUrl: resBody.data[0].images.downsized_medium.url
    };
  } catch(err) {
    console.log(err);
  }
}
