const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=nj86Fi2wxoJmSCnly0B9AHCY6KdF1ZcH&q=leones&limit=25&offset=0&rating=g&lang=en'


export default async function getGifs() {
  fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const { data } = response
      const gifs = data.map(image => image.images.downsized_medium.url)
      return gifs
  })
}
