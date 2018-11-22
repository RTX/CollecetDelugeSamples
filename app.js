var fs = require('fs');
var parser = require('fast-xml-parser');
var dateTime = require('node-datetime');
var dt = dateTime.create();


var consoleFont_Reset = "\x1b[0m"
var consoleFont_FgBlue = "\x1b[34m";
var consoleFont_FgRed = "\x1b[31m";
var consoleFontF_gBlack = "\x1b[30m"
var consoleFont_FgRed = "\x1b[31m"
var consoleFont_FgGreen = "\x1b[32m"
var consoleFont_FgYellow = "\x1b[33m"
var consoleFont_FgBlue = "\x1b[34m"
var consoleFont_FgMagenta = "\x1b[35m"
var consoleFont_FgCyan = "\x1b[36m"
var consoleFont_FgWhite = "\x1b[37m"

// get Deluge root folder path 
var delugeRootFolderPath = process.argv[2];
if(delugeRootFolderPath == undefined || delugeRootFolderPath == ""){
  logError("Please enter deluge Root folder path: - $node app.js [root folder path] ");  
} else {
  var delugeSongsFolder = delugeRootFolderPath + "/SONGS";
  var xmlData ="";
  Scan();
}




function Scan(){
  try{  
    var formatted = dt.format('Y-m-d H:M:S');
    console.log("");
    console.log(consoleFont_FgYellow,"----------------- Scan Start " + formatted +"-----------------",consoleFont_Reset);          

    fs.readdirSync(delugeSongsFolder).forEach(file => {
      if(file.startsWith("SONG"))
      fs.readFile(file, function(err, data){
          xmlData = data;
          var xmlRootNodeFix ="<root>" + xmlData + "</root>";
          var jsonObj = parser.parse(xmlRootNodeFix );
          console.log(consoleFont_FgMagenta,file + ":");   
          var instruments =jsonObj.root.song.instruments;    
          checkSounds(instruments);
          checkKits(instruments);
          formatted = dt.format('Y-m-d H:M:S');
          console.log(consoleFont_FgYellow,"----------------- Scan Complete " + formatted +"-----------------",consoleFont_Reset);          
          console.log("");
        }) 
    });
  }
  catch(err){

    logError("Deluge Root folder path Not Valid:");
   
   
  }
}





function checkSounds(instruments){
  if(instruments.sound != undefined)  {          
    if(instruments.sound.length == undefined) {
      traversSoundSamples(instruments.sound);   
      console.log(consoleFont_Reset,"")       
    }
    else  {
      for(var i = 0;i < instruments.sound.length;i++) {          
        traversSoundSamples(sound[i]);
      };
    }
  }

}

function traversSoundSamples(sound){

  var osc1_filenpath = sound.osc1.fileName;
  
  if(osc1_filenpath != undefined)
  {
    var osc1_fullFilePath =  delugeRootFolderPath + "/" + osc1_filenpath
            

    if (!fs.existsSync(osc1_fullFilePath)) {
      logFiles("       " + osc1_filenpath );
      }; 
  }
  var osc2_filenpath =  sound.osc2.fileName;
  if(osc2_filenpath != undefined)
  {
    
    var osc2_fullFilePath =  delugeRootFolderPath + "/" + osc2_filenpath
    if (!fs.existsSync(osc2_fullFilePath)) {
      logFiles("       " + osc2_filenpath );
      }; 
             
  }
};

function checkKits(instruments){
  if(instruments.kit != undefined)  {
    if(instruments.kit.length == undefined) {
      traversKitSamples(instruments.kit);
    }
    else  {
      for(var i = 0;i < instruments.kit.length;i++) {          
        traversKitSamples(kit[i]);
      };
    }
  }
}

function traversKitSamples(kit){
  for(var y=0;y < kit.soundSources.sound.length;y++){
    var osc1_filenpath = kit.soundSources.sound[y].osc1.fileName;
    var osc2_filenpath = kit.soundSources.sound[y].osc2.fileName;

    
   
  //  console.log("-----osc1---: " + osc1_filenpath);
  //  console.log("-----osc2---: " + osc2_filenpath);
    // check OSC1
    if(osc1_filenpath !=null || osc1_filenpath != "")
    {
      var osc1_fullFilePath =  delugeRootFolderPath + "/" + osc1_filenpath
      if (!fs.existsSync(osc1_fullFilePath)) {
        logFiles("       " + osc1_filenpath );
        }; 
    }
    // check OSC2
    if(osc2_filenpath !=null || osc2_filenpath != "")
    {
      var osc2_fullFilePath =  delugeRootFolderPath + "/" + osc2_filenpath
      if (!fs.existsSync(osc2_fullFilePath)) {
        logFiles("       " + osc2_filenpath );
        }; 
    }               
  };   
}


function logError(text){  
  console.log("")
  console.log(consoleFont_FgRed,"**** error ****");
  console.log(consoleFont_FgRed,text);
  console.log(consoleFont_Reset,"")
}

function logFiles(text){
  
  console.log(consoleFont_FgGreen,text);
}