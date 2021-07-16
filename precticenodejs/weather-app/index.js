const request = require("request");

const location = (address) => {
  return new Promise((resolve, reject) => {
    try {
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYW1hbnNlbWJpIiwiYSI6ImNrcjR3aW9sYzIyOHUyeXM2eHVnenJ4Z3MifQ.N16RHUY_4hM8yt8FpyLV9A`;
      request({ url: url, json: true }, (err, res) => {
        const dta = res?.body?.features && res?.body?.features[0]?.center;
        if (err || !dta) return reject(err);

        resolve(dta);
      });
    } catch (err) {
      reject(err);
    }
  });
};

const callfunction = async () => {
  try {
    const result = await location("Chandigarh");

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
callfunction();

// location("Chandigarh", (data) => {
//   console.log(data);
// });
