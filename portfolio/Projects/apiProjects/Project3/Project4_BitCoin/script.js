let btn = document.getElementById("btn");
// TODO: alter the url in order to force a network error
const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

btn.addEventListener("click", () => {
  // * checks for the value of which ever country was checked when clicked
  let country = document.querySelector('input[name="country"]:checked').value;

  // * when button is clicked this fetches data from the url above. 
  fetch(url)
    .then(response => {
      if (!response.ok) {
        // TODO: toggle the bang to simulate a fetch error
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      let rate = data.bpi[country].rate_float.toFixed(2); // sets value 2 decimal places
      let symbol = data.bpi[country].symbol; // sets symbol based on country
      displayPrice.innerHTML = symbol + rate;
    })
    .catch(error => {
      console.error("Error from network: ", error);
    });
});
