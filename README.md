# Request Header Parser Microservice

A simple request header parser that returns a JSON object of request headers

## Use

1) By default, a JSON of IP, Language, and OS is returned.

2) Users can retrieve a JSON object with full header content with a GET request to "/full"

3) Users can specify a single header with a GET request to "/\<header string\>"

## Examples

* GET "/" => "{"ipaddress":"\<IP address\>","language":"en-US","software":"Windows NT 10.0; WOW64"}"
* GET "/accept-language" => "{"accept-language":"en-US,en;q=0.8"}"
* GET "/vacantKey" => "{}"