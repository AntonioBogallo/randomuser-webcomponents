const API_RANDOM_USER = "https://randomuser.me/api/";

export const fetchRandomUser = () => {
  return fetch(API_RANDOM_USER)
    .then(response => response.json())
    .then(data => data.results[0])
    .catch(error => console.log(error));
};
