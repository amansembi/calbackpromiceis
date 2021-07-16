const request = require("request");

//const request = require;
const location = (city, callback) => {
  //return callback(process.env.MAPBOX_URL);
  try {
    const url =
      process.env.MAPBOX_URL +
      "/" +
      process.env.MAPBOX_PROCESS +
      "/" +
      process.env.MAPBOX_v +
      "/" +
      process.env.MAPBOX_QFETCH +
      "/" +
      city +
      ".json?access_token=" +
      process.env.ACCESS_TOKEN;
    // return callback(url);
    request({ url: url, json: true }, (err, data) => {
      if (err) {
        throw err;
      }
      if (data.body.features[0]) {
        const latLong = data.body.features[0].center;
        return callback({ longitude: latLong[0], latitude: latLong[1] });
      } else {
        return "City is not found!";
      }
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = location;
