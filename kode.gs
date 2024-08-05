function doGet(e) {
   let page = e.parameter.page;
   if (page == null) page = "index";
      var output = HtmlService.createTemplateFromFile(page);
   return output.evaluate()
      .addMetaTag('viewport', 'width=device-width , initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}

function include(filename) {
   return HtmlService.createTemplateFromFile(filename).evaluate()
      .getContent();
}

function myURL() {
   return ScriptApp.getService().getUrl();
}



