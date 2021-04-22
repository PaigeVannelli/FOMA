// export const fetchArtInfo = (searchPath, searchTerm) => {
//   console.log(searchPath, searchTerm)
//   return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/${searchPath}${searchTerm}`)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     // .then(response => console.log(response))
// }
export const fetchArtInfo = async (searchPath, searchTerm) => {
  const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/${searchPath}${searchTerm}`)
  const result = response.json()
  return result
}

export default fetchArtInfo