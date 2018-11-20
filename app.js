
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

    //var count = jsonObj.top
    

  // console.log( parser.validate(xmlData));
    //var jsonObj = parser.parse(xmlData);
    console.log("-----");
    
    for(var i = 0;i <jsonObj.top.song.instruments.kit.length;i++)
    {
      for(var y=0;y < jsonObj.top.song.instruments.kit[i].soundSources.sound.length;y++)
      {
          console.log(jsonObj.top.song.instruments.kit[i].soundSources.sound[y].osc1.fileName);
      // console.log(jsonObj.top.song.instruments.kit[i].soundSources.sound[y].osc1.fileName);
      }
      console.log("=====");
    };
    
});

 
   
    
    //var x = xmlDoc.getElementsByTagName("title")[0];

 
// Intermediate obj
//var tObj = parser.getTraversalObj(xmlData,options);
//var jsonObj = parser.convertToJson(tObj,options);