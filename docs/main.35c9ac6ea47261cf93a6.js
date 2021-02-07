/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/js/http-provider.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var jokeUrl = 'https://api.chucknorris.io/jokes/random';
var urlUsuarios = 'https://reqres.in/api/users?page=2'; // Cloudinary

var cloudPreset = 'autwc6pa';
var cloudUrl = 'https://api.cloudinary.com/v1_1/dx0pryfzn/upload'; // Esta funcion regresa una promesa

var obtenerChiste = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var resp, _yield$resp$json, icon_url, id, value;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch(jokeUrl);

          case 3:
            resp = _context.sent;

            if (resp.ok) {
              _context.next = 6;
              break;
            }

            throw 'No se pudo realizar la peticion';

          case 6:
            _context.next = 8;
            return resp.json();

          case 8:
            _yield$resp$json = _context.sent;
            icon_url = _yield$resp$json.icon_url;
            id = _yield$resp$json.id;
            value = _yield$resp$json.value;
            return _context.abrupt("return", {
              icon_url: icon_url,
              id: id,
              value: value
            });

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 15]]);
  }));

  return function obtenerChiste() {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Obtiene los usuarios
 */


var obtenerUsuarios = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var resp, _yield$resp$json2, usuarios;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch(urlUsuarios);

          case 2:
            resp = _context2.sent;
            _context2.next = 5;
            return resp.json();

          case 5:
            _yield$resp$json2 = _context2.sent;
            usuarios = _yield$resp$json2.data;
            return _context2.abrupt("return", usuarios);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function obtenerUsuarios() {
    return _ref2.apply(this, arguments);
  };
}())); // ArchivoSubir :: File

/**
 * 
 * @param {*} archivoSubir 
 */


var subirImagen = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(archivoSubir) {
    var formData, resp, cloudResp;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // nos crea el resultado de un formulario html pero esta listo en javascript
            formData = new FormData();
            formData.append('upload_preset', cloudPreset);
            formData.append('file', archivoSubir);
            _context3.prev = 3;
            _context3.next = 6;
            return fetch(cloudUrl, {
              method: 'POST',
              body: formData
            });

          case 6:
            resp = _context3.sent;

            if (!resp.ok) {
              _context3.next = 14;
              break;
            }

            _context3.next = 10;
            return resp.json();

          case 10:
            cloudResp = _context3.sent;
            return _context3.abrupt("return", cloudResp.secure_url);

          case 14:
            _context3.next = 16;
            return resp.json();

          case 16:
            throw _context3.sent;

          case 17:
            _context3.next = 22;
            break;

          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3["catch"](3);
            throw _context3.t0;

          case 22:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 19]]);
  }));

  return function subirImagen(_x) {
    return _ref3.apply(this, arguments);
  };
}()));


;// CONCATENATED MODULE: ./src/js/chistes-page.js
function chistes_page_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function chistes_page_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { chistes_page_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { chistes_page_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

 // referencia al body

var body = document.body;
var btnOtro, olList;
var correlativo = 0;
/***    
 * Crea el html de manera dinamica
 */

var crearChistesHtml = function crearChistesHtml() {
  var html = "\n        <h1 class=\"mt-5 text-center\">Chistes</h1>\n        <hr>\n\n        <button class=\"badge rounded-pill bg-success ms-2\"> Otro chiste </button>\n\n        <ol class=\"mt-2 list-group\"> </ol>\n    "; // Creo el div y le agrego el html

  var divChistes = document.createElement('div');
  divChistes.innerHTML = html;
  body.append(divChistes);
};
/**
 * Los eventos que tendra la pagina de chistes
 * 
 */


var eventos = function eventos() {
  olList = document.querySelector('ol'); // PORQUE SOLO TENGO UN ORDERLIST EN LA PAGINA

  btnOtro = document.querySelector('button');
  /**
   * click en el boton hace peticion http, traer ese chiste 
   * y se dibuja llamando al metodo dibujarChiste
   * obtenerChiste funcion que se encuentra en nuestro http-provider.js
   * 
   * */

  btnOtro.addEventListener('click', /*#__PURE__*/chistes_page_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            btnOtro.disabled = true;
            _context.t0 = dibujarChiste;
            _context.next = 4;
            return obtenerChiste();

          case 4:
            _context.t1 = _context.sent;
            (0, _context.t0)(_context.t1);
            // bloqueando el boton hasta que se obtenga la información
            // asi evito que hacer el doble click te saque dos al instante
            btnOtro.disabled = false;

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
};
/**
 * Crea el html para agregar el chiste
 * @param { se recibe un } chiste Chiste { id, value }
 */


var dibujarChiste = function dibujarChiste(chiste) {
  var olItem = document.createElement('li');
  correlativo++;
  olItem.innerHTML = "".concat(correlativo, ".<b> ").concat(chiste.id, "</b>: ").concat(chiste.value);
  olItem.classList.add('list-group-item');
  olItem.classList.add('list-group-item-primary');
  olList.append(olItem);
}; // funcion init lo que hace es llamar a nuestras funciones


var init = function init() {
  crearChistesHtml();
  eventos();
};
;// CONCATENATED MODULE: ./src/index.js
 //import { init } from './js/usuarios-page';
//import { init } from './js/archivos-page';
//import * as CRUD from './js/crud-provider'; // Aqui se dice toma todo lo que esta exportado en este archivo y en mi index se llamara crud

init(); // CRUD.getUsuario( 2 ).then( console.log );
// CRUD.crearUsuario({
//     name: 'Arturo',
//     job: 'Constructor'
// }).then( console.log );
// CRUD.actualizarUsuario( 1, {
//     name: 'Tamara',
//     job: 'Developer'
// }).then( console.log );
// CRUD.borrarUsuario( 1 ).then( console.log );
/******/ })()
;