const API_URL =
  "https://api.github.com/repos/binary-studio-academy/stage-2-es6-for-everyone/contents/resources/api/";

function callApi(endpoind, method = "GET") {
  const url = API_URL + endpoind;
  const options = {
    method
  };

  return fetch(url, options)
    .then(response =>
      response.ok ? response.json() : Promise.reject(Error("Failed to load"))
    )
    .catch(error => {
      throw error;
    });
}

function fight(first, second) {
  const firstFighter = first;
  const secondFighter = second;
  const hitPower = firstFighter.getHitPower();
  const blockPower = secondFighter.getBlockPower();

  const damage = +Math.abs(hitPower - blockPower);
  const healthLeft =
    secondFighter.getHealth() - damage > 0
      ? secondFighter.getHealth() - damage
      : 0;
  if (healthLeft === 0) {
    alert(`${secondFighter.name} lost!`);
    window.location.reload();
  } else {
    secondFighter.setHealth(healthLeft);
    secondFighter.setProgressBar();
    return healthLeft;
  }
}

const random = () => Math.random() * 2;

export { callApi, random, fight };
