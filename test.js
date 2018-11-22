
var fs = require('fs');

var delugeRootFolderPath = process.argv[2];

try{
    fs.mkdirSync(delugeRootFolderPath + "/SAMPLES/" + "test", 0744);
}
catch(err){
}
