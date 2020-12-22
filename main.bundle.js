webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {Content} from '../Content';
var FirebaseService = (function () {
    //contents:FirebaseListObservable<Content[]>;
    //blurbs:FirebaseListObservable<Content[]>;
    function FirebaseService(_fs) {
        this._fs = _fs;
    }
    FirebaseService.prototype.getBooks = function (book) {
        if (book === void 0) { book = null; }
        if (book != null) {
            this.books = this._fs.database.list('/books', {
                query: {
                    orderByChild: 'theme',
                    equalTo: book
                }
            });
        }
        else {
            this.books = this._fs.database.list('/books');
        }
        return this.books;
    };
    FirebaseService.prototype.getAuthors = function () {
        this.authors = this._fs.database.list('/authors');
        return this.authors;
    };
    // getContents(){
    //   this.contents = this._fs.database.list('/contents') as
    //   FirebaseListObservable<Content[]>
    //   return this.contents;
    // }
    // getBlurbs(){
    //   this.blurbs = this._fs.database.list('/contents' +'/0'+ '/blurbs') as
    //   FirebaseListObservable<Content[]>
    //   return this.blurbs;
    // }
    FirebaseService.prototype.addBook = function (newBook) {
        return this.books.push(newBook);
    };
    FirebaseService.prototype.updateBook = function (key, updBook) {
        return this.books.update(key, updBook);
    };
    FirebaseService.prototype.deleteBook = function (key) {
        return this.books.remove(key);
    };
    return FirebaseService;
}());
FirebaseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === "function" && _a || Object])
], FirebaseService);

var _a;
//# sourceMappingURL=services.firebase.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)();
// imports


