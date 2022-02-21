"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklamb_todo"] = self["webpackChunklamb_todo"] || []).push([["src_js_music_js"],{

/***/ "./src/js/music.js":
/*!*************************!*\
  !*** ./src/js/music.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _json_music_info_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json/music.info.json */ \"./src/json/music.info.json\");\n\r\n\r\nlet currentIndex = 0\r\nlet timer = null\r\nconst musicWraEl = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getDom)(\"#music-wrapper\")\r\nconst texts = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getDom)(\".texts\")\r\nconst songerEl = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getDom)(\"h3\", texts)\r\nconst songNameEl = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getDom)(\"p\", texts)\r\nconst nextMusicEl = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getDom)(\".icon-play-right-r\")\r\nconst preMusicEl = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getDom)(\".icon-play-left-l\")\r\nconst playEl = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getDom)(\"#icon-play\")\r\nconst progressEl = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getDom)(\".progress\")\r\nconst defaultMusic = _json_music_info_json__WEBPACK_IMPORTED_MODULE_1__[currentIndex]\r\nconst music = new Audio(defaultMusic.src)\r\nconst musicTime = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getDom)(\"#musicTime\")\r\n\r\n_setMusic(true)\r\n\r\nmusic.addEventListener(\"ended\", function () {\r\n  currentIndex++\r\n  currentIndex++\r\n  if (currentIndex > 4) {\r\n    currentIndex = 0\r\n  }\r\n  _setMusic()\r\n})\r\n\r\n\r\nplayEl.addEventListener(\"click\", function () {\r\n  const classList = this.classList\r\n  if (classList.contains(\"icon-play\")) {\r\n    classList.remove(\"icon-play\")\r\n    classList.add(\"icon-play_pause\")\r\n    _setMusic()\r\n    timer = setInterval(() => {\r\n      let percent = music.currentTime / music.duration\r\n      progressEl.style.width = percent * 100 + \"%\"\r\n      musicTime.innerText = `${_secondToText(music.currentTime)} / ${_secondToText(music.duration)}`\r\n    }, 100)\r\n  } else {\r\n    classList.remove(\"icon-play_pause\")\r\n    classList.add(\"icon-play\")\r\n    music.pause()\r\n    clearInterval(timer)\r\n    timer = null\r\n  }\r\n})\r\n\r\nnextMusicEl.addEventListener(\"click\", function () {\r\n  currentIndex++\r\n  if (currentIndex > 4) {\r\n    currentIndex = 0\r\n  }\r\n  _setMusic()\r\n})\r\n\r\npreMusicEl.addEventListener(\"click\", function () {\r\n  currentIndex--\r\n  if (currentIndex < 0) {\r\n    currentIndex = 4\r\n  }\r\n  _setMusic()\r\n})\r\n\r\nfunction _setMusic(init) {\r\n  const currentMusicInfo = _json_music_info_json__WEBPACK_IMPORTED_MODULE_1__[currentIndex]\r\n  music.src = currentMusicInfo.src\r\n  songNameEl.innerText = currentMusicInfo.title\r\n  songerEl.innerText = currentMusicInfo.auther\r\n  musicWraEl.style.background = `url(${currentMusicInfo.img}) no-repeat`\r\n  musicWraEl.style.backgroundSize = \"cover\"\r\n  if (!init) {\r\n    music.play()\r\n    _setPlayStatus()\r\n  }\r\n}\r\n\r\nfunction _secondToText(second) {\r\n  second = parseInt(second)\r\n  let min = parseInt(second / 60)\r\n  let sec = second % 60\r\n  sec = sec < 10 ? '0' + sec : '' + sec\r\n  return min + ':' + sec\r\n}\r\n\r\nfunction _setPlayStatus() {\r\n  const classList = playEl.classList\r\n  classList.remove(\"icon-play\")\r\n  classList.add(\"icon-play_pause\")\r\n}\n\n//# sourceURL=webpack://lamb-todo/./src/js/music.js?");

/***/ }),

/***/ "./src/json/music.info.json":
/*!**********************************!*\
  !*** ./src/json/music.info.json ***!
  \**********************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"src\":\"https://cloud.hunger-valley.com/music/ifyou.mp3\",\"title\":\"IF YOU\",\"auther\":\"Big Bang\",\"img\":\"https://img1.baidu.com/it/u=2747140787,2100611170&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=286\"},{\"src\":\"https://webfs.ali.kugou.com/202202201714/e4013bbb5fd30f788f83c591ca4bd7b6/KGTX/CLTX001/8bdb02fd9d05c8768384caa9d1c5735f.mp3\",\"title\":\"梦想之路\",\"auther\":\"周深\",\"img\":\"https://img0.baidu.com/it/u=2288733380,1262175501&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800\"},{\"src\":\"https://cloud.hunger-valley.com/music/%E7%8E%AB%E7%91%B0.mp3\",\"title\":\"玫瑰\",\"auther\":\"贰佰\",\"img\":\"https://img0.baidu.com/it/u=2694107763,2721496187&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=129\"},{\"src\":\"https://webfs.ali.kugou.com/202202201719/4d4d6ffe4f2003ec3e24e0a3dfb87642/part/0/960129/KGTX/CLTX001/7e41d804f29fbc74748b0268477d6e1c.mp3\",\"title\":\"不值得\",\"auther\":\"单依纯\",\"img\":\"https://img2.baidu.com/it/u=502513550,316127285&fm=253&fmt=auto&app=138&f=JPEG?w=492&h=273\"},{\"src\":\"https://webfs.ali.kugou.com/202202201719/8ca2e224153cae2ab08e8f326d953524/KGTX/CLTX001/1a83eaedde7666ce81300d64b37402d9.mp3\",\"title\":\"雪龙吟\",\"auther\":\"张杰\",\"img\":\"https://img1.baidu.com/it/u=2147970721,3745238081&fm=253&fmt=auto&app=138&f=JPEG?w=944&h=500\"}]');\n\n//# sourceURL=webpack://lamb-todo/./src/json/music.info.json?");

/***/ })

}]);