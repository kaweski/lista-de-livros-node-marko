// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodejs-project$1.0.0/src/app/views/skeleton/skeleton.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"><title>");

  include_tag({
      _target: input.name
    }, out, __component, "4");

  out.w("</title><link rel=\"stylesheet\" href=\"/estatico/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/font-awesome.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/styles.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\"><div class=\"container\"><a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-code\"></i></a><span>Desenvolvimento Backend em Node.js</span></div></nav><div class=\"jumbotron\"><div class=\"container\"><h1 class=\"display-4\">");

  include_tag({
      _target: input.name
    }, out, __component, "17");

  out.w("</h1></div></div><div class=\"container\">");

  include_tag({
      _target: input.content
    }, out, __component, "19");

  out.w("</div><footer class=\"jumbotron footer\"><div class=\"container\"><div class=\"row align-items-center justify-content-start\"><div class=\"col-2\"><ul class=\"list-unstyled list-inline social-list\"><li class=\"list-inline-item\"><a href=\"http://www.github.com/naweskil\" target=\"_blank\"><i class=\"fab fa-github\"></i></a></li><li class=\"list-inline-item\"><a href=\"http://www.linkedin.com/in/isadorakaweski\" target=\"_blank\"><i class=\"fab fa-linkedin-in\"></i></a></li><li class=\"list-inline-item\"><a href=\"http://www.twitter.com/kaweskisa\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a></li></ul></div><div class=\"col-8\"><p><i class=\"fas fa-code\"></i></p><p>Trabalho desenvolvido para a disciplina <strong>Desenvolvimento Back-end</strong>, ministrada pelo professor Flávio Laper.</p><p>Desenvolvido por Natasha Kaweski, utilizando <a href=\"https://nodejs.org/en/\" target=\"_blank\">Node.js</a> e bibliotecas como <a href=\"https://markojs.com/\" target=\"_blank\">Marko.js</a> e <a href=\"https://getbootstrap.com/\" target=\"_blank\">Bootstrap</a> para renderização do front-end.</p></div></div></div></footer><script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script><script type=\"text/javascript\" src=\"/estatico/js/font-awesome.min.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "45");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nodejs-project$1.0.0/src/app/views/skeleton/skeleton.marko",
    tags: [
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
