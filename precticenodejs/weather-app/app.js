// const request = require("request");
const yargs = require("yargs");
const dotenv = require("dotenv").config();
const location = require("./location");
// const url = 'http://api.weatherstack.com/current?access_key=ddf09d9b3f531626c07f3877892a20e7&query=chandigarh&units=f'
// const url =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/chandigarh.json?access_token=pk.eyJ1IjoiYW1hbnNlbWJpIiwiYSI6ImNrcjR3aW9sYzIyOHUyeXM2eHVnenJ4Z3MifQ.N16RHUY_4hM8yt8FpyLV9A";

// request(url,(err,response)=>{
//     if(err) throw err;
//      const weatherJson = JSON.parse(response.body)
//     console.log(weatherJson.current)
// })
// request({ url: url, json: true},(err,response)=>{
//     if(err) throw err;

//     const currentWeather = response.body.current

// })

// request({ url: url, json: true},(err,response)=>{
//         if(err) throw err;

//         const currentWeather = response.body
//         console.log(currentWeather.features)

//     })

//const latLong = null
// const location = (city) => {
//   try {
//     const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoiYW1hbnNlbWJpIiwiYSI6ImNrcjR3aW9sYzIyOHUyeXM2eHVnenJ4Z3MifQ.N16RHUY_4hM8yt8FpyLV9A`;

//     return new Promise((resolve, reject) => {
//       request({ url: url, json: true }, (err, data) => {
//         if (err) {
//           throw err;
//         }
//         if (data.body.features[0]) {
//           const latLong = data.body.features[0].center;
//           resolve(latLong);
//         } else {
//           reject("City is not found!");
//         }
//       });
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// const getLocation = async () => {
//   try {
//     const data = yargs.argv;
//     const result = await location(data.location);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getLocation();

const data = yargs.argv;
location(data.location, (response) => {
  console.log(response);
});
