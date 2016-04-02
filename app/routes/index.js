"use strict";

module.exports = routes;

function routes(app) {
    
    //Sends JSON string of IP, language, and OS when no parameter is passed
    app.get("/", function(req, res){
        var ipaddress = req.headers['x-forwarded-for'];
        
        //Removes string content after comma for accept-language header
        var comma = req.headers["accept-language"].indexOf(",");
        var language = req.headers["accept-language"].slice(0, comma);
  
        //Only includes string value between first parens for user-agent
        var openParen = req.headers["user-agent"].indexOf("(");
        var closeParen = req.headers["user-agent"].indexOf(")");
        var software = req.headers["user-agent"].slice(openParen + 1, closeParen);
  
        //Creates JSON
        var outputJSON = {
            "ipaddress": ipaddress,
            "language": language,
            "software": software
        }
  
        //Server response
        res.send(JSON.stringify(outputJSON));
  
    })
    
    //Sends entire string of a single header when passed as url parameter
    //Sends full header JSON string when "/full" is passed as url parameter
    app.get("/:header", function(req, res) {
        var header = req.params.header;
        
        if (header === "full") {
            res.send(JSON.stringify(req.headers));
        }
        
        var headerContent = req.headers[header];
        
        //Creates JSON
        var outputJSON = {
            [header]: headerContent
        }
        
        //Server response
        res.send(JSON.stringify(outputJSON));
        
    })
}