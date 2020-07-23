export const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const getRandomId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const convertImage = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      resolve(event.target.result);
    };

    try {
      reader.readAsDataURL(file);
    } catch(error) {
      reject(error);
    }
  });
};