// module
exports.push([module.i, "h1 {\n  font-family: 'Libre Baskerville',serif;\n  color: #FFFFFF;\n}\n\nth, h4, .filterlabel {\n  font-family: 'Merriweather',serif;\n  font-size: 16pt;\n  color: #000000;\n}\n\n.jumbotron {\n    background-color: #E08700;\n}\n.jumbotron p {\n    color: #000000;\n}\n\n.totalwrapper {\n    background-color: #FF9900;\n}\n\ntr {\n    padding: 10px;\n}\n\ntd {\n    padding: 10px;\n}\n\n.editbackground{\n    background-color: #FF9900;\n}\n\n.mensah {\n    background-color: #E08700;\n}\n\n.hamhead {\n    background-color: #002F6E;\n    padding: 25px;\n    border: 3px solid #E08700;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<div class=\"totalwrapper\">\n<div class=\"jumbotron text-center\">\n\n<a href=\"http://www.mensahdesigns.co\">  \n\n<img src =\"https://res.cloudinary.com/omari123/image/upload/v1607657504/uploads_2FlogoTeeth_ufipd1.png\" alt=\"logoTeeth\" width=\"205px\" height=\"165px\">\n</a>\n  <h1>KODOSUICHA DB APP:</h1>\n  <p>MENSAHDESIGNS | CREATIVELY.</p>\n</div>\n\n<div class=\"container\">\n\n<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n  </ol>\n\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"item active\">\n      <img src=\"https://res.cloudinary.com/omari123/image/upload/v1608606730/kodo_2016/KODO_1_2016-01_i6jukw.png\" alt=\"one\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"https://res.cloudinary.com/omari123/image/upload/v1608606731/kodo_2016/KODO_2_2016-01_rcmq73.png\" alt=\"two\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"https://res.cloudinary.com/omari123/image/upload/v1608607939/kodo_2016/KODO_3_2016-01_cb4vxo.png\" alt=\"three\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"https://res.cloudinary.com/omari123/image/upload/v1608606734/kodo_2016/KODO_4_2016-01_hrtz5u.png\" alt=\"four\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"https://res.cloudinary.com/omari123/image/upload/v1608607938/kodo_2016/KODO_5_2016-01_iv7gcx.png\" alt=\"five\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"https://res.cloudinary.com/omari123/image/upload/v1608606727/kodo_2016/KODO_6_2016-01_b0ehdk.png\" alt=\"six\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"https://res.cloudinary.com/omari123/image/upload/v1608606728/kodo_2016/KODO_7_2016-01_wx6yx9.png\" alt=\"seven\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"https://res.cloudinary.com/omari123/image/upload/v1608606729/kodo_2016/KODO_8_2016-01_cd7nu6.png\" alt=\"eight\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"https://res.cloudinary.com/omari123/image/upload/v1608606731/kodo_2016/KODO_9_2016-01_l5p3bj.png\" alt=\"nine\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"https://res.cloudinary.com/omari123/image/upload/v1608606731/kodo_2016/KODO_910_2016-01_p7xcvc.png\" alt=\"ten\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"https://res.cloudinary.com/omari123/image/upload/v1608606731/kodo_2016/KODO_911_2016-01_q9h6v7.png\" alt=\"eleven\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"https://res.cloudinary.com/omari123/image/upload/v1608606731/kodo_2016/KODO_912_2016-01_gsiemj.png\" alt=\"twelve\">\n</div>\n  </div>\n\n  <!-- Left and right controls -->\n  <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n<!--\n<div class=\"navbar navbar-default\">\n    <div class=\"row\">\n          <div class=\"navbar-left\">\n            <ul class=\"nav navbar-nav\">\n              <li class=\"\"><a href=\"\">MENSAHDESIGNS</a></li>\n              </ul>\n          </div>\n            <div class=\"navbar-text navbar-left\">\n              <h2>KODOSUICHA:DB APP</h2>\n            </div>\n    </div>\n</div>\n-->\n<br>\n\n<div class=\"row\">\n\n  <div class=\"col-sm-6\">\n    <button (click)=\"changeState('add')\"class=\"button\">Add Book</button>\n  </div>\n  <div class=\"col-sm-6\">\n    <label class=\"filterlabel\">Filter Theme\n      <select (change)=\"filterTheme (filteredTheme.value)\" #filteredTheme>\n        <option value=\"0\">Select</option>\n        <option *ngFor=\"let book of books\" value=\"{{book.theme}}\">{{book.theme}}</option>\n      </select>\n    </label>\n  </div>\n</div>\n\n\n<div *ngIf=\"appState == 'add' \" class=\"hamhead\">\n\n<!-- ADD FORM -->\n <!-- FORM VARS ORDER MATTERS: KEEP THE SAME ORDER AS FUNCTION -->\n      <form (submit)=\"addBook(\n        theme.value,\n        issuedate.value,\n        month.value,\n        year.value,\n        coverimg.value,\n        objective.value,\n        summary.value,\n        bio.value,\n        firstname.value,\n        lastname.value,\n        img.value,\n        firstname.value,\n    chilevocab.value,\n    japanphrases.value,\n    notes.value,\n    pois.value,\n    proverbs.value,\n    articletypes.value,\n    flavorcolors.value,\n    kanjis.value,\n    quotes.value,\n    bcphotos.value,\n    ecpphotos.value,\n    fcphotos.value,\n    ofdphotos.value,\n    storya.value,\n    storyb.value,\n    storyc.value,\n    storybl.value,\n    storyli.value,\n    storyaf.value\n        )\">\n<table class=\"table\">\n   \n    <tbody>\n    <tr>\n    <th>HAPPY</th>\n    <th>NEW</th> \n    <th>YEAR:-)!</th>\n  </tr>\n      <tr class=\"success\">\n        <td> <label>Theme:\n              <input type=\"text\" placeholder=\"Theme\" #theme>\n          </label></td>\n        <td> <label>Issue Date:\n               <input type=\"text\" placeholder=\"Issue Date\" #issuedate>\n          </label></td>\n        <td> <label>Month:\n              <input type=\"text\" placeholder=\"Month\" #month>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Year:\n               <input type=\"text\" placeholder=\"Year\" #year>\n          </label></td>\n        <td> <label>Cover Image:\n              <input type=\"text\" placeholder=\"Cover Image\" #coverimg>\n          </label></td>\n        <td> <label>Objective:\n              <input type=\"text\" placeholder=\"Objective\" #objective>\n          </label></td>\n      </tr>\n      <tr class=\"info\">\n        <td> <label>Summary:\n              <input type=\"text\" placeholder=\"Summary\" #summary>\n          </label></td>\n        <td> <label>First Name:\n               <input type=\"text\" placeholder=\"First Name\" #firstname>\n          </label></td>\n        <td> <label>Last Name:\n             <input type=\"text\" placeholder=\"Last Name\" #lastname>\n          </label></td>\n      </tr>\n       <tr class=\"danger\">\n        <td> <label>Author Image:\n              <input type=\"text\" placeholder=\"Author Image\" #img>\n            </label></td>\n        <td> <label>Author Biography:\n              <input type=\"text\" placeholder=\"Author Bio\" #bio>\n            </label></td>\n        <td> <label>One Fine Day Photo:\n              <input type=\"text\" placeholder=\"One Fine Day Photo\" #ofdphotos>\n          </label></td>\n      </tr>\n      <tr class=\"success\">\n        <td> <label>Chile Vocab:\n              <input type=\"text\" placeholder=\"Chile Vocab\" #chilevocab>\n          </label></td>\n        <td> <label>Japan Phrase:\n               <input type=\"text\" placeholder=\"Japan Phrase\" #japanphrases>\n          </label></td>\n        <td> <label>Notes:\n              <input type=\"text\" placeholder=\"Notes\" #notes>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Person Of Interest:\n               <input type=\"text\" placeholder=\"Person Of Interest\" #pois>\n          </label></td>\n        <td> <label>Proverbs:\n              <input type=\"text\" placeholder=\"Proverbs\" #proverbs>\n          </label></td>\n        <td><label>Article Type:\n              <input type=\"text\" placeholder=\"Article Type\" #articletypes> \n            </label>\n        </td>\n      </tr>\n      <tr class=\"success\">\n        <td> <label>Flavor Color:\n              <input type=\"text\" placeholder=\"Flavor Color\" #flavorcolors>\n          </label></td>\n        <td> <label>Kanji:\n               <input type=\"text\" placeholder=\"Kanji\" #kanjis>\n          </label></td>\n        <td> <label>Quote:\n              <input type=\"text\" placeholder=\"Quotes\" #quotes>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Front Cover Photo:\n               <input type=\"text\" placeholder=\"Front Cover Photo\" #fcphotos>\n          </label></td>\n        <td> <label>Back Cover Photo:\n              <input type=\"text\" placeholder=\"Back Cover Photo\" #bcphotos>\n          </label></td>\n        <td> <label>Everyday Chile Photo:\n              <input type=\"text\" placeholder=\"Everyday Chile Photo\" #ecpphotos>\n          </label></td>\n        </tr>\n      <tr class=\"success\">\n        <td> <label>Story A:<br/>\n              <textarea placeholder=\"Paste Story A here...\" #storya></textarea>\n          </label></td>\n        <td> <label>Story B:<br/>\n               <textarea placeholder=\"Paste Story B here...\" #storyb></textarea>\n          </label></td>\n        <td> <label>Story C:<br/>\n              <textarea placeholder=\"Paste Story C here...\" #storyc></textarea>\n          </label></td>\n      </tr>\n      <tr class=\"success\">\n        <td> <label>Story Blender:<br/>\n              <textarea placeholder=\"Paste Story Blender here...\" #storybl></textarea>\n          </label></td>\n        <td> <label>Story Live:<br/>\n               <textarea placeholder=\"Paste Story Live here...\" #storyli></textarea>\n          </label></td>\n        <td> <label>Story AfterEffects:<br/>\n              <textarea placeholder=\"Paste Story Aftereffects here...\" #storyaf></textarea>\n          </label></td>\n      </tr>\n    </tbody>\n      \n  </table>\n<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n<button (click)=\"changeState('default')\" class=\"btn btn-danger\">Cancel</button>\n  </form>\n\n</div> <!--NGIF ADD BUTTON PUSHED ENDS HERE; HAMHEAD CLASS ENDS HERE-->\n\n\n\n<!--EDIT FORM GOES HERE-->\n\n<div *ngIf=\"appState == 'edit' \" class=\"hamhead\">\n  <!-- FORM VARS ORDER MATTERS: KEEP THE SAME ORDER AS FUNCTION -->\n    <form (submit)=\"updateBook()\">\n<table class=\"table\">\n   \n    <tbody>\n    <tr>\n    <th>EDIT</th>\n    <th>FORM</th> \n    <th>HERE:</th>\n  </tr>\n      <tr class=\"danger\">\n        <td> <label>Theme:\n              <input type=\"text\" [(ngModel)]=\"activeTheme\" name=\"activeTheme\" placeholder=\"Theme\" #theme>\n          </label></td>\n        <td> <label>Issue Date:\n               <input type=\"text\" [(ngModel)]=\"activeIssueDate\" name=\"activeIssueDate\" placeholder=\"Issue Date\" #issuedate>\n          </label></td>\n        <td> <label>Month:\n              <input type=\"text\" [(ngModel)]=\"activeMonth\" name=\"activeMonth\" placeholder=\"Month\" #month>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Year:\n               <input type=\"text\" [(ngModel)]=\"activeYear\" name=\"activeYear\" placeholder=\"Year\" #year>\n          </label></td>\n        <td> <label>Cover Image:\n              <input type=\"text\" [(ngModel)]=\"activeCoverImage\" name=\"activeCoverImage\" placeholder=\"Cover Image\" #coverimg>\n          </label></td>\n        <td> <label>Objective:\n              <input type=\"text\" [(ngModel)]=\"activeObjective\" name=\"activeObjective\" placeholder=\"Objective\" #objective>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Summary:\n              <input type=\"text\" [(ngModel)]=\"activeSummary\" name=\"activeSummary\" placeholder=\"Summary\" #summary>\n          </label></td>\n        <td> <label>First Name:\n               <input type=\"text\" [(ngModel)]=\"activeFirstName\" name=\"activeFirstName\" placeholder=\"First Name\" #firstname>\n          </label></td>\n        <td> <label>Last Name:\n             <input type=\"text\" [(ngModel)]=\"activeLastName\" name=\"activeLastName\" placeholder=\"Last Name\" #lastname>\n          </label></td>\n      </tr>\n       <tr class=\"danger\">\n        <td> <label>Author Image:\n              <input type=\"text\" [(ngModel)]=\"activeAuthorImage\" name=\"activeAuthorImage\" placeholder=\"Author Image\" #img>\n            </label></td>\n        <td> <label>Author Biography:\n              <input type=\"text\" [(ngModel)]=\"activeAuthorBio\" name=\"activeAuthorBio\" placeholder=\"Author Bio\" #bio>\n            </label></td>\n        <td> <label>One Fine Day Photo:\n              <input type=\"text\" [(ngModel)]=\"activeOneFineDay\" name=\"activeOneFineDay\" placeholder=\"One Fine Day Photo\" #ofdphotos>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Chile Vocab:\n              <input type=\"text\" [(ngModel)]=\"activeChileVocab\" name=\"activeChileVocab\" placeholder=\"Chile Vocab\" #chilevocab>\n          </label></td>\n        <td> <label>Japan Phrase:\n               <input type=\"text\" [(ngModel)]=\"activeJapanPhrase\" name=\"activeJapanPhrase\" placeholder=\"Japan Phrase\" #japanphrases>\n          </label></td>\n        <td> <label>Notes:\n              <input type=\"text\" [(ngModel)]=\"activeNotes\" name=\"activeNotes\" placeholder=\"Notes\" #notes>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Person Of Interest:\n               <input type=\"text\" [(ngModel)]=\"activePersonOfInterest\" name=\"activePersonOfInterest\" placeholder=\"Person Of Interest\" #pois>\n          </label></td>\n        <td> <label>Proverb:\n              <input type=\"text\" [(ngModel)]=\"activeProverb\" name=\"activeProverb\" placeholder=\"Proverb\" #proverbs>\n          </label></td>\n        <td><label>Article Type:\n              <input type=\"text\" [(ngModel)]=\"activeArticleType\" name=\"activeArticleType\" placeholder=\"Article Type\" #articletypes> \n            </label>\n        </td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Flavor Color:\n              <input type=\"text\" [(ngModel)]=\"activeFlavorColor\" name=\"activeFlavorColor\" placeholder=\"Flavor Color\" #flavorcolors>\n          </label></td>\n        <td> <label>Kanji:\n               <input type=\"text\" [(ngModel)]=\"activeKanji\" name=\"activeKanji\" placeholder=\"Kanji\" #kanjis>\n          </label></td>\n        <td> <label>Quote:\n              <input type=\"text\" [(ngModel)]=\"activeQuote\" name=\"activeQuote\" placeholder=\"Quotes\" #quotes>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Front Cover Photo:\n               <input type=\"text\" [(ngModel)]=\"activeFrontCoverPhoto\" name=\"activeFrontCoverPhoto\" placeholder=\"Front Cover Photo\" #fcphotos>\n          </label></td>\n        <td> <label>Back Cover Photo:\n              <input type=\"text\" [(ngModel)]=\"activeBackCoverPhoto\" name=\"activeBackCoverPhoto\" placeholder=\"Back Cover Photo\" #bcphotos>\n          </label></td>\n        <td> <label>Everyday Chile Photo:\n              <input type=\"text\" [(ngModel)]=\"activeEverydayChilePhoto\" name=\"activeEverydayChilePhoto\" placeholder=\"Everyday Chile Photo\" #ecpphotos>\n          </label></td>\n        </tr>\n      <tr class=\"danger\">\n        <td> <label>Story A:<br/>\n              <textarea [(ngModel)]=\"activeStoryA\" name=\"activeStoryA\" placeholder=\"Paste Story A here...\" #storya></textarea>\n          </label></td>\n        <td> <label>Story B:<br/>\n               <textarea [(ngModel)]=\"activeStoryB\" name=\"activeStoryB\" placeholder=\"Paste Story B here...\" #storyb></textarea>\n          </label></td>\n        <td> <label>Story C:<br/>\n              <textarea [(ngModel)]=\"activeStoryC\" name=\"activeStoryC\"placeholder=\"Paste Story C here...\" #storyc></textarea>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Story Blender:<br/>\n              <textarea [(ngModel)]=\"activeStoryBlender\" name=\"activeStoryBlender\"placeholder=\"Paste Story Blender here...\" #storybl></textarea>\n          </label></td>\n        <td> <label>Story Live:<br/>\n               <textarea [(ngModel)]=\"activeStoryLive\" name=\"activeStoryLive\" placeholder=\"Paste Story Live here...\" #storyli></textarea>\n          </label></td>\n        <td> <label>Story AfterEffects:<br/>\n              <textarea [(ngModel)]=\"activeStoryAftereffects\" name=\"activeStoryAftereffects\" placeholder=\"Paste Story Aftereffects here...\" #storyaf></textarea>\n          </label></td>\n      </tr>\n    </tbody>\n      \n  </table>\n <input type=\"submit\" class=\"btn btn-info\" value=\"Submit\">\n<button (click)=\"changeState('default')\" class=\"btn btn-danger\">Cancel</button>\n</form>\n<br/>\n<br/>\n\n</div> <!--END .HAMHEAD CLASS DIV-->\n\n<div *ngIf=\"appState == 'extend' \" >\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n        <button (click)=\"changeState('default')\" class=\"btn btn-danger\">Go Back</button>\n\n    </div>\n  </div>\n\n\n  <div *ngFor=\"let book of books\">\n      <div *ngIf=\"book.$key == activeKey\">\n            <div class=\"row\">\n                      <div class=\"col-md-8\">\n                          <h3>{{book.theme}}</h3>\n                          <p>Issue Date: {{book.issuedate}}</p>\n                          <p>Year: {{book.year}}</p>\n                          <p>Summary: {{book.summary}}</p>\n                      </div>\n                      <div class=\"col-md-4\">\n                          <h4>Book Information</h4>\n                          <ul>\n                            <li>Theme: {{book.theme}}</li>\n                            <li>Issue Date: {{book.issuedate}}</li>\n                            <li>Month: {{book.month}}</li>\n                            <li>Year: {{book.year}}</li>\n                            <li>Cover Image: {{book.coverimg}}</li>\n                            <li>Objective: {{book.objective}}</li>\n                            <li>Summary: {{book.summary}}</li>\n                            <li>ImageTest:\n                              <img src=\"{{book.coverimg}}\" style=\"width:30px;height:30px;\">\n                            </li>\n                            </ul>\n                            \n                      </div>\n\n            </div>\n      </div>\n  </div><!-- *NGFOR BOOKS ENDS HERE -->\n  \n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div *ngIf=\"books\">\n      <table class=\"table\">\n        <thead >\n          <tr class=\"mensah\">\n            <th>Theme:</th>\n            <th>Issue Date:</th>\n            <th>Year:</th>\n            <th></th>\n          </tr >\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let book of books\" class=\"mensah\">\n            <td><h1>{{book.theme}}</h1></td>\n            <td><h1>{{book.issuedate}}</h1></td>\n            <td><h1>{{book.year}}</h1></td>\n            <td>\n              <button (click)=\"changeState('extend', book.$key)\"class=\"btn btn-primary\">More</button>\n              <button (click)=\"showEdit(book)\" class=\"btn btn-warning\">Edit</button>\n              <button (click)=\"deleteBook(book.$key)\" class=\"btn btn-danger\">Delete</button>\n\n            </td>\n          </tr>\n        </tbody>\n      </table>\n  </div>\n</div>\n</div>\n\n\n\n\n</div> <!--END CONTAINER DIV-->\n\n</div> <!--END TOTAL WRAPPER DIV-->"

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(91);


/***/ }),

