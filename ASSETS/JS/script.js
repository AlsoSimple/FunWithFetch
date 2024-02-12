  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(json => console.log(json))

  //Returns a list of every dog within the DOGAPI in the form of a lot of arrays

  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(json => console.log(json))

  //Returns a random image of a dog from the DOGAPI

  fetch('https://dog.ceo/api/breed/hound/images')
  .then(response => response.json())
  .then(json => console.log(json))

  //Returns an array of images from the DOGAPI of a specific breed og dog.

  fetch('https://dog.ceo/api/breed/hound/images/random')
  .then(response => response.json())
  .then(json => console.log(json))

  //Returns a random image of a specific breed og dog from the DOGAPI

  fetch('https://dog.ceo/api/breed/hound/images/random/3')
  .then(response => response.json())
  .then(json => console.log(json))

  //Returns 3 images of a specific dog breed from the DOGAPI

  fetch('https://dog.ceo/api/breed/airedale/images/random/10')
  .then(response => response.json())
  .then(json => console.log(json))

  //Returns 10 images of a specific dog breed from the DOGAPI

  fetch('https://dog.ceo/api/breed/hound/list')
  .then(response => response.json())
  .then(json => console.log(json))

  //Returns an array of all the sub-breeds of a specific breed from the DOGAPI