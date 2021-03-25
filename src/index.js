import _ from "lodash";
import customAlert from "./customAlert";

function createMainHeader() {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    const button = document.createElement("button");

    h1.textContent = _.join(["Hello", "from", "webpack."], " ");
    button.textContent = "Click me to get alert message";
    button.addEventListener("click", customAlert.bind(null, "Grz, you did it."));

    header.append(h1, button);

    return header;
}

const mainHeader = createMainHeader();

document.body.append(mainHeader);
