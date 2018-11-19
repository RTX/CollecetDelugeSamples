
var fs = require('fs');
var parser = require('fast-xml-parser');
//var he = require('he');




var xmlFilePath = process.argv[2];
console.log("xmlFilePath: " + xmlFilePath);


var xmlData ="";

fs.readFile(xmlFilePath, function(err, data){
   // if(err) throw err;
    //filename must be without .html at the end
    xmlData = data;
    //console.log(xmlData);
    var fix ="<top>" + xmlData + "</top>";
    var jsonObj = parser.parse(fix );

  // console.log( parser.validate(xmlData));
    //var jsonObj = parser.parse(xmlData);
    console.log("-----");
    console.log(jsonObj);
});

 
   
    
    //var x = xmlDoc.getElementsByTagName("title")[0];

 
// Intermediate obj
//var tObj = parser.getTraversalObj(xmlData,options);
//var jsonObj = parser.convertToJson(tObj,options);