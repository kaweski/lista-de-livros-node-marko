// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodejs-project$1.0.0/src/app/views/base/login/login.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    skeleton_template = marko_loadTemplate(require.resolve("../../skeleton/skeleton.marko")),
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  include_tag({
      _target: skeleton_template,
      name: {
          renderBody: function renderBody(out) {
            out.w("Login");
          }
        },
      content: {
          renderBody: function renderBody(out) {
            if (data.mensagem) {
              out.w("<div><div class=\"alert alert-danger\">" +
                marko_escapeXml(data.mensagem) +
                "</div></div>");
            }

            out.w("<form action=\"/login\" method=\"post\"><div class=\"form-group\"><label for=\"email\">E-mail</label><input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Insira seu e-mail\"></div><div class=\"form-group\"><label for=\"senha\">Senha</label><input type=\"password\" class=\"form-control\" name=\"senha\" id=\"senha\" placeholder=\"Senha\"></div><button type=\"submit\" class=\"btn btn-primary\">Entrar</button></form>");
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
    id: "/nodejs-project$1.0.0/src/app/views/base/login/login.marko",
    tags: [
      "../../skeleton/skeleton.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
