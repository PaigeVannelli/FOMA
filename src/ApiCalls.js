// export const fetchArtInfo = async (searchPath, searchTerm) => {
//   // try {
//     const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/${searchPath}${searchTerm}`)
//     const result = response.json()
//   //   console.log('result one', result)
//   //   return result
//   // } catch(error) {
//   //   console.log(error)
//   //   return error.json()
//   // }
// }

export const fetchArtInfo = (searchPath, searchTerm) => {
  return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/${searchPath}${searchTerm}`)
  .then(response => response.json())
}

export default fetchArtInfo