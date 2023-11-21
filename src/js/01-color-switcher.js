const button = document.querySelector('button');

const onClick = () => {
  const timerId = setTimeout(() => {
    console.log('Start');
  }, 2000);

  console.log(timerId);
};

button.addEventListener('click', onClick);
