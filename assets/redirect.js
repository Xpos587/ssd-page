// gitbook old links redirect
var PREFIX_EN = "/v/english";
var PREFIX_RU = "/v/russkii";
var pathname = window.location.pathname;

if (pathname.startsWith(PREFIX_EN)) {
    window.location.pathname = "/en" + pathname.substr(PREFIX_EN.length);
} else if (pathname.startsWith(PREFIX_RU)) {
    window.location.pathname = pathname.substr(PREFIX_EN.length);
}