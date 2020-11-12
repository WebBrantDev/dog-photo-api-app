function retrieveDogPics() {
  fetch(`https://dog.ceo/api/breeds/image/random/${getUserAmount()}`)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson))
    .catch((error) => alert("nope"));
}

function displayResults(responseJson) {
  // console.log(responseJson.message.length);
  $("section").html('<h2>Doggies!</h2><div id="result-container"></div>');
  for (let i = 0; i < responseJson.message.length; i++) {
    console.log(responseJson);
    $("#result-container").append(
      `<img src="${responseJson.message[i]}" class="result-img" alt="Cool Doggo" />`
    );
  }

  $(".result").removeClass("hidden");
}

function getDogListener() {
  $("form").submit((event) => {
    event.preventDefault();
    retrieveDogPics();
  });
}

function getUserAmount() {
  const amount = $("#amount-of-dogs").val();
  return amount;
}

function handler() {
  getDogListener();
}

$(handler);