/***/ 90:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 90;


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(101);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_services_firebase__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {Content} from './Content';
var AppComponent = (function () {
    function AppComponent(_fs) {
        this._fs = _fs;
        this.title = 'app works!';
        // contents:Content[];
        this.blurbs = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        //this.appState = 'default';
        var _this = this;
        //GET BOOKS FEED
        this._fs.getBooks().subscribe(function (books) {
            _this.books = books;
        });
        //GET AUTHORS FEED
        this._fs.getAuthors().subscribe(function (authors) {
            _this.authors = authors;
        });
        //GET CONTENTS FEED
        //this._fs.getContents().subscribe(contents => {
        // this.contents = contents;
        //});
        //GET BLURBS FEED
        // this._fs.getBlurbs().subscribe(blurbs => {
        // this.blurbs = blurbs;
        //});
    };
    AppComponent.prototype.changeState = function (state, key) {
        console.log('Changing state to:' + state);
        if (key) {
            console.log('Changing key to:' + key);
            this.activeKey = key;
        }
        this.appState = state;
    };
    AppComponent.prototype.filterTheme = function (book) {
        var _this = this;
        this._fs.getBooks(book).subscribe(function (books) {
            _this.books = books;
            console.log(book);
        });
    };
    /*getBooks(){
        console.log(this.books);
        console.log(this.authors);
        console.log(this.contents);
        console.log(this.blurbs);
    }*/
    AppComponent.prototype.addBook = function (theme, issuedate, month, year, coverimg, objective, summary, bio, firstname, lastname, img, chilevocab, japanphrases, notes, pois, proverbs, articletypes, flavorcolors, kanjis, quotes, bcphotos, ecpphotos, fcphotos, ofdphotos, storya, storyb, storyc, storybl, storyli, storyaf) {
        var created_at = new Date().toString();
        var newBook = {
            issuedate: issuedate,
            theme: theme,
            month: month,
            year: year,
            coverimg: coverimg,
            objective: objective,
            summary: summary,
            bio: bio,
            firstname: firstname,
            lastname: lastname,
            img: img,
            chilevocab: chilevocab,
            japanphrases: japanphrases,
            notes: notes,
            pois: pois,
            proverbs: proverbs,
            articletypes: articletypes,
            flavorcolors: flavorcolors,
            kanjis: kanjis,
            quotes: quotes,
            bcphotos: bcphotos,
            ecpphotos: ecpphotos,
            fcphotos: fcphotos,
            ofdphotos: ofdphotos,
            storya: storya,
            storyb: storyb,
            storyc: storyc,
            storybl: storybl,
            storyli: storyli,
            storyaf: storyaf,
            created_at: created_at
        };
        //console.log(newBusiness);
        this._fs.addBook(newBook);
        this.changeState('default', null);
    };
    AppComponent.prototype.showEdit = function (book) {
        this.changeState('edit', book.$key);
        this.activeIssueDate = book.issuedate;
        this.activeTheme = book.theme;
        this.activeMonth = book.month;
        this.activeYear = book.year;
        this.activeCoverImage = book.coverimg;
        this.activeObjective = book.objective;
        this.activeSummary = book.summary;
        this.activeAuthorBio = book.bio;
        this.activeFirstName = book.firstname;
        this.activeLastName = book.lastname;
        this.activeAuthorImage = book.img;
        this.activeOneFineDay = book.ofdphotos;
        this.activeChileVocab = book.chilevocab;
        this.activeJapanPhrase = book.japanphrases;
        this.activeNotes = book.notes;
        this.activePersonOfInterest = book.pois;
        this.activeProverb = book.proverbs;
        this.activeArticleType = book.articletypes;
        this.activeFlavorColor = book.flavorcolors;
        this.activeKanji = book.kanjis;
        this.activeQuote = book.quotes;
        this.activeFrontCoverPhoto = book.fcphotos;
        this.activeBackCoverPhoto = book.bcphotos;
        this.activeEverydayChilePhoto = book.ecpphotos;
        this.activeStoryA = book.storya;
        this.activeStoryB = book.storyb;
        this.activeStoryC = book.storyc;
        this.activeStoryBlender = book.storybl;
        this.activeStoryLive = book.storyli;
        this.activeStoryAftereffects = book.storyaf;
    };
    AppComponent.prototype.updateBook = function () {
        var updBook = {
            theme: this.activeTheme,
            issuedate: this.activeIssueDate,
            month: this.activeMonth,
            year: this.activeYear,
            coverimg: this.activeCoverImage,
            objective: this.activeObjective,
            summary: this.activeSummary,
            bio: this.activeAuthorBio,
            firstname: this.activeFirstName,
            lastname: this.activeLastName,
            img: this.activeAuthorImage,
            ofdphotos: this.activeOneFineDay,
            chilevocab: this.activeChileVocab,
            japanphrases: this.activeJapanPhrase,
            notes: this.activeNotes,
            pois: this.activePersonOfInterest,
            proverbs: this.activeProverb,
            articletypes: this.activeArticleType,
            flavorcolors: this.activeFlavorColor,
            kanjis: this.activeKanji,
            quotes: this.activeQuote,
            fcphotos: this.activeFrontCoverPhoto,
            bcphotos: this.activeBackCoverPhoto,
            ecpphotos: this.activeEverydayChilePhoto,
            storya: this.activeStoryA,
            storyb: this.activeStoryB,
            storyc: this.activeStoryC,
            storybl: this.activeStoryBlender,
            storyli: this.activeStoryLive,
            storyaf: this.activeStoryAftereffects,
        };
        this._fs.updateBook(this.activeKey, updBook);
        this.changeState('default', null);
    };
    AppComponent.prototype.deleteBook = function (key) {
        this._fs.deleteBook(key);
        this.changeState('default', null);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(170),
        styles: [__webpack_require__(164)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_services_firebase__["a" /* FirebaseService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_services_firebase__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_services_firebase__["a" /* FirebaseService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(98);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Must export the config
var firebaseConfig = {
    apiKey: "AIzaSyCVHk1dJveENPqZN06QvXISNuhenfiTnaY",
    authDomain: "kodosuicha.firebaseapp.com",
    databaseURL: "https://kodosuicha.firebaseio.com",
    storageBucket: "kodosuicha.appspot.com"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.bundle.js.map