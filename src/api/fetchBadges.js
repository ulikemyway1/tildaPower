const url = `https://api.unsplash.com/photos/random?count=12&orientation=squarish&client_id=xBr8RxbNeDcb-VyLOCa8tdvTvNIzShCOOTQvmAJShkM`
export default async function getPhotos() {
  const imagesObject = await fetch(url)
    .then((obj) => obj.json())
    .catch(() => console.info('Sorry, unsplash API token overused'))
  const imagesURL = []
  if (imagesObject) {
    imagesObject.forEach((imageObject) => {
      imagesURL.push(imageObject?.urls?.regular)
    })
  }

  return imagesURL
}
