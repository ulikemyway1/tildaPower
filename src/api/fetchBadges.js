const url = `https://api.unsplash.com/photos/random?count=12&orientation=squarish&client_id=4colJrPVgUKsfB2OkwF3G9KmiHb72P493LNMEQ1MVJ0`
export default async function getPhotos() {
  const imagesObject = await fetch(url).then((obj) => obj.json())
  const imagesURL = []

  imagesObject.forEach((imageObject) => {
    imagesURL.push(imageObject?.urls?.regular)
  })
  return imagesURL
}
