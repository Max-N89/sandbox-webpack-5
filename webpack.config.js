const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.js",
        customAlert: "./src/customAlert.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "./dist"),
        clean: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "Sandbox: webpack 5",
            favicon: "./src/assets/sandbox-icon-16x16.png"
        })
    ]
};
