// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodejs-project$1.0.0/src/app/views/base/home/home.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    skeleton_template = marko_loadTemplate(require.resolve("../../skeleton/skeleton.marko")),
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  include_tag({
      _target: skeleton_template,
      name: {
          renderBody: function renderBody(out) {
            out.w("Home");
          }
        },
      content: {
          renderBody: function renderBody(out) {
            out.w("<p>Trabalho desenvolvido em Node.js para a disciplina <strong>Desenvolvimento Back-end</strong>, ministrada pelo professor Flávio Laper.<br></p>");
          }
        },
      [hasRenderBodyKey]: true
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nodejs-project$1.0.0/src/app/views/base/home/home.marko",
    tags: [
      "../../skeleton/skeleton.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
