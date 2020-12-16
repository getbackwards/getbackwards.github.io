// Styles based on these code pens
// https://codepen.io/YangTyro/pen/KKgWgYb
// https://codepen.io/mburakerman/pen/roJmaZ

const buttons = document.getElementsByTagName("button");

for (const button of buttons) {
  button.addEventListener("click", () => {
    let id = button.getAttribute("id");
    console.log(id);

    let layerClass = "." + id + "-layer";
    console.log(layerClass);
    let layers = document.querySelectorAll(layerClass);
    console.log(layers);
    for (const layer of layers) {
      layer.classList.toggle("active");
    }
  });
}
