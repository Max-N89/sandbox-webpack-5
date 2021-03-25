import "./styles.css";
import webpackLogo from "./assets/webpack-logo.svg";
import exampleCSV from "./data-examples/example.csv";
import exampleXML from "./data-examples/example.xml";
import exampleTOML from "./data-examples/example.toml";
import exampleYAML from "./data-examples/example.yaml";
import exampleJSON5 from "./data-examples/example.json5";
import _ from "lodash";

function createMainHeader() {
    const header = document.createElement("header");
    const logoImg = new Image();
    const h1 = document.createElement("h1");

    logoImg.src = webpackLogo;
    h1.textContent = _.join(["Hello", "from", "webpack"], " ");

    header.append(logoImg, h1);

    return header;
}

const main = document.querySelector("#main");
const mainHeader = createMainHeader();

main.append(mainHeader);

const dataExamples = new Map([
    ["CSV", exampleCSV],
    ["XML", exampleXML],
    ["TOML", exampleTOML],
    ["YAML", exampleYAML],
    ["JSON5", exampleJSON5]
]);

dataExamples.forEach((value, key) => {
    console.log(`>>> ${key} <<<`, value);
});
