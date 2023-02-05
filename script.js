window.onload = function() {
  const fileInput = document.getElementById("fileInput");
  fileInput.addEventListener("change", function() {
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
      const fileContent = reader.result;
      const lines = fileContent.split("\n");
      counter = 0,name =""
      const htmlTags = ["<a>","<abbr>","<address>","<area>","<article>","<aside>","<audio>","<b>","<base>","<bdi>","<bdo>","<blockquote>","<body>","<br>","<button>","<canvas>","<caption>","<cite>","<code>","<col>","<colgroup>","<data>","<datalist>","<dd>","<del>","<details>","<dfn>","<dialog>","<div>","<dl>","<dt>","<em>","<embed>","<fieldset>","<figcaption>","<figure>","<footer>","<form>","<h1>","<h2>","<h3>","<h4>","<h5>","<h6>","<head>","<header>","<hgroup>","<hr>","<html>","<i>","<iframe>","<img>","<input>","<ins>","<kbd>","<label>","<legend>","<li>","<link>","<main>","<map>","<mark>","<menu>","<menuitem>","<meta>","<meter>","<nav>","<noscript>","<object>","<ol>","<optgroup>","<option>","<output>","<p>","<param>","<picture >","<pre>","<progress>","<q>","<rb>","<rp>","<rt>","<rtc>","<ruby>","<s>","<samp>","<script>","<section>","<select>","<slot>","<small>","<source>","<span>","<strong>","<style>","<sub>","<summary>","<sup>","<table>","<tbody>","<td>","<template>","<textarea>","<tfoot>","<th>","<thead>","<time>","<title>","<tr>","<track>","<u>","<ul>","<var>","<video>","<wbr>"];
      for (let line of lines) {
        // name += getName(line)
        tag_name_start = "<title>"
        tag_name_end = "</title>"
        line = line.toString()
        line = line.trim()
        if(line.includes(tag_name_start)){
            var index_start = line.indexOf(tag_name_start)+7
            var index_end = line.indexOf(tag_name_end)
            name = line.substring(index_start, index_end)
        }
       
        for (let index = 0; index < htmlTags.length; index++) {
            if(line.includes(htmlTags[index])){
                counter++;
                console.log(htmlTags.length+" "+htmlTags[index])   
                htmlTags.splice(index,1) 
            }
            
        }
      }
      console.log(`Counter is ${counter} and Name is ${name}`);
    };
  });
};