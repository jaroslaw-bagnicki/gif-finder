import { GIPHY_API } from '../config';

export async function getGif(searchText) {
  const reqUrl = `${GIPHY_API.SEARCH_URL}?q=${searchText}&api_key=${GIPHY_API.KEY}&limit=1`;
  try {
    const resBody = await (await (fetch(reqUrl))).json();
    if (!(resBody.data.length === 0)) {
      return {
        giphyUrl: resBody.data[0].url,
        gifUrl: resBody.data[0].images.downsized_medium.url
      };
    } else throw new Error('Gif not found!');
  } catch(err) {
    console.log('Error logged from service', err);
    return err;
  }
}
