function getUserCity() {
  return new Promise((resolve, reject) => {
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(({ ip }) => {
        fetch(
          `https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=${ip}&token=2c1b7cc702379e2372b140b0403fd53bbe385662`
        )
          .then(res => res.json())
          .then(json => {
            if (
              {}.hasOwnProperty.call(json, 'family') &&
              json.family.toLowerCase().indexOf('err')
            ) {
              return reject(json);
            }
            const {
              location: {
                data: { city },
              },
            } = json;
            resolve({ city });
          });
      });
  });
}

let output = document.querySelector('.geolocation');
getUserCity()
  .then(({ city }) => {
    output.innerHTML = city
  })
  .catch(err => {
    console.log(err);
  });
