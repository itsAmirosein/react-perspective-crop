// داخل کامپوننت یا فانکشن
const downloadImage = async (value: Blob) => {
  const url = URL.createObjectURL(value);
  const a = document.createElement("a");

  a.href = url;
  a.download = "cropped-image.jpg";
  a.click();
};

export default downloadImage;
