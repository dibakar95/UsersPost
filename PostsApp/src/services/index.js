const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = () => {
  return new Promise((resolve, reject) => {
    fetch(API_BASE_URL + `/posts`)
      .then(response => response.json())
      .then(json => {
        resolve(json);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    fetch(API_BASE_URL + `/users`)
      .then(response => response.json())
      .then(json => {
        resolve(json);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};
