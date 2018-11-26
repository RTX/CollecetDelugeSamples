var fs = require('fs');
var parser = require('fast-xml-parser');
var js2xmlparser = require("js2xmlparser")
var dateTime = require('node-datetime');


var dt = dateTime.create();
var  fileData ="";
var logData = "";
var delugeSongsFolder = "";

// console fonts 
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
var SongsSamplesFolderPath = delugeRootFolderPath + "/SAMPLES/COLLECTED/";

if(delugeRootFolderPath == undefined || delugeRootFolderPath == ""){
  logError("Please enter deluge Root folder path: - $node app.js [root folder path] ");  
} 
else 
{
  delugeSongsFolder = delugeRootFolderPath + "/SONGS";
  var xmlData ="";
  Scan();
}


// ------------------------------------------------------ //

// scan deluge songs folder 
function Scan(){
  try{  
    var formatted = dt.format('Y-m-d H:M:S');
    console.log("");
    console.log(consoleFont_FgYellow,"----------------- Scan Start " + formatted +"-----------------",consoleFont_Reset);          

    try{
      // create a SONGS_SAMPLES folder
      fs.mkdirSync(SongsSamplesFolderPath,0744);
    }catch(err){};

    fs.readdirSync(delugeSongsFolder).forEach(file => {
      if(file.startsWith("SONG"))
      {
          fileData = fs.readFileSync(delugeSongsFolder + "/"+file);
          xmlData = fileData;
          // var xmlRootNodeFix ="<root>" + xmlData + "</root>";
          xmlData = xmlData.toString().replace("<firmwareVersion>2.0.3</firmwareVersion>","");
          xmlData = xmlData.toString().replace("<earliestCompatibleFirmware>2.0.0</earliestCompatibleFirmware>","");
         
          var jsonObj = parser.parse(xmlData );
          var filename_noExt = file.split(".")[0];
          try{
            // create a SONGS <FILENAME> folder 
            fs.mkdirSync( SongsSamplesFolderPath +filename_noExt, 0744);
          }catch(err){};          
          console.log(consoleFont_FgMagenta, file + ":");            
          var instruments =jsonObj.song.instruments;             
          checkSynths(instruments,file);
          checkKits(instruments,file);
          // write the new song file to the <SONG_NAME> folder
          fs.writeFile(SongsSamplesFolderPath  +filename_noExt+ "/NEW-"+file,fileData);
          // write the missing files into missing-<SONG_NAME>.txt  
          fs.writeFile(SongsSamplesFolderPath +filename_noExt+ "/MISSING-"+filename_noExt + ".txt" ,logData);
          // clean song and log data
          logData = "";
          fileData = "";
        }
        });
        formatted = dt.format('Y-m-d H:M:S');   
        console.log(consoleFont_FgYellow, "----------------- Proccess Completed " + formatted +"-----------------",consoleFont_Reset);          
        console.log("");

  }
  catch(err){
    logError(err);   
  }
}

function checkSynths(instruments,file){  
  if(instruments.sound != undefined)  {          
    if(instruments.sound.length == undefined) {
      traversSoundSamples(instruments.sound,file);   
      console.log(consoleFont_Reset,"")       
    }
    else  {
      for(var i = 0;i < instruments.sound.length;i++) {          
        traversSoundSamples(instruments.sound[i],file);
      };
    };
  };
};

function checkKits(instruments,file){
  if(instruments.kit != undefined)  {
    if(instruments.kit.length == undefined) {
      traversKitSamples(instruments.kit,file);
    }
    else  {
      for(var i = 0;i < instruments.kit.length;i++) {          
        traversKitSamples(instruments.kit[i],file);
      };
    };
  };
};

function traversSoundSamples(sound,file){ 
  // get the songs folder name
  var noExt_filename = file.split(".")[0];
  var osc1_filenpath = sound.osc1.fileName;  
  if(osc1_filenpath != undefined && osc1_filenpath != "")  {
    var osc1_fullFilePath =  delugeRootFolderPath + "/" + osc1_filenpath;
    if (!fs.existsSync(osc1_fullFilePath)) {
      logFiles("\t" + osc1_filenpath );
      }
      else{        
        var dest = getCopyToPath(osc1_fullFilePath,file);
        copyFile(osc1_fullFilePath, dest);
      };
  };
  var osc2_filenpath =  sound.osc2.fileName;
  if(osc2_filenpath != undefined && osc2_filenpath != "")  {    
    var osc2_fullFilePath =  delugeRootFolderPath + "/" + osc2_filenpath
    if (!fs.existsSync(osc2_fullFilePath)) {
      logFiles("\t" + osc2_filenpath );
      }else{
        var dest = getCopyToPath(osc2_fullFilePath,file);
        copyFile(osc2_fullFilePath, dest);
      };             
  };
};


function traversKitSamples(kit,file){
  for(var y=0;y < kit.soundSources.sound.length;y++){
    var osc1_filenpath = kit.soundSources.sound[y].osc1.fileName;
    var osc2_filenpath = kit.soundSources.sound[y].osc2.fileName;

    // check OSC1
    if(osc1_filenpath !=undefined &&  osc1_filenpath != "") {
      var osc1_fullFilePath =  delugeRootFolderPath + "/" + osc1_filenpath
      if (!fs.existsSync(osc1_fullFilePath)) {
        logFiles("\t" + osc1_filenpath );
        } else {
          var dest = getCopyToPath(osc1_fullFilePath,file);
          copyFile(osc1_fullFilePath, dest);
         // kit.soundSources.sound[y].osc1.fileName = dest.replace(delugeRootFolderPath,"");
        };  
    
    };
    // check OSC2
    if(osc2_filenpath !=undefined && osc2_filenpath != "") {
      var osc2_fullFilePath =  delugeRootFolderPath + "/" + osc2_filenpath
      if (!fs.existsSync(osc2_fullFilePath)) {
        logFiles("\t" + osc2_filenpath );
      } else {
        var dest = getCopyToPath(osc2_fullFilePath,file);
        copyFile(osc2_fullFilePath, dest);
      //  kit.soundSources.sound[y].osc2.fileName = dest.replace(delugeRootFolderPath,"");

      };   
    };            
  };   
};


function logError(text){  
  console.log("")
  console.log(consoleFont_FgRed,"**** error ****");
  console.log(consoleFont_FgRed,text);
  console.log(consoleFont_Reset,"")
}

function logFiles(text){ 
  logData +=  text + "\r"
  console.log(consoleFont_FgGreen,text);
}

function getCopyToPath(sourcefile, file){
  // console.log(consoleFont_FgCyan,sourcefile,consoleFont_Reset);
   var filename = sourcefile.split('/').pop();
  var fileNewFolderName = file.split(".")[0]
   var dest = SongsSamplesFolderPath+fileNewFolderName + "/"+filename
 
   return dest;
 };

function copyFile(source, destination) {
  
  try{
    if(!fs.existsSync(destination)){
      var streem =  fs.createReadStream(source);
      streem.pipe(fs.createWriteStream(destination));

      src = source.replace(delugeRootFolderPath+ "/","");
      dst  = destination.replace(delugeRootFolderPath + "/","");

      fileData = fileData.toString().replace(src,dst);
  };
  }catch(err){
    console.log(err);
  }
  
};
