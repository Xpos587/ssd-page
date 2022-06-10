// gitbook old links redirect
var PREFIX_ENG = "/lang/english";
var PREFIX_RU = "/lang/russkii";
var pathname = window.location.pathname;

if (pathname.startsWith(PREFIX_ENG)) {
    window.location.pathname = "/en" + pathname.substring(PREFIX_EN.length);
} else if (pathname.startsWith(PREFIX_RU)) {
    window.location.pathname = pathname.substring(PREFIX_ENG.length);
}