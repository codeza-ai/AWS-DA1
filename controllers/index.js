const axios = require("axios");
//API_KEY = 45301195-81fdea9ec288d2186d7fc6669

require('dotenv').config();

const API_KEY = process.env.API_KEY;
console.log(API_KEY);

async function getAFox(req, res) {
  try {
    const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=fox&image_type=photo&pretty=true`);
    const images = response.data.hits;
    const selectedImage = images[Math.floor(Math.random() * images.length)].webformatURL;
    res.json({ image: selectedImage });
    //or we can send in encoded form using base64
    // res.json({ image: Buffer.from(selectedImage).toString('base64') });
  } catch (error) {
    console.error(error);
  }
}

async function getACity(req, res) {
    try {
      const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=city&image_type=photo&pretty=true`);
      const images = response.data.hits;
      const selectedImage = images[Math.floor(Math.random() * images.length)].webformatURL;
      res.json({ image: selectedImage });
    } catch (error) {
        console.error(error);
    }
}

module.exports = { getAFox, getACity };