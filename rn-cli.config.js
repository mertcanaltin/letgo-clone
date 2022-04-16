module.exports = {
    getTransformModulePath() {
      return require.resolve("react-native-sass-transformer");
    },
    getSourceExts() {
      return ["js", "jsx", "scss", "sass"];
    }
  };