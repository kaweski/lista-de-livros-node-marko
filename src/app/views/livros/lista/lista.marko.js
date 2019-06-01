// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodejs-project$1.0.0/src/app/views/livros/lista/lista.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    skeleton_template = marko_loadTemplate(require.resolve("../../skeleton/skeleton.marko")),
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  include_tag({
      _target: skeleton_template,
      name: {
          renderBody: function renderBody(out) {
            out.w("Listagem de livros");
          }
        },
      content: {
          renderBody: function renderBody(out) {
            out.w("<p><a href=\"/livros/form\" class=\"btn btn-primary\">Cadastrar livro</a></p><table id=\"livros\" class=\"table table-striped table-hover\"><thead><tr><th>ID</th><th>Título</th><th>Preço</th><th>Editar</th><th>Remover</th></tr></thead><tbody>");

            var for__14 = 0;

            marko_forEach(data.livros, function(livro) {
              var keyscope__15 = "[" + ((for__14++) + "]");

              out.w("<tr id=\"livro_" +
                marko_escapeXmlAttr(livro.id) +
                "\"><td>" +
                marko_escapeXml(livro.id) +
                "</td><td>" +
                marko_escapeXml(livro.titulo) +
                "</td><td>" +
                marko_escapeXml(livro.preco) +
                "</td><td><a href=\"/livros/form/" +
                marko_escapeXmlAttr(livro.id) +
                "\">Editar</a></td><td><a href=\"#\" data-ref=\"" +
                marko_escapeXmlAttr(livro.id) +
                "\" data-type=\"remocao\">Remover</a></td></tr>");
            });

            out.w("</tbody></table><script src=\"/estatico/js/scripts.js\"></script>");
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
    id: "/nodejs-project$1.0.0/src/app/views/livros/lista/lista.marko",
    tags: [
      "../../skeleton/skeleton.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
