// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodejs-project$1.0.0/src/app/views/livros/form/form.marko",
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
            out.w("Livro");
          }
        },
      content: {
          renderBody: function renderBody(out) {
            if (data.errosValidacao) {
              out.w("<div>");

              var for__4 = 0;

              marko_forEach(data.errosValidacao, function(erro) {
                var keyscope__5 = "[" + ((for__4++) + "]");

                out.w("<div class=\"alert alert-danger\">" +
                  marko_escapeXml(erro.param) +
                  " - " +
                  marko_escapeXml(erro.msg) +
                  "</div>");
              });

              out.w("</div>");
            }

            out.w("<form action=\"/livros/form\" method=\"post\">");

            if (data.livro.id) {
              out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" name=\"id\" value=\"" +
                marko_escapeXmlAttr(data.livro.id) +
                "\"></div>");
            }

            out.w("<div class=\"form-group\"><label for=\"titulo\">Titulo:</label><input type=\"text\" id=\"titulo\" name=\"titulo\" value=\"" +
              marko_escapeXmlAttr(data.livro.titulo) +
              "\" placeholder=\"Informe o título do livro\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"preco\">Preço:</label><input type=\"text\" id=\"preco\" name=\"preco\" placeholder=\"150.25\" value=\"" +
              marko_escapeXmlAttr(data.livro.preco) +
              "\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"descricao\">Descrição:</label><textarea cols=\"20\" rows=\"3\" id=\"descricao\" name=\"descricao\" placeholder=\"Descreva o livro\" class=\"form-control\">" +
              marko_escapeXml(data.livro.descricao) +
              "</textarea></div><div class=\"row align-items-center justify-content-space\"><div class=\"col\"><a href=\"/livros\" class=\"btn btn-secondary\">Voltar</a></div><div class=\"col\"><div class=\"text-right\"><button type=\"submit\" class=\"btn btn-primary btn-lg\">Salvar</button></div></div></div></form>");
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
    id: "/nodejs-project$1.0.0/src/app/views/livros/form/form.marko",
    tags: [
      "../../skeleton/skeleton.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
