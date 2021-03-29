const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const config = {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        contentBase: "./dist"
    },
    entry: {
        index: "./src/index.js",
        customAlert: "./src/customAlert.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/",
        clean: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "Sandbox: webpack 5",
            favicon: "./src/assets/sandbox-icon-16x16.png"
        })
    ]
};

module.exports = config;

/*

module.exports = function (env, argv) {
    if (!argv.mode) {
        config.mode = "development";
    }
    if (argv.mode === "development") {
        config.devtool = "eval-source-map";
    }
    return config;
};

*/
