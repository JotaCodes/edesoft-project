const CracoAntDesignPlugin = require("craco-antd");
 
module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@primary-color": "#1972D1",
          "@link-color": "#1972D1",
        },
      },
    },
  ],
};