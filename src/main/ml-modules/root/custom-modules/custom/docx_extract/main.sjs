const DataHub = require("/data-hub/5/datahub.sjs");
const datahub = new DataHub();

function main(content, options) {
  const refernce_doc = "/keywords.json";

  let id = content.uri;
  let context = content.context;
  let outputFormat = datahub.flow.consts.XML
  let doc = fn.head(fn.doc(id));
  let instance = xdmp.documentFilter(doc);
  let txt = xdmp.quote(instance.root);
  let matches = [];
  let cat_matches = [];
  let data = {};
  let reference = xdmp.toJSON(fn.head(fn.doc(refernce_doc))).root.envelope.instance.keywords;
  
  for (var i = 0; i < reference.length; i++) {
    if (fn.contains(txt, reference[i].key)) {
      matches.push(reference[i].key);
      cat_matches.push(reference[i].value);
    }
  }
  
  data.uri_tokens = fn.tokenize(id, "/").toArray().slice(1);
  data.keyword_matches = matches;
  data.category_matches = cat_matches;
  data.text = txt;
  content.uri = id + '.json';
  content.value = datahub.flow.flowUtils.makeEnvelope(data, {}, {}, datahub.flow.consts.JSON);
  content.context = context;
  return content;
}

module.exports = {
  main: main
};