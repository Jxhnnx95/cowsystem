// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var now = moment("20111031", "YYYYMMDD").fromNow();
var date = $('.actualizar');
date.innerHTML = now;