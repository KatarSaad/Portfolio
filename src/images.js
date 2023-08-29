


const imageContext = require.context('./images', false, /\.(png|jpe?g|svg)$/);

// Map over the filenames and require them
const images = imageContext.keys().map(imageContext);

export default images;