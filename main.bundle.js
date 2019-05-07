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
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Anton|Bitter|Crimson+Text|Josefin+Slab|Libre+Baskerville|Lobster|Merriweather|Merriweather+Sans|Montserrat|Noto+Serif|Open+Sans:300|Oswald*700|Tittillium+Web);", ""]);

// module
exports.push([module.i, "h1 {\n  /*font-family: 'Anton',sans-serif; */\n  font-family: 'Merriweather',serif;\n  color: #FFFFFF;\n}\nh3{\n    font-family: 'Anton',sans-serif;\n    font-size: 24pt;\n    color: #000000;\n}ng \nth, h4, .filterlabel {\n  font-family: 'Crimson Text',serif;\n  font-size: 16pt;\n  color: #000000;\n}\n\n.jumbotron {\n    background-color: #E08700;\n}\n.jumbotron p {\n    color: #000000;\n}\n\n.totalwrapper {\n    background-color: #FF9900;\n}\n\ntr {\n    padding: 10px;\n}\n\ntd {\n    padding: 10px;\n}\n\n.editbackground{\n    background-color: #FF9900;\n}\n\n.mensah {\n    background-color: #E08700;\n}\n\n.hamhead {\n    background-color: #002F6E;\n    padding: 25px;\n    border: 3px solid #E08700;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<div class=\"totalwrapper\">\n<div class=\"jumbotron text-center\">\n\n<a href=\"https://mensahgit.github.io/\">  \n\n<img src =\"https://firebasestorage.googleapis.com/v0/b/presidents-29d5c.appspot.com/o/uploads%2FlogoTeeth.png?alt=media&token=ae98faa2-4d91-4b1c-8e61-97cb09f57684\" alt=\"logoTeeth\" width=\"165px\" height=\"128px\">\n</a>\n  <h1>KODOSUICHA DB APP:</h1>\n  <h3>MENSAHDESIGNS | CREATIVELY.</h3>\n</div>\n\n<div class=\"container\">\n\n<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n  </ol>\n\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"item active\">\n      <img src=\"https://lh3.googleusercontent.com/U5S01rMT5-ubLsK7mFNcF9DR1jPydyLdyRNPG0NjpTRDTLeGMA-PVnBGhyRIDypWvQ3jH4eLRtvmOAoKd3LwoxNYHKYHEfhDonzDgRmk814gjzuSCj_gIFZ88Gz9u_v0KunzlD_ZqthIKxbYyF9AtGP9ngn-q_4xKkd8TMfqjkQ0ulYtW1Et6znYIWv5oXWxwZK8SyjNVX7uHjqYBR3m-3I0Izx8VparH28KFRNJCLXlOMx6NpNHafUenoud1We1qGj2z1lekd6JK1f6UB-hCi_TZdYfD1SnwipY9WXzysbTZjR63LtBVUsdZDXoBvK_KNVJj6MvWZLFWQDHcFEZmBldANA8mV6NJ-OA8WdzuiFTvpVd6uNmlXfGOp9dERMFa1ZWal6n8blv5uJO_WyE3AFzicZrdd5iLjK1JUsqnj96idt038OODf58DtD689gi37p3uIrgBB9YHhii8NqsXoB-WlcVhTOHDI9v_sSI6uZKsaURvxzmE3TiwyvZAGbMjFu-Bn3dnYUQLCNzDwx99B2IJY9OlnbeP3h8XSzOUhrVDSUQWHMA9Avv-COGX2wxM2Z58i22oiKaP-mkfmMt_pplmMVFQdyL9gW5WWbpcK0ntBiO-IzQoI7IkFyYVOf5qGzsepnBmxxw4UZPRx5zZ1qtJZx-Ass=w1003-h564-no\" alt=\"one\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"https://lh3.googleusercontent.com/FUZQTxg0Dv07Q43wQnKdJhOH4qU3ekOAGZd5Nfh0-Z8MPxteKyebQft45cyMjb6yZaT7W60ul6sVaU0aBHkfYlbFg4lgGFkIpaSpjnlvPH6CKgaDqalpdMObhrKuqq6x20j41jKqf3gWIPizps5VPS8tLzbhCeYmpmadH8AUeGQYRULrCeUkLvzITBbThlZ41nD-DIFHo1EUnEqfLJgXRY-TNIqJPVZ6ontSOjHre7m4a0WH2tVvCCCEnddXtqtuD834c-s39fiQKgCcdwPpbjjFlSGQDHwiQosKmYhYzLvcdiFu4oIzkJJc6cZdzCVObxsV9BQTnsnocQy-WwwrVe1GIoSV__HRXI-A19UJuSxDiTu-jVr0-TCVbEOhGgeDjLTEth-zRYedAonc1qk3QSLfkEpoEf4kTTgSXvyTR7s_AmrKG0C_5UOdqAEh3V6PEG37FnepTUNLGkrkLNfWjFHTFjF5XyRB6Q2gPMfuW4xcyEAQGqAq4BkYaOsXPI-5hUde13lu0AoabeDPwhUL59Zv3iV1i9wxIj9jgpYq6iH4akhKOvPQj4bdScfu8zALykrFyAim094yMCN-sa41EaZdeBQ6Q9onxoWA5Vq8PaxDFCrdBTsDOqnskSxVMah1W9O6A1AgKsAn1QwC_eSYutgCU0871NQ=w1003-h564-no\" alt=\"two\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"https://lh3.googleusercontent.com/b1KRZBXm64GLyLCKuKXKx1B8DNHAmCaBpBgY_GbTsVdo2szer9aSxxcoB5STJYFahBseNYU5bxyyfnJ_1wrnvhxoHDPdI1yFM7LVOytEGNB8UMwhS7uzGHBIQJXvaHXP8OQT_WfJFWIRdQfsJn-47i0xAc22lw058QaGYgoNB9CegPcfCIHPFJkaHkWNwVQbbbB5E-smBvkpvquKawJTiUYFQkD3dUaHFQU_7-jiCx0y26fAcO1-B6TTtlIzkqdxEJwkuAWn2B8C7CowoIC-j_jLzWDQNdOniB1o0tKYJUDyzxbCb4heBfuQPp2D2ILBgFchkUS-KF8EGFTiaShpAuORWWIYw_WaLo5gn4nDIMbMugeQcrZwuvXcq9bquiyQk4yr4LT4s1PrLXy0LDzpMi2djGRbfAlyqQWfAvh90lQr23sqLhyEcAge7_55FOiINEy7tlp_UtI3SJBdl6Rk9KDjMKV-Pt3OURCSSQeoUPBgGdTsTklNGwvwEtpVdHLkW0HcyrE3tM2Dk6hjs_oSyznmRd7OjxzY5ot9eYqw8AhiDsOnxb1LkVtxmXzhqPhpqMg9ghU9AebvkGxwn7vS2rrbcar8Y-xyZjDkq72dPJoA-8Lw8xSVVhJcsU-9Y2n3Ko0BEc74Nko2cqrf97ZO7tcTM4VcPLs=w1003-h564-no\" alt=\"three\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"https://lh3.googleusercontent.com/XRMa3lirAvrHkWtc6oUZldchqrR45V9XRIE3Z0PmTKEg6rTJNHKz77gGwjqoWl1OLWHA6me4Q6BRoSzoJWMDCrBqoXu3QVd46Zh5gc9dhh8RPYvS8Y0CoyqlgQkUTeu_7Haak9r5V9UMDLqPjWvqV9UQWoi9CG0cTHRnQL_jJyi4yg5L2wElbdoUmjcb3z9pIFN2UJH--k8SO1pZUYjdSqd8uQcUXym-I7VJI3U0VBeEEVLVllPx4I_ArBaYv5w67qvEpA17kvXck6nZyDUbgfIl3trY1-JUpJ2hOa3EWwAJFivBq2KfyCNAwuv7orPBGHw5vnyjTEBsWhFz6qkib8GR-DJXehv9rKzMRL-qLWoscQA7J6KZsK-_tGiy-9RbV1SjPe-chi24axOJXLvjBzYNcRcO4ACMnCxsTqaibkCG-at2wU5qwT52h3z2LoRUAxwwI4HYZRLKNWxwaaK7ikABJY87H6ayFoHFH7H8ORH0nBXBISkNccxTuukU5hnxQTdmEixbBjOisSSHyH_E76Fi6ZeNDYrBGVLdCi1jMe8_XT6R9rCymc_RM1P713ApTcALXFrylzNAkZysNXi4O9I_-vo7iJEZwaGA4RCZCkqjkP0v5Qg27a9IqWOu257KdFcP_p2i1QWVnDpQ5Kbx4ryiQ1if6a4=w1003-h564-no\" alt=\"four\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"https://lh3.googleusercontent.com/-ejOp8M2ml_gjhqBcRViWKrgRSaDGzG9cmKGT7KzgnAefH7oy9k_RT9cV6JQJBWp7Doq_CSmIka2Thu9aev_xPj5S6sEgQ-MkCxgkO0J6GlvOlf42voXOBMj9wgWXxd4Kf4hUr-AnswAdDKogyCO2PjJL5j0-Q7VBad0ZwcaPYTh7GIbLhvD6rUjCZW1fOqM2uRjvd8qTu91Qpy0nVxFKWo2Q6RXTBUv6KVga40nJOdstT6TQym7qzG3p1YVIGAX7A8cZDd3zOklJBZZClfukoga9MYz8ppd04ZL2I5Znm3QW9_GDuAlDFgBV9WyingWnPrcfFOJ0Sr4DnqHT_WjJgLb4timimW58qlx3vpZ9Abw2xExmC0jpQHUNCQaXZ9Kt_VrDX1WIue6dyLXbOoQ1ekXG6eComRCGPoBPryaxEHMJ4m53irI0HsZe2ZnpcXBePujNlKZQcgCMl2UCnSj-qlp87Kcws16ZoqiVdTSuOlHPKicdeTL0ncUu6dXX7mewCdhhWMgm46yKteM9cjnXiJ6vvuNU7jpgKY6Gej5yVjJDK8r4QzMyW41bUsW57AwROY_Ju7ThjsECvCtbYrmnzmStf6aQVqs1YA13O8nJteWfkDG25cFa14mSEJlASisvTqmbj7hWniI8FJhhfSIBSU5NIOsVhc=w1003-h564-no\" alt=\"five\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"https://lh3.googleusercontent.com/8b4cg_5Yl9Z7n1D7hmKKVvTh4nbhUJNLiNkLNeRz12vcmRsxBtECGaY8u2O0qS7agtCcg9e0DB10IH8-1AvbLsUYWEojX-mGs-5TChaDgFO97x3gSk4kSua8jErzD78D-cUQs2JOBZ-4Iq38Pp6aQAmo2fp0FU1LstqOmbEb4cnB1tibOHutrIf4uCM6Q_lD6Pwyko1eg4WH2LUMnKHXvCWnDCb_SrWWrFSH40jc2x3wEtE3MgBHI0LELxXsB-i7awfBQw4Bbz3mzvTuylObpoOnBmaVwG_2zDAI-B0X6qYxPP8X_-xvLks5sSXwUSEQTpSSRM3Aq3ZEKpEQt3Qx8VrxoT7gINC8PjMXPojiaM1ewL2O4ts9NKS-wr5y9JxuDM7VDtQkRPHLlSxMMALsxcl-Gdmb498s1-v3AP00ciYJpof77Q6xxIUkYWt4F1iZ98XbmGKofiCw6dyylgx--7hjF9am03tnx-il1d717q8lMjkBsuxftT0PB_IjMH5rtY_T1S0f5770vzGFYFq0cg3FFa58XXQ8opuQaEVHyiNQAJnyN6BT-I1FiPcm5ufSKk1_RGN0MC4o3K0y2g99iMgsjDFN-6wNCzPwc7K0HjXzrePE8Pp1Ajui0VVP9yQPH-KBdjfTYrYbMc9TPzXSEFr48zb3BSY=w1003-h564-no\" alt=\"six\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"https://lh3.googleusercontent.com/R9UFRonGncKfySvSy4srGGIJq-fCM8qIU3j6-v-5yT8vXVrVMPjO2m1LyX25jFdvqaTUP0TtEjQoHcq4xHVMVRl2TbINW2QFxRFVLkqaAfC59M96AEWV455K7gK5f5H2h_zrrcr17OjEe3Tj7-kkjObmYDELBf2CCVPQ6SWf4ocW3iVXexVIDCwSQhaJpyRwM0nexr5hHEgDfCqGzi8aKWYfHb8jshGvwhAOSaYGQ5hFSbcwk5EYszoOb14y91Nxdxzz4AHPOygUTcK48qxfv9LZhhKaV2jDXhvrWD0-bbGj10h4QseGKChAf5bpW2vNSyieXQWvFHyZSGvY7qR7RJGMy8lXBdC1sEDEZOLn8xXjKd0yMMTyGUwgdJayFat7RWh4GlUhcBAWFoWpnkaxdX0Ebg5mCDUWV0BeMI1xrTXS4F1n2DAE-0qt8QFdDwIPX1agI5O9_bSCe65FoPYFGfCm702ygj12sIw0g19kyEvpxLnnXUCCO7mYtfDh_GaXsmAf8NA6zcYRiyGqQBDZUZCAOijNcODNdSiITZFsYq6kJ5SDUpXoR8cY5wocgwfAAq7cL9a6DieTvWCB-Bfvd5vXK1I_z0rJJmEakOCb2bcBAc9-9mwsi4hKzwHDGKbiXBM50PZBIRUOHpqxP6-F1gFehHiT16U=w1003-h564-no\" alt=\"seven\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"https://lh3.googleusercontent.com/mtzWaiGJjDTUOFRUJAkKWTvUVYmioMBC8vUGn_626Fp0j5YTXtSyCdyi61X6xSkaUFSrTcKe9VwxJoBf4EcX5MIxbHkmXmZ_W-zmC-nxYxKo0QNq_YyTAFh1YEogASDWu1cXj-AysmUOUtBWnE4fjsRgnnHg600fOMrzeflBAJEJVb1Y0OoaNLtGJlznVd3j8ID9te9hYn-O5Iga_AOWpt9PRV5wupNMd-PhWOQ-R7kPYBuWsTpVjn1jAggywnVfroB3YJFnrwhya6x4c_wGhLH2JeXzQN6KseREEH7lF4vNSTmVJ9XN67Got07s1CKEJHxnGOIQBVU6bDTkOncr-8U4SikGk9UPBRhyP-IsSjiFUYEVG3EAFw_Z6mrxnmM4uCfr78IhI54ewci0bt-cZIrIX6C2GHAcoy4ZX1Ht5Vv0rQqk_HSvlxZ-IYtR0QIfmA4dIVGhfYoosGNrjpJ4rTlrc8UhL28D2ME1iS33E3p0LlYai8ULZ2Z3XvcBzzwmq-MbV5KqIz70uzu10AeDjlZn1kC15zte1SLxy1ca5Rb52iKhQd1G9K5Tx_sUlaxL7SEJvGEx42ac4NmcRxeGnW5LXp_1SjDXFP8fIJ5d7hehju_UQcxZ2g1xys4bZkEPXpilCa08vmpgqTTny7h7fX-RUF9Qtwg=w1003-h564-no\" alt=\"eight\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"https://lh3.googleusercontent.com/wLukvT4ZY-i6uiCxfwKQPViQ32S--oGZ8AP_TsGS6Xzzf9Cl9HAKuexDHpTBr5gSmwXIpXjvsKad9_plQ7FXeKXCYOdU9DNVG5YKX9-38LuIbA48AeAKwo_3_GzC6Gg6FVc6hpHst7r4xQUIi56lzY-vY9KvVGMnXN2uh8x_w71VSPOZCRvqTv3G-HbCCTN1bbEB4MWi4q1PsZCPn37k2_Na0_Htym2wbUC2h5twZVPzP7w1OJtwdWwNQ48dOyxzhgJ3qNpc_Fy1-WHylqPHXivCDRIXTDIH14PmC78UgQrhSFpnCoLSofJL0ZpOg2Tyy9dvwFN2OcvkXoJb6iacgcP_DOZajobWrPfOYX437xOh4V6SyPPloA_hOeyYmw5jpN7G7NTQt5UCz_QR2YWomHk3XCxv6J_8EWYTPRYtIhGnctY75-ERuIMI87NI_FB_qUYUWGtYn_u3rcbZ-mga1pJ81K1kGeV9ivTmsA_e2ATF1kLYs-8Ku3hF-XTrwpgWiyjJHCYOAj6pMJz0yQBPg8Hrgjy3mnzs70U-eCL28EpwrC3LXJSqY_McMhmVII-Z999a5iIo7Smhtxrfu0mpF-J7WP8gWd3D53UoEowdSwg3vR-MHPFc-cNsJzgzDnrM_vF0J8w-NTUUsilmYS5qHdJx22V9KFk=w1003-h564-no\" alt=\"nine\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"https://lh3.googleusercontent.com/Ofotx37tTr_S_RoHUYI0fZzLkmx5DZAz4WjoO6W379hy8ASyEFac2Tya9jSEwMbOyXmkoduB3ZCF0MSAUQ7PmjPWswbyg1Jxj7c9UDiZYw71Ln7f20OfcQCW0kRb6MH4iPkrClOIt-ud_moVxVhxKGhpn0K0kr1ssynW8h1YIbJFNsKvtCguEXeGBCCMscjC9dg-FXQ9njnsWBJWyaaKUjzvcOqjY2SWk4rEmk3khRc9ToNoMMTcXwitgsyCFM_vRLSJ0cHtt2m2alzvehgfYfwSklEWrITzf-2plvxwDR9wZaX_ZPkqylr2XkUmstd8lQXFcnyrREYG4eX0vv79oy2ZV_paMkkD7Weq2l0_0CSNwhWMfaZ-bZD5pnLntBIalnp0JqKy_o_p2IZzwu7pbxt05ORrVMRUoiVqgkabRYuZG7kIoFVpoZpGKKhHuODfR_xCnJ5COvDmIO34w5k_GUW_b3q_RpmOiLkzFgu60QPpN21hpU85BVN2maeRSnZ4C6FXxO_d-SkASKXWg0HqZdMYTrBJN3F7soxycKYrKQS8WbInNuGnXZccGZC1gjuM-DkxQRFO0fxRimic7BLyri-9DS6TnRIrdNpVzEiBUWI-kYtkp4bxE1VtAXmVuHaQklQyP9A40hdn2_bV_WonQo7XUtP_3RU=w1003-h564-no\" alt=\"ten\">\n    </div>\n    \n    <div class=\"item\">\n      <img src=\"https://lh3.googleusercontent.com/izp8w2Y_WF5lbexSiR98LSYH9huu16obiqm9-vN5gjgj44gvW5GLZnOH3pYf1rfxkB2kGuHd647-NWBqCKg8JcOEI7EIb2QxrnkWgH8ZgI5PKWvjh1iTspHHgVtjJi4oGXCd0WuLzxIEWZha8Fcr3706I-2sTyedIj0ZkDqkf7P6vwhRxuIOktXKc7O2aAsxBRUOEaxoY0Ewxj05s4NzSYmkis1VhQC9Jkoiucndh5iPSBhvDNFeM4OwxTbV_OqhJbqTyKcy0OvtfgYhTLuZsxWpD18BTs5z-WgrI9Dxk8lH-ebpuekb_SoOebUV4xAgR7Pu3XOMVkiL0t7uZ4acnIQqzJLNr0NQnK70XSvhvq_HEK8ent9qGY5RalTwp-cO9xcegQi7KFK-mLtB7ls-mZgTYS8NB9yD8PPpuYdB7_NQhFu9O3yxs48koQma76lIyRphvWSm6srVJE8ZW4ELsB436hvR_Mccnne5wV3pMIQ7LJQ555AqsQbPHf_Xn6w08rJrYWccEnYcFMCenAkAcOBXZeTeKOMSOAaHnXowb9X4xsrGysX2mXSbVoEnxOwTQc_5OxIuXgjYK08EkFci_lpEs1tOvrBQ84Yq0KUncnkGCqK3BJ3Ox8xCa-VFOu3IilfAsvcEqSWFnWiKWFxy9zgfo7Ju6Us=w1003-h564-no\" alt=\"eleven\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"https://lh3.googleusercontent.com/-3Y5YfPUjlqJX2WaQy6GdOWqNN6miTFPMlXzaqrm5XsMpD2gYnItEidzT5JRR0INwMlbqUJ3CTTf35j73x-ejm5NYbvZkmTIa5DQDuR9aQq0Je7hvZ4CBySazKXrebgC17mj3r1Jpbh38sc7db7Hj4z1jnOEjKM9yCvGYb_rWM5fjHbqBjZd69qz__wR71db3AnR4Q97FBMD4MWVTEr1DVUOCGidpX8HECOnyqSVNzrrgepbBHFxtvFBnXYC-A5Z-vg3-YjRc9b3KDLCj-A1nM3dYhyBJY2BSZxcW6o1293hTVWZPjlITjTCPMwE8zZlecLvIvCxnOXQRWtVu4QlIbnSJCN2ENB1EBIPdG5xYXsQG3MVKrBpdtm5a--MAS7Sx5gx-XcWxe270_mQTvxEQbln4Bn5zlWYkaiAjLklM-oJCBA0_zkadZiPCfX66eZIuCW0pOBXxeCrNL3fYajlU7PHZoSYXRTDp0B0plEFaHj5BsccGU5V2aIFwsRPMBeTJi95j1ht8RO8Y9FmIDsU6qWMMrykovX1-HMXj70qnptKgRP3vyk_SCtbRJEqXusZ-BYttHrIUpDe7vnChs0OchrNV_aa94HiLYIVe8EMK2x8Sv5Kz0adObgkUKU1FlQXGO2IlCGBUW4uHX1itdlUf608g5Ac2SI=w1003-h564-no\" alt=\"twelve\">\n</div>\n  </div>\n\n  <!-- Left and right controls -->\n  <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n<!--\n<div class=\"navbar navbar-default\">\n    <div class=\"row\">\n          <div class=\"navbar-left\">\n            <ul class=\"nav navbar-nav\">\n              <li class=\"\"><a href=\"\">MENSAHDESIGNS</a></li>\n              </ul>\n          </div>\n            <div class=\"navbar-text navbar-left\">\n              <h2>KODOSUICHA:DB APP</h2>\n            </div>\n    </div>\n</div>\n-->\n<br>\n\n<div class=\"row\">\n\n  <div class=\"col-sm-6\">\n    <button (click)=\"changeState('add')\"class=\"button\">Add Book</button>\n  </div>\n  <div class=\"col-sm-6\">\n    <label class=\"filterlabel\">Filter Theme\n      <select (change)=\"filterTheme (filteredTheme.value)\" #filteredTheme>\n        <option value=\"0\">Select</option>\n        <option *ngFor=\"let book of books\" value=\"{{book.theme}}\">{{book.theme}}</option>\n      </select>\n    </label>\n  </div>\n</div>\n\n\n<div *ngIf=\"appState == 'add' \" class=\"hamhead\">\n\n<!-- ADD FORM -->\n <!-- FORM VARS ORDER MATTERS: KEEP THE SAME ORDER AS FUNCTION -->\n      <form (submit)=\"addBook(\n        theme.value,\n        issuedate.value,\n        month.value,\n        year.value,\n        coverimg.value,\n        objective.value,\n        summary.value,\n        bio.value,\n        firstname.value,\n        lastname.value,\n        img.value,\n        firstname.value,\n    chilevocab.value,\n    japanphrases.value,\n    notes.value,\n    pois.value,\n    proverbs.value,\n    articletypes.value,\n    flavorcolors.value,\n    kanjis.value,\n    quotes.value,\n    bcphotos.value,\n    ecpphotos.value,\n    fcphotos.value,\n    ofdphotos.value,\n    storya.value,\n    storyb.value,\n    storyc.value,\n    storybl.value,\n    storyli.value,\n    storyaf.value\n        )\">\n<table class=\"table\">\n   \n    <tbody>\n    <tr>\n    <th>HAPPY</th>\n    <th>NEW</th> \n    <th>YEAR:-)!</th>\n  </tr>\n      <tr class=\"success\">\n        <td> <label>Theme:\n              <input type=\"text\" placeholder=\"Theme\" #theme>\n          </label></td>\n        <td> <label>Issue Date:\n               <input type=\"text\" placeholder=\"Issue Date\" #issuedate>\n          </label></td>\n        <td> <label>Month:\n              <input type=\"text\" placeholder=\"Month\" #month>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Year:\n               <input type=\"text\" placeholder=\"Year\" #year>\n          </label></td>\n        <td> <label>Cover Image:\n              <input type=\"text\" placeholder=\"Cover Image\" #coverimg>\n          </label></td>\n        <td> <label>Objective:\n              <input type=\"text\" placeholder=\"Objective\" #objective>\n          </label></td>\n      </tr>\n      <tr class=\"info\">\n        <td> <label>Summary:\n              <input type=\"text\" placeholder=\"Summary\" #summary>\n          </label></td>\n        <td> <label>First Name:\n               <input type=\"text\" placeholder=\"First Name\" #firstname>\n          </label></td>\n        <td> <label>Last Name:\n             <input type=\"text\" placeholder=\"Last Name\" #lastname>\n          </label></td>\n      </tr>\n       <tr class=\"danger\">\n        <td> <label>Author Image:\n              <input type=\"text\" placeholder=\"Author Image\" #img>\n            </label></td>\n        <td> <label>Author Biography:\n              <input type=\"text\" placeholder=\"Author Bio\" #bio>\n            </label></td>\n        <td> <label>One Fine Day Photo:\n              <input type=\"text\" placeholder=\"One Fine Day Photo\" #ofdphotos>\n          </label></td>\n      </tr>\n      <tr class=\"success\">\n        <td> <label>Chile Vocab:\n              <input type=\"text\" placeholder=\"Chile Vocab\" #chilevocab>\n          </label></td>\n        <td> <label>Japan Phrase:\n               <input type=\"text\" placeholder=\"Japan Phrase\" #japanphrases>\n          </label></td>\n        <td> <label>Notes:\n              <input type=\"text\" placeholder=\"Notes\" #notes>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Person Of Interest:\n               <input type=\"text\" placeholder=\"Person Of Interest\" #pois>\n          </label></td>\n        <td> <label>Proverbs:\n              <input type=\"text\" placeholder=\"Proverbs\" #proverbs>\n          </label></td>\n        <td><label>Article Type:\n              <input type=\"text\" placeholder=\"Article Type\" #articletypes> \n            </label>\n        </td>\n      </tr>\n      <tr class=\"success\">\n        <td> <label>Flavor Color:\n              <input type=\"text\" placeholder=\"Flavor Color\" #flavorcolors>\n          </label></td>\n        <td> <label>Kanji:\n               <input type=\"text\" placeholder=\"Kanji\" #kanjis>\n          </label></td>\n        <td> <label>Quote:\n              <input type=\"text\" placeholder=\"Quotes\" #quotes>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Front Cover Photo:\n               <input type=\"text\" placeholder=\"Front Cover Photo\" #fcphotos>\n          </label></td>\n        <td> <label>Back Cover Photo:\n              <input type=\"text\" placeholder=\"Back Cover Photo\" #bcphotos>\n          </label></td>\n        <td> <label>Everyday Chile Photo:\n              <input type=\"text\" placeholder=\"Everyday Chile Photo\" #ecpphotos>\n          </label></td>\n        </tr>\n      <tr class=\"success\">\n        <td> <label>Story A:<br/>\n              <textarea placeholder=\"Paste Story A here...\" #storya></textarea>\n          </label></td>\n        <td> <label>Story B:<br/>\n               <textarea placeholder=\"Paste Story B here...\" #storyb></textarea>\n          </label></td>\n        <td> <label>Story C:<br/>\n              <textarea placeholder=\"Paste Story C here...\" #storyc></textarea>\n          </label></td>\n      </tr>\n      <tr class=\"success\">\n        <td> <label>Story Blender:<br/>\n              <textarea placeholder=\"Paste Story Blender here...\" #storybl></textarea>\n          </label></td>\n        <td> <label>Story Live:<br/>\n               <textarea placeholder=\"Paste Story Live here...\" #storyli></textarea>\n          </label></td>\n        <td> <label>Story AfterEffects:<br/>\n              <textarea placeholder=\"Paste Story Aftereffects here...\" #storyaf></textarea>\n          </label></td>\n      </tr>\n    </tbody>\n      \n  </table>\n<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n<button (click)=\"changeState('default')\" class=\"btn btn-danger\">Cancel</button>\n  </form>\n\n</div> <!--NGIF ADD BUTTON PUSHED ENDS HERE; HAMHEAD CLASS ENDS HERE-->\n\n\n\n<!--EDIT FORM GOES HERE-->\n\n<div *ngIf=\"appState == 'edit' \" class=\"hamhead\">\n  <!-- FORM VARS ORDER MATTERS: KEEP THE SAME ORDER AS FUNCTION -->\n    <form (submit)=\"updateBook()\">\n<table class=\"table\">\n   \n    <tbody>\n    <tr>\n    <th>EDIT</th>\n    <th>FORM</th> \n    <th>HERE:</th>\n  </tr>\n      <tr class=\"danger\">\n        <td> <label>Theme:\n              <input type=\"text\" [(ngModel)]=\"activeTheme\" name=\"activeTheme\" placeholder=\"Theme\" #theme>\n          </label></td>\n        <td> <label>Issue Date:\n               <input type=\"text\" [(ngModel)]=\"activeIssueDate\" name=\"activeIssueDate\" placeholder=\"Issue Date\" #issuedate>\n          </label></td>\n        <td> <label>Month:\n              <input type=\"text\" [(ngModel)]=\"activeMonth\" name=\"activeMonth\" placeholder=\"Month\" #month>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Year:\n               <input type=\"text\" [(ngModel)]=\"activeYear\" name=\"activeYear\" placeholder=\"Year\" #year>\n          </label></td>\n        <td> <label>Cover Image:\n              <input type=\"text\" [(ngModel)]=\"activeCoverImage\" name=\"activeCoverImage\" placeholder=\"Cover Image\" #coverimg>\n          </label></td>\n        <td> <label>Objective:\n              <input type=\"text\" [(ngModel)]=\"activeObjective\" name=\"activeObjective\" placeholder=\"Objective\" #objective>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Summary:\n              <input type=\"text\" [(ngModel)]=\"activeSummary\" name=\"activeSummary\" placeholder=\"Summary\" #summary>\n          </label></td>\n        <td> <label>First Name:\n               <input type=\"text\" [(ngModel)]=\"activeFirstName\" name=\"activeFirstName\" placeholder=\"First Name\" #firstname>\n          </label></td>\n        <td> <label>Last Name:\n             <input type=\"text\" [(ngModel)]=\"activeLastName\" name=\"activeLastName\" placeholder=\"Last Name\" #lastname>\n          </label></td>\n      </tr>\n       <tr class=\"danger\">\n        <td> <label>Author Image:\n              <input type=\"text\" [(ngModel)]=\"activeAuthorImage\" name=\"activeAuthorImage\" placeholder=\"Author Image\" #img>\n            </label></td>\n        <td> <label>Author Biography:\n              <input type=\"text\" [(ngModel)]=\"activeAuthorBio\" name=\"activeAuthorBio\" placeholder=\"Author Bio\" #bio>\n            </label></td>\n        <td> <label>One Fine Day Photo:\n              <input type=\"text\" [(ngModel)]=\"activeOneFineDay\" name=\"activeOneFineDay\" placeholder=\"One Fine Day Photo\" #ofdphotos>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Chile Vocab:\n              <input type=\"text\" [(ngModel)]=\"activeChileVocab\" name=\"activeChileVocab\" placeholder=\"Chile Vocab\" #chilevocab>\n          </label></td>\n        <td> <label>Japan Phrase:\n               <input type=\"text\" [(ngModel)]=\"activeJapanPhrase\" name=\"activeJapanPhrase\" placeholder=\"Japan Phrase\" #japanphrases>\n          </label></td>\n        <td> <label>Notes:\n              <input type=\"text\" [(ngModel)]=\"activeNotes\" name=\"activeNotes\" placeholder=\"Notes\" #notes>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Person Of Interest:\n               <input type=\"text\" [(ngModel)]=\"activePersonOfInterest\" name=\"activePersonOfInterest\" placeholder=\"Person Of Interest\" #pois>\n          </label></td>\n        <td> <label>Proverb:\n              <input type=\"text\" [(ngModel)]=\"activeProverb\" name=\"activeProverb\" placeholder=\"Proverb\" #proverbs>\n          </label></td>\n        <td><label>Article Type:\n              <input type=\"text\" [(ngModel)]=\"activeArticleType\" name=\"activeArticleType\" placeholder=\"Article Type\" #articletypes> \n            </label>\n        </td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Flavor Color:\n              <input type=\"text\" [(ngModel)]=\"activeFlavorColor\" name=\"activeFlavorColor\" placeholder=\"Flavor Color\" #flavorcolors>\n          </label></td>\n        <td> <label>Kanji:\n               <input type=\"text\" [(ngModel)]=\"activeKanji\" name=\"activeKanji\" placeholder=\"Kanji\" #kanjis>\n          </label></td>\n        <td> <label>Quote:\n              <input type=\"text\" [(ngModel)]=\"activeQuote\" name=\"activeQuote\" placeholder=\"Quotes\" #quotes>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Front Cover Photo:\n               <input type=\"text\" [(ngModel)]=\"activeFrontCoverPhoto\" name=\"activeFrontCoverPhoto\" placeholder=\"Front Cover Photo\" #fcphotos>\n          </label></td>\n        <td> <label>Back Cover Photo:\n              <input type=\"text\" [(ngModel)]=\"activeBackCoverPhoto\" name=\"activeBackCoverPhoto\" placeholder=\"Back Cover Photo\" #bcphotos>\n          </label></td>\n        <td> <label>Everyday Chile Photo:\n              <input type=\"text\" [(ngModel)]=\"activeEverydayChilePhoto\" name=\"activeEverydayChilePhoto\" placeholder=\"Everyday Chile Photo\" #ecpphotos>\n          </label></td>\n        </tr>\n      <tr class=\"danger\">\n        <td> <label>Story A:<br/>\n              <textarea [(ngModel)]=\"activeStoryA\" name=\"activeStoryA\" placeholder=\"Paste Story A here...\" #storya></textarea>\n          </label></td>\n        <td> <label>Story B:<br/>\n               <textarea [(ngModel)]=\"activeStoryB\" name=\"activeStoryB\" placeholder=\"Paste Story B here...\" #storyb></textarea>\n          </label></td>\n        <td> <label>Story C:<br/>\n              <textarea [(ngModel)]=\"activeStoryC\" name=\"activeStoryC\"placeholder=\"Paste Story C here...\" #storyc></textarea>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Story Blender:<br/>\n              <textarea [(ngModel)]=\"activeStoryBlender\" name=\"activeStoryBlender\"placeholder=\"Paste Story Blender here...\" #storybl></textarea>\n          </label></td>\n        <td> <label>Story Live:<br/>\n               <textarea [(ngModel)]=\"activeStoryLive\" name=\"activeStoryLive\" placeholder=\"Paste Story Live here...\" #storyli></textarea>\n          </label></td>\n        <td> <label>Story AfterEffects:<br/>\n              <textarea [(ngModel)]=\"activeStoryAftereffects\" name=\"activeStoryAftereffects\" placeholder=\"Paste Story Aftereffects here...\" #storyaf></textarea>\n          </label></td>\n      </tr>\n    </tbody>\n      \n  </table>\n <input type=\"submit\" class=\"btn btn-info\" value=\"Submit\">\n<button (click)=\"changeState('default')\" class=\"btn btn-danger\">Cancel</button>\n</form>\n<br/>\n<br/>\n\n</div> <!--END .HAMHEAD CLASS DIV-->\n\n<div *ngIf=\"appState == 'extend' \" >\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n        <button (click)=\"changeState('default')\" class=\"btn btn-danger\">Go Back</button>\n\n    </div>\n  </div>\n\n\n  <div *ngFor=\"let book of books\">\n      <div *ngIf=\"book.$key == activeKey\">\n            <div class=\"row\">\n                      <div class=\"col-md-8\">\n                          <h3>{{book.theme}}</h3>\n                          <p>Issue Date: {{book.issuedate}}</p>\n                          <p>Year: {{book.year}}</p>\n                          <p>Summary: {{book.summary}}</p>\n                      </div>\n                      <div class=\"col-md-4\">\n                          <h4>Book Information</h4>\n                          <ul>\n                            <li>Theme: {{book.theme}}</li>\n                            <li>Issue Date: {{book.issuedate}}</li>\n                            <li>Month: {{book.month}}</li>\n                            <li>Year: {{book.year}}</li>\n                            <li>Cover Image: {{book.coverimg}}</li>\n                            <li>Objective: {{book.objective}}</li>\n                            <li>Summary: {{book.summary}}</li>\n                            <li>ImageTest:\n                              <img src=\"{{book.coverimg}}\" style=\"width:30px;height:30px;\">\n                            </li>\n                            </ul>\n                            \n                      </div>\n\n            </div>\n      </div>\n  </div><!-- *NGFOR BOOKS ENDS HERE -->\n  \n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div *ngIf=\"books\">\n      <table class=\"table\">\n        <thead >\n          <tr class=\"mensah\">\n            <th>Theme:</th>\n            <th>Issue Date:</th>\n            <th>Year:</th>\n            <th></th>\n          </tr >\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let book of books\" class=\"mensah\">\n            <td><h1>{{book.theme}}</h1></td>\n            <td><h1>{{book.issuedate}}</h1></td>\n            <td><h1>{{book.year}}</h1></td>\n            <td>\n              <button (click)=\"changeState('extend', book.$key)\"class=\"btn btn-primary\">More</button>\n              <button (click)=\"showEdit(book)\" class=\"btn btn-warning\">Edit</button>\n              <button (click)=\"deleteBook(book.$key)\" class=\"btn btn-danger\">Delete</button>\n\n            </td>\n          </tr>\n        </tbody>\n      </table>\n  </div>\n</div>\n</div>\n\n\n\n\n</div> <!--END CONTAINER DIV-->\n\n</div> <!--END TOTAL WRAPPER DIV-->"

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