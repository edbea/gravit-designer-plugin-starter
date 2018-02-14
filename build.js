var request = require("request");
var fs = require("fs");
var AdmZip = require('adm-zip');

console.log("Downloading Gravit Designer...");

var fileUrl = "https://designer.gravit.io/_downloads/mac/GravitDesignerPlugin.zip";
var output = __dirname + '/gravit-designer.zip';
request({url: fileUrl, encoding: null, "gzip": true}, function(err, resp, body) {
    if(err) throw err;
    
    fs.writeFile(output, body, function(err) {
        var zip = new AdmZip(output);
        zip.extractAllTo(__dirname + '/node_modules/gravit-designer', true);
        fs.unlink(output, function(err) {
                if(err) throw err;
            });
    });
});