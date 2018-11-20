var fs = require('fs');
var parser = require('fast-xml-parser');

var delugeRootFolderPath = process.argv[2];
var delugeSongsFolder = delugeRootFolderPath + "/SONGS";
var xmlData ="";

fs.readdirSync(delugeSongsFolder).forEach(file => {
   fs.readFile(file, function(err, data){
      xmlData = data;
      var xmlRootNodeFix ="<root>" + xmlData + "</root>";
      var jsonObj = parser.parse(xmlRootNodeFix );
      console.log(file + ":");    
      var instruments =jsonObj.root.song.instruments;
      for(var i = 0;i < instruments.kit.length;i++){
        
        for(var y=0;y < instruments.kit[i].soundSources.sound.length;y++){
          var filenpath = instruments.kit[i].soundSources.sound[y].osc1.fileName;
          var fullFilePath =  delugeRootFolderPath + "/" + filenpath
          if (!fs.existsSync(fullFilePath)) {
            console.log("       " + filenpath );
            };      
        };     
      };
      console.log("----------------------------");          
  }) 
});
