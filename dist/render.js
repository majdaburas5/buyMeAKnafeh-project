class Renderer {
  constructor() {}
  renderer() {
    const source = $("#").html();
    let template = Handlebars.compile(source);
    const newHTML = template({});
    $(".").empty().append(newHTML);
  }
}
