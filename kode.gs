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

function funcDataPegawai() { 
  const sheetPegawai = SpreadsheetApp.openById(idSheet).getSheetByName("PEGAWAI");
  const judulPegawai = sheetPegawai.getRange("B1:E1").getValues()[0];
  const dataPegawai = sheetPegawai.getRange("B2:E" + sheetPegawai.getLastRow()).getValues();
    const objDataPegawai = dataPegawai.map(row => {let obj = {};
    judulPegawai.forEach((key, index) => {
    if (typeof key === 'string' && key.trim() !== '') {
    const formattedKey = key.toLowerCase().replace(/-/g, '').replace(/\s/g, '');
    obj[formattedKey] = row[index] || ''; }});
    return obj;});
    //console.log(objDataPegawai);
    return objDataPegawai;
    }

function cekJmlPegawai() {
    try { const ambilData = funcDataPegawai();
    const jumlahID = ambilData.filter(item => item.hasOwnProperty('id')).length; // Hitung jumlah ID
    console.log(jumlahID);
    return jumlahID;
   } catch (e) { Logger.log('error cekDataDistri: ' + e); 
   }
   }


