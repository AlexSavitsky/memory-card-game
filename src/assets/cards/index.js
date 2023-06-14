const images = [];
const importAll = (requireContext) => requireContext.keys().forEach((key, index) => images[index] = requireContext(key));

importAll(require.context('./', false, /\.(png|jpe?g|jfif)$/));

export default images;
