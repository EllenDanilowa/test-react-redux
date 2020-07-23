export const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};
export const getRandomId = () => Math.random().toString(36).substr(2, 9);

// const getBase64Image = (img) => {
//   const canvas = document.createElement('canvas');
//   canvas.width = img.width;
//   canvas.height = img.height;
//
//   const ctx = canvas.getContext('2d');
//   ctx.drawImage(img, 0, 0);
//
//   const dataURL = canvas.toDataURL('image/png');
//
//   return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
// };
