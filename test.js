
var fs = require('fs');
var js2xmlparser = require("js2xmlparser")
var parser = require('fast-xml-parser');



fs.readFile("/Users/rotemor/Desktop/DelugeSampleLinker/DellugeXMLSync/SONG000.XML", 
    function(err, xmlData) {
    
    xmlData = xmlData.toString().replace("<firmwareVersion>2.0.3</firmwareVersion>","");
         xmlData = xmlData.toString().replace("<earliestCompatibleFirmware>2.0.0</earliestCompatibleFirmware>","");
         
         
          var jsonObj = parser.parse(xmlData );
          var xml = js2xmlparser.parse("song", jsonObj.song.instruments)
          fs.writeFile("T.XML",xml);
       
    
       

});

/*
try{
   
    fs.readFile("SONG000.XML", function(err, data){
        xmlData = data;
        // var xmlRootNodeFix ="<root>" + xmlData + "</root>";
        xmlData = xmlData.toString().replace("<firmwareVersion>2.0.3</firmwareVersion>","");
        xmlData = xmlData.toString().replace("<earliestCompatibleFirmware>2.0.0</earliestCompatibleFirmware>","");
        

        var xml =xmlData;
      
        var options = {ignoreComment: true, alwaysChildren: true, ignoreDeclaration: true};
        var jsonResult = convert.xml2js(xml, options); 
        //var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
      //  var jsonResult = convert.xml2json(xml, {compact: false, spaces: 4});
      fs.writeFile("T.json",jsonResult.toString());
        var options = {compact: true, ignoreComment: true, spaces: 4};
        var xmlResults = convert.json2xml(jsonResult, options);
        fs.writeFile("T.XML",xmlResults);
       

    });
}
catch(err){
}
*/
