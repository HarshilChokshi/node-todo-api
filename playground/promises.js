var number = 5;

var somePromise = new Promise((reject, resolve) => {
  if(number === 5)
  {
    resolve('The number is 5');
  }
  else
  {
    reject('The number is not 5');
  }
});

somePromise.then((message) => {
  console.log(message);
}, (errorMessage) => {
  console.log(errorMessage);
});
