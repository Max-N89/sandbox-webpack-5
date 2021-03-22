import _ from "lodash";

function component() {
    const element = document.createElement("h1");

    element.textContent = _.join(["Hello", "webpack."], " ");

    return element;
}

document.querySelector("main").append(component());
