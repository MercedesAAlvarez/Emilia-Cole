const express = require('express')
const path = require('path')
const app = express ()
const port = 3000

app.use(express.static(path.resolve(__dirname,'public')))

app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'views','index.html')))/* va solo '/' porque es el acceso principal,el sendFile,porque enviamos un archivo? por q es la respuesta del acceso ppal la barra '/',es decir peticion de la barra */
app.get('/about',(req,res) => res.sendFile(path.resolve(__dirname,'views','about.html')))
app.get('/contact',(req,res) => res.sendFile(path.resolve(__dirname,'views','contact.html')))
app.get('/music',(req,res) => res.sendFile(path.resolve(__dirname,'views','music.html')))
app.get('/*',(req,res) => res.sendFile(path.resolve(__dirname,'views','404.html')))/* debe ir a lo ultimo una vez creada todas las paginas que vamos a necesitar,ira por ultimo el de 404 */

app.listen(port,() => console.log(`El servidor fue levantado con éxito en  http://localhost:${port}`))