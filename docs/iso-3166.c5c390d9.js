(function () {
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var parcelRequire = $parcel$global["parcelRequire8737"];
parcelRequire.register("fVp6P", function(module, exports) {

$parcel$export(module.exports, "iso31661", function () { return (parcelRequire("iUadU")).iso31661; });
$parcel$export(module.exports, "iso31661Alpha2ToAlpha3", function () { return (parcelRequire("i98yt")).iso31661Alpha2ToAlpha3; });
$parcel$export(module.exports, "iso31661Alpha2ToNumeric", function () { return (parcelRequire("38Vp8")).iso31661Alpha2ToNumeric; });
$parcel$export(module.exports, "iso31661Alpha3ToAlpha2", function () { return (parcelRequire("ea2vS")).iso31661Alpha3ToAlpha2; });
$parcel$export(module.exports, "iso31661NumericToAlpha2", function () { return (parcelRequire("cEl9N")).iso31661NumericToAlpha2; });
$parcel$export(module.exports, "iso31661Reserved", function () { return (parcelRequire("25DT6")).iso31661Reserved; });
$parcel$export(module.exports, "iso31662", function () { return (parcelRequire("926pk")).iso31662; });
$parcel$export(module.exports, "iso31663", function () { return (parcelRequire("kZ0jS")).iso31663; });
/**
 * @typedef {import('./1.js').ISO31661AssignedEntry} ISO31661AssignedEntry
 * @typedef {import('./1-reserved.js').ISO31661ReservedEntry} ISO31661ReservedEntry
 * @typedef {ISO31661AssignedEntry|ISO31661ReservedEntry} ISO31661Entry
 * @typedef {import('./2.js').ISO31662Entry} ISO31662Entry
 * @typedef {import('./3.js').ISO31663Entry} ISO31663Entry
 * @typedef {ISO31663Entry['type']} Type
 * @typedef {ISO31661Entry['state']} State
 */ 
var $iUadU = parcelRequire("iUadU");

var $i98yt = parcelRequire("i98yt");

var $38Vp8 = parcelRequire("38Vp8");

var $ea2vS = parcelRequire("ea2vS");

var $cEl9N = parcelRequire("cEl9N");

var $25DT6 = parcelRequire("25DT6");

var $926pk = parcelRequire("926pk");

var $kZ0jS = parcelRequire("kZ0jS");

});
parcelRequire.register("iUadU", function(module, exports) {

$parcel$export(module.exports, "iso31661", function () { return $dc35631ad7500257$export$3ed700545caf4431; });
/**
 * @typedef ISO31661AssignedEntry
 *   Object representing an assigned country.
 * @property {'assigned'} state
 *   State (example: `'assigned'`)
 * @property {string} alpha2
 *   ISO 3166-1 alpha-2 code (example: `'GB'`)
 * @property {string} alpha3
 *   ISO 3166-1 alpha-3 code (example: `'GBR'`)
 * @property {string} numeric
 *   ISO 3166-1 numeric (UN M49) code (example: `'826'`)
 * @property {string} name
 *   Name (example: `'United Kingdom of Great Britain and Northern Ireland'`)
 */ /**
 * List of assigned countries.
 *
 * @type {Array<ISO31661AssignedEntry>}
 */ var $dc35631ad7500257$export$3ed700545caf4431 = [
    {
        name: "Andorra",
        state: "assigned",
        alpha2: "AD",
        alpha3: "AND",
        numeric: "020"
    },
    {
        name: "United Arab Emirates",
        state: "assigned",
        alpha2: "AE",
        alpha3: "ARE",
        numeric: "784"
    },
    {
        name: "Afghanistan",
        state: "assigned",
        alpha2: "AF",
        alpha3: "AFG",
        numeric: "004"
    },
    {
        name: "Antigua and Barbuda",
        state: "assigned",
        alpha2: "AG",
        alpha3: "ATG",
        numeric: "028"
    },
    {
        name: "Anguilla",
        state: "assigned",
        alpha2: "AI",
        alpha3: "AIA",
        numeric: "660"
    },
    {
        name: "Albania",
        state: "assigned",
        alpha2: "AL",
        alpha3: "ALB",
        numeric: "008"
    },
    {
        name: "Armenia",
        state: "assigned",
        alpha2: "AM",
        alpha3: "ARM",
        numeric: "051"
    },
    {
        name: "Angola",
        state: "assigned",
        alpha2: "AO",
        alpha3: "AGO",
        numeric: "024"
    },
    {
        name: "Antarctica",
        state: "assigned",
        alpha2: "AQ",
        alpha3: "ATA",
        numeric: "010"
    },
    {
        name: "Argentina",
        state: "assigned",
        alpha2: "AR",
        alpha3: "ARG",
        numeric: "032"
    },
    {
        name: "American Samoa",
        state: "assigned",
        alpha2: "AS",
        alpha3: "ASM",
        numeric: "016"
    },
    {
        name: "Austria",
        state: "assigned",
        alpha2: "AT",
        alpha3: "AUT",
        numeric: "040"
    },
    {
        name: "Australia",
        state: "assigned",
        alpha2: "AU",
        alpha3: "AUS",
        numeric: "036"
    },
    {
        name: "Aruba",
        state: "assigned",
        alpha2: "AW",
        alpha3: "ABW",
        numeric: "533"
    },
    {
        name: "\xc5land Islands",
        state: "assigned",
        alpha2: "AX",
        alpha3: "ALA",
        numeric: "248"
    },
    {
        name: "Azerbaijan",
        state: "assigned",
        alpha2: "AZ",
        alpha3: "AZE",
        numeric: "031"
    },
    {
        name: "Bosnia and Herzegovina",
        state: "assigned",
        alpha2: "BA",
        alpha3: "BIH",
        numeric: "070"
    },
    {
        name: "Barbados",
        state: "assigned",
        alpha2: "BB",
        alpha3: "BRB",
        numeric: "052"
    },
    {
        name: "Bangladesh",
        state: "assigned",
        alpha2: "BD",
        alpha3: "BGD",
        numeric: "050"
    },
    {
        name: "Belgium",
        state: "assigned",
        alpha2: "BE",
        alpha3: "BEL",
        numeric: "056"
    },
    {
        name: "Burkina Faso",
        state: "assigned",
        alpha2: "BF",
        alpha3: "BFA",
        numeric: "854"
    },
    {
        name: "Bulgaria",
        state: "assigned",
        alpha2: "BG",
        alpha3: "BGR",
        numeric: "100"
    },
    {
        name: "Bahrain",
        state: "assigned",
        alpha2: "BH",
        alpha3: "BHR",
        numeric: "048"
    },
    {
        name: "Burundi",
        state: "assigned",
        alpha2: "BI",
        alpha3: "BDI",
        numeric: "108"
    },
    {
        name: "Benin",
        state: "assigned",
        alpha2: "BJ",
        alpha3: "BEN",
        numeric: "204"
    },
    {
        name: "Saint Barth\xe9lemy",
        state: "assigned",
        alpha2: "BL",
        alpha3: "BLM",
        numeric: "652"
    },
    {
        name: "Bermuda",
        state: "assigned",
        alpha2: "BM",
        alpha3: "BMU",
        numeric: "060"
    },
    {
        name: "Brunei Darussalam",
        state: "assigned",
        alpha2: "BN",
        alpha3: "BRN",
        numeric: "096"
    },
    {
        name: "Bolivia (Plurinational State of)",
        state: "assigned",
        alpha2: "BO",
        alpha3: "BOL",
        numeric: "068"
    },
    {
        name: "Bonaire, Sint Eustatius and Saba",
        state: "assigned",
        alpha2: "BQ",
        alpha3: "BES",
        numeric: "535"
    },
    {
        name: "Brazil",
        state: "assigned",
        alpha2: "BR",
        alpha3: "BRA",
        numeric: "076"
    },
    {
        name: "Bahamas",
        state: "assigned",
        alpha2: "BS",
        alpha3: "BHS",
        numeric: "044"
    },
    {
        name: "Bhutan",
        state: "assigned",
        alpha2: "BT",
        alpha3: "BTN",
        numeric: "064"
    },
    {
        name: "Bouvet Island",
        state: "assigned",
        alpha2: "BV",
        alpha3: "BVT",
        numeric: "074"
    },
    {
        name: "Botswana",
        state: "assigned",
        alpha2: "BW",
        alpha3: "BWA",
        numeric: "072"
    },
    {
        name: "Belarus",
        state: "assigned",
        alpha2: "BY",
        alpha3: "BLR",
        numeric: "112"
    },
    {
        name: "Belize",
        state: "assigned",
        alpha2: "BZ",
        alpha3: "BLZ",
        numeric: "084"
    },
    {
        name: "Canada",
        state: "assigned",
        alpha2: "CA",
        alpha3: "CAN",
        numeric: "124"
    },
    {
        name: "Cocos (Keeling) Islands",
        state: "assigned",
        alpha2: "CC",
        alpha3: "CCK",
        numeric: "166"
    },
    {
        name: "Congo, Democratic Republic of the",
        state: "assigned",
        alpha2: "CD",
        alpha3: "COD",
        numeric: "180"
    },
    {
        name: "Central African Republic",
        state: "assigned",
        alpha2: "CF",
        alpha3: "CAF",
        numeric: "140"
    },
    {
        name: "Congo",
        state: "assigned",
        alpha2: "CG",
        alpha3: "COG",
        numeric: "178"
    },
    {
        name: "Switzerland",
        state: "assigned",
        alpha2: "CH",
        alpha3: "CHE",
        numeric: "756"
    },
    {
        name: "C\xf4te d'Ivoire",
        state: "assigned",
        alpha2: "CI",
        alpha3: "CIV",
        numeric: "384"
    },
    {
        name: "Cook Islands",
        state: "assigned",
        alpha2: "CK",
        alpha3: "COK",
        numeric: "184"
    },
    {
        name: "Chile",
        state: "assigned",
        alpha2: "CL",
        alpha3: "CHL",
        numeric: "152"
    },
    {
        name: "Cameroon",
        state: "assigned",
        alpha2: "CM",
        alpha3: "CMR",
        numeric: "120"
    },
    {
        name: "China",
        state: "assigned",
        alpha2: "CN",
        alpha3: "CHN",
        numeric: "156"
    },
    {
        name: "Colombia",
        state: "assigned",
        alpha2: "CO",
        alpha3: "COL",
        numeric: "170"
    },
    {
        name: "Costa Rica",
        state: "assigned",
        alpha2: "CR",
        alpha3: "CRI",
        numeric: "188"
    },
    {
        name: "Cuba",
        state: "assigned",
        alpha2: "CU",
        alpha3: "CUB",
        numeric: "192"
    },
    {
        name: "Cabo Verde",
        state: "assigned",
        alpha2: "CV",
        alpha3: "CPV",
        numeric: "132"
    },
    {
        name: "Cura\xe7ao",
        state: "assigned",
        alpha2: "CW",
        alpha3: "CUW",
        numeric: "531"
    },
    {
        name: "Christmas Island",
        state: "assigned",
        alpha2: "CX",
        alpha3: "CXR",
        numeric: "162"
    },
    {
        name: "Cyprus",
        state: "assigned",
        alpha2: "CY",
        alpha3: "CYP",
        numeric: "196"
    },
    {
        name: "Czechia",
        state: "assigned",
        alpha2: "CZ",
        alpha3: "CZE",
        numeric: "203"
    },
    {
        name: "Germany",
        state: "assigned",
        alpha2: "DE",
        alpha3: "DEU",
        numeric: "276"
    },
    {
        name: "Djibouti",
        state: "assigned",
        alpha2: "DJ",
        alpha3: "DJI",
        numeric: "262"
    },
    {
        name: "Denmark",
        state: "assigned",
        alpha2: "DK",
        alpha3: "DNK",
        numeric: "208"
    },
    {
        name: "Dominica",
        state: "assigned",
        alpha2: "DM",
        alpha3: "DMA",
        numeric: "212"
    },
    {
        name: "Dominican Republic",
        state: "assigned",
        alpha2: "DO",
        alpha3: "DOM",
        numeric: "214"
    },
    {
        name: "Algeria",
        state: "assigned",
        alpha2: "DZ",
        alpha3: "DZA",
        numeric: "012"
    },
    {
        name: "Ecuador",
        state: "assigned",
        alpha2: "EC",
        alpha3: "ECU",
        numeric: "218"
    },
    {
        name: "Estonia",
        state: "assigned",
        alpha2: "EE",
        alpha3: "EST",
        numeric: "233"
    },
    {
        name: "Egypt",
        state: "assigned",
        alpha2: "EG",
        alpha3: "EGY",
        numeric: "818"
    },
    {
        name: "Western Sahara",
        state: "assigned",
        alpha2: "EH",
        alpha3: "ESH",
        numeric: "732"
    },
    {
        name: "Eritrea",
        state: "assigned",
        alpha2: "ER",
        alpha3: "ERI",
        numeric: "232"
    },
    {
        name: "Spain",
        state: "assigned",
        alpha2: "ES",
        alpha3: "ESP",
        numeric: "724"
    },
    {
        name: "Ethiopia",
        state: "assigned",
        alpha2: "ET",
        alpha3: "ETH",
        numeric: "231"
    },
    {
        name: "Finland",
        state: "assigned",
        alpha2: "FI",
        alpha3: "FIN",
        numeric: "246"
    },
    {
        name: "Fiji",
        state: "assigned",
        alpha2: "FJ",
        alpha3: "FJI",
        numeric: "242"
    },
    {
        name: "Falkland Islands (Malvinas)",
        state: "assigned",
        alpha2: "FK",
        alpha3: "FLK",
        numeric: "238"
    },
    {
        name: "Micronesia (Federated States of)",
        state: "assigned",
        alpha2: "FM",
        alpha3: "FSM",
        numeric: "583"
    },
    {
        name: "Faroe Islands",
        state: "assigned",
        alpha2: "FO",
        alpha3: "FRO",
        numeric: "234"
    },
    {
        name: "France",
        state: "assigned",
        alpha2: "FR",
        alpha3: "FRA",
        numeric: "250"
    },
    {
        name: "Gabon",
        state: "assigned",
        alpha2: "GA",
        alpha3: "GAB",
        numeric: "266"
    },
    {
        name: "United Kingdom of Great Britain and Northern Ireland",
        state: "assigned",
        alpha2: "GB",
        alpha3: "GBR",
        numeric: "826"
    },
    {
        name: "Grenada",
        state: "assigned",
        alpha2: "GD",
        alpha3: "GRD",
        numeric: "308"
    },
    {
        name: "Georgia",
        state: "assigned",
        alpha2: "GE",
        alpha3: "GEO",
        numeric: "268"
    },
    {
        name: "French Guiana",
        state: "assigned",
        alpha2: "GF",
        alpha3: "GUF",
        numeric: "254"
    },
    {
        name: "Guernsey",
        state: "assigned",
        alpha2: "GG",
        alpha3: "GGY",
        numeric: "831"
    },
    {
        name: "Ghana",
        state: "assigned",
        alpha2: "GH",
        alpha3: "GHA",
        numeric: "288"
    },
    {
        name: "Gibraltar",
        state: "assigned",
        alpha2: "GI",
        alpha3: "GIB",
        numeric: "292"
    },
    {
        name: "Greenland",
        state: "assigned",
        alpha2: "GL",
        alpha3: "GRL",
        numeric: "304"
    },
    {
        name: "Gambia",
        state: "assigned",
        alpha2: "GM",
        alpha3: "GMB",
        numeric: "270"
    },
    {
        name: "Guinea",
        state: "assigned",
        alpha2: "GN",
        alpha3: "GIN",
        numeric: "324"
    },
    {
        name: "Guadeloupe",
        state: "assigned",
        alpha2: "GP",
        alpha3: "GLP",
        numeric: "312"
    },
    {
        name: "Equatorial Guinea",
        state: "assigned",
        alpha2: "GQ",
        alpha3: "GNQ",
        numeric: "226"
    },
    {
        name: "Greece",
        state: "assigned",
        alpha2: "GR",
        alpha3: "GRC",
        numeric: "300"
    },
    {
        name: "South Georgia and the South Sandwich Islands",
        state: "assigned",
        alpha2: "GS",
        alpha3: "SGS",
        numeric: "239"
    },
    {
        name: "Guatemala",
        state: "assigned",
        alpha2: "GT",
        alpha3: "GTM",
        numeric: "320"
    },
    {
        name: "Guam",
        state: "assigned",
        alpha2: "GU",
        alpha3: "GUM",
        numeric: "316"
    },
    {
        name: "Guinea-Bissau",
        state: "assigned",
        alpha2: "GW",
        alpha3: "GNB",
        numeric: "624"
    },
    {
        name: "Guyana",
        state: "assigned",
        alpha2: "GY",
        alpha3: "GUY",
        numeric: "328"
    },
    {
        name: "Hong Kong",
        state: "assigned",
        alpha2: "HK",
        alpha3: "HKG",
        numeric: "344"
    },
    {
        name: "Heard Island and McDonald Islands",
        state: "assigned",
        alpha2: "HM",
        alpha3: "HMD",
        numeric: "334"
    },
    {
        name: "Honduras",
        state: "assigned",
        alpha2: "HN",
        alpha3: "HND",
        numeric: "340"
    },
    {
        name: "Croatia",
        state: "assigned",
        alpha2: "HR",
        alpha3: "HRV",
        numeric: "191"
    },
    {
        name: "Haiti",
        state: "assigned",
        alpha2: "HT",
        alpha3: "HTI",
        numeric: "332"
    },
    {
        name: "Hungary",
        state: "assigned",
        alpha2: "HU",
        alpha3: "HUN",
        numeric: "348"
    },
    {
        name: "Indonesia",
        state: "assigned",
        alpha2: "ID",
        alpha3: "IDN",
        numeric: "360"
    },
    {
        name: "Ireland",
        state: "assigned",
        alpha2: "IE",
        alpha3: "IRL",
        numeric: "372"
    },
    {
        name: "Israel",
        state: "assigned",
        alpha2: "IL",
        alpha3: "ISR",
        numeric: "376"
    },
    {
        name: "Isle of Man",
        state: "assigned",
        alpha2: "IM",
        alpha3: "IMN",
        numeric: "833"
    },
    {
        name: "India",
        state: "assigned",
        alpha2: "IN",
        alpha3: "IND",
        numeric: "356"
    },
    {
        name: "British Indian Ocean Territory",
        state: "assigned",
        alpha2: "IO",
        alpha3: "IOT",
        numeric: "086"
    },
    {
        name: "Iraq",
        state: "assigned",
        alpha2: "IQ",
        alpha3: "IRQ",
        numeric: "368"
    },
    {
        name: "Iran (Islamic Republic of)",
        state: "assigned",
        alpha2: "IR",
        alpha3: "IRN",
        numeric: "364"
    },
    {
        name: "Iceland",
        state: "assigned",
        alpha2: "IS",
        alpha3: "ISL",
        numeric: "352"
    },
    {
        name: "Italy",
        state: "assigned",
        alpha2: "IT",
        alpha3: "ITA",
        numeric: "380"
    },
    {
        name: "Jersey",
        state: "assigned",
        alpha2: "JE",
        alpha3: "JEY",
        numeric: "832"
    },
    {
        name: "Jamaica",
        state: "assigned",
        alpha2: "JM",
        alpha3: "JAM",
        numeric: "388"
    },
    {
        name: "Jordan",
        state: "assigned",
        alpha2: "JO",
        alpha3: "JOR",
        numeric: "400"
    },
    {
        name: "Japan",
        state: "assigned",
        alpha2: "JP",
        alpha3: "JPN",
        numeric: "392"
    },
    {
        name: "Kenya",
        state: "assigned",
        alpha2: "KE",
        alpha3: "KEN",
        numeric: "404"
    },
    {
        name: "Kyrgyzstan",
        state: "assigned",
        alpha2: "KG",
        alpha3: "KGZ",
        numeric: "417"
    },
    {
        name: "Cambodia",
        state: "assigned",
        alpha2: "KH",
        alpha3: "KHM",
        numeric: "116"
    },
    {
        name: "Kiribati",
        state: "assigned",
        alpha2: "KI",
        alpha3: "KIR",
        numeric: "296"
    },
    {
        name: "Comoros",
        state: "assigned",
        alpha2: "KM",
        alpha3: "COM",
        numeric: "174"
    },
    {
        name: "Saint Kitts and Nevis",
        state: "assigned",
        alpha2: "KN",
        alpha3: "KNA",
        numeric: "659"
    },
    {
        name: "Korea (Democratic People's Republic of)",
        state: "assigned",
        alpha2: "KP",
        alpha3: "PRK",
        numeric: "408"
    },
    {
        name: "Korea, Republic of",
        state: "assigned",
        alpha2: "KR",
        alpha3: "KOR",
        numeric: "410"
    },
    {
        name: "Kuwait",
        state: "assigned",
        alpha2: "KW",
        alpha3: "KWT",
        numeric: "414"
    },
    {
        name: "Cayman Islands",
        state: "assigned",
        alpha2: "KY",
        alpha3: "CYM",
        numeric: "136"
    },
    {
        name: "Kazakhstan",
        state: "assigned",
        alpha2: "KZ",
        alpha3: "KAZ",
        numeric: "398"
    },
    {
        name: "Lao People's Democratic Republic",
        state: "assigned",
        alpha2: "LA",
        alpha3: "LAO",
        numeric: "418"
    },
    {
        name: "Lebanon",
        state: "assigned",
        alpha2: "LB",
        alpha3: "LBN",
        numeric: "422"
    },
    {
        name: "Saint Lucia",
        state: "assigned",
        alpha2: "LC",
        alpha3: "LCA",
        numeric: "662"
    },
    {
        name: "Liechtenstein",
        state: "assigned",
        alpha2: "LI",
        alpha3: "LIE",
        numeric: "438"
    },
    {
        name: "Sri Lanka",
        state: "assigned",
        alpha2: "LK",
        alpha3: "LKA",
        numeric: "144"
    },
    {
        name: "Liberia",
        state: "assigned",
        alpha2: "LR",
        alpha3: "LBR",
        numeric: "430"
    },
    {
        name: "Lesotho",
        state: "assigned",
        alpha2: "LS",
        alpha3: "LSO",
        numeric: "426"
    },
    {
        name: "Lithuania",
        state: "assigned",
        alpha2: "LT",
        alpha3: "LTU",
        numeric: "440"
    },
    {
        name: "Luxembourg",
        state: "assigned",
        alpha2: "LU",
        alpha3: "LUX",
        numeric: "442"
    },
    {
        name: "Latvia",
        state: "assigned",
        alpha2: "LV",
        alpha3: "LVA",
        numeric: "428"
    },
    {
        name: "Libya",
        state: "assigned",
        alpha2: "LY",
        alpha3: "LBY",
        numeric: "434"
    },
    {
        name: "Morocco",
        state: "assigned",
        alpha2: "MA",
        alpha3: "MAR",
        numeric: "504"
    },
    {
        name: "Monaco",
        state: "assigned",
        alpha2: "MC",
        alpha3: "MCO",
        numeric: "492"
    },
    {
        name: "Moldova, Republic of",
        state: "assigned",
        alpha2: "MD",
        alpha3: "MDA",
        numeric: "498"
    },
    {
        name: "Montenegro",
        state: "assigned",
        alpha2: "ME",
        alpha3: "MNE",
        numeric: "499"
    },
    {
        name: "Saint Martin (French part)",
        state: "assigned",
        alpha2: "MF",
        alpha3: "MAF",
        numeric: "663"
    },
    {
        name: "Madagascar",
        state: "assigned",
        alpha2: "MG",
        alpha3: "MDG",
        numeric: "450"
    },
    {
        name: "Marshall Islands",
        state: "assigned",
        alpha2: "MH",
        alpha3: "MHL",
        numeric: "584"
    },
    {
        name: "North Macedonia",
        state: "assigned",
        alpha2: "MK",
        alpha3: "MKD",
        numeric: "807"
    },
    {
        name: "Mali",
        state: "assigned",
        alpha2: "ML",
        alpha3: "MLI",
        numeric: "466"
    },
    {
        name: "Myanmar",
        state: "assigned",
        alpha2: "MM",
        alpha3: "MMR",
        numeric: "104"
    },
    {
        name: "Mongolia",
        state: "assigned",
        alpha2: "MN",
        alpha3: "MNG",
        numeric: "496"
    },
    {
        name: "Macao",
        state: "assigned",
        alpha2: "MO",
        alpha3: "MAC",
        numeric: "446"
    },
    {
        name: "Northern Mariana Islands",
        state: "assigned",
        alpha2: "MP",
        alpha3: "MNP",
        numeric: "580"
    },
    {
        name: "Martinique",
        state: "assigned",
        alpha2: "MQ",
        alpha3: "MTQ",
        numeric: "474"
    },
    {
        name: "Mauritania",
        state: "assigned",
        alpha2: "MR",
        alpha3: "MRT",
        numeric: "478"
    },
    {
        name: "Montserrat",
        state: "assigned",
        alpha2: "MS",
        alpha3: "MSR",
        numeric: "500"
    },
    {
        name: "Malta",
        state: "assigned",
        alpha2: "MT",
        alpha3: "MLT",
        numeric: "470"
    },
    {
        name: "Mauritius",
        state: "assigned",
        alpha2: "MU",
        alpha3: "MUS",
        numeric: "480"
    },
    {
        name: "Maldives",
        state: "assigned",
        alpha2: "MV",
        alpha3: "MDV",
        numeric: "462"
    },
    {
        name: "Malawi",
        state: "assigned",
        alpha2: "MW",
        alpha3: "MWI",
        numeric: "454"
    },
    {
        name: "Mexico",
        state: "assigned",
        alpha2: "MX",
        alpha3: "MEX",
        numeric: "484"
    },
    {
        name: "Malaysia",
        state: "assigned",
        alpha2: "MY",
        alpha3: "MYS",
        numeric: "458"
    },
    {
        name: "Mozambique",
        state: "assigned",
        alpha2: "MZ",
        alpha3: "MOZ",
        numeric: "508"
    },
    {
        name: "Namibia",
        state: "assigned",
        alpha2: "NA",
        alpha3: "NAM",
        numeric: "516"
    },
    {
        name: "New Caledonia",
        state: "assigned",
        alpha2: "NC",
        alpha3: "NCL",
        numeric: "540"
    },
    {
        name: "Niger",
        state: "assigned",
        alpha2: "NE",
        alpha3: "NER",
        numeric: "562"
    },
    {
        name: "Norfolk Island",
        state: "assigned",
        alpha2: "NF",
        alpha3: "NFK",
        numeric: "574"
    },
    {
        name: "Nigeria",
        state: "assigned",
        alpha2: "NG",
        alpha3: "NGA",
        numeric: "566"
    },
    {
        name: "Nicaragua",
        state: "assigned",
        alpha2: "NI",
        alpha3: "NIC",
        numeric: "558"
    },
    {
        name: "Netherlands",
        state: "assigned",
        alpha2: "NL",
        alpha3: "NLD",
        numeric: "528"
    },
    {
        name: "Norway",
        state: "assigned",
        alpha2: "NO",
        alpha3: "NOR",
        numeric: "578"
    },
    {
        name: "Nepal",
        state: "assigned",
        alpha2: "NP",
        alpha3: "NPL",
        numeric: "524"
    },
    {
        name: "Nauru",
        state: "assigned",
        alpha2: "NR",
        alpha3: "NRU",
        numeric: "520"
    },
    {
        name: "Niue",
        state: "assigned",
        alpha2: "NU",
        alpha3: "NIU",
        numeric: "570"
    },
    {
        name: "New Zealand",
        state: "assigned",
        alpha2: "NZ",
        alpha3: "NZL",
        numeric: "554"
    },
    {
        name: "Oman",
        state: "assigned",
        alpha2: "OM",
        alpha3: "OMN",
        numeric: "512"
    },
    {
        name: "Panama",
        state: "assigned",
        alpha2: "PA",
        alpha3: "PAN",
        numeric: "591"
    },
    {
        name: "Peru",
        state: "assigned",
        alpha2: "PE",
        alpha3: "PER",
        numeric: "604"
    },
    {
        name: "French Polynesia",
        state: "assigned",
        alpha2: "PF",
        alpha3: "PYF",
        numeric: "258"
    },
    {
        name: "Papua New Guinea",
        state: "assigned",
        alpha2: "PG",
        alpha3: "PNG",
        numeric: "598"
    },
    {
        name: "Philippines",
        state: "assigned",
        alpha2: "PH",
        alpha3: "PHL",
        numeric: "608"
    },
    {
        name: "Pakistan",
        state: "assigned",
        alpha2: "PK",
        alpha3: "PAK",
        numeric: "586"
    },
    {
        name: "Poland",
        state: "assigned",
        alpha2: "PL",
        alpha3: "POL",
        numeric: "616"
    },
    {
        name: "Saint Pierre and Miquelon",
        state: "assigned",
        alpha2: "PM",
        alpha3: "SPM",
        numeric: "666"
    },
    {
        name: "Pitcairn",
        state: "assigned",
        alpha2: "PN",
        alpha3: "PCN",
        numeric: "612"
    },
    {
        name: "Puerto Rico",
        state: "assigned",
        alpha2: "PR",
        alpha3: "PRI",
        numeric: "630"
    },
    {
        name: "Palestine, State of",
        state: "assigned",
        alpha2: "PS",
        alpha3: "PSE",
        numeric: "275"
    },
    {
        name: "Portugal",
        state: "assigned",
        alpha2: "PT",
        alpha3: "PRT",
        numeric: "620"
    },
    {
        name: "Palau",
        state: "assigned",
        alpha2: "PW",
        alpha3: "PLW",
        numeric: "585"
    },
    {
        name: "Paraguay",
        state: "assigned",
        alpha2: "PY",
        alpha3: "PRY",
        numeric: "600"
    },
    {
        name: "Qatar",
        state: "assigned",
        alpha2: "QA",
        alpha3: "QAT",
        numeric: "634"
    },
    {
        name: "R\xe9union",
        state: "assigned",
        alpha2: "RE",
        alpha3: "REU",
        numeric: "638"
    },
    {
        name: "Romania",
        state: "assigned",
        alpha2: "RO",
        alpha3: "ROU",
        numeric: "642"
    },
    {
        name: "Serbia",
        state: "assigned",
        alpha2: "RS",
        alpha3: "SRB",
        numeric: "688"
    },
    {
        name: "Russian Federation",
        state: "assigned",
        alpha2: "RU",
        alpha3: "RUS",
        numeric: "643"
    },
    {
        name: "Rwanda",
        state: "assigned",
        alpha2: "RW",
        alpha3: "RWA",
        numeric: "646"
    },
    {
        name: "Saudi Arabia",
        state: "assigned",
        alpha2: "SA",
        alpha3: "SAU",
        numeric: "682"
    },
    {
        name: "Solomon Islands",
        state: "assigned",
        alpha2: "SB",
        alpha3: "SLB",
        numeric: "090"
    },
    {
        name: "Seychelles",
        state: "assigned",
        alpha2: "SC",
        alpha3: "SYC",
        numeric: "690"
    },
    {
        name: "Sudan",
        state: "assigned",
        alpha2: "SD",
        alpha3: "SDN",
        numeric: "729"
    },
    {
        name: "Sweden",
        state: "assigned",
        alpha2: "SE",
        alpha3: "SWE",
        numeric: "752"
    },
    {
        name: "Singapore",
        state: "assigned",
        alpha2: "SG",
        alpha3: "SGP",
        numeric: "702"
    },
    {
        name: "Saint Helena, Ascension and Tristan da Cunha",
        state: "assigned",
        alpha2: "SH",
        alpha3: "SHN",
        numeric: "654"
    },
    {
        name: "Slovenia",
        state: "assigned",
        alpha2: "SI",
        alpha3: "SVN",
        numeric: "705"
    },
    {
        name: "Svalbard and Jan Mayen",
        state: "assigned",
        alpha2: "SJ",
        alpha3: "SJM",
        numeric: "744"
    },
    {
        name: "Slovakia",
        state: "assigned",
        alpha2: "SK",
        alpha3: "SVK",
        numeric: "703"
    },
    {
        name: "Sierra Leone",
        state: "assigned",
        alpha2: "SL",
        alpha3: "SLE",
        numeric: "694"
    },
    {
        name: "San Marino",
        state: "assigned",
        alpha2: "SM",
        alpha3: "SMR",
        numeric: "674"
    },
    {
        name: "Senegal",
        state: "assigned",
        alpha2: "SN",
        alpha3: "SEN",
        numeric: "686"
    },
    {
        name: "Somalia",
        state: "assigned",
        alpha2: "SO",
        alpha3: "SOM",
        numeric: "706"
    },
    {
        name: "Suriname",
        state: "assigned",
        alpha2: "SR",
        alpha3: "SUR",
        numeric: "740"
    },
    {
        name: "South Sudan",
        state: "assigned",
        alpha2: "SS",
        alpha3: "SSD",
        numeric: "728"
    },
    {
        name: "Sao Tome and Principe",
        state: "assigned",
        alpha2: "ST",
        alpha3: "STP",
        numeric: "678"
    },
    {
        name: "El Salvador",
        state: "assigned",
        alpha2: "SV",
        alpha3: "SLV",
        numeric: "222"
    },
    {
        name: "Sint Maarten (Dutch part)",
        state: "assigned",
        alpha2: "SX",
        alpha3: "SXM",
        numeric: "534"
    },
    {
        name: "Syrian Arab Republic",
        state: "assigned",
        alpha2: "SY",
        alpha3: "SYR",
        numeric: "760"
    },
    {
        name: "Eswatini",
        state: "assigned",
        alpha2: "SZ",
        alpha3: "SWZ",
        numeric: "748"
    },
    {
        name: "Turks and Caicos Islands",
        state: "assigned",
        alpha2: "TC",
        alpha3: "TCA",
        numeric: "796"
    },
    {
        name: "Chad",
        state: "assigned",
        alpha2: "TD",
        alpha3: "TCD",
        numeric: "148"
    },
    {
        name: "French Southern Territories",
        state: "assigned",
        alpha2: "TF",
        alpha3: "ATF",
        numeric: "260"
    },
    {
        name: "Togo",
        state: "assigned",
        alpha2: "TG",
        alpha3: "TGO",
        numeric: "768"
    },
    {
        name: "Thailand",
        state: "assigned",
        alpha2: "TH",
        alpha3: "THA",
        numeric: "764"
    },
    {
        name: "Tajikistan",
        state: "assigned",
        alpha2: "TJ",
        alpha3: "TJK",
        numeric: "762"
    },
    {
        name: "Tokelau",
        state: "assigned",
        alpha2: "TK",
        alpha3: "TKL",
        numeric: "772"
    },
    {
        name: "Timor-Leste",
        state: "assigned",
        alpha2: "TL",
        alpha3: "TLS",
        numeric: "626"
    },
    {
        name: "Turkmenistan",
        state: "assigned",
        alpha2: "TM",
        alpha3: "TKM",
        numeric: "795"
    },
    {
        name: "Tunisia",
        state: "assigned",
        alpha2: "TN",
        alpha3: "TUN",
        numeric: "788"
    },
    {
        name: "Tonga",
        state: "assigned",
        alpha2: "TO",
        alpha3: "TON",
        numeric: "776"
    },
    {
        name: "T\xfcrkiye",
        state: "assigned",
        alpha2: "TR",
        alpha3: "TUR",
        numeric: "792"
    },
    {
        name: "Trinidad and Tobago",
        state: "assigned",
        alpha2: "TT",
        alpha3: "TTO",
        numeric: "780"
    },
    {
        name: "Tuvalu",
        state: "assigned",
        alpha2: "TV",
        alpha3: "TUV",
        numeric: "798"
    },
    {
        name: "Taiwan, Province of China",
        state: "assigned",
        alpha2: "TW",
        alpha3: "TWN",
        numeric: "158"
    },
    {
        name: "Tanzania, United Republic of",
        state: "assigned",
        alpha2: "TZ",
        alpha3: "TZA",
        numeric: "834"
    },
    {
        name: "Ukraine",
        state: "assigned",
        alpha2: "UA",
        alpha3: "UKR",
        numeric: "804"
    },
    {
        name: "Uganda",
        state: "assigned",
        alpha2: "UG",
        alpha3: "UGA",
        numeric: "800"
    },
    {
        name: "United States Minor Outlying Islands",
        state: "assigned",
        alpha2: "UM",
        alpha3: "UMI",
        numeric: "581"
    },
    {
        name: "United States of America",
        state: "assigned",
        alpha2: "US",
        alpha3: "USA",
        numeric: "840"
    },
    {
        name: "Uruguay",
        state: "assigned",
        alpha2: "UY",
        alpha3: "URY",
        numeric: "858"
    },
    {
        name: "Uzbekistan",
        state: "assigned",
        alpha2: "UZ",
        alpha3: "UZB",
        numeric: "860"
    },
    {
        name: "Holy See",
        state: "assigned",
        alpha2: "VA",
        alpha3: "VAT",
        numeric: "336"
    },
    {
        name: "Saint Vincent and the Grenadines",
        state: "assigned",
        alpha2: "VC",
        alpha3: "VCT",
        numeric: "670"
    },
    {
        name: "Venezuela (Bolivarian Republic of)",
        state: "assigned",
        alpha2: "VE",
        alpha3: "VEN",
        numeric: "862"
    },
    {
        name: "Virgin Islands (British)",
        state: "assigned",
        alpha2: "VG",
        alpha3: "VGB",
        numeric: "092"
    },
    {
        name: "Virgin Islands (U.S.)",
        state: "assigned",
        alpha2: "VI",
        alpha3: "VIR",
        numeric: "850"
    },
    {
        name: "Viet Nam",
        state: "assigned",
        alpha2: "VN",
        alpha3: "VNM",
        numeric: "704"
    },
    {
        name: "Vanuatu",
        state: "assigned",
        alpha2: "VU",
        alpha3: "VUT",
        numeric: "548"
    },
    {
        name: "Wallis and Futuna",
        state: "assigned",
        alpha2: "WF",
        alpha3: "WLF",
        numeric: "876"
    },
    {
        name: "Samoa",
        state: "assigned",
        alpha2: "WS",
        alpha3: "WSM",
        numeric: "882"
    },
    {
        name: "Yemen",
        state: "assigned",
        alpha2: "YE",
        alpha3: "YEM",
        numeric: "887"
    },
    {
        name: "Mayotte",
        state: "assigned",
        alpha2: "YT",
        alpha3: "MYT",
        numeric: "175"
    },
    {
        name: "South Africa",
        state: "assigned",
        alpha2: "ZA",
        alpha3: "ZAF",
        numeric: "710"
    },
    {
        name: "Zambia",
        state: "assigned",
        alpha2: "ZM",
        alpha3: "ZMB",
        numeric: "894"
    },
    {
        name: "Zimbabwe",
        state: "assigned",
        alpha2: "ZW",
        alpha3: "ZWE",
        numeric: "716"
    }
];

});

parcelRequire.register("i98yt", function(module, exports) {

$parcel$export(module.exports, "iso31661Alpha2ToAlpha3", function () { return $d35fb421aac90a32$export$18cb796d0d11a979; });
/**
 * Map of ISO 3166-1 alpha-2 codes to ISO 3166-1 alpha-3 codes.
 *
 * @type {Record<string, string>}
 */ var $d35fb421aac90a32$export$18cb796d0d11a979 = {
    AD: "AND",
    AE: "ARE",
    AF: "AFG",
    AG: "ATG",
    AI: "AIA",
    AL: "ALB",
    AM: "ARM",
    AO: "AGO",
    AQ: "ATA",
    AR: "ARG",
    AS: "ASM",
    AT: "AUT",
    AU: "AUS",
    AW: "ABW",
    AX: "ALA",
    AZ: "AZE",
    BA: "BIH",
    BB: "BRB",
    BD: "BGD",
    BE: "BEL",
    BF: "BFA",
    BG: "BGR",
    BH: "BHR",
    BI: "BDI",
    BJ: "BEN",
    BL: "BLM",
    BM: "BMU",
    BN: "BRN",
    BO: "BOL",
    BQ: "BES",
    BR: "BRA",
    BS: "BHS",
    BT: "BTN",
    BV: "BVT",
    BW: "BWA",
    BY: "BLR",
    BZ: "BLZ",
    CA: "CAN",
    CC: "CCK",
    CD: "COD",
    CF: "CAF",
    CG: "COG",
    CH: "CHE",
    CI: "CIV",
    CK: "COK",
    CL: "CHL",
    CM: "CMR",
    CN: "CHN",
    CO: "COL",
    CR: "CRI",
    CU: "CUB",
    CV: "CPV",
    CW: "CUW",
    CX: "CXR",
    CY: "CYP",
    CZ: "CZE",
    DE: "DEU",
    DJ: "DJI",
    DK: "DNK",
    DM: "DMA",
    DO: "DOM",
    DZ: "DZA",
    EC: "ECU",
    EE: "EST",
    EG: "EGY",
    EH: "ESH",
    ER: "ERI",
    ES: "ESP",
    ET: "ETH",
    FI: "FIN",
    FJ: "FJI",
    FK: "FLK",
    FM: "FSM",
    FO: "FRO",
    FR: "FRA",
    GA: "GAB",
    GB: "GBR",
    GD: "GRD",
    GE: "GEO",
    GF: "GUF",
    GG: "GGY",
    GH: "GHA",
    GI: "GIB",
    GL: "GRL",
    GM: "GMB",
    GN: "GIN",
    GP: "GLP",
    GQ: "GNQ",
    GR: "GRC",
    GS: "SGS",
    GT: "GTM",
    GU: "GUM",
    GW: "GNB",
    GY: "GUY",
    HK: "HKG",
    HM: "HMD",
    HN: "HND",
    HR: "HRV",
    HT: "HTI",
    HU: "HUN",
    ID: "IDN",
    IE: "IRL",
    IL: "ISR",
    IM: "IMN",
    IN: "IND",
    IO: "IOT",
    IQ: "IRQ",
    IR: "IRN",
    IS: "ISL",
    IT: "ITA",
    JE: "JEY",
    JM: "JAM",
    JO: "JOR",
    JP: "JPN",
    KE: "KEN",
    KG: "KGZ",
    KH: "KHM",
    KI: "KIR",
    KM: "COM",
    KN: "KNA",
    KP: "PRK",
    KR: "KOR",
    KW: "KWT",
    KY: "CYM",
    KZ: "KAZ",
    LA: "LAO",
    LB: "LBN",
    LC: "LCA",
    LI: "LIE",
    LK: "LKA",
    LR: "LBR",
    LS: "LSO",
    LT: "LTU",
    LU: "LUX",
    LV: "LVA",
    LY: "LBY",
    MA: "MAR",
    MC: "MCO",
    MD: "MDA",
    ME: "MNE",
    MF: "MAF",
    MG: "MDG",
    MH: "MHL",
    MK: "MKD",
    ML: "MLI",
    MM: "MMR",
    MN: "MNG",
    MO: "MAC",
    MP: "MNP",
    MQ: "MTQ",
    MR: "MRT",
    MS: "MSR",
    MT: "MLT",
    MU: "MUS",
    MV: "MDV",
    MW: "MWI",
    MX: "MEX",
    MY: "MYS",
    MZ: "MOZ",
    NA: "NAM",
    NC: "NCL",
    NE: "NER",
    NF: "NFK",
    NG: "NGA",
    NI: "NIC",
    NL: "NLD",
    NO: "NOR",
    NP: "NPL",
    NR: "NRU",
    NU: "NIU",
    NZ: "NZL",
    OM: "OMN",
    PA: "PAN",
    PE: "PER",
    PF: "PYF",
    PG: "PNG",
    PH: "PHL",
    PK: "PAK",
    PL: "POL",
    PM: "SPM",
    PN: "PCN",
    PR: "PRI",
    PS: "PSE",
    PT: "PRT",
    PW: "PLW",
    PY: "PRY",
    QA: "QAT",
    RE: "REU",
    RO: "ROU",
    RS: "SRB",
    RU: "RUS",
    RW: "RWA",
    SA: "SAU",
    SB: "SLB",
    SC: "SYC",
    SD: "SDN",
    SE: "SWE",
    SG: "SGP",
    SH: "SHN",
    SI: "SVN",
    SJ: "SJM",
    SK: "SVK",
    SL: "SLE",
    SM: "SMR",
    SN: "SEN",
    SO: "SOM",
    SR: "SUR",
    SS: "SSD",
    ST: "STP",
    SV: "SLV",
    SX: "SXM",
    SY: "SYR",
    SZ: "SWZ",
    TC: "TCA",
    TD: "TCD",
    TF: "ATF",
    TG: "TGO",
    TH: "THA",
    TJ: "TJK",
    TK: "TKL",
    TL: "TLS",
    TM: "TKM",
    TN: "TUN",
    TO: "TON",
    TR: "TUR",
    TT: "TTO",
    TV: "TUV",
    TW: "TWN",
    TZ: "TZA",
    UA: "UKR",
    UG: "UGA",
    UM: "UMI",
    US: "USA",
    UY: "URY",
    UZ: "UZB",
    VA: "VAT",
    VC: "VCT",
    VE: "VEN",
    VG: "VGB",
    VI: "VIR",
    VN: "VNM",
    VU: "VUT",
    WF: "WLF",
    WS: "WSM",
    YE: "YEM",
    YT: "MYT",
    ZA: "ZAF",
    ZM: "ZMB",
    ZW: "ZWE"
};

});

parcelRequire.register("38Vp8", function(module, exports) {

$parcel$export(module.exports, "iso31661Alpha2ToNumeric", function () { return $249ea5c390c3def9$export$864bfbb5d2a99902; });
/**
 * Map of ISO 3166-1 alpha-2 codes to ISO 3166-1 numeric (UN M49) codes
 *
 * @type {Record<string, string>}
 */ var $249ea5c390c3def9$export$864bfbb5d2a99902 = {
    AD: "020",
    AE: "784",
    AF: "004",
    AG: "028",
    AI: "660",
    AL: "008",
    AM: "051",
    AO: "024",
    AQ: "010",
    AR: "032",
    AS: "016",
    AT: "040",
    AU: "036",
    AW: "533",
    AX: "248",
    AZ: "031",
    BA: "070",
    BB: "052",
    BD: "050",
    BE: "056",
    BF: "854",
    BG: "100",
    BH: "048",
    BI: "108",
    BJ: "204",
    BL: "652",
    BM: "060",
    BN: "096",
    BO: "068",
    BQ: "535",
    BR: "076",
    BS: "044",
    BT: "064",
    BV: "074",
    BW: "072",
    BY: "112",
    BZ: "084",
    CA: "124",
    CC: "166",
    CD: "180",
    CF: "140",
    CG: "178",
    CH: "756",
    CI: "384",
    CK: "184",
    CL: "152",
    CM: "120",
    CN: "156",
    CO: "170",
    CR: "188",
    CU: "192",
    CV: "132",
    CW: "531",
    CX: "162",
    CY: "196",
    CZ: "203",
    DE: "276",
    DJ: "262",
    DK: "208",
    DM: "212",
    DO: "214",
    DZ: "012",
    EC: "218",
    EE: "233",
    EG: "818",
    EH: "732",
    ER: "232",
    ES: "724",
    ET: "231",
    FI: "246",
    FJ: "242",
    FK: "238",
    FM: "583",
    FO: "234",
    FR: "250",
    GA: "266",
    GB: "826",
    GD: "308",
    GE: "268",
    GF: "254",
    GG: "831",
    GH: "288",
    GI: "292",
    GL: "304",
    GM: "270",
    GN: "324",
    GP: "312",
    GQ: "226",
    GR: "300",
    GS: "239",
    GT: "320",
    GU: "316",
    GW: "624",
    GY: "328",
    HK: "344",
    HM: "334",
    HN: "340",
    HR: "191",
    HT: "332",
    HU: "348",
    ID: "360",
    IE: "372",
    IL: "376",
    IM: "833",
    IN: "356",
    IO: "086",
    IQ: "368",
    IR: "364",
    IS: "352",
    IT: "380",
    JE: "832",
    JM: "388",
    JO: "400",
    JP: "392",
    KE: "404",
    KG: "417",
    KH: "116",
    KI: "296",
    KM: "174",
    KN: "659",
    KP: "408",
    KR: "410",
    KW: "414",
    KY: "136",
    KZ: "398",
    LA: "418",
    LB: "422",
    LC: "662",
    LI: "438",
    LK: "144",
    LR: "430",
    LS: "426",
    LT: "440",
    LU: "442",
    LV: "428",
    LY: "434",
    MA: "504",
    MC: "492",
    MD: "498",
    ME: "499",
    MF: "663",
    MG: "450",
    MH: "584",
    MK: "807",
    ML: "466",
    MM: "104",
    MN: "496",
    MO: "446",
    MP: "580",
    MQ: "474",
    MR: "478",
    MS: "500",
    MT: "470",
    MU: "480",
    MV: "462",
    MW: "454",
    MX: "484",
    MY: "458",
    MZ: "508",
    NA: "516",
    NC: "540",
    NE: "562",
    NF: "574",
    NG: "566",
    NI: "558",
    NL: "528",
    NO: "578",
    NP: "524",
    NR: "520",
    NU: "570",
    NZ: "554",
    OM: "512",
    PA: "591",
    PE: "604",
    PF: "258",
    PG: "598",
    PH: "608",
    PK: "586",
    PL: "616",
    PM: "666",
    PN: "612",
    PR: "630",
    PS: "275",
    PT: "620",
    PW: "585",
    PY: "600",
    QA: "634",
    RE: "638",
    RO: "642",
    RS: "688",
    RU: "643",
    RW: "646",
    SA: "682",
    SB: "090",
    SC: "690",
    SD: "729",
    SE: "752",
    SG: "702",
    SH: "654",
    SI: "705",
    SJ: "744",
    SK: "703",
    SL: "694",
    SM: "674",
    SN: "686",
    SO: "706",
    SR: "740",
    SS: "728",
    ST: "678",
    SV: "222",
    SX: "534",
    SY: "760",
    SZ: "748",
    TC: "796",
    TD: "148",
    TF: "260",
    TG: "768",
    TH: "764",
    TJ: "762",
    TK: "772",
    TL: "626",
    TM: "795",
    TN: "788",
    TO: "776",
    TR: "792",
    TT: "780",
    TV: "798",
    TW: "158",
    TZ: "834",
    UA: "804",
    UG: "800",
    UM: "581",
    US: "840",
    UY: "858",
    UZ: "860",
    VA: "336",
    VC: "670",
    VE: "862",
    VG: "092",
    VI: "850",
    VN: "704",
    VU: "548",
    WF: "876",
    WS: "882",
    YE: "887",
    YT: "175",
    ZA: "710",
    ZM: "894",
    ZW: "716"
};

});

parcelRequire.register("ea2vS", function(module, exports) {

$parcel$export(module.exports, "iso31661Alpha3ToAlpha2", function () { return $a4f3f2e9de785854$export$7a02db14de7d787f; });
/**
 * Map of ISO 3166-1 alpha-3 codes to ISO 3166-1 alpha-2 codes
 *
 * @type {Record<string, string>}
 */ var $a4f3f2e9de785854$export$7a02db14de7d787f = {
    AND: "AD",
    ARE: "AE",
    AFG: "AF",
    ATG: "AG",
    AIA: "AI",
    ALB: "AL",
    ARM: "AM",
    AGO: "AO",
    ATA: "AQ",
    ARG: "AR",
    ASM: "AS",
    AUT: "AT",
    AUS: "AU",
    ABW: "AW",
    ALA: "AX",
    AZE: "AZ",
    BIH: "BA",
    BRB: "BB",
    BGD: "BD",
    BEL: "BE",
    BFA: "BF",
    BGR: "BG",
    BHR: "BH",
    BDI: "BI",
    BEN: "BJ",
    BLM: "BL",
    BMU: "BM",
    BRN: "BN",
    BOL: "BO",
    BES: "BQ",
    BRA: "BR",
    BHS: "BS",
    BTN: "BT",
    BVT: "BV",
    BWA: "BW",
    BLR: "BY",
    BLZ: "BZ",
    CAN: "CA",
    CCK: "CC",
    COD: "CD",
    CAF: "CF",
    COG: "CG",
    CHE: "CH",
    CIV: "CI",
    COK: "CK",
    CHL: "CL",
    CMR: "CM",
    CHN: "CN",
    COL: "CO",
    CRI: "CR",
    CUB: "CU",
    CPV: "CV",
    CUW: "CW",
    CXR: "CX",
    CYP: "CY",
    CZE: "CZ",
    DEU: "DE",
    DJI: "DJ",
    DNK: "DK",
    DMA: "DM",
    DOM: "DO",
    DZA: "DZ",
    ECU: "EC",
    EST: "EE",
    EGY: "EG",
    ESH: "EH",
    ERI: "ER",
    ESP: "ES",
    ETH: "ET",
    FIN: "FI",
    FJI: "FJ",
    FLK: "FK",
    FSM: "FM",
    FRO: "FO",
    FRA: "FR",
    GAB: "GA",
    GBR: "GB",
    GRD: "GD",
    GEO: "GE",
    GUF: "GF",
    GGY: "GG",
    GHA: "GH",
    GIB: "GI",
    GRL: "GL",
    GMB: "GM",
    GIN: "GN",
    GLP: "GP",
    GNQ: "GQ",
    GRC: "GR",
    SGS: "GS",
    GTM: "GT",
    GUM: "GU",
    GNB: "GW",
    GUY: "GY",
    HKG: "HK",
    HMD: "HM",
    HND: "HN",
    HRV: "HR",
    HTI: "HT",
    HUN: "HU",
    IDN: "ID",
    IRL: "IE",
    ISR: "IL",
    IMN: "IM",
    IND: "IN",
    IOT: "IO",
    IRQ: "IQ",
    IRN: "IR",
    ISL: "IS",
    ITA: "IT",
    JEY: "JE",
    JAM: "JM",
    JOR: "JO",
    JPN: "JP",
    KEN: "KE",
    KGZ: "KG",
    KHM: "KH",
    KIR: "KI",
    COM: "KM",
    KNA: "KN",
    PRK: "KP",
    KOR: "KR",
    KWT: "KW",
    CYM: "KY",
    KAZ: "KZ",
    LAO: "LA",
    LBN: "LB",
    LCA: "LC",
    LIE: "LI",
    LKA: "LK",
    LBR: "LR",
    LSO: "LS",
    LTU: "LT",
    LUX: "LU",
    LVA: "LV",
    LBY: "LY",
    MAR: "MA",
    MCO: "MC",
    MDA: "MD",
    MNE: "ME",
    MAF: "MF",
    MDG: "MG",
    MHL: "MH",
    MKD: "MK",
    MLI: "ML",
    MMR: "MM",
    MNG: "MN",
    MAC: "MO",
    MNP: "MP",
    MTQ: "MQ",
    MRT: "MR",
    MSR: "MS",
    MLT: "MT",
    MUS: "MU",
    MDV: "MV",
    MWI: "MW",
    MEX: "MX",
    MYS: "MY",
    MOZ: "MZ",
    NAM: "NA",
    NCL: "NC",
    NER: "NE",
    NFK: "NF",
    NGA: "NG",
    NIC: "NI",
    NLD: "NL",
    NOR: "NO",
    NPL: "NP",
    NRU: "NR",
    NIU: "NU",
    NZL: "NZ",
    OMN: "OM",
    PAN: "PA",
    PER: "PE",
    PYF: "PF",
    PNG: "PG",
    PHL: "PH",
    PAK: "PK",
    POL: "PL",
    SPM: "PM",
    PCN: "PN",
    PRI: "PR",
    PSE: "PS",
    PRT: "PT",
    PLW: "PW",
    PRY: "PY",
    QAT: "QA",
    REU: "RE",
    ROU: "RO",
    SRB: "RS",
    RUS: "RU",
    RWA: "RW",
    SAU: "SA",
    SLB: "SB",
    SYC: "SC",
    SDN: "SD",
    SWE: "SE",
    SGP: "SG",
    SHN: "SH",
    SVN: "SI",
    SJM: "SJ",
    SVK: "SK",
    SLE: "SL",
    SMR: "SM",
    SEN: "SN",
    SOM: "SO",
    SUR: "SR",
    SSD: "SS",
    STP: "ST",
    SLV: "SV",
    SXM: "SX",
    SYR: "SY",
    SWZ: "SZ",
    TCA: "TC",
    TCD: "TD",
    ATF: "TF",
    TGO: "TG",
    THA: "TH",
    TJK: "TJ",
    TKL: "TK",
    TLS: "TL",
    TKM: "TM",
    TUN: "TN",
    TON: "TO",
    TUR: "TR",
    TTO: "TT",
    TUV: "TV",
    TWN: "TW",
    TZA: "TZ",
    UKR: "UA",
    UGA: "UG",
    UMI: "UM",
    USA: "US",
    URY: "UY",
    UZB: "UZ",
    VAT: "VA",
    VCT: "VC",
    VEN: "VE",
    VGB: "VG",
    VIR: "VI",
    VNM: "VN",
    VUT: "VU",
    WLF: "WF",
    WSM: "WS",
    YEM: "YE",
    MYT: "YT",
    ZAF: "ZA",
    ZMB: "ZM",
    ZWE: "ZW"
};

});

parcelRequire.register("cEl9N", function(module, exports) {

$parcel$export(module.exports, "iso31661NumericToAlpha2", function () { return $9359a1d146aa5332$export$b7cbbe6305697e38; });
/**
 * Map of ISO 3166-1 numeric (UN M49) codes to ISO 3166-1 alpha-2 codes
 *
 * @type {Record<string, string>}
 */ var $9359a1d146aa5332$export$b7cbbe6305697e38 = {
    100: "BG",
    104: "MM",
    108: "BI",
    112: "BY",
    116: "KH",
    120: "CM",
    124: "CA",
    132: "CV",
    136: "KY",
    140: "CF",
    144: "LK",
    148: "TD",
    152: "CL",
    156: "CN",
    158: "TW",
    162: "CX",
    166: "CC",
    170: "CO",
    174: "KM",
    175: "YT",
    178: "CG",
    180: "CD",
    184: "CK",
    188: "CR",
    191: "HR",
    192: "CU",
    196: "CY",
    203: "CZ",
    204: "BJ",
    208: "DK",
    212: "DM",
    214: "DO",
    218: "EC",
    222: "SV",
    226: "GQ",
    231: "ET",
    232: "ER",
    233: "EE",
    234: "FO",
    238: "FK",
    239: "GS",
    242: "FJ",
    246: "FI",
    248: "AX",
    250: "FR",
    254: "GF",
    258: "PF",
    260: "TF",
    262: "DJ",
    266: "GA",
    268: "GE",
    270: "GM",
    275: "PS",
    276: "DE",
    288: "GH",
    292: "GI",
    296: "KI",
    300: "GR",
    304: "GL",
    308: "GD",
    312: "GP",
    316: "GU",
    320: "GT",
    324: "GN",
    328: "GY",
    332: "HT",
    334: "HM",
    336: "VA",
    340: "HN",
    344: "HK",
    348: "HU",
    352: "IS",
    356: "IN",
    360: "ID",
    364: "IR",
    368: "IQ",
    372: "IE",
    376: "IL",
    380: "IT",
    384: "CI",
    388: "JM",
    392: "JP",
    398: "KZ",
    400: "JO",
    404: "KE",
    408: "KP",
    410: "KR",
    414: "KW",
    417: "KG",
    418: "LA",
    422: "LB",
    426: "LS",
    428: "LV",
    430: "LR",
    434: "LY",
    438: "LI",
    440: "LT",
    442: "LU",
    446: "MO",
    450: "MG",
    454: "MW",
    458: "MY",
    462: "MV",
    466: "ML",
    470: "MT",
    474: "MQ",
    478: "MR",
    480: "MU",
    484: "MX",
    492: "MC",
    496: "MN",
    498: "MD",
    499: "ME",
    500: "MS",
    504: "MA",
    508: "MZ",
    512: "OM",
    516: "NA",
    520: "NR",
    524: "NP",
    528: "NL",
    531: "CW",
    533: "AW",
    534: "SX",
    535: "BQ",
    540: "NC",
    548: "VU",
    554: "NZ",
    558: "NI",
    562: "NE",
    566: "NG",
    570: "NU",
    574: "NF",
    578: "NO",
    580: "MP",
    581: "UM",
    583: "FM",
    584: "MH",
    585: "PW",
    586: "PK",
    591: "PA",
    598: "PG",
    600: "PY",
    604: "PE",
    608: "PH",
    612: "PN",
    616: "PL",
    620: "PT",
    624: "GW",
    626: "TL",
    630: "PR",
    634: "QA",
    638: "RE",
    642: "RO",
    643: "RU",
    646: "RW",
    652: "BL",
    654: "SH",
    659: "KN",
    660: "AI",
    662: "LC",
    663: "MF",
    666: "PM",
    670: "VC",
    674: "SM",
    678: "ST",
    682: "SA",
    686: "SN",
    688: "RS",
    690: "SC",
    694: "SL",
    702: "SG",
    703: "SK",
    704: "VN",
    705: "SI",
    706: "SO",
    710: "ZA",
    716: "ZW",
    724: "ES",
    728: "SS",
    729: "SD",
    732: "EH",
    740: "SR",
    744: "SJ",
    748: "SZ",
    752: "SE",
    756: "CH",
    760: "SY",
    762: "TJ",
    764: "TH",
    768: "TG",
    772: "TK",
    776: "TO",
    780: "TT",
    784: "AE",
    788: "TN",
    792: "TR",
    795: "TM",
    796: "TC",
    798: "TV",
    800: "UG",
    804: "UA",
    807: "MK",
    818: "EG",
    826: "GB",
    831: "GG",
    832: "JE",
    833: "IM",
    834: "TZ",
    840: "US",
    850: "VI",
    854: "BF",
    858: "UY",
    860: "UZ",
    862: "VE",
    876: "WF",
    882: "WS",
    887: "YE",
    894: "ZM",
    "020": "AD",
    "004": "AF",
    "028": "AG",
    "008": "AL",
    "051": "AM",
    "024": "AO",
    "010": "AQ",
    "032": "AR",
    "016": "AS",
    "040": "AT",
    "036": "AU",
    "031": "AZ",
    "070": "BA",
    "052": "BB",
    "050": "BD",
    "056": "BE",
    "048": "BH",
    "060": "BM",
    "096": "BN",
    "068": "BO",
    "076": "BR",
    "044": "BS",
    "064": "BT",
    "074": "BV",
    "072": "BW",
    "084": "BZ",
    "012": "DZ",
    "086": "IO",
    "090": "SB",
    "092": "VG"
};

});

parcelRequire.register("25DT6", function(module, exports) {

$parcel$export(module.exports, "iso31661Reserved", function () { return $185afd4782fbf993$export$a79e03544b2106e8; });
/**
 * @typedef ISO31661ReservedEntry
 *   Object representing a reserved country.
 * @property {'indeterminately-reserved'|'exceptionally-reserved'|'transitionally-reserved'|'formerly-assigned'} state
 *   State (example: `'assigned'`)
 * @property {string} alpha2
 *   ISO 3166-1 alpha-2 code (example: `'GB'`)
 * @property {string} name
 *   Name (example: `'United Kingdom of Great Britain and Northern Ireland'`)
 */ /**
 * List of reserved country codes.
 *
 * @type {Array<ISO31661ReservedEntry>}
 */ var $185afd4782fbf993$export$a79e03544b2106e8 = [
    {
        state: "exceptionally-reserved",
        alpha2: "AC",
        name: "Ascension Island"
    },
    {
        state: "transitionally-reserved",
        alpha2: "AN",
        name: "Netherlands Antilles"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "AP",
        name: "African Regional Industrial Property Organization"
    },
    {
        state: "transitionally-reserved",
        alpha2: "BU",
        name: "Burma"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "BX",
        name: "Benelux Trademarks and Designs Office"
    },
    {
        state: "exceptionally-reserved",
        alpha2: "CP",
        name: "Clipperton Island"
    },
    {
        state: "exceptionally-reserved",
        alpha2: "CQ",
        name: "Island of Sark"
    },
    {
        state: "transitionally-reserved",
        alpha2: "CS",
        name: "Serbia and Montenegro"
    },
    {
        state: "formerly-assigned",
        alpha2: "CT",
        name: "Canton and Enderbury Islands"
    },
    {
        state: "formerly-assigned",
        alpha2: "DD",
        name: "German Democratic Republic"
    },
    {
        state: "exceptionally-reserved",
        alpha2: "DG",
        name: "Diego Garcia"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "DY",
        name: "Benin"
    },
    {
        state: "exceptionally-reserved",
        alpha2: "EA",
        name: "Ceuta, Melilla"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "EF",
        name: "Union of Countries under the European Community Patent Convention"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "EM",
        name: "European Trademark Office"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "EP",
        name: "European Patent Organization"
    },
    {
        state: "exceptionally-reserved",
        alpha2: "EU",
        name: "European Union"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "EV",
        name: "Eurasian Patent Organization"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "EW",
        name: "Estonia"
    },
    {
        state: "exceptionally-reserved",
        alpha2: "EZ",
        name: "Eurozone"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "FL",
        name: "Liechtenstein"
    },
    {
        state: "formerly-assigned",
        alpha2: "FQ",
        name: "French Southern and Antarctic Territories"
    },
    {
        state: "exceptionally-reserved",
        alpha2: "FX",
        name: "France, Metropolitan"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "GC",
        name: "Patent Office of the Cooperation Council for the Arab States of the Gulf"
    },
    {
        state: "formerly-assigned",
        alpha2: "HV",
        name: "Upper Volta"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "IB",
        name: "International Bureau of WIPO"
    },
    {
        state: "exceptionally-reserved",
        alpha2: "IC",
        name: "Canary Islands"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "JA",
        name: "Jamaica"
    },
    {
        state: "formerly-assigned",
        alpha2: "JT",
        name: "Johnston Island"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "LF",
        name: "Libya Fezzan"
    },
    {
        state: "formerly-assigned",
        alpha2: "MI",
        name: "Midway Islands"
    },
    {
        state: "formerly-assigned",
        alpha2: "NH",
        name: "New Hebrides"
    },
    {
        state: "formerly-assigned",
        alpha2: "NQ",
        name: "Dronning Maud Land"
    },
    {
        state: "transitionally-reserved",
        alpha2: "NT",
        name: "Neutral Zone"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "OA",
        name: "African Intellectual Property Organization"
    },
    {
        state: "formerly-assigned",
        alpha2: "PC",
        name: "Pacific Islands"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "PI",
        name: "Philippines"
    },
    {
        state: "formerly-assigned",
        alpha2: "PU",
        name: "United States Miscellaneous Pacific Islands"
    },
    {
        state: "formerly-assigned",
        alpha2: "PZ",
        name: "Panama Canal Zone"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "RA",
        name: "Argentina"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "RB",
        name: "Bolivia"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "RC",
        name: "China"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "RH",
        name: "Haiti"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "RI",
        name: "Indonesia"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "RL",
        name: "Lebanon"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "RM",
        name: "Madagascar"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "RN",
        name: "Niger"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "RP",
        name: "Philippines"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "SF",
        name: "Finland"
    },
    {
        state: "exceptionally-reserved",
        alpha2: "SU",
        name: "USSR"
    },
    {
        state: "exceptionally-reserved",
        alpha2: "TA",
        name: "Tristan da Cunha"
    },
    {
        state: "transitionally-reserved",
        alpha2: "TP",
        name: "East Timor"
    },
    {
        state: "exceptionally-reserved",
        alpha2: "UK",
        name: "United Kingdom"
    },
    {
        state: "exceptionally-reserved",
        alpha2: "UN",
        name: "United Nations"
    },
    {
        state: "formerly-assigned",
        alpha2: "VD",
        name: "Viet-Nam, Democratic Republic of"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "WG",
        name: "Grenada"
    },
    {
        state: "formerly-assigned",
        alpha2: "WK",
        name: "Wake Island"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "WL",
        name: "Saint Lucia"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "WO",
        name: "World Intellectual Property Organization"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "WV",
        name: "Saint Vincent"
    },
    {
        state: "formerly-assigned",
        alpha2: "YD",
        name: "Yemen, Democratic"
    },
    {
        state: "transitionally-reserved",
        alpha2: "YU",
        name: "Yugoslavia"
    },
    {
        state: "indeterminately-reserved",
        alpha2: "YV",
        name: "Venezuela"
    },
    {
        state: "transitionally-reserved",
        alpha2: "ZR",
        name: "Zaire"
    }
];

});

parcelRequire.register("926pk", function(module, exports) {

$parcel$export(module.exports, "iso31662", function () { return $693945610080398f$export$69f8ed9625b898f1; });
/**
 * @typedef ISO31662Entry
 *   Object representing a subdivision.
 * @property {string} code
 *   ISO 3166-2 code (example: `'GB-BFS'`)
 * @property {string} parent
 *    ISO 3166-1 alpha-2 code or ISO 3166-2 code (example: `'GB'`)
 * @property {string} name
 *   Name (example: `'Belfast'`)
 */ /**
 * List of subdivisions.
 *
 * @type {Array<ISO31662Entry>}
 */ var $693945610080398f$export$69f8ed9625b898f1 = [
    {
        code: "AD-02",
        name: "Canillo",
        parent: "AD"
    },
    {
        code: "AD-03",
        name: "Encamp",
        parent: "AD"
    },
    {
        code: "AD-04",
        name: "La Massana",
        parent: "AD"
    },
    {
        code: "AD-05",
        name: "Ordino",
        parent: "AD"
    },
    {
        code: "AD-06",
        name: "Sant Juli\xe0 de L\xf2ria",
        parent: "AD"
    },
    {
        code: "AD-07",
        name: "Andorra la Vella",
        parent: "AD"
    },
    {
        code: "AD-08",
        name: "Escaldes-Engordany",
        parent: "AD"
    },
    {
        code: "AE-AJ",
        name: "‘Ajmān",
        parent: "AE"
    },
    {
        code: "AE-AZ",
        name: "Abū Z̧aby",
        parent: "AE"
    },
    {
        code: "AE-DU",
        name: "Dubayy",
        parent: "AE"
    },
    {
        code: "AE-FU",
        name: "Al Fujayrah",
        parent: "AE"
    },
    {
        code: "AE-RK",
        name: "Ra’s al Khaymah",
        parent: "AE"
    },
    {
        code: "AE-SH",
        name: "Ash Shāriqah",
        parent: "AE"
    },
    {
        code: "AE-UQ",
        name: "Umm al Qaywayn",
        parent: "AE"
    },
    {
        code: "AF-BAL",
        name: "Balkh",
        parent: "AF"
    },
    {
        code: "AF-BAM",
        name: "Bāmyān",
        parent: "AF"
    },
    {
        code: "AF-BDG",
        name: "Bādghīs",
        parent: "AF"
    },
    {
        code: "AF-BDS",
        name: "Badakhshān",
        parent: "AF"
    },
    {
        code: "AF-BGL",
        name: "Baghlān",
        parent: "AF"
    },
    {
        code: "AF-DAY",
        name: "Dāykundī",
        parent: "AF"
    },
    {
        code: "AF-FRA",
        name: "Farāh",
        parent: "AF"
    },
    {
        code: "AF-FYB",
        name: "Fāryāb",
        parent: "AF"
    },
    {
        code: "AF-GHA",
        name: "Ghaznī",
        parent: "AF"
    },
    {
        code: "AF-GHO",
        name: "Ghōr",
        parent: "AF"
    },
    {
        code: "AF-HEL",
        name: "Helmand",
        parent: "AF"
    },
    {
        code: "AF-HER",
        name: "Herāt",
        parent: "AF"
    },
    {
        code: "AF-JOW",
        name: "Jowzjān",
        parent: "AF"
    },
    {
        code: "AF-KAB",
        name: "Kābul",
        parent: "AF"
    },
    {
        code: "AF-KAN",
        name: "Kandahār",
        parent: "AF"
    },
    {
        code: "AF-KAP",
        name: "Kāpīsā",
        parent: "AF"
    },
    {
        code: "AF-KDZ",
        name: "Kunduz",
        parent: "AF"
    },
    {
        code: "AF-KHO",
        name: "Khōst",
        parent: "AF"
    },
    {
        code: "AF-KNR",
        name: "Kunaṟ",
        parent: "AF"
    },
    {
        code: "AF-LAG",
        name: "Laghmān",
        parent: "AF"
    },
    {
        code: "AF-LOG",
        name: "Lōgar",
        parent: "AF"
    },
    {
        code: "AF-NAN",
        name: "Nangarhār",
        parent: "AF"
    },
    {
        code: "AF-NIM",
        name: "Nīmrōz",
        parent: "AF"
    },
    {
        code: "AF-NUR",
        name: "Nūristān",
        parent: "AF"
    },
    {
        code: "AF-PAN",
        name: "Panjshayr",
        parent: "AF"
    },
    {
        code: "AF-PAR",
        name: "Parwān",
        parent: "AF"
    },
    {
        code: "AF-PIA",
        name: "Paktiyā",
        parent: "AF"
    },
    {
        code: "AF-PKA",
        name: "Paktīkā",
        parent: "AF"
    },
    {
        code: "AF-SAM",
        name: "Samangān",
        parent: "AF"
    },
    {
        code: "AF-SAR",
        name: "Sar-e Pul",
        parent: "AF"
    },
    {
        code: "AF-TAK",
        name: "Takhār",
        parent: "AF"
    },
    {
        code: "AF-URU",
        name: "Uruzgān",
        parent: "AF"
    },
    {
        code: "AF-WAR",
        name: "Wardak",
        parent: "AF"
    },
    {
        code: "AF-ZAB",
        name: "Zābul",
        parent: "AF"
    },
    {
        code: "AG-03",
        name: "Saint George",
        parent: "AG"
    },
    {
        code: "AG-04",
        name: "Saint John",
        parent: "AG"
    },
    {
        code: "AG-05",
        name: "Saint Mary",
        parent: "AG"
    },
    {
        code: "AG-06",
        name: "Saint Paul",
        parent: "AG"
    },
    {
        code: "AG-07",
        name: "Saint Peter",
        parent: "AG"
    },
    {
        code: "AG-08",
        name: "Saint Philip",
        parent: "AG"
    },
    {
        code: "AG-10",
        name: "Barbuda",
        parent: "AG"
    },
    {
        code: "AG-11",
        name: "Redonda",
        parent: "AG"
    },
    {
        code: "AL-01",
        name: "Berat",
        parent: "AL"
    },
    {
        code: "AL-02",
        name: "Durr\xebs",
        parent: "AL"
    },
    {
        code: "AL-03",
        name: "Elbasan",
        parent: "AL"
    },
    {
        code: "AL-04",
        name: "Fier",
        parent: "AL"
    },
    {
        code: "AL-05",
        name: "Gjirokast\xebr",
        parent: "AL"
    },
    {
        code: "AL-06",
        name: "Kor\xe7\xeb",
        parent: "AL"
    },
    {
        code: "AL-07",
        name: "Kuk\xebs",
        parent: "AL"
    },
    {
        code: "AL-08",
        name: "Lezh\xeb",
        parent: "AL"
    },
    {
        code: "AL-09",
        name: "Dib\xebr",
        parent: "AL"
    },
    {
        code: "AL-10",
        name: "Shkod\xebr",
        parent: "AL"
    },
    {
        code: "AL-11",
        name: "Tiran\xeb",
        parent: "AL"
    },
    {
        code: "AL-12",
        name: "Vlor\xeb",
        parent: "AL"
    },
    {
        code: "AM-AG",
        name: "Aragac̣otn",
        parent: "AM"
    },
    {
        code: "AM-AR",
        name: "Ararat",
        parent: "AM"
    },
    {
        code: "AM-AV",
        name: "Armavir",
        parent: "AM"
    },
    {
        code: "AM-ER",
        name: "Erevan",
        parent: "AM"
    },
    {
        code: "AM-GR",
        name: "Geġark'unik'",
        parent: "AM"
    },
    {
        code: "AM-KT",
        name: "Kotayk'",
        parent: "AM"
    },
    {
        code: "AM-LO",
        name: "Loṙi",
        parent: "AM"
    },
    {
        code: "AM-SH",
        name: "Širak",
        parent: "AM"
    },
    {
        code: "AM-SU",
        name: "Syunik'",
        parent: "AM"
    },
    {
        code: "AM-TV",
        name: "Tavuš",
        parent: "AM"
    },
    {
        code: "AM-VD",
        name: "Vayoć Jor",
        parent: "AM"
    },
    {
        code: "AO-BGO",
        name: "Bengo",
        parent: "AO"
    },
    {
        code: "AO-BGU",
        name: "Benguela",
        parent: "AO"
    },
    {
        code: "AO-BIE",
        name: "Bi\xe9",
        parent: "AO"
    },
    {
        code: "AO-CAB",
        name: "Cabinda",
        parent: "AO"
    },
    {
        code: "AO-CCU",
        name: "Cuando Cubango",
        parent: "AO"
    },
    {
        code: "AO-CNN",
        name: "Cunene",
        parent: "AO"
    },
    {
        code: "AO-CNO",
        name: "Cuanza-Norte",
        parent: "AO"
    },
    {
        code: "AO-CUS",
        name: "Cuanza-Sul",
        parent: "AO"
    },
    {
        code: "AO-HUA",
        name: "Huambo",
        parent: "AO"
    },
    {
        code: "AO-HUI",
        name: "Hu\xedla",
        parent: "AO"
    },
    {
        code: "AO-LNO",
        name: "Lunda-Norte",
        parent: "AO"
    },
    {
        code: "AO-LSU",
        name: "Lunda-Sul",
        parent: "AO"
    },
    {
        code: "AO-LUA",
        name: "Luanda",
        parent: "AO"
    },
    {
        code: "AO-MAL",
        name: "Malange",
        parent: "AO"
    },
    {
        code: "AO-MOX",
        name: "Moxico",
        parent: "AO"
    },
    {
        code: "AO-NAM",
        name: "Namibe",
        parent: "AO"
    },
    {
        code: "AO-UIG",
        name: "U\xedge",
        parent: "AO"
    },
    {
        code: "AO-ZAI",
        name: "Zaire",
        parent: "AO"
    },
    {
        code: "AR-A",
        name: "Salta",
        parent: "AR"
    },
    {
        code: "AR-B",
        name: "Buenos Aires",
        parent: "AR"
    },
    {
        code: "AR-C",
        name: "Ciudad Aut\xf3noma de Buenos Aires",
        parent: "AR"
    },
    {
        code: "AR-D",
        name: "San Luis",
        parent: "AR"
    },
    {
        code: "AR-E",
        name: "Entre R\xedos",
        parent: "AR"
    },
    {
        code: "AR-F",
        name: "La Rioja",
        parent: "AR"
    },
    {
        code: "AR-G",
        name: "Santiago del Estero",
        parent: "AR"
    },
    {
        code: "AR-H",
        name: "Chaco",
        parent: "AR"
    },
    {
        code: "AR-J",
        name: "San Juan",
        parent: "AR"
    },
    {
        code: "AR-K",
        name: "Catamarca",
        parent: "AR"
    },
    {
        code: "AR-L",
        name: "La Pampa",
        parent: "AR"
    },
    {
        code: "AR-M",
        name: "Mendoza",
        parent: "AR"
    },
    {
        code: "AR-N",
        name: "Misiones",
        parent: "AR"
    },
    {
        code: "AR-P",
        name: "Formosa",
        parent: "AR"
    },
    {
        code: "AR-Q",
        name: "Neuqu\xe9n",
        parent: "AR"
    },
    {
        code: "AR-R",
        name: "R\xedo Negro",
        parent: "AR"
    },
    {
        code: "AR-S",
        name: "Santa Fe",
        parent: "AR"
    },
    {
        code: "AR-T",
        name: "Tucum\xe1n",
        parent: "AR"
    },
    {
        code: "AR-U",
        name: "Chubut",
        parent: "AR"
    },
    {
        code: "AR-V",
        name: "Tierra del Fuego",
        parent: "AR"
    },
    {
        code: "AR-W",
        name: "Corrientes",
        parent: "AR"
    },
    {
        code: "AR-X",
        name: "C\xf3rdoba",
        parent: "AR"
    },
    {
        code: "AR-Y",
        name: "Jujuy",
        parent: "AR"
    },
    {
        code: "AR-Z",
        name: "Santa Cruz",
        parent: "AR"
    },
    {
        code: "AT-1",
        name: "Burgenland",
        parent: "AT"
    },
    {
        code: "AT-2",
        name: "K\xe4rnten",
        parent: "AT"
    },
    {
        code: "AT-3",
        name: "Nieder\xf6sterreich",
        parent: "AT"
    },
    {
        code: "AT-4",
        name: "Ober\xf6sterreich",
        parent: "AT"
    },
    {
        code: "AT-5",
        name: "Salzburg",
        parent: "AT"
    },
    {
        code: "AT-6",
        name: "Steiermark",
        parent: "AT"
    },
    {
        code: "AT-7",
        name: "Tirol",
        parent: "AT"
    },
    {
        code: "AT-8",
        name: "Vorarlberg",
        parent: "AT"
    },
    {
        code: "AT-9",
        name: "Wien",
        parent: "AT"
    },
    {
        code: "AU-ACT",
        name: "Australian Capital Territory",
        parent: "AU"
    },
    {
        code: "AU-NSW",
        name: "New South Wales",
        parent: "AU"
    },
    {
        code: "AU-NT",
        name: "Northern Territory",
        parent: "AU"
    },
    {
        code: "AU-QLD",
        name: "Queensland",
        parent: "AU"
    },
    {
        code: "AU-SA",
        name: "South Australia",
        parent: "AU"
    },
    {
        code: "AU-TAS",
        name: "Tasmania",
        parent: "AU"
    },
    {
        code: "AU-VIC",
        name: "Victoria",
        parent: "AU"
    },
    {
        code: "AU-WA",
        name: "Western Australia",
        parent: "AU"
    },
    {
        code: "AZ-ABS",
        name: "Abşeron",
        parent: "AZ"
    },
    {
        code: "AZ-AGA",
        name: "Ağstafa",
        parent: "AZ"
    },
    {
        code: "AZ-AGC",
        name: "Ağcabədi",
        parent: "AZ"
    },
    {
        code: "AZ-AGM",
        name: "Ağdam",
        parent: "AZ"
    },
    {
        code: "AZ-AGS",
        name: "Ağdaş",
        parent: "AZ"
    },
    {
        code: "AZ-AGU",
        name: "Ağsu",
        parent: "AZ"
    },
    {
        code: "AZ-AST",
        name: "Astara",
        parent: "AZ"
    },
    {
        code: "AZ-BA",
        name: "Bakı",
        parent: "AZ"
    },
    {
        code: "AZ-BAB",
        name: "Babək",
        parent: "AZ-NX"
    },
    {
        code: "AZ-BAL",
        name: "Balakən",
        parent: "AZ"
    },
    {
        code: "AZ-BAR",
        name: "Bərdə",
        parent: "AZ"
    },
    {
        code: "AZ-BEY",
        name: "Beyləqan",
        parent: "AZ"
    },
    {
        code: "AZ-BIL",
        name: "Biləsuvar",
        parent: "AZ"
    },
    {
        code: "AZ-CAB",
        name: "Cəbrayıl",
        parent: "AZ"
    },
    {
        code: "AZ-CAL",
        name: "Cəlilabad",
        parent: "AZ"
    },
    {
        code: "AZ-CUL",
        name: "Culfa",
        parent: "AZ-NX"
    },
    {
        code: "AZ-DAS",
        name: "Daşkəsən",
        parent: "AZ"
    },
    {
        code: "AZ-FUZ",
        name: "F\xfczuli",
        parent: "AZ"
    },
    {
        code: "AZ-GA",
        name: "Gəncə",
        parent: "AZ"
    },
    {
        code: "AZ-GAD",
        name: "Gədəbəy",
        parent: "AZ"
    },
    {
        code: "AZ-GOR",
        name: "Goranboy",
        parent: "AZ"
    },
    {
        code: "AZ-GOY",
        name: "G\xf6y\xe7ay",
        parent: "AZ"
    },
    {
        code: "AZ-GYG",
        name: "G\xf6yg\xf6l",
        parent: "AZ"
    },
    {
        code: "AZ-HAC",
        name: "Hacıqabul",
        parent: "AZ"
    },
    {
        code: "AZ-IMI",
        name: "İmişli",
        parent: "AZ"
    },
    {
        code: "AZ-ISM",
        name: "İsmayıllı",
        parent: "AZ"
    },
    {
        code: "AZ-KAL",
        name: "Kəlbəcər",
        parent: "AZ"
    },
    {
        code: "AZ-KAN",
        name: "Kǝngǝrli",
        parent: "AZ-NX"
    },
    {
        code: "AZ-KUR",
        name: "K\xfcrdəmir",
        parent: "AZ"
    },
    {
        code: "AZ-LA",
        name: "Lənkəran",
        parent: "AZ"
    },
    {
        code: "AZ-LAC",
        name: "La\xe7ın",
        parent: "AZ"
    },
    {
        code: "AZ-LAN",
        name: "Lənkəran",
        parent: "AZ"
    },
    {
        code: "AZ-LER",
        name: "Lerik",
        parent: "AZ"
    },
    {
        code: "AZ-MAS",
        name: "Masallı",
        parent: "AZ"
    },
    {
        code: "AZ-MI",
        name: "Mingə\xe7evir",
        parent: "AZ"
    },
    {
        code: "AZ-NA",
        name: "Naftalan",
        parent: "AZ"
    },
    {
        code: "AZ-NEF",
        name: "Neft\xe7ala",
        parent: "AZ"
    },
    {
        code: "AZ-NV",
        name: "Nax\xe7ıvan",
        parent: "AZ-NX"
    },
    {
        code: "AZ-NX",
        name: "Nax\xe7ıvan",
        parent: "AZ"
    },
    {
        code: "AZ-OGU",
        name: "Oğuz",
        parent: "AZ"
    },
    {
        code: "AZ-ORD",
        name: "Ordubad",
        parent: "AZ-NX"
    },
    {
        code: "AZ-QAB",
        name: "Qəbələ",
        parent: "AZ"
    },
    {
        code: "AZ-QAX",
        name: "Qax",
        parent: "AZ"
    },
    {
        code: "AZ-QAZ",
        name: "Qazax",
        parent: "AZ"
    },
    {
        code: "AZ-QBA",
        name: "Quba",
        parent: "AZ"
    },
    {
        code: "AZ-QBI",
        name: "Qubadlı",
        parent: "AZ"
    },
    {
        code: "AZ-QOB",
        name: "Qobustan",
        parent: "AZ"
    },
    {
        code: "AZ-QUS",
        name: "Qusar",
        parent: "AZ"
    },
    {
        code: "AZ-SA",
        name: "Şəki",
        parent: "AZ"
    },
    {
        code: "AZ-SAB",
        name: "Sabirabad",
        parent: "AZ"
    },
    {
        code: "AZ-SAD",
        name: "Sədərək",
        parent: "AZ-NX"
    },
    {
        code: "AZ-SAH",
        name: "Şahbuz",
        parent: "AZ-NX"
    },
    {
        code: "AZ-SAK",
        name: "Şəki",
        parent: "AZ"
    },
    {
        code: "AZ-SAL",
        name: "Salyan",
        parent: "AZ"
    },
    {
        code: "AZ-SAR",
        name: "Şərur",
        parent: "AZ-NX"
    },
    {
        code: "AZ-SAT",
        name: "Saatlı",
        parent: "AZ"
    },
    {
        code: "AZ-SBN",
        name: "Şabran",
        parent: "AZ"
    },
    {
        code: "AZ-SIY",
        name: "Siyəzən",
        parent: "AZ"
    },
    {
        code: "AZ-SKR",
        name: "Şəmkir",
        parent: "AZ"
    },
    {
        code: "AZ-SM",
        name: "Sumqayıt",
        parent: "AZ"
    },
    {
        code: "AZ-SMI",
        name: "Şamaxı",
        parent: "AZ"
    },
    {
        code: "AZ-SMX",
        name: "Samux",
        parent: "AZ"
    },
    {
        code: "AZ-SR",
        name: "Şirvan",
        parent: "AZ"
    },
    {
        code: "AZ-SUS",
        name: "Şuşa",
        parent: "AZ"
    },
    {
        code: "AZ-TAR",
        name: "Tərtər",
        parent: "AZ"
    },
    {
        code: "AZ-TOV",
        name: "Tovuz",
        parent: "AZ"
    },
    {
        code: "AZ-UCA",
        name: "Ucar",
        parent: "AZ"
    },
    {
        code: "AZ-XA",
        name: "Xankəndi",
        parent: "AZ"
    },
    {
        code: "AZ-XAC",
        name: "Xa\xe7maz",
        parent: "AZ"
    },
    {
        code: "AZ-XCI",
        name: "Xocalı",
        parent: "AZ"
    },
    {
        code: "AZ-XIZ",
        name: "Xızı",
        parent: "AZ"
    },
    {
        code: "AZ-XVD",
        name: "Xocavənd",
        parent: "AZ"
    },
    {
        code: "AZ-YAR",
        name: "Yardımlı",
        parent: "AZ"
    },
    {
        code: "AZ-YE",
        name: "Yevlax",
        parent: "AZ"
    },
    {
        code: "AZ-YEV",
        name: "Yevlax",
        parent: "AZ"
    },
    {
        code: "AZ-ZAN",
        name: "Zəngilan",
        parent: "AZ"
    },
    {
        code: "AZ-ZAQ",
        name: "Zaqatala",
        parent: "AZ"
    },
    {
        code: "AZ-ZAR",
        name: "Zərdab",
        parent: "AZ"
    },
    {
        code: "BA-BIH",
        name: "Federacija Bosne i Hercegovine",
        parent: "BA"
    },
    {
        code: "BA-BRC",
        name: "Brčko distrikt",
        parent: "BA"
    },
    {
        code: "BA-SRP",
        name: "Republika Srpska",
        parent: "BA"
    },
    {
        code: "BB-01",
        name: "Christ Church",
        parent: "BB"
    },
    {
        code: "BB-02",
        name: "Saint Andrew",
        parent: "BB"
    },
    {
        code: "BB-03",
        name: "Saint George",
        parent: "BB"
    },
    {
        code: "BB-04",
        name: "Saint James",
        parent: "BB"
    },
    {
        code: "BB-05",
        name: "Saint John",
        parent: "BB"
    },
    {
        code: "BB-06",
        name: "Saint Joseph",
        parent: "BB"
    },
    {
        code: "BB-07",
        name: "Saint Lucy",
        parent: "BB"
    },
    {
        code: "BB-08",
        name: "Saint Michael",
        parent: "BB"
    },
    {
        code: "BB-09",
        name: "Saint Peter",
        parent: "BB"
    },
    {
        code: "BB-10",
        name: "Saint Philip",
        parent: "BB"
    },
    {
        code: "BB-11",
        name: "Saint Thomas",
        parent: "BB"
    },
    {
        code: "BD-01",
        name: "Bandarban",
        parent: "BD-B"
    },
    {
        code: "BD-02",
        name: "Barguna",
        parent: "BD-A"
    },
    {
        code: "BD-03",
        name: "Bogura",
        parent: "BD-E"
    },
    {
        code: "BD-04",
        name: "Brahmanbaria",
        parent: "BD-B"
    },
    {
        code: "BD-05",
        name: "Bagerhat",
        parent: "BD-D"
    },
    {
        code: "BD-06",
        name: "Barishal",
        parent: "BD-A"
    },
    {
        code: "BD-07",
        name: "Bhola",
        parent: "BD-A"
    },
    {
        code: "BD-08",
        name: "Cumilla",
        parent: "BD-B"
    },
    {
        code: "BD-09",
        name: "Chandpur",
        parent: "BD-B"
    },
    {
        code: "BD-10",
        name: "Chattogram",
        parent: "BD-B"
    },
    {
        code: "BD-11",
        name: "Cox's Bazar",
        parent: "BD-B"
    },
    {
        code: "BD-12",
        name: "Chuadanga",
        parent: "BD-D"
    },
    {
        code: "BD-13",
        name: "Dhaka",
        parent: "BD-C"
    },
    {
        code: "BD-14",
        name: "Dinajpur",
        parent: "BD-F"
    },
    {
        code: "BD-15",
        name: "Faridpur",
        parent: "BD-C"
    },
    {
        code: "BD-16",
        name: "Feni",
        parent: "BD-B"
    },
    {
        code: "BD-17",
        name: "Gopalganj",
        parent: "BD-C"
    },
    {
        code: "BD-18",
        name: "Gazipur",
        parent: "BD-C"
    },
    {
        code: "BD-19",
        name: "Gaibandha",
        parent: "BD-F"
    },
    {
        code: "BD-20",
        name: "Habiganj",
        parent: "BD-G"
    },
    {
        code: "BD-21",
        name: "Jamalpur",
        parent: "BD-H"
    },
    {
        code: "BD-22",
        name: "Jashore",
        parent: "BD-D"
    },
    {
        code: "BD-23",
        name: "Jhenaidah",
        parent: "BD-D"
    },
    {
        code: "BD-24",
        name: "Joypurhat",
        parent: "BD-E"
    },
    {
        code: "BD-25",
        name: "Jhalakathi",
        parent: "BD-A"
    },
    {
        code: "BD-26",
        name: "Kishoreganj",
        parent: "BD-C"
    },
    {
        code: "BD-27",
        name: "Khulna",
        parent: "BD-D"
    },
    {
        code: "BD-28",
        name: "Kurigram",
        parent: "BD-F"
    },
    {
        code: "BD-29",
        name: "Khagrachhari",
        parent: "BD-B"
    },
    {
        code: "BD-30",
        name: "Kushtia",
        parent: "BD-D"
    },
    {
        code: "BD-31",
        name: "Lakshmipur",
        parent: "BD-B"
    },
    {
        code: "BD-32",
        name: "Lalmonirhat",
        parent: "BD-F"
    },
    {
        code: "BD-33",
        name: "Manikganj",
        parent: "BD-C"
    },
    {
        code: "BD-34",
        name: "Mymensingh",
        parent: "BD-H"
    },
    {
        code: "BD-35",
        name: "Munshiganj",
        parent: "BD-C"
    },
    {
        code: "BD-36",
        name: "Madaripur",
        parent: "BD-C"
    },
    {
        code: "BD-37",
        name: "Magura",
        parent: "BD-D"
    },
    {
        code: "BD-38",
        name: "Moulvibazar",
        parent: "BD-G"
    },
    {
        code: "BD-39",
        name: "Meherpur",
        parent: "BD-D"
    },
    {
        code: "BD-40",
        name: "Narayanganj",
        parent: "BD-C"
    },
    {
        code: "BD-41",
        name: "Netrakona",
        parent: "BD-H"
    },
    {
        code: "BD-42",
        name: "Narsingdi",
        parent: "BD-C"
    },
    {
        code: "BD-43",
        name: "Narail",
        parent: "BD-D"
    },
    {
        code: "BD-44",
        name: "Natore",
        parent: "BD-E"
    },
    {
        code: "BD-45",
        name: "Chapai Nawabganj",
        parent: "BD-E"
    },
    {
        code: "BD-46",
        name: "Nilphamari",
        parent: "BD-F"
    },
    {
        code: "BD-47",
        name: "Noakhali",
        parent: "BD-B"
    },
    {
        code: "BD-48",
        name: "Naogaon",
        parent: "BD-E"
    },
    {
        code: "BD-49",
        name: "Pabna",
        parent: "BD-E"
    },
    {
        code: "BD-50",
        name: "Pirojpur",
        parent: "BD-A"
    },
    {
        code: "BD-51",
        name: "Patuakhali",
        parent: "BD-A"
    },
    {
        code: "BD-52",
        name: "Panchagarh",
        parent: "BD-F"
    },
    {
        code: "BD-53",
        name: "Rajbari",
        parent: "BD-C"
    },
    {
        code: "BD-54",
        name: "Rajshahi",
        parent: "BD-E"
    },
    {
        code: "BD-55",
        name: "Rangpur",
        parent: "BD-F"
    },
    {
        code: "BD-56",
        name: "Rangamati",
        parent: "BD-B"
    },
    {
        code: "BD-57",
        name: "Sherpur",
        parent: "BD-H"
    },
    {
        code: "BD-58",
        name: "Satkhira",
        parent: "BD-D"
    },
    {
        code: "BD-59",
        name: "Sirajganj",
        parent: "BD-E"
    },
    {
        code: "BD-60",
        name: "Sylhet",
        parent: "BD-G"
    },
    {
        code: "BD-61",
        name: "Sunamganj",
        parent: "BD-G"
    },
    {
        code: "BD-62",
        name: "Shariatpur",
        parent: "BD-C"
    },
    {
        code: "BD-63",
        name: "Tangail",
        parent: "BD-C"
    },
    {
        code: "BD-64",
        name: "Thakurgaon",
        parent: "BD-F"
    },
    {
        code: "BD-A",
        name: "Barishal",
        parent: "BD"
    },
    {
        code: "BD-B",
        name: "Chattogram",
        parent: "BD"
    },
    {
        code: "BD-C",
        name: "Dhaka",
        parent: "BD"
    },
    {
        code: "BD-D",
        name: "Khulna",
        parent: "BD"
    },
    {
        code: "BD-E",
        name: "Rajshahi",
        parent: "BD"
    },
    {
        code: "BD-F",
        name: "Rangpur",
        parent: "BD"
    },
    {
        code: "BD-G",
        name: "Sylhet",
        parent: "BD"
    },
    {
        code: "BD-H",
        name: "Mymensingh",
        parent: "BD"
    },
    {
        code: "BE-BRU",
        name: "Brussels Hoofdstedelijk Gewest",
        parent: "BE"
    },
    {
        code: "BE-VAN",
        name: "Antwerpen",
        parent: "BE-VLG"
    },
    {
        code: "BE-VBR",
        name: "Vlaams-Brabant",
        parent: "BE-VLG"
    },
    {
        code: "BE-VLG",
        name: "Vlaams Gewest",
        parent: "BE"
    },
    {
        code: "BE-VLI",
        name: "Limburg",
        parent: "BE-VLG"
    },
    {
        code: "BE-VOV",
        name: "Oost-Vlaanderen",
        parent: "BE-VLG"
    },
    {
        code: "BE-VWV",
        name: "West-Vlaanderen",
        parent: "BE-VLG"
    },
    {
        code: "BE-WAL",
        name: "Waals Gewest",
        parent: "BE"
    },
    {
        code: "BE-WBR",
        name: "Brabant wallon",
        parent: "BE-WAL"
    },
    {
        code: "BE-WHT",
        name: "Hainaut",
        parent: "BE-WAL"
    },
    {
        code: "BE-WLG",
        name: "Li\xe8ge",
        parent: "BE-WAL"
    },
    {
        code: "BE-WLX",
        name: "Luxembourg",
        parent: "BE-WAL"
    },
    {
        code: "BE-WNA",
        name: "Namur",
        parent: "BE-WAL"
    },
    {
        code: "BF-01",
        name: "Boucle du Mouhoun",
        parent: "BF"
    },
    {
        code: "BF-02",
        name: "Cascades",
        parent: "BF"
    },
    {
        code: "BF-03",
        name: "Centre",
        parent: "BF"
    },
    {
        code: "BF-04",
        name: "Centre-Est",
        parent: "BF"
    },
    {
        code: "BF-05",
        name: "Centre-Nord",
        parent: "BF"
    },
    {
        code: "BF-06",
        name: "Centre-Ouest",
        parent: "BF"
    },
    {
        code: "BF-07",
        name: "Centre-Sud",
        parent: "BF"
    },
    {
        code: "BF-08",
        name: "Est",
        parent: "BF"
    },
    {
        code: "BF-09",
        name: "Hauts-Bassins",
        parent: "BF"
    },
    {
        code: "BF-10",
        name: "Nord",
        parent: "BF"
    },
    {
        code: "BF-11",
        name: "Plateau-Central",
        parent: "BF"
    },
    {
        code: "BF-12",
        name: "Sahel",
        parent: "BF"
    },
    {
        code: "BF-13",
        name: "Sud-Ouest",
        parent: "BF"
    },
    {
        code: "BF-BAL",
        name: "Bal\xe9",
        parent: "BF-01"
    },
    {
        code: "BF-BAM",
        name: "Bam",
        parent: "BF-05"
    },
    {
        code: "BF-BAN",
        name: "Banwa",
        parent: "BF-01"
    },
    {
        code: "BF-BAZ",
        name: "Baz\xe8ga",
        parent: "BF-07"
    },
    {
        code: "BF-BGR",
        name: "Bougouriba",
        parent: "BF-13"
    },
    {
        code: "BF-BLG",
        name: "Boulgou",
        parent: "BF-04"
    },
    {
        code: "BF-BLK",
        name: "Boulkiemd\xe9",
        parent: "BF-06"
    },
    {
        code: "BF-COM",
        name: "Como\xe9",
        parent: "BF-02"
    },
    {
        code: "BF-GAN",
        name: "Ganzourgou",
        parent: "BF-11"
    },
    {
        code: "BF-GNA",
        name: "Gnagna",
        parent: "BF-08"
    },
    {
        code: "BF-GOU",
        name: "Gourma",
        parent: "BF-08"
    },
    {
        code: "BF-HOU",
        name: "Houet",
        parent: "BF-09"
    },
    {
        code: "BF-IOB",
        name: "Ioba",
        parent: "BF-13"
    },
    {
        code: "BF-KAD",
        name: "Kadiogo",
        parent: "BF-03"
    },
    {
        code: "BF-KEN",
        name: "K\xe9n\xe9dougou",
        parent: "BF-09"
    },
    {
        code: "BF-KMD",
        name: "Komondjari",
        parent: "BF-08"
    },
    {
        code: "BF-KMP",
        name: "Kompienga",
        parent: "BF-08"
    },
    {
        code: "BF-KOP",
        name: "Koulp\xe9logo",
        parent: "BF-04"
    },
    {
        code: "BF-KOS",
        name: "Kossi",
        parent: "BF-01"
    },
    {
        code: "BF-KOT",
        name: "Kouritenga",
        parent: "BF-04"
    },
    {
        code: "BF-KOW",
        name: "Kourw\xe9ogo",
        parent: "BF-11"
    },
    {
        code: "BF-LER",
        name: "L\xe9raba",
        parent: "BF-02"
    },
    {
        code: "BF-LOR",
        name: "Loroum",
        parent: "BF-10"
    },
    {
        code: "BF-MOU",
        name: "Mouhoun",
        parent: "BF-01"
    },
    {
        code: "BF-NAM",
        name: "Namentenga",
        parent: "BF-05"
    },
    {
        code: "BF-NAO",
        name: "Nahouri",
        parent: "BF-07"
    },
    {
        code: "BF-NAY",
        name: "Nayala",
        parent: "BF-01"
    },
    {
        code: "BF-NOU",
        name: "Noumbiel",
        parent: "BF-13"
    },
    {
        code: "BF-OUB",
        name: "Oubritenga",
        parent: "BF-11"
    },
    {
        code: "BF-OUD",
        name: "Oudalan",
        parent: "BF-12"
    },
    {
        code: "BF-PAS",
        name: "Passor\xe9",
        parent: "BF-10"
    },
    {
        code: "BF-PON",
        name: "Poni",
        parent: "BF-13"
    },
    {
        code: "BF-SEN",
        name: "S\xe9no",
        parent: "BF-12"
    },
    {
        code: "BF-SIS",
        name: "Sissili",
        parent: "BF-06"
    },
    {
        code: "BF-SMT",
        name: "Sanmatenga",
        parent: "BF-05"
    },
    {
        code: "BF-SNG",
        name: "Sangui\xe9",
        parent: "BF-06"
    },
    {
        code: "BF-SOM",
        name: "Soum",
        parent: "BF-12"
    },
    {
        code: "BF-SOR",
        name: "Sourou",
        parent: "BF-01"
    },
    {
        code: "BF-TAP",
        name: "Tapoa",
        parent: "BF-08"
    },
    {
        code: "BF-TUI",
        name: "Tuy",
        parent: "BF-09"
    },
    {
        code: "BF-YAG",
        name: "Yagha",
        parent: "BF-12"
    },
    {
        code: "BF-YAT",
        name: "Yatenga",
        parent: "BF-10"
    },
    {
        code: "BF-ZIR",
        name: "Ziro",
        parent: "BF-06"
    },
    {
        code: "BF-ZON",
        name: "Zondoma",
        parent: "BF-10"
    },
    {
        code: "BF-ZOU",
        name: "Zoundw\xe9ogo",
        parent: "BF-07"
    },
    {
        code: "BG-01",
        name: "Blagoevgrad",
        parent: "BG"
    },
    {
        code: "BG-02",
        name: "Burgas",
        parent: "BG"
    },
    {
        code: "BG-03",
        name: "Varna",
        parent: "BG"
    },
    {
        code: "BG-04",
        name: "Veliko Tarnovo",
        parent: "BG"
    },
    {
        code: "BG-05",
        name: "Vidin",
        parent: "BG"
    },
    {
        code: "BG-06",
        name: "Vratsa",
        parent: "BG"
    },
    {
        code: "BG-07",
        name: "Gabrovo",
        parent: "BG"
    },
    {
        code: "BG-08",
        name: "Dobrich",
        parent: "BG"
    },
    {
        code: "BG-09",
        name: "Kardzhali",
        parent: "BG"
    },
    {
        code: "BG-10",
        name: "Kyustendil",
        parent: "BG"
    },
    {
        code: "BG-11",
        name: "Lovech",
        parent: "BG"
    },
    {
        code: "BG-12",
        name: "Montana",
        parent: "BG"
    },
    {
        code: "BG-13",
        name: "Pazardzhik",
        parent: "BG"
    },
    {
        code: "BG-14",
        name: "Pernik",
        parent: "BG"
    },
    {
        code: "BG-15",
        name: "Pleven",
        parent: "BG"
    },
    {
        code: "BG-16",
        name: "Plovdiv",
        parent: "BG"
    },
    {
        code: "BG-17",
        name: "Razgrad",
        parent: "BG"
    },
    {
        code: "BG-18",
        name: "Ruse",
        parent: "BG"
    },
    {
        code: "BG-19",
        name: "Silistra",
        parent: "BG"
    },
    {
        code: "BG-20",
        name: "Sliven",
        parent: "BG"
    },
    {
        code: "BG-21",
        name: "Smolyan",
        parent: "BG"
    },
    {
        code: "BG-22",
        name: "Sofia (stolitsa)",
        parent: "BG"
    },
    {
        code: "BG-23",
        name: "Sofia",
        parent: "BG"
    },
    {
        code: "BG-24",
        name: "Stara Zagora",
        parent: "BG"
    },
    {
        code: "BG-25",
        name: "Targovishte",
        parent: "BG"
    },
    {
        code: "BG-26",
        name: "Haskovo",
        parent: "BG"
    },
    {
        code: "BG-27",
        name: "Shumen",
        parent: "BG"
    },
    {
        code: "BG-28",
        name: "Yambol",
        parent: "BG"
    },
    {
        code: "BH-13",
        name: "Al ‘Āşimah",
        parent: "BH"
    },
    {
        code: "BH-14",
        name: "Al Janūbīyah",
        parent: "BH"
    },
    {
        code: "BH-15",
        name: "Al Muḩarraq",
        parent: "BH"
    },
    {
        code: "BH-17",
        name: "Ash Shamālīyah",
        parent: "BH"
    },
    {
        code: "BI-BB",
        name: "Bubanza",
        parent: "BI"
    },
    {
        code: "BI-BL",
        name: "Bujumbura Rural",
        parent: "BI"
    },
    {
        code: "BI-BM",
        name: "Bujumbura Mairie",
        parent: "BI"
    },
    {
        code: "BI-BR",
        name: "Bururi",
        parent: "BI"
    },
    {
        code: "BI-CA",
        name: "Cankuzo",
        parent: "BI"
    },
    {
        code: "BI-CI",
        name: "Cibitoke",
        parent: "BI"
    },
    {
        code: "BI-GI",
        name: "Gitega",
        parent: "BI"
    },
    {
        code: "BI-KI",
        name: "Kirundo",
        parent: "BI"
    },
    {
        code: "BI-KR",
        name: "Karuzi",
        parent: "BI"
    },
    {
        code: "BI-KY",
        name: "Kayanza",
        parent: "BI"
    },
    {
        code: "BI-MA",
        name: "Makamba",
        parent: "BI"
    },
    {
        code: "BI-MU",
        name: "Muramvya",
        parent: "BI"
    },
    {
        code: "BI-MW",
        name: "Mwaro",
        parent: "BI"
    },
    {
        code: "BI-MY",
        name: "Muyinga",
        parent: "BI"
    },
    {
        code: "BI-NG",
        name: "Ngozi",
        parent: "BI"
    },
    {
        code: "BI-RM",
        name: "Rumonge",
        parent: "BI"
    },
    {
        code: "BI-RT",
        name: "Rutana",
        parent: "BI"
    },
    {
        code: "BI-RY",
        name: "Ruyigi",
        parent: "BI"
    },
    {
        code: "BJ-AK",
        name: "Atacora",
        parent: "BJ"
    },
    {
        code: "BJ-AL",
        name: "Alibori",
        parent: "BJ"
    },
    {
        code: "BJ-AQ",
        name: "Atlantique",
        parent: "BJ"
    },
    {
        code: "BJ-BO",
        name: "Borgou",
        parent: "BJ"
    },
    {
        code: "BJ-CO",
        name: "Collines",
        parent: "BJ"
    },
    {
        code: "BJ-DO",
        name: "Donga",
        parent: "BJ"
    },
    {
        code: "BJ-KO",
        name: "Couffo",
        parent: "BJ"
    },
    {
        code: "BJ-LI",
        name: "Littoral",
        parent: "BJ"
    },
    {
        code: "BJ-MO",
        name: "Mono",
        parent: "BJ"
    },
    {
        code: "BJ-OU",
        name: "Ou\xe9m\xe9",
        parent: "BJ"
    },
    {
        code: "BJ-PL",
        name: "Plateau",
        parent: "BJ"
    },
    {
        code: "BJ-ZO",
        name: "Zou",
        parent: "BJ"
    },
    {
        code: "BN-BE",
        name: "Belait",
        parent: "BN"
    },
    {
        code: "BN-BM",
        name: "Brunei-Muara",
        parent: "BN"
    },
    {
        code: "BN-TE",
        name: "Temburong",
        parent: "BN"
    },
    {
        code: "BN-TU",
        name: "Tutong",
        parent: "BN"
    },
    {
        code: "BO-B",
        name: "El Beni",
        parent: "BO"
    },
    {
        code: "BO-C",
        name: "Cochabamba",
        parent: "BO"
    },
    {
        code: "BO-H",
        name: "Chuquisaca",
        parent: "BO"
    },
    {
        code: "BO-L",
        name: "La Paz",
        parent: "BO"
    },
    {
        code: "BO-N",
        name: "Pando",
        parent: "BO"
    },
    {
        code: "BO-O",
        name: "Oruro",
        parent: "BO"
    },
    {
        code: "BO-P",
        name: "Potos\xed",
        parent: "BO"
    },
    {
        code: "BO-S",
        name: "Santa Cruz",
        parent: "BO"
    },
    {
        code: "BO-T",
        name: "Tarija",
        parent: "BO"
    },
    {
        code: "BQ-BO",
        name: "Bonaire",
        parent: "BQ"
    },
    {
        code: "BQ-SA",
        name: "Saba",
        parent: "BQ"
    },
    {
        code: "BQ-SE",
        name: "Sint Eustatius",
        parent: "BQ"
    },
    {
        code: "BR-AC",
        name: "Acre",
        parent: "BR"
    },
    {
        code: "BR-AL",
        name: "Alagoas",
        parent: "BR"
    },
    {
        code: "BR-AM",
        name: "Amazonas",
        parent: "BR"
    },
    {
        code: "BR-AP",
        name: "Amap\xe1",
        parent: "BR"
    },
    {
        code: "BR-BA",
        name: "Bahia",
        parent: "BR"
    },
    {
        code: "BR-CE",
        name: "Cear\xe1",
        parent: "BR"
    },
    {
        code: "BR-DF",
        name: "Distrito Federal",
        parent: "BR"
    },
    {
        code: "BR-ES",
        name: "Esp\xedrito Santo",
        parent: "BR"
    },
    {
        code: "BR-GO",
        name: "Goi\xe1s",
        parent: "BR"
    },
    {
        code: "BR-MA",
        name: "Maranh\xe3o",
        parent: "BR"
    },
    {
        code: "BR-MG",
        name: "Minas Gerais",
        parent: "BR"
    },
    {
        code: "BR-MS",
        name: "Mato Grosso do Sul",
        parent: "BR"
    },
    {
        code: "BR-MT",
        name: "Mato Grosso",
        parent: "BR"
    },
    {
        code: "BR-PA",
        name: "Par\xe1",
        parent: "BR"
    },
    {
        code: "BR-PB",
        name: "Para\xedba",
        parent: "BR"
    },
    {
        code: "BR-PE",
        name: "Pernambuco",
        parent: "BR"
    },
    {
        code: "BR-PI",
        name: "Piau\xed",
        parent: "BR"
    },
    {
        code: "BR-PR",
        name: "Paran\xe1",
        parent: "BR"
    },
    {
        code: "BR-RJ",
        name: "Rio de Janeiro",
        parent: "BR"
    },
    {
        code: "BR-RN",
        name: "Rio Grande do Norte",
        parent: "BR"
    },
    {
        code: "BR-RO",
        name: "Rond\xf4nia",
        parent: "BR"
    },
    {
        code: "BR-RR",
        name: "Roraima",
        parent: "BR"
    },
    {
        code: "BR-RS",
        name: "Rio Grande do Sul",
        parent: "BR"
    },
    {
        code: "BR-SC",
        name: "Santa Catarina",
        parent: "BR"
    },
    {
        code: "BR-SE",
        name: "Sergipe",
        parent: "BR"
    },
    {
        code: "BR-SP",
        name: "S\xe3o Paulo",
        parent: "BR"
    },
    {
        code: "BR-TO",
        name: "Tocantins",
        parent: "BR"
    },
    {
        code: "BS-AK",
        name: "Acklins",
        parent: "BS"
    },
    {
        code: "BS-BI",
        name: "Bimini",
        parent: "BS"
    },
    {
        code: "BS-BP",
        name: "Black Point",
        parent: "BS"
    },
    {
        code: "BS-BY",
        name: "Berry Islands",
        parent: "BS"
    },
    {
        code: "BS-CE",
        name: "Central Eleuthera",
        parent: "BS"
    },
    {
        code: "BS-CI",
        name: "Cat Island",
        parent: "BS"
    },
    {
        code: "BS-CK",
        name: "Crooked Island and Long Cay",
        parent: "BS"
    },
    {
        code: "BS-CO",
        name: "Central Abaco",
        parent: "BS"
    },
    {
        code: "BS-CS",
        name: "Central Andros",
        parent: "BS"
    },
    {
        code: "BS-EG",
        name: "East Grand Bahama",
        parent: "BS"
    },
    {
        code: "BS-EX",
        name: "Exuma",
        parent: "BS"
    },
    {
        code: "BS-FP",
        name: "City of Freeport",
        parent: "BS"
    },
    {
        code: "BS-GC",
        name: "Grand Cay",
        parent: "BS"
    },
    {
        code: "BS-HI",
        name: "Harbour Island",
        parent: "BS"
    },
    {
        code: "BS-HT",
        name: "Hope Town",
        parent: "BS"
    },
    {
        code: "BS-IN",
        name: "Inagua",
        parent: "BS"
    },
    {
        code: "BS-LI",
        name: "Long Island",
        parent: "BS"
    },
    {
        code: "BS-MC",
        name: "Mangrove Cay",
        parent: "BS"
    },
    {
        code: "BS-MG",
        name: "Mayaguana",
        parent: "BS"
    },
    {
        code: "BS-MI",
        name: "Moore's Island",
        parent: "BS"
    },
    {
        code: "BS-NE",
        name: "North Eleuthera",
        parent: "BS"
    },
    {
        code: "BS-NO",
        name: "North Abaco",
        parent: "BS"
    },
    {
        code: "BS-NP",
        name: "New Providence",
        parent: "BS"
    },
    {
        code: "BS-NS",
        name: "North Andros",
        parent: "BS"
    },
    {
        code: "BS-RC",
        name: "Rum Cay",
        parent: "BS"
    },
    {
        code: "BS-RI",
        name: "Ragged Island",
        parent: "BS"
    },
    {
        code: "BS-SA",
        name: "South Andros",
        parent: "BS"
    },
    {
        code: "BS-SE",
        name: "South Eleuthera",
        parent: "BS"
    },
    {
        code: "BS-SO",
        name: "South Abaco",
        parent: "BS"
    },
    {
        code: "BS-SS",
        name: "San Salvador",
        parent: "BS"
    },
    {
        code: "BS-SW",
        name: "Spanish Wells",
        parent: "BS"
    },
    {
        code: "BS-WG",
        name: "West Grand Bahama",
        parent: "BS"
    },
    {
        code: "BT-11",
        name: "Paro",
        parent: "BT"
    },
    {
        code: "BT-12",
        name: "Chhukha",
        parent: "BT"
    },
    {
        code: "BT-13",
        name: "Haa",
        parent: "BT"
    },
    {
        code: "BT-14",
        name: "Samtse",
        parent: "BT"
    },
    {
        code: "BT-15",
        name: "Thimphu",
        parent: "BT"
    },
    {
        code: "BT-21",
        name: "Tsirang",
        parent: "BT"
    },
    {
        code: "BT-22",
        name: "Dagana",
        parent: "BT"
    },
    {
        code: "BT-23",
        name: "Punakha",
        parent: "BT"
    },
    {
        code: "BT-24",
        name: "Wangdue Phodrang",
        parent: "BT"
    },
    {
        code: "BT-31",
        name: "Sarpang",
        parent: "BT"
    },
    {
        code: "BT-32",
        name: "Trongsa",
        parent: "BT"
    },
    {
        code: "BT-33",
        name: "Bumthang",
        parent: "BT"
    },
    {
        code: "BT-34",
        name: "Zhemgang",
        parent: "BT"
    },
    {
        code: "BT-41",
        name: "Trashigang",
        parent: "BT"
    },
    {
        code: "BT-42",
        name: "Monggar",
        parent: "BT"
    },
    {
        code: "BT-43",
        name: "Pema Gatshel",
        parent: "BT"
    },
    {
        code: "BT-44",
        name: "Lhuentse",
        parent: "BT"
    },
    {
        code: "BT-45",
        name: "Samdrup Jongkhar",
        parent: "BT"
    },
    {
        code: "BT-GA",
        name: "Gasa",
        parent: "BT"
    },
    {
        code: "BT-TY",
        name: "Trashi Yangtse",
        parent: "BT"
    },
    {
        code: "BW-CE",
        name: "Central",
        parent: "BW"
    },
    {
        code: "BW-CH",
        name: "Chobe",
        parent: "BW"
    },
    {
        code: "BW-FR",
        name: "Francistown",
        parent: "BW"
    },
    {
        code: "BW-GA",
        name: "Gaborone",
        parent: "BW"
    },
    {
        code: "BW-GH",
        name: "Ghanzi",
        parent: "BW"
    },
    {
        code: "BW-JW",
        name: "Jwaneng",
        parent: "BW"
    },
    {
        code: "BW-KG",
        name: "Kgalagadi",
        parent: "BW"
    },
    {
        code: "BW-KL",
        name: "Kgatleng",
        parent: "BW"
    },
    {
        code: "BW-KW",
        name: "Kweneng",
        parent: "BW"
    },
    {
        code: "BW-LO",
        name: "Lobatse",
        parent: "BW"
    },
    {
        code: "BW-NE",
        name: "North East",
        parent: "BW"
    },
    {
        code: "BW-NW",
        name: "North West",
        parent: "BW"
    },
    {
        code: "BW-SE",
        name: "South East",
        parent: "BW"
    },
    {
        code: "BW-SO",
        name: "Southern",
        parent: "BW"
    },
    {
        code: "BW-SP",
        name: "Selibe Phikwe",
        parent: "BW"
    },
    {
        code: "BW-ST",
        name: "Sowa Town",
        parent: "BW"
    },
    {
        code: "BY-BR",
        name: "Brestskaya voblasts'",
        parent: "BY"
    },
    {
        code: "BY-HM",
        name: "Horad Minsk",
        parent: "BY"
    },
    {
        code: "BY-HO",
        name: "Homyel'skaya voblasts'",
        parent: "BY"
    },
    {
        code: "BY-HR",
        name: "Hrodzyenskaya voblasts'",
        parent: "BY"
    },
    {
        code: "BY-MA",
        name: "Mahilyowskaya voblasts'",
        parent: "BY"
    },
    {
        code: "BY-MI",
        name: "Minskaya voblasts'",
        parent: "BY"
    },
    {
        code: "BY-VI",
        name: "Vitsyebskaya voblasts'",
        parent: "BY"
    },
    {
        code: "BZ-BZ",
        name: "Belize",
        parent: "BZ"
    },
    {
        code: "BZ-CY",
        name: "Cayo",
        parent: "BZ"
    },
    {
        code: "BZ-CZL",
        name: "Corozal",
        parent: "BZ"
    },
    {
        code: "BZ-OW",
        name: "Orange Walk",
        parent: "BZ"
    },
    {
        code: "BZ-SC",
        name: "Stann Creek",
        parent: "BZ"
    },
    {
        code: "BZ-TOL",
        name: "Toledo",
        parent: "BZ"
    },
    {
        code: "CA-AB",
        name: "Alberta",
        parent: "CA"
    },
    {
        code: "CA-BC",
        name: "British Columbia",
        parent: "CA"
    },
    {
        code: "CA-MB",
        name: "Manitoba",
        parent: "CA"
    },
    {
        code: "CA-NB",
        name: "New Brunswick",
        parent: "CA"
    },
    {
        code: "CA-NL",
        name: "Newfoundland and Labrador",
        parent: "CA"
    },
    {
        code: "CA-NS",
        name: "Nova Scotia",
        parent: "CA"
    },
    {
        code: "CA-NT",
        name: "Northwest Territories",
        parent: "CA"
    },
    {
        code: "CA-NU",
        name: "Nunavut",
        parent: "CA"
    },
    {
        code: "CA-ON",
        name: "Ontario",
        parent: "CA"
    },
    {
        code: "CA-PE",
        name: "Prince Edward Island",
        parent: "CA"
    },
    {
        code: "CA-QC",
        name: "Quebec",
        parent: "CA"
    },
    {
        code: "CA-SK",
        name: "Saskatchewan",
        parent: "CA"
    },
    {
        code: "CA-YT",
        name: "Yukon",
        parent: "CA"
    },
    {
        code: "CD-BC",
        name: "Kongo Central",
        parent: "CD"
    },
    {
        code: "CD-BU",
        name: "Bas-U\xe9l\xe9",
        parent: "CD"
    },
    {
        code: "CD-EQ",
        name: "\xc9quateur",
        parent: "CD"
    },
    {
        code: "CD-HK",
        name: "Haut-Katanga",
        parent: "CD"
    },
    {
        code: "CD-HL",
        name: "Haut-Lomami",
        parent: "CD"
    },
    {
        code: "CD-HU",
        name: "Haut-U\xe9l\xe9",
        parent: "CD"
    },
    {
        code: "CD-IT",
        name: "Ituri",
        parent: "CD"
    },
    {
        code: "CD-KC",
        name: "Kasa\xef Central",
        parent: "CD"
    },
    {
        code: "CD-KE",
        name: "Kasa\xef Oriental",
        parent: "CD"
    },
    {
        code: "CD-KG",
        name: "Kwango",
        parent: "CD"
    },
    {
        code: "CD-KL",
        name: "Kwilu",
        parent: "CD"
    },
    {
        code: "CD-KN",
        name: "Kinshasa",
        parent: "CD"
    },
    {
        code: "CD-KS",
        name: "Kasa\xef",
        parent: "CD"
    },
    {
        code: "CD-LO",
        name: "Lomami",
        parent: "CD"
    },
    {
        code: "CD-LU",
        name: "Lualaba",
        parent: "CD"
    },
    {
        code: "CD-MA",
        name: "Maniema",
        parent: "CD"
    },
    {
        code: "CD-MN",
        name: "Mai-Ndombe",
        parent: "CD"
    },
    {
        code: "CD-MO",
        name: "Mongala",
        parent: "CD"
    },
    {
        code: "CD-NK",
        name: "Nord-Kivu",
        parent: "CD"
    },
    {
        code: "CD-NU",
        name: "Nord-Ubangi",
        parent: "CD"
    },
    {
        code: "CD-SA",
        name: "Sankuru",
        parent: "CD"
    },
    {
        code: "CD-SK",
        name: "Sud-Kivu",
        parent: "CD"
    },
    {
        code: "CD-SU",
        name: "Sud-Ubangi",
        parent: "CD"
    },
    {
        code: "CD-TA",
        name: "Tanganyika",
        parent: "CD"
    },
    {
        code: "CD-TO",
        name: "Tshopo",
        parent: "CD"
    },
    {
        code: "CD-TU",
        name: "Tshuapa",
        parent: "CD"
    },
    {
        code: "CF-AC",
        name: "Ouham",
        parent: "CF"
    },
    {
        code: "CF-BB",
        name: "Bamingui-Bangoran",
        parent: "CF"
    },
    {
        code: "CF-BGF",
        name: "Bangui",
        parent: "CF"
    },
    {
        code: "CF-BK",
        name: "Basse-Kotto",
        parent: "CF"
    },
    {
        code: "CF-HK",
        name: "Haute-Kotto",
        parent: "CF"
    },
    {
        code: "CF-HM",
        name: "Haut-Mbomou",
        parent: "CF"
    },
    {
        code: "CF-HS",
        name: "Haute-Sangha / Mamb\xe9r\xe9-Kad\xe9\xef",
        parent: "CF"
    },
    {
        code: "CF-KB",
        name: "Gribingui",
        parent: "CF"
    },
    {
        code: "CF-KG",
        name: "K\xe9mo-Gribingui",
        parent: "CF"
    },
    {
        code: "CF-LB",
        name: "Lobaye",
        parent: "CF"
    },
    {
        code: "CF-MB",
        name: "Mbomou",
        parent: "CF"
    },
    {
        code: "CF-MP",
        name: "Ombella-Mpoko",
        parent: "CF"
    },
    {
        code: "CF-NM",
        name: "Nana-Mamb\xe9r\xe9",
        parent: "CF"
    },
    {
        code: "CF-OP",
        name: "Ouham-Pend\xe9",
        parent: "CF"
    },
    {
        code: "CF-SE",
        name: "Sangha",
        parent: "CF"
    },
    {
        code: "CF-UK",
        name: "Ouaka",
        parent: "CF"
    },
    {
        code: "CF-VK",
        name: "Vakaga",
        parent: "CF"
    },
    {
        code: "CG-11",
        name: "Bouenza",
        parent: "CG"
    },
    {
        code: "CG-12",
        name: "Pool",
        parent: "CG"
    },
    {
        code: "CG-13",
        name: "Sangha",
        parent: "CG"
    },
    {
        code: "CG-14",
        name: "Plateaux",
        parent: "CG"
    },
    {
        code: "CG-15",
        name: "Cuvette-Ouest",
        parent: "CG"
    },
    {
        code: "CG-16",
        name: "Pointe-Noire",
        parent: "CG"
    },
    {
        code: "CG-2",
        name: "L\xe9koumou",
        parent: "CG"
    },
    {
        code: "CG-5",
        name: "Kouilou",
        parent: "CG"
    },
    {
        code: "CG-7",
        name: "Likouala",
        parent: "CG"
    },
    {
        code: "CG-8",
        name: "Cuvette",
        parent: "CG"
    },
    {
        code: "CG-9",
        name: "Niari",
        parent: "CG"
    },
    {
        code: "CG-BZV",
        name: "Brazzaville",
        parent: "CG"
    },
    {
        code: "CH-AG",
        name: "Aargau",
        parent: "CH"
    },
    {
        code: "CH-AI",
        name: "Appenzell Innerrhoden",
        parent: "CH"
    },
    {
        code: "CH-AR",
        name: "Appenzell Ausserrhoden",
        parent: "CH"
    },
    {
        code: "CH-BE",
        name: "Bern",
        parent: "CH"
    },
    {
        code: "CH-BL",
        name: "Basel-Landschaft",
        parent: "CH"
    },
    {
        code: "CH-BS",
        name: "Basel-Stadt",
        parent: "CH"
    },
    {
        code: "CH-FR",
        name: "Fribourg",
        parent: "CH"
    },
    {
        code: "CH-GE",
        name: "Gen\xe8ve",
        parent: "CH"
    },
    {
        code: "CH-GL",
        name: "Glarus",
        parent: "CH"
    },
    {
        code: "CH-GR",
        name: "Graub\xfcnden",
        parent: "CH"
    },
    {
        code: "CH-JU",
        name: "Jura",
        parent: "CH"
    },
    {
        code: "CH-LU",
        name: "Luzern",
        parent: "CH"
    },
    {
        code: "CH-NE",
        name: "Neuch\xe2tel",
        parent: "CH"
    },
    {
        code: "CH-NW",
        name: "Nidwalden",
        parent: "CH"
    },
    {
        code: "CH-OW",
        name: "Obwalden",
        parent: "CH"
    },
    {
        code: "CH-SG",
        name: "Sankt Gallen",
        parent: "CH"
    },
    {
        code: "CH-SH",
        name: "Schaffhausen",
        parent: "CH"
    },
    {
        code: "CH-SO",
        name: "Solothurn",
        parent: "CH"
    },
    {
        code: "CH-SZ",
        name: "Schwyz",
        parent: "CH"
    },
    {
        code: "CH-TG",
        name: "Thurgau",
        parent: "CH"
    },
    {
        code: "CH-TI",
        name: "Ticino",
        parent: "CH"
    },
    {
        code: "CH-UR",
        name: "Uri",
        parent: "CH"
    },
    {
        code: "CH-VD",
        name: "Vaud",
        parent: "CH"
    },
    {
        code: "CH-VS",
        name: "Valais",
        parent: "CH"
    },
    {
        code: "CH-ZG",
        name: "Zug",
        parent: "CH"
    },
    {
        code: "CH-ZH",
        name: "Z\xfcrich",
        parent: "CH"
    },
    {
        code: "CI-AB",
        name: "Abidjan",
        parent: "CI"
    },
    {
        code: "CI-BS",
        name: "Bas-Sassandra",
        parent: "CI"
    },
    {
        code: "CI-CM",
        name: "Como\xe9",
        parent: "CI"
    },
    {
        code: "CI-DN",
        name: "Dengu\xe9l\xe9",
        parent: "CI"
    },
    {
        code: "CI-GD",
        name: "G\xf4h-Djiboua",
        parent: "CI"
    },
    {
        code: "CI-LC",
        name: "Lacs",
        parent: "CI"
    },
    {
        code: "CI-LG",
        name: "Lagunes",
        parent: "CI"
    },
    {
        code: "CI-MG",
        name: "Montagnes",
        parent: "CI"
    },
    {
        code: "CI-SM",
        name: "Sassandra-Marahou\xe9",
        parent: "CI"
    },
    {
        code: "CI-SV",
        name: "Savanes",
        parent: "CI"
    },
    {
        code: "CI-VB",
        name: "Vall\xe9e du Bandama",
        parent: "CI"
    },
    {
        code: "CI-WR",
        name: "Woroba",
        parent: "CI"
    },
    {
        code: "CI-YM",
        name: "Yamoussoukro",
        parent: "CI"
    },
    {
        code: "CI-ZZ",
        name: "Zanzan",
        parent: "CI"
    },
    {
        code: "CL-AI",
        name: "Ais\xe9n del General Carlos Iba\xf1ez del Campo",
        parent: "CL"
    },
    {
        code: "CL-AN",
        name: "Antofagasta",
        parent: "CL"
    },
    {
        code: "CL-AP",
        name: "Arica y Parinacota",
        parent: "CL"
    },
    {
        code: "CL-AR",
        name: "La Araucan\xeda",
        parent: "CL"
    },
    {
        code: "CL-AT",
        name: "Atacama",
        parent: "CL"
    },
    {
        code: "CL-BI",
        name: "Biob\xedo",
        parent: "CL"
    },
    {
        code: "CL-CO",
        name: "Coquimbo",
        parent: "CL"
    },
    {
        code: "CL-LI",
        name: "Libertador General Bernardo O'Higgins",
        parent: "CL"
    },
    {
        code: "CL-LL",
        name: "Los Lagos",
        parent: "CL"
    },
    {
        code: "CL-LR",
        name: "Los R\xedos",
        parent: "CL"
    },
    {
        code: "CL-MA",
        name: "Magallanes",
        parent: "CL"
    },
    {
        code: "CL-ML",
        name: "Maule",
        parent: "CL"
    },
    {
        code: "CL-NB",
        name: "\xd1uble",
        parent: "CL"
    },
    {
        code: "CL-RM",
        name: "Regi\xf3n Metropolitana de Santiago",
        parent: "CL"
    },
    {
        code: "CL-TA",
        name: "Tarapac\xe1",
        parent: "CL"
    },
    {
        code: "CL-VS",
        name: "Valpara\xedso",
        parent: "CL"
    },
    {
        code: "CM-AD",
        name: "Adamaoua",
        parent: "CM"
    },
    {
        code: "CM-CE",
        name: "Centre",
        parent: "CM"
    },
    {
        code: "CM-EN",
        name: "Far North",
        parent: "CM"
    },
    {
        code: "CM-ES",
        name: "East",
        parent: "CM"
    },
    {
        code: "CM-LT",
        name: "Littoral",
        parent: "CM"
    },
    {
        code: "CM-NO",
        name: "North",
        parent: "CM"
    },
    {
        code: "CM-NW",
        name: "North-West",
        parent: "CM"
    },
    {
        code: "CM-OU",
        name: "West",
        parent: "CM"
    },
    {
        code: "CM-SU",
        name: "South",
        parent: "CM"
    },
    {
        code: "CM-SW",
        name: "South-West",
        parent: "CM"
    },
    {
        code: "CN-AH",
        name: "Anhui Sheng",
        parent: "CN"
    },
    {
        code: "CN-BJ",
        name: "Beijing Shi",
        parent: "CN"
    },
    {
        code: "CN-CQ",
        name: "Chongqing Shi",
        parent: "CN"
    },
    {
        code: "CN-FJ",
        name: "Fujian Sheng",
        parent: "CN"
    },
    {
        code: "CN-GD",
        name: "Guangdong Sheng",
        parent: "CN"
    },
    {
        code: "CN-GS",
        name: "Gansu Sheng",
        parent: "CN"
    },
    {
        code: "CN-GX",
        name: "Guangxi Zhuangzu Zizhiqu",
        parent: "CN"
    },
    {
        code: "CN-GZ",
        name: "Guizhou Sheng",
        parent: "CN"
    },
    {
        code: "CN-HA",
        name: "Henan Sheng",
        parent: "CN"
    },
    {
        code: "CN-HB",
        name: "Hubei Sheng",
        parent: "CN"
    },
    {
        code: "CN-HE",
        name: "Hebei Sheng",
        parent: "CN"
    },
    {
        code: "CN-HI",
        name: "Hainan Sheng",
        parent: "CN"
    },
    {
        code: "CN-HK",
        name: "Hong Kong SAR",
        parent: "CN"
    },
    {
        code: "CN-HL",
        name: "Heilongjiang Sheng",
        parent: "CN"
    },
    {
        code: "CN-HN",
        name: "Hunan Sheng",
        parent: "CN"
    },
    {
        code: "CN-JL",
        name: "Jilin Sheng",
        parent: "CN"
    },
    {
        code: "CN-JS",
        name: "Jiangsu Sheng",
        parent: "CN"
    },
    {
        code: "CN-JX",
        name: "Jiangxi Sheng",
        parent: "CN"
    },
    {
        code: "CN-LN",
        name: "Liaoning Sheng",
        parent: "CN"
    },
    {
        code: "CN-MO",
        name: "Macao SAR",
        parent: "CN"
    },
    {
        code: "CN-NM",
        name: "Nei Mongol Zizhiqu",
        parent: "CN"
    },
    {
        code: "CN-NX",
        name: "Ningxia Huizu Zizhiqu",
        parent: "CN"
    },
    {
        code: "CN-QH",
        name: "Qinghai Sheng",
        parent: "CN"
    },
    {
        code: "CN-SC",
        name: "Sichuan Sheng",
        parent: "CN"
    },
    {
        code: "CN-SD",
        name: "Shandong Sheng",
        parent: "CN"
    },
    {
        code: "CN-SH",
        name: "Shanghai Shi",
        parent: "CN"
    },
    {
        code: "CN-SN",
        name: "Shaanxi Sheng",
        parent: "CN"
    },
    {
        code: "CN-SX",
        name: "Shanxi Sheng",
        parent: "CN"
    },
    {
        code: "CN-TJ",
        name: "Tianjin Shi",
        parent: "CN"
    },
    {
        code: "CN-TW",
        name: "Taiwan Sheng",
        parent: "CN"
    },
    {
        code: "CN-XJ",
        name: "Xinjiang Uygur Zizhiqu",
        parent: "CN"
    },
    {
        code: "CN-XZ",
        name: "Xizang Zizhiqu",
        parent: "CN"
    },
    {
        code: "CN-YN",
        name: "Yunnan Sheng",
        parent: "CN"
    },
    {
        code: "CN-ZJ",
        name: "Zhejiang Sheng",
        parent: "CN"
    },
    {
        code: "CO-AMA",
        name: "Amazonas",
        parent: "CO"
    },
    {
        code: "CO-ANT",
        name: "Antioquia",
        parent: "CO"
    },
    {
        code: "CO-ARA",
        name: "Arauca",
        parent: "CO"
    },
    {
        code: "CO-ATL",
        name: "Atl\xe1ntico",
        parent: "CO"
    },
    {
        code: "CO-BOL",
        name: "Bol\xedvar",
        parent: "CO"
    },
    {
        code: "CO-BOY",
        name: "Boyac\xe1",
        parent: "CO"
    },
    {
        code: "CO-CAL",
        name: "Caldas",
        parent: "CO"
    },
    {
        code: "CO-CAQ",
        name: "Caquet\xe1",
        parent: "CO"
    },
    {
        code: "CO-CAS",
        name: "Casanare",
        parent: "CO"
    },
    {
        code: "CO-CAU",
        name: "Cauca",
        parent: "CO"
    },
    {
        code: "CO-CES",
        name: "Cesar",
        parent: "CO"
    },
    {
        code: "CO-CHO",
        name: "Choc\xf3",
        parent: "CO"
    },
    {
        code: "CO-COR",
        name: "C\xf3rdoba",
        parent: "CO"
    },
    {
        code: "CO-CUN",
        name: "Cundinamarca",
        parent: "CO"
    },
    {
        code: "CO-DC",
        name: "Distrito Capital de Bogot\xe1",
        parent: "CO"
    },
    {
        code: "CO-GUA",
        name: "Guain\xeda",
        parent: "CO"
    },
    {
        code: "CO-GUV",
        name: "Guaviare",
        parent: "CO"
    },
    {
        code: "CO-HUI",
        name: "Huila",
        parent: "CO"
    },
    {
        code: "CO-LAG",
        name: "La Guajira",
        parent: "CO"
    },
    {
        code: "CO-MAG",
        name: "Magdalena",
        parent: "CO"
    },
    {
        code: "CO-MET",
        name: "Meta",
        parent: "CO"
    },
    {
        code: "CO-NAR",
        name: "Nari\xf1o",
        parent: "CO"
    },
    {
        code: "CO-NSA",
        name: "Norte de Santander",
        parent: "CO"
    },
    {
        code: "CO-PUT",
        name: "Putumayo",
        parent: "CO"
    },
    {
        code: "CO-QUI",
        name: "Quind\xedo",
        parent: "CO"
    },
    {
        code: "CO-RIS",
        name: "Risaralda",
        parent: "CO"
    },
    {
        code: "CO-SAN",
        name: "Santander",
        parent: "CO"
    },
    {
        code: "CO-SAP",
        name: "San Andr\xe9s, Providencia y Santa Catalina",
        parent: "CO"
    },
    {
        code: "CO-SUC",
        name: "Sucre",
        parent: "CO"
    },
    {
        code: "CO-TOL",
        name: "Tolima",
        parent: "CO"
    },
    {
        code: "CO-VAC",
        name: "Valle del Cauca",
        parent: "CO"
    },
    {
        code: "CO-VAU",
        name: "Vaup\xe9s",
        parent: "CO"
    },
    {
        code: "CO-VID",
        name: "Vichada",
        parent: "CO"
    },
    {
        code: "CR-A",
        name: "Alajuela",
        parent: "CR"
    },
    {
        code: "CR-C",
        name: "Cartago",
        parent: "CR"
    },
    {
        code: "CR-G",
        name: "Guanacaste",
        parent: "CR"
    },
    {
        code: "CR-H",
        name: "Heredia",
        parent: "CR"
    },
    {
        code: "CR-L",
        name: "Lim\xf3n",
        parent: "CR"
    },
    {
        code: "CR-P",
        name: "Puntarenas",
        parent: "CR"
    },
    {
        code: "CR-SJ",
        name: "San Jos\xe9",
        parent: "CR"
    },
    {
        code: "CU-01",
        name: "Pinar del R\xedo",
        parent: "CU"
    },
    {
        code: "CU-03",
        name: "La Habana",
        parent: "CU"
    },
    {
        code: "CU-04",
        name: "Matanzas",
        parent: "CU"
    },
    {
        code: "CU-05",
        name: "Villa Clara",
        parent: "CU"
    },
    {
        code: "CU-06",
        name: "Cienfuegos",
        parent: "CU"
    },
    {
        code: "CU-07",
        name: "Sancti Sp\xedritus",
        parent: "CU"
    },
    {
        code: "CU-08",
        name: "Ciego de \xc1vila",
        parent: "CU"
    },
    {
        code: "CU-09",
        name: "Camag\xfcey",
        parent: "CU"
    },
    {
        code: "CU-10",
        name: "Las Tunas",
        parent: "CU"
    },
    {
        code: "CU-11",
        name: "Holgu\xedn",
        parent: "CU"
    },
    {
        code: "CU-12",
        name: "Granma",
        parent: "CU"
    },
    {
        code: "CU-13",
        name: "Santiago de Cuba",
        parent: "CU"
    },
    {
        code: "CU-14",
        name: "Guant\xe1namo",
        parent: "CU"
    },
    {
        code: "CU-15",
        name: "Artemisa",
        parent: "CU"
    },
    {
        code: "CU-16",
        name: "Mayabeque",
        parent: "CU"
    },
    {
        code: "CU-99",
        name: "Isla de la Juventud",
        parent: "CU"
    },
    {
        code: "CV-B",
        name: "Ilhas de Barlavento",
        parent: "CV"
    },
    {
        code: "CV-BR",
        name: "Brava",
        parent: "CV-S"
    },
    {
        code: "CV-BV",
        name: "Boa Vista",
        parent: "CV-B"
    },
    {
        code: "CV-CA",
        name: "Santa Catarina",
        parent: "CV-S"
    },
    {
        code: "CV-CF",
        name: "Santa Catarina do Fogo",
        parent: "CV-S"
    },
    {
        code: "CV-CR",
        name: "Santa Cruz",
        parent: "CV-S"
    },
    {
        code: "CV-MA",
        name: "Maio",
        parent: "CV-S"
    },
    {
        code: "CV-MO",
        name: "Mosteiros",
        parent: "CV-S"
    },
    {
        code: "CV-PA",
        name: "Paul",
        parent: "CV-B"
    },
    {
        code: "CV-PN",
        name: "Porto Novo",
        parent: "CV-B"
    },
    {
        code: "CV-PR",
        name: "Praia",
        parent: "CV-S"
    },
    {
        code: "CV-RB",
        name: "Ribeira Brava",
        parent: "CV-B"
    },
    {
        code: "CV-RG",
        name: "Ribeira Grande",
        parent: "CV-B"
    },
    {
        code: "CV-RS",
        name: "Ribeira Grande de Santiago",
        parent: "CV-S"
    },
    {
        code: "CV-S",
        name: "Ilhas de Sotavento",
        parent: "CV"
    },
    {
        code: "CV-SD",
        name: "S\xe3o Domingos",
        parent: "CV-S"
    },
    {
        code: "CV-SF",
        name: "S\xe3o Filipe",
        parent: "CV-S"
    },
    {
        code: "CV-SL",
        name: "Sal",
        parent: "CV-B"
    },
    {
        code: "CV-SM",
        name: "S\xe3o Miguel",
        parent: "CV-S"
    },
    {
        code: "CV-SO",
        name: "S\xe3o Louren\xe7o dos \xd3rg\xe3os",
        parent: "CV-S"
    },
    {
        code: "CV-SS",
        name: "S\xe3o Salvador do Mundo",
        parent: "CV-S"
    },
    {
        code: "CV-SV",
        name: "S\xe3o Vicente",
        parent: "CV-B"
    },
    {
        code: "CV-TA",
        name: "Tarrafal",
        parent: "CV-S"
    },
    {
        code: "CV-TS",
        name: "Tarrafal de S\xe3o Nicolau",
        parent: "CV-B"
    },
    {
        code: "CY-01",
        name: "Lefkosia",
        parent: "CY"
    },
    {
        code: "CY-02",
        name: "Lemesos",
        parent: "CY"
    },
    {
        code: "CY-03",
        name: "Larnaka",
        parent: "CY"
    },
    {
        code: "CY-04",
        name: "Ammochostos",
        parent: "CY"
    },
    {
        code: "CY-05",
        name: "Pafos",
        parent: "CY"
    },
    {
        code: "CY-06",
        name: "Keryneia",
        parent: "CY"
    },
    {
        code: "CZ-10",
        name: "Praha, Hlavn\xed město",
        parent: "CZ"
    },
    {
        code: "CZ-20",
        name: "Středočesk\xfd kraj",
        parent: "CZ"
    },
    {
        code: "CZ-201",
        name: "Benešov",
        parent: "CZ-20"
    },
    {
        code: "CZ-202",
        name: "Beroun",
        parent: "CZ-20"
    },
    {
        code: "CZ-203",
        name: "Kladno",
        parent: "CZ-20"
    },
    {
        code: "CZ-204",
        name: "Kol\xedn",
        parent: "CZ-20"
    },
    {
        code: "CZ-205",
        name: "Kutn\xe1 Hora",
        parent: "CZ-20"
    },
    {
        code: "CZ-206",
        name: "Měln\xedk",
        parent: "CZ-20"
    },
    {
        code: "CZ-207",
        name: "Mlad\xe1 Boleslav",
        parent: "CZ-20"
    },
    {
        code: "CZ-208",
        name: "Nymburk",
        parent: "CZ-20"
    },
    {
        code: "CZ-209",
        name: "Praha-v\xfdchod",
        parent: "CZ-20"
    },
    {
        code: "CZ-20A",
        name: "Praha-z\xe1pad",
        parent: "CZ-20"
    },
    {
        code: "CZ-20B",
        name: "Př\xedbram",
        parent: "CZ-20"
    },
    {
        code: "CZ-20C",
        name: "Rakovn\xedk",
        parent: "CZ-20"
    },
    {
        code: "CZ-31",
        name: "Jihočesk\xfd kraj",
        parent: "CZ"
    },
    {
        code: "CZ-311",
        name: "Česk\xe9 Budějovice",
        parent: "CZ-31"
    },
    {
        code: "CZ-312",
        name: "Česk\xfd Krumlov",
        parent: "CZ-31"
    },
    {
        code: "CZ-313",
        name: "Jindřichův Hradec",
        parent: "CZ-31"
    },
    {
        code: "CZ-314",
        name: "P\xedsek",
        parent: "CZ-31"
    },
    {
        code: "CZ-315",
        name: "Prachatice",
        parent: "CZ-31"
    },
    {
        code: "CZ-316",
        name: "Strakonice",
        parent: "CZ-31"
    },
    {
        code: "CZ-317",
        name: "T\xe1bor",
        parent: "CZ-31"
    },
    {
        code: "CZ-32",
        name: "Plzeňsk\xfd kraj",
        parent: "CZ"
    },
    {
        code: "CZ-321",
        name: "Domažlice",
        parent: "CZ-32"
    },
    {
        code: "CZ-322",
        name: "Klatovy",
        parent: "CZ-32"
    },
    {
        code: "CZ-323",
        name: "Plzeň-město",
        parent: "CZ-32"
    },
    {
        code: "CZ-324",
        name: "Plzeň-jih",
        parent: "CZ-32"
    },
    {
        code: "CZ-325",
        name: "Plzeň-sever",
        parent: "CZ-32"
    },
    {
        code: "CZ-326",
        name: "Rokycany",
        parent: "CZ-32"
    },
    {
        code: "CZ-327",
        name: "Tachov",
        parent: "CZ-32"
    },
    {
        code: "CZ-41",
        name: "Karlovarsk\xfd kraj",
        parent: "CZ"
    },
    {
        code: "CZ-411",
        name: "Cheb",
        parent: "CZ-41"
    },
    {
        code: "CZ-412",
        name: "Karlovy Vary",
        parent: "CZ-41"
    },
    {
        code: "CZ-413",
        name: "Sokolov",
        parent: "CZ-41"
    },
    {
        code: "CZ-42",
        name: "\xdasteck\xfd kraj",
        parent: "CZ"
    },
    {
        code: "CZ-421",
        name: "Děč\xedn",
        parent: "CZ-42"
    },
    {
        code: "CZ-422",
        name: "Chomutov",
        parent: "CZ-42"
    },
    {
        code: "CZ-423",
        name: "Litoměřice",
        parent: "CZ-42"
    },
    {
        code: "CZ-424",
        name: "Louny",
        parent: "CZ-42"
    },
    {
        code: "CZ-425",
        name: "Most",
        parent: "CZ-42"
    },
    {
        code: "CZ-426",
        name: "Teplice",
        parent: "CZ-42"
    },
    {
        code: "CZ-427",
        name: "\xdast\xed nad Labem",
        parent: "CZ-42"
    },
    {
        code: "CZ-51",
        name: "Libereck\xfd kraj",
        parent: "CZ"
    },
    {
        code: "CZ-511",
        name: "Česk\xe1 L\xedpa",
        parent: "CZ-51"
    },
    {
        code: "CZ-512",
        name: "Jablonec nad Nisou",
        parent: "CZ-51"
    },
    {
        code: "CZ-513",
        name: "Liberec",
        parent: "CZ-51"
    },
    {
        code: "CZ-514",
        name: "Semily",
        parent: "CZ-51"
    },
    {
        code: "CZ-52",
        name: "Kr\xe1lov\xe9hradeck\xfd kraj",
        parent: "CZ"
    },
    {
        code: "CZ-521",
        name: "Hradec Kr\xe1lov\xe9",
        parent: "CZ-52"
    },
    {
        code: "CZ-522",
        name: "Jič\xedn",
        parent: "CZ-52"
    },
    {
        code: "CZ-523",
        name: "N\xe1chod",
        parent: "CZ-52"
    },
    {
        code: "CZ-524",
        name: "Rychnov nad Kněžnou",
        parent: "CZ-52"
    },
    {
        code: "CZ-525",
        name: "Trutnov",
        parent: "CZ-52"
    },
    {
        code: "CZ-53",
        name: "Pardubick\xfd kraj",
        parent: "CZ"
    },
    {
        code: "CZ-531",
        name: "Chrudim",
        parent: "CZ-53"
    },
    {
        code: "CZ-532",
        name: "Pardubice",
        parent: "CZ-53"
    },
    {
        code: "CZ-533",
        name: "Svitavy",
        parent: "CZ-53"
    },
    {
        code: "CZ-534",
        name: "\xdast\xed nad Orlic\xed",
        parent: "CZ-53"
    },
    {
        code: "CZ-63",
        name: "Kraj Vysočina",
        parent: "CZ"
    },
    {
        code: "CZ-631",
        name: "Havl\xedčkův Brod",
        parent: "CZ-63"
    },
    {
        code: "CZ-632",
        name: "Jihlava",
        parent: "CZ-63"
    },
    {
        code: "CZ-633",
        name: "Pelhřimov",
        parent: "CZ-63"
    },
    {
        code: "CZ-634",
        name: "Třeb\xedč",
        parent: "CZ-63"
    },
    {
        code: "CZ-635",
        name: "Žď\xe1r nad S\xe1zavou",
        parent: "CZ-63"
    },
    {
        code: "CZ-64",
        name: "Jihomoravsk\xfd kraj",
        parent: "CZ"
    },
    {
        code: "CZ-641",
        name: "Blansko",
        parent: "CZ-64"
    },
    {
        code: "CZ-642",
        name: "Brno-město",
        parent: "CZ-64"
    },
    {
        code: "CZ-643",
        name: "Brno-venkov",
        parent: "CZ-64"
    },
    {
        code: "CZ-644",
        name: "Břeclav",
        parent: "CZ-64"
    },
    {
        code: "CZ-645",
        name: "Hodon\xedn",
        parent: "CZ-64"
    },
    {
        code: "CZ-646",
        name: "Vyškov",
        parent: "CZ-64"
    },
    {
        code: "CZ-647",
        name: "Znojmo",
        parent: "CZ-64"
    },
    {
        code: "CZ-71",
        name: "Olomouck\xfd kraj",
        parent: "CZ"
    },
    {
        code: "CZ-711",
        name: "Jesen\xedk",
        parent: "CZ-71"
    },
    {
        code: "CZ-712",
        name: "Olomouc",
        parent: "CZ-71"
    },
    {
        code: "CZ-713",
        name: "Prostějov",
        parent: "CZ-71"
    },
    {
        code: "CZ-714",
        name: "Přerov",
        parent: "CZ-71"
    },
    {
        code: "CZ-715",
        name: "Šumperk",
        parent: "CZ-71"
    },
    {
        code: "CZ-72",
        name: "Zl\xednsk\xfd kraj",
        parent: "CZ"
    },
    {
        code: "CZ-721",
        name: "Kroměř\xedž",
        parent: "CZ-72"
    },
    {
        code: "CZ-722",
        name: "Uhersk\xe9 Hradiště",
        parent: "CZ-72"
    },
    {
        code: "CZ-723",
        name: "Vset\xedn",
        parent: "CZ-72"
    },
    {
        code: "CZ-724",
        name: "Zl\xedn",
        parent: "CZ-72"
    },
    {
        code: "CZ-80",
        name: "Moravskoslezsk\xfd kraj",
        parent: "CZ"
    },
    {
        code: "CZ-801",
        name: "Brunt\xe1l",
        parent: "CZ-80"
    },
    {
        code: "CZ-802",
        name: "Fr\xfddek-M\xedstek",
        parent: "CZ-80"
    },
    {
        code: "CZ-803",
        name: "Karvin\xe1",
        parent: "CZ-80"
    },
    {
        code: "CZ-804",
        name: "Nov\xfd Jič\xedn",
        parent: "CZ-80"
    },
    {
        code: "CZ-805",
        name: "Opava",
        parent: "CZ-80"
    },
    {
        code: "CZ-806",
        name: "Ostrava-město",
        parent: "CZ-80"
    },
    {
        code: "DE-BB",
        name: "Brandenburg",
        parent: "DE"
    },
    {
        code: "DE-BE",
        name: "Berlin",
        parent: "DE"
    },
    {
        code: "DE-BW",
        name: "Baden-W\xfcrttemberg",
        parent: "DE"
    },
    {
        code: "DE-BY",
        name: "Bayern",
        parent: "DE"
    },
    {
        code: "DE-HB",
        name: "Bremen",
        parent: "DE"
    },
    {
        code: "DE-HE",
        name: "Hessen",
        parent: "DE"
    },
    {
        code: "DE-HH",
        name: "Hamburg",
        parent: "DE"
    },
    {
        code: "DE-MV",
        name: "Mecklenburg-Vorpommern",
        parent: "DE"
    },
    {
        code: "DE-NI",
        name: "Niedersachsen",
        parent: "DE"
    },
    {
        code: "DE-NW",
        name: "Nordrhein-Westfalen",
        parent: "DE"
    },
    {
        code: "DE-RP",
        name: "Rheinland-Pfalz",
        parent: "DE"
    },
    {
        code: "DE-SH",
        name: "Schleswig-Holstein",
        parent: "DE"
    },
    {
        code: "DE-SL",
        name: "Saarland",
        parent: "DE"
    },
    {
        code: "DE-SN",
        name: "Sachsen",
        parent: "DE"
    },
    {
        code: "DE-ST",
        name: "Sachsen-Anhalt",
        parent: "DE"
    },
    {
        code: "DE-TH",
        name: "Th\xfcringen",
        parent: "DE"
    },
    {
        code: "DJ-AR",
        name: "Arta",
        parent: "DJ"
    },
    {
        code: "DJ-AS",
        name: "Ali Sabieh",
        parent: "DJ"
    },
    {
        code: "DJ-DI",
        name: "Dikhil",
        parent: "DJ"
    },
    {
        code: "DJ-DJ",
        name: "Djibouti",
        parent: "DJ"
    },
    {
        code: "DJ-OB",
        name: "Obock",
        parent: "DJ"
    },
    {
        code: "DJ-TA",
        name: "Tadjourah",
        parent: "DJ"
    },
    {
        code: "DK-015",
        name: "K\xf8benhavn",
        parent: "DK"
    },
    {
        code: "DK-020",
        name: "Frederiksborg",
        parent: "DK"
    },
    {
        code: "DK-025",
        name: "Roskilde",
        parent: "DK"
    },
    {
        code: "DK-030",
        name: "Vestsj\xe6lland",
        parent: "DK"
    },
    {
        code: "DK-035",
        name: "Storstr\xf8m",
        parent: "DK"
    },
    {
        code: "DK-040",
        name: "Bornholm",
        parent: "DK"
    },
    {
        code: "DK-042",
        name: "Fyn",
        parent: "DK"
    },
    {
        code: "DK-050",
        name: "S\xf8nderjylland",
        parent: "DK"
    },
    {
        code: "DK-055",
        name: "Ribe",
        parent: "DK"
    },
    {
        code: "DK-060",
        name: "Vejle",
        parent: "DK"
    },
    {
        code: "DK-065",
        name: "Ringk\xf8bing",
        parent: "DK"
    },
    {
        code: "DK-070",
        name: "\xc5rhus",
        parent: "DK"
    },
    {
        code: "DK-076",
        name: "Viborg",
        parent: "DK"
    },
    {
        code: "DK-080",
        name: "Nordjylland",
        parent: "DK"
    },
    {
        code: "DK-101",
        name: "K\xf8benhavn",
        parent: "DK"
    },
    {
        code: "DK-147",
        name: "Frederiksberg",
        parent: "DK"
    },
    {
        code: "DK-81",
        name: "Region Nordjylland",
        parent: "DK"
    },
    {
        code: "DK-82",
        name: "Region Midjylland",
        parent: "DK"
    },
    {
        code: "DK-83",
        name: "Region Syddanmark",
        parent: "DK"
    },
    {
        code: "DK-84",
        name: "Region Hovedstaden",
        parent: "DK"
    },
    {
        code: "DK-85",
        name: "Region Sj\xe6lland",
        parent: "DK"
    },
    {
        code: "DM-02",
        name: "Saint Andrew",
        parent: "DM"
    },
    {
        code: "DM-03",
        name: "Saint David",
        parent: "DM"
    },
    {
        code: "DM-04",
        name: "Saint George",
        parent: "DM"
    },
    {
        code: "DM-05",
        name: "Saint John",
        parent: "DM"
    },
    {
        code: "DM-06",
        name: "Saint Joseph",
        parent: "DM"
    },
    {
        code: "DM-07",
        name: "Saint Luke",
        parent: "DM"
    },
    {
        code: "DM-08",
        name: "Saint Mark",
        parent: "DM"
    },
    {
        code: "DM-09",
        name: "Saint Patrick",
        parent: "DM"
    },
    {
        code: "DM-10",
        name: "Saint Paul",
        parent: "DM"
    },
    {
        code: "DM-11",
        name: "Saint Peter",
        parent: "DM"
    },
    {
        code: "DO-01",
        name: "Distrito Nacional (Santo Domingo)",
        parent: "DO-40"
    },
    {
        code: "DO-02",
        name: "Azua",
        parent: "DO-41"
    },
    {
        code: "DO-03",
        name: "Baoruco",
        parent: "DO-38"
    },
    {
        code: "DO-04",
        name: "Barahona",
        parent: "DO-38"
    },
    {
        code: "DO-05",
        name: "Dajab\xf3n",
        parent: "DO-34"
    },
    {
        code: "DO-06",
        name: "Duarte",
        parent: "DO-33"
    },
    {
        code: "DO-07",
        name: "El\xedas Pi\xf1a",
        parent: "DO-37"
    },
    {
        code: "DO-08",
        name: "El Seibo",
        parent: "DO-42"
    },
    {
        code: "DO-09",
        name: "Espaillat",
        parent: "DO-35"
    },
    {
        code: "DO-10",
        name: "Independencia",
        parent: "DO-38"
    },
    {
        code: "DO-11",
        name: "La Altagracia",
        parent: "DO-42"
    },
    {
        code: "DO-12",
        name: "La Romana",
        parent: "DO-42"
    },
    {
        code: "DO-13",
        name: "La Vega",
        parent: "DO-36"
    },
    {
        code: "DO-14",
        name: "Mar\xeda Trinidad S\xe1nchez",
        parent: "DO-33"
    },
    {
        code: "DO-15",
        name: "Monte Cristi",
        parent: "DO-34"
    },
    {
        code: "DO-16",
        name: "Pedernales",
        parent: "DO-38"
    },
    {
        code: "DO-17",
        name: "Peravia",
        parent: "DO-41"
    },
    {
        code: "DO-18",
        name: "Puerto Plata",
        parent: "DO-35"
    },
    {
        code: "DO-19",
        name: "Hermanas Mirabal",
        parent: "DO-33"
    },
    {
        code: "DO-20",
        name: "Saman\xe1",
        parent: "DO-33"
    },
    {
        code: "DO-21",
        name: "San Crist\xf3bal",
        parent: "DO-41"
    },
    {
        code: "DO-22",
        name: "San Juan",
        parent: "DO-37"
    },
    {
        code: "DO-23",
        name: "San Pedro de Macor\xeds",
        parent: "DO-39"
    },
    {
        code: "DO-24",
        name: "S\xe1nchez Ram\xedrez",
        parent: "DO-36"
    },
    {
        code: "DO-25",
        name: "Santiago",
        parent: "DO-35"
    },
    {
        code: "DO-26",
        name: "Santiago Rodr\xedguez",
        parent: "DO-34"
    },
    {
        code: "DO-27",
        name: "Valverde",
        parent: "DO-34"
    },
    {
        code: "DO-28",
        name: "Monse\xf1or Nouel",
        parent: "DO-36"
    },
    {
        code: "DO-29",
        name: "Monte Plata",
        parent: "DO-39"
    },
    {
        code: "DO-30",
        name: "Hato Mayor",
        parent: "DO-39"
    },
    {
        code: "DO-31",
        name: "San Jos\xe9 de Ocoa",
        parent: "DO-41"
    },
    {
        code: "DO-32",
        name: "Santo Domingo",
        parent: "DO-40"
    },
    {
        code: "DO-33",
        name: "Cibao Nordeste",
        parent: "DO"
    },
    {
        code: "DO-34",
        name: "Cibao Noroeste",
        parent: "DO"
    },
    {
        code: "DO-35",
        name: "Cibao Norte",
        parent: "DO"
    },
    {
        code: "DO-36",
        name: "Cibao Sur",
        parent: "DO"
    },
    {
        code: "DO-37",
        name: "El Valle",
        parent: "DO"
    },
    {
        code: "DO-38",
        name: "Enriquillo",
        parent: "DO"
    },
    {
        code: "DO-39",
        name: "Higuamo",
        parent: "DO"
    },
    {
        code: "DO-40",
        name: "Ozama",
        parent: "DO"
    },
    {
        code: "DO-41",
        name: "Valdesia",
        parent: "DO"
    },
    {
        code: "DO-42",
        name: "Yuma",
        parent: "DO"
    },
    {
        code: "DZ-01",
        name: "Adrar",
        parent: "DZ"
    },
    {
        code: "DZ-02",
        name: "Chlef",
        parent: "DZ"
    },
    {
        code: "DZ-03",
        name: "Laghouat",
        parent: "DZ"
    },
    {
        code: "DZ-04",
        name: "Oum el Bouaghi",
        parent: "DZ"
    },
    {
        code: "DZ-05",
        name: "Batna",
        parent: "DZ"
    },
    {
        code: "DZ-06",
        name: "B\xe9ja\xefa",
        parent: "DZ"
    },
    {
        code: "DZ-07",
        name: "Biskra",
        parent: "DZ"
    },
    {
        code: "DZ-08",
        name: "B\xe9char",
        parent: "DZ"
    },
    {
        code: "DZ-09",
        name: "Blida",
        parent: "DZ"
    },
    {
        code: "DZ-10",
        name: "Bouira",
        parent: "DZ"
    },
    {
        code: "DZ-11",
        name: "Tamanrasset",
        parent: "DZ"
    },
    {
        code: "DZ-12",
        name: "T\xe9bessa",
        parent: "DZ"
    },
    {
        code: "DZ-13",
        name: "Tlemcen",
        parent: "DZ"
    },
    {
        code: "DZ-14",
        name: "Tiaret",
        parent: "DZ"
    },
    {
        code: "DZ-15",
        name: "Tizi Ouzou",
        parent: "DZ"
    },
    {
        code: "DZ-16",
        name: "Alger",
        parent: "DZ"
    },
    {
        code: "DZ-17",
        name: "Djelfa",
        parent: "DZ"
    },
    {
        code: "DZ-18",
        name: "Jijel",
        parent: "DZ"
    },
    {
        code: "DZ-19",
        name: "S\xe9tif",
        parent: "DZ"
    },
    {
        code: "DZ-20",
        name: "Sa\xefda",
        parent: "DZ"
    },
    {
        code: "DZ-21",
        name: "Skikda",
        parent: "DZ"
    },
    {
        code: "DZ-22",
        name: "Sidi Bel Abb\xe8s",
        parent: "DZ"
    },
    {
        code: "DZ-23",
        name: "Annaba",
        parent: "DZ"
    },
    {
        code: "DZ-24",
        name: "Guelma",
        parent: "DZ"
    },
    {
        code: "DZ-25",
        name: "Constantine",
        parent: "DZ"
    },
    {
        code: "DZ-26",
        name: "M\xe9d\xe9a",
        parent: "DZ"
    },
    {
        code: "DZ-27",
        name: "Mostaganem",
        parent: "DZ"
    },
    {
        code: "DZ-28",
        name: "M'sila",
        parent: "DZ"
    },
    {
        code: "DZ-29",
        name: "Mascara",
        parent: "DZ"
    },
    {
        code: "DZ-30",
        name: "Ouargla",
        parent: "DZ"
    },
    {
        code: "DZ-31",
        name: "Oran",
        parent: "DZ"
    },
    {
        code: "DZ-32",
        name: "El Bayadh",
        parent: "DZ"
    },
    {
        code: "DZ-33",
        name: "Illizi",
        parent: "DZ"
    },
    {
        code: "DZ-34",
        name: "Bordj Bou Arr\xe9ridj",
        parent: "DZ"
    },
    {
        code: "DZ-35",
        name: "Boumerd\xe8s",
        parent: "DZ"
    },
    {
        code: "DZ-36",
        name: "El Tarf",
        parent: "DZ"
    },
    {
        code: "DZ-37",
        name: "Tindouf",
        parent: "DZ"
    },
    {
        code: "DZ-38",
        name: "Tissemsilt",
        parent: "DZ"
    },
    {
        code: "DZ-39",
        name: "El Oued",
        parent: "DZ"
    },
    {
        code: "DZ-40",
        name: "Khenchela",
        parent: "DZ"
    },
    {
        code: "DZ-41",
        name: "Souk Ahras",
        parent: "DZ"
    },
    {
        code: "DZ-42",
        name: "Tipaza",
        parent: "DZ"
    },
    {
        code: "DZ-43",
        name: "Mila",
        parent: "DZ"
    },
    {
        code: "DZ-44",
        name: "A\xefn Defla",
        parent: "DZ"
    },
    {
        code: "DZ-45",
        name: "Naama",
        parent: "DZ"
    },
    {
        code: "DZ-46",
        name: "A\xefn T\xe9mouchent",
        parent: "DZ"
    },
    {
        code: "DZ-47",
        name: "Gharda\xefa",
        parent: "DZ"
    },
    {
        code: "DZ-48",
        name: "Relizane",
        parent: "DZ"
    },
    {
        code: "DZ-49",
        name: "Timimoun",
        parent: "DZ"
    },
    {
        code: "DZ-50",
        name: "Bordj Badji Mokhtar",
        parent: "DZ"
    },
    {
        code: "DZ-51",
        name: "Ouled Djellal",
        parent: "DZ"
    },
    {
        code: "DZ-52",
        name: "B\xe9ni Abb\xe8s",
        parent: "DZ"
    },
    {
        code: "DZ-53",
        name: "In Salah",
        parent: "DZ"
    },
    {
        code: "DZ-54",
        name: "In Guezzam",
        parent: "DZ"
    },
    {
        code: "DZ-55",
        name: "Touggourt",
        parent: "DZ"
    },
    {
        code: "DZ-56",
        name: "Djanet",
        parent: "DZ"
    },
    {
        code: "DZ-57",
        name: "El Meghaier",
        parent: "DZ"
    },
    {
        code: "DZ-58",
        name: "El Meniaa",
        parent: "DZ"
    },
    {
        code: "EC-A",
        name: "Azuay",
        parent: "EC"
    },
    {
        code: "EC-B",
        name: "Bol\xedvar",
        parent: "EC"
    },
    {
        code: "EC-C",
        name: "Carchi",
        parent: "EC"
    },
    {
        code: "EC-D",
        name: "Orellana",
        parent: "EC"
    },
    {
        code: "EC-E",
        name: "Esmeraldas",
        parent: "EC"
    },
    {
        code: "EC-F",
        name: "Ca\xf1ar",
        parent: "EC"
    },
    {
        code: "EC-G",
        name: "Guayas",
        parent: "EC"
    },
    {
        code: "EC-H",
        name: "Chimborazo",
        parent: "EC"
    },
    {
        code: "EC-I",
        name: "Imbabura",
        parent: "EC"
    },
    {
        code: "EC-L",
        name: "Loja",
        parent: "EC"
    },
    {
        code: "EC-M",
        name: "Manab\xed",
        parent: "EC"
    },
    {
        code: "EC-N",
        name: "Napo",
        parent: "EC"
    },
    {
        code: "EC-O",
        name: "El Oro",
        parent: "EC"
    },
    {
        code: "EC-P",
        name: "Pichincha",
        parent: "EC"
    },
    {
        code: "EC-R",
        name: "Los R\xedos",
        parent: "EC"
    },
    {
        code: "EC-S",
        name: "Morona Santiago",
        parent: "EC"
    },
    {
        code: "EC-SD",
        name: "Santo Domingo de los Ts\xe1chilas",
        parent: "EC"
    },
    {
        code: "EC-SE",
        name: "Santa Elena",
        parent: "EC"
    },
    {
        code: "EC-T",
        name: "Tungurahua",
        parent: "EC"
    },
    {
        code: "EC-U",
        name: "Sucumb\xedos",
        parent: "EC"
    },
    {
        code: "EC-W",
        name: "Gal\xe1pagos",
        parent: "EC"
    },
    {
        code: "EC-X",
        name: "Cotopaxi",
        parent: "EC"
    },
    {
        code: "EC-Y",
        name: "Pastaza",
        parent: "EC"
    },
    {
        code: "EC-Z",
        name: "Zamora Chinchipe",
        parent: "EC"
    },
    {
        code: "EE-130",
        name: "Alutaguse",
        parent: "EE"
    },
    {
        code: "EE-141",
        name: "Anija",
        parent: "EE"
    },
    {
        code: "EE-142",
        name: "Antsla",
        parent: "EE"
    },
    {
        code: "EE-171",
        name: "Elva",
        parent: "EE"
    },
    {
        code: "EE-184",
        name: "Haapsalu",
        parent: "EE"
    },
    {
        code: "EE-191",
        name: "Haljala",
        parent: "EE"
    },
    {
        code: "EE-198",
        name: "Harku",
        parent: "EE"
    },
    {
        code: "EE-205",
        name: "Hiiumaa",
        parent: "EE"
    },
    {
        code: "EE-214",
        name: "H\xe4\xe4demeeste",
        parent: "EE"
    },
    {
        code: "EE-245",
        name: "J\xf5el\xe4htme",
        parent: "EE"
    },
    {
        code: "EE-247",
        name: "J\xf5geva",
        parent: "EE"
    },
    {
        code: "EE-251",
        name: "J\xf5hvi",
        parent: "EE"
    },
    {
        code: "EE-255",
        name: "J\xe4rva",
        parent: "EE"
    },
    {
        code: "EE-272",
        name: "Kadrina",
        parent: "EE"
    },
    {
        code: "EE-283",
        name: "Kambja",
        parent: "EE"
    },
    {
        code: "EE-284",
        name: "Kanepi",
        parent: "EE"
    },
    {
        code: "EE-291",
        name: "Kastre",
        parent: "EE"
    },
    {
        code: "EE-293",
        name: "Kehtna",
        parent: "EE"
    },
    {
        code: "EE-296",
        name: "Keila",
        parent: "EE"
    },
    {
        code: "EE-303",
        name: "Kihnu",
        parent: "EE"
    },
    {
        code: "EE-305",
        name: "Kiili",
        parent: "EE"
    },
    {
        code: "EE-317",
        name: "Kohila",
        parent: "EE"
    },
    {
        code: "EE-321",
        name: "Kohtla-J\xe4rve",
        parent: "EE"
    },
    {
        code: "EE-338",
        name: "Kose",
        parent: "EE"
    },
    {
        code: "EE-353",
        name: "Kuusalu",
        parent: "EE"
    },
    {
        code: "EE-37",
        name: "Harjumaa",
        parent: "EE"
    },
    {
        code: "EE-39",
        name: "Hiiumaa",
        parent: "EE"
    },
    {
        code: "EE-424",
        name: "Loksa",
        parent: "EE"
    },
    {
        code: "EE-430",
        name: "L\xe4\xe4neranna",
        parent: "EE"
    },
    {
        code: "EE-431",
        name: "L\xe4\xe4ne-Harju",
        parent: "EE"
    },
    {
        code: "EE-432",
        name: "Luunja",
        parent: "EE"
    },
    {
        code: "EE-441",
        name: "L\xe4\xe4ne-Nigula",
        parent: "EE"
    },
    {
        code: "EE-442",
        name: "L\xfcganuse",
        parent: "EE"
    },
    {
        code: "EE-446",
        name: "Maardu",
        parent: "EE"
    },
    {
        code: "EE-45",
        name: "Ida-Virumaa",
        parent: "EE"
    },
    {
        code: "EE-478",
        name: "Muhu",
        parent: "EE"
    },
    {
        code: "EE-480",
        name: "Mulgi",
        parent: "EE"
    },
    {
        code: "EE-486",
        name: "Mustvee",
        parent: "EE"
    },
    {
        code: "EE-50",
        name: "J\xf5gevamaa",
        parent: "EE"
    },
    {
        code: "EE-503",
        name: "M\xe4rjamaa",
        parent: "EE"
    },
    {
        code: "EE-511",
        name: "Narva",
        parent: "EE"
    },
    {
        code: "EE-514",
        name: "Narva-J\xf5esuu",
        parent: "EE"
    },
    {
        code: "EE-52",
        name: "J\xe4rvamaa",
        parent: "EE"
    },
    {
        code: "EE-528",
        name: "N\xf5o",
        parent: "EE"
    },
    {
        code: "EE-557",
        name: "Otep\xe4\xe4",
        parent: "EE"
    },
    {
        code: "EE-56",
        name: "L\xe4\xe4nemaa",
        parent: "EE"
    },
    {
        code: "EE-567",
        name: "Paide",
        parent: "EE"
    },
    {
        code: "EE-586",
        name: "Peipsi\xe4\xe4re",
        parent: "EE"
    },
    {
        code: "EE-60",
        name: "L\xe4\xe4ne-Virumaa",
        parent: "EE"
    },
    {
        code: "EE-615",
        name: "P\xf5hja-Sakala",
        parent: "EE"
    },
    {
        code: "EE-618",
        name: "P\xf5ltsamaa",
        parent: "EE"
    },
    {
        code: "EE-622",
        name: "P\xf5lva",
        parent: "EE"
    },
    {
        code: "EE-624",
        name: "P\xe4rnu",
        parent: "EE"
    },
    {
        code: "EE-638",
        name: "P\xf5hja-P\xe4rnumaa",
        parent: "EE"
    },
    {
        code: "EE-64",
        name: "P\xf5lvamaa",
        parent: "EE"
    },
    {
        code: "EE-651",
        name: "Raasiku",
        parent: "EE"
    },
    {
        code: "EE-653",
        name: "Rae",
        parent: "EE"
    },
    {
        code: "EE-661",
        name: "Rakvere",
        parent: "EE"
    },
    {
        code: "EE-663",
        name: "Rakvere",
        parent: "EE"
    },
    {
        code: "EE-668",
        name: "Rapla",
        parent: "EE"
    },
    {
        code: "EE-68",
        name: "P\xe4rnumaa",
        parent: "EE"
    },
    {
        code: "EE-689",
        name: "Ruhnu",
        parent: "EE"
    },
    {
        code: "EE-698",
        name: "R\xf5uge",
        parent: "EE"
    },
    {
        code: "EE-708",
        name: "R\xe4pina",
        parent: "EE"
    },
    {
        code: "EE-71",
        name: "Raplamaa",
        parent: "EE"
    },
    {
        code: "EE-712",
        name: "Saarde",
        parent: "EE"
    },
    {
        code: "EE-714",
        name: "Saaremaa",
        parent: "EE"
    },
    {
        code: "EE-719",
        name: "Saku",
        parent: "EE"
    },
    {
        code: "EE-726",
        name: "Saue",
        parent: "EE"
    },
    {
        code: "EE-732",
        name: "Setomaa",
        parent: "EE"
    },
    {
        code: "EE-735",
        name: "Sillam\xe4e",
        parent: "EE"
    },
    {
        code: "EE-74",
        name: "Saaremaa",
        parent: "EE"
    },
    {
        code: "EE-784",
        name: "Tallinn",
        parent: "EE"
    },
    {
        code: "EE-79",
        name: "Tartumaa",
        parent: "EE"
    },
    {
        code: "EE-792",
        name: "Tapa",
        parent: "EE"
    },
    {
        code: "EE-793",
        name: "Tartu",
        parent: "EE"
    },
    {
        code: "EE-796",
        name: "Tartu",
        parent: "EE"
    },
    {
        code: "EE-803",
        name: "Toila",
        parent: "EE"
    },
    {
        code: "EE-809",
        name: "Tori",
        parent: "EE"
    },
    {
        code: "EE-81",
        name: "Valgamaa",
        parent: "EE"
    },
    {
        code: "EE-824",
        name: "T\xf5rva",
        parent: "EE"
    },
    {
        code: "EE-834",
        name: "T\xfcri",
        parent: "EE"
    },
    {
        code: "EE-84",
        name: "Viljandimaa",
        parent: "EE"
    },
    {
        code: "EE-855",
        name: "Valga",
        parent: "EE"
    },
    {
        code: "EE-87",
        name: "V\xf5rumaa",
        parent: "EE"
    },
    {
        code: "EE-890",
        name: "Viimsi",
        parent: "EE"
    },
    {
        code: "EE-897",
        name: "Viljandi",
        parent: "EE"
    },
    {
        code: "EE-899",
        name: "Viljandi",
        parent: "EE"
    },
    {
        code: "EE-901",
        name: "Vinni",
        parent: "EE"
    },
    {
        code: "EE-903",
        name: "Viru-Nigula",
        parent: "EE"
    },
    {
        code: "EE-907",
        name: "Vormsi",
        parent: "EE"
    },
    {
        code: "EE-917",
        name: "V\xf5ru",
        parent: "EE"
    },
    {
        code: "EE-919",
        name: "V\xf5ru",
        parent: "EE"
    },
    {
        code: "EE-928",
        name: "V\xe4ike-Maarja",
        parent: "EE"
    },
    {
        code: "EG-ALX",
        name: "Al Iskandarīyah",
        parent: "EG"
    },
    {
        code: "EG-ASN",
        name: "Aswān",
        parent: "EG"
    },
    {
        code: "EG-AST",
        name: "Asyūţ",
        parent: "EG"
    },
    {
        code: "EG-BA",
        name: "Al Baḩr al Aḩmar",
        parent: "EG"
    },
    {
        code: "EG-BH",
        name: "Al Buḩayrah",
        parent: "EG"
    },
    {
        code: "EG-BNS",
        name: "Banī Suwayf",
        parent: "EG"
    },
    {
        code: "EG-C",
        name: "Al Qāhirah",
        parent: "EG"
    },
    {
        code: "EG-DK",
        name: "Ad Daqahlīyah",
        parent: "EG"
    },
    {
        code: "EG-DT",
        name: "Dumyāţ",
        parent: "EG"
    },
    {
        code: "EG-FYM",
        name: "Al Fayyūm",
        parent: "EG"
    },
    {
        code: "EG-GH",
        name: "Al Gharbīyah",
        parent: "EG"
    },
    {
        code: "EG-GZ",
        name: "Al Jīzah",
        parent: "EG"
    },
    {
        code: "EG-IS",
        name: "Al Ismā'īlīyah",
        parent: "EG"
    },
    {
        code: "EG-JS",
        name: "Janūb Sīnā'",
        parent: "EG"
    },
    {
        code: "EG-KB",
        name: "Al Qalyūbīyah",
        parent: "EG"
    },
    {
        code: "EG-KFS",
        name: "Kafr ash Shaykh",
        parent: "EG"
    },
    {
        code: "EG-KN",
        name: "Qinā",
        parent: "EG"
    },
    {
        code: "EG-LX",
        name: "Al Uqşur",
        parent: "EG"
    },
    {
        code: "EG-MN",
        name: "Al Minyā",
        parent: "EG"
    },
    {
        code: "EG-MNF",
        name: "Al Minūfīyah",
        parent: "EG"
    },
    {
        code: "EG-MT",
        name: "Maţrūḩ",
        parent: "EG"
    },
    {
        code: "EG-PTS",
        name: "Būr Sa‘īd",
        parent: "EG"
    },
    {
        code: "EG-SHG",
        name: "Sūhāj",
        parent: "EG"
    },
    {
        code: "EG-SHR",
        name: "Ash Sharqīyah",
        parent: "EG"
    },
    {
        code: "EG-SIN",
        name: "Shamāl Sīnā'",
        parent: "EG"
    },
    {
        code: "EG-SUZ",
        name: "As Suways",
        parent: "EG"
    },
    {
        code: "EG-WAD",
        name: "Al Wādī al Jadīd",
        parent: "EG"
    },
    {
        code: "ER-AN",
        name: "Ansabā",
        parent: "ER"
    },
    {
        code: "ER-DK",
        name: "Janūbī al Baḩrī al Aḩmar",
        parent: "ER"
    },
    {
        code: "ER-DU",
        name: "Al Janūbī",
        parent: "ER"
    },
    {
        code: "ER-GB",
        name: "Qāsh-Barkah",
        parent: "ER"
    },
    {
        code: "ER-MA",
        name: "Al Awsaţ",
        parent: "ER"
    },
    {
        code: "ER-SK",
        name: "Shimālī al Baḩrī al Aḩmar",
        parent: "ER"
    },
    {
        code: "ES-A",
        name: "Alicante",
        parent: "ES-VC"
    },
    {
        code: "ES-AB",
        name: "Albacete",
        parent: "ES-CM"
    },
    {
        code: "ES-AL",
        name: "Almer\xeda",
        parent: "ES-AN"
    },
    {
        code: "ES-AN",
        name: "Andaluc\xeda",
        parent: "ES"
    },
    {
        code: "ES-AR",
        name: "Arag\xf3n",
        parent: "ES"
    },
    {
        code: "ES-AS",
        name: "Asturias, Principado de",
        parent: "ES"
    },
    {
        code: "ES-AV",
        name: "\xc1vila",
        parent: "ES-CL"
    },
    {
        code: "ES-B",
        name: "Barcelona",
        parent: "ES-CT"
    },
    {
        code: "ES-BA",
        name: "Badajoz",
        parent: "ES-EX"
    },
    {
        code: "ES-BI",
        name: "Bizkaia",
        parent: "ES-PV"
    },
    {
        code: "ES-BU",
        name: "Burgos",
        parent: "ES-CL"
    },
    {
        code: "ES-C",
        name: "A Coru\xf1a",
        parent: "ES-GA"
    },
    {
        code: "ES-CA",
        name: "C\xe1diz",
        parent: "ES-AN"
    },
    {
        code: "ES-CB",
        name: "Cantabria",
        parent: "ES"
    },
    {
        code: "ES-CC",
        name: "C\xe1ceres",
        parent: "ES-EX"
    },
    {
        code: "ES-CE",
        name: "Ceuta",
        parent: "ES"
    },
    {
        code: "ES-CL",
        name: "Castilla y Le\xf3n",
        parent: "ES"
    },
    {
        code: "ES-CM",
        name: "Castilla-La Mancha",
        parent: "ES"
    },
    {
        code: "ES-CN",
        name: "Canarias",
        parent: "ES"
    },
    {
        code: "ES-CO",
        name: "C\xf3rdoba",
        parent: "ES-AN"
    },
    {
        code: "ES-CR",
        name: "Ciudad Real",
        parent: "ES-CM"
    },
    {
        code: "ES-CS",
        name: "Castell\xf3n",
        parent: "ES-VC"
    },
    {
        code: "ES-CT",
        name: "Catalunya",
        parent: "ES"
    },
    {
        code: "ES-CU",
        name: "Cuenca",
        parent: "ES-CM"
    },
    {
        code: "ES-EX",
        name: "Extremadura",
        parent: "ES"
    },
    {
        code: "ES-GA",
        name: "Galicia",
        parent: "ES"
    },
    {
        code: "ES-GC",
        name: "Las Palmas",
        parent: "ES-CN"
    },
    {
        code: "ES-GI",
        name: "Girona",
        parent: "ES-CT"
    },
    {
        code: "ES-GR",
        name: "Granada",
        parent: "ES-AN"
    },
    {
        code: "ES-GU",
        name: "Guadalajara",
        parent: "ES-CM"
    },
    {
        code: "ES-H",
        name: "Huelva",
        parent: "ES-AN"
    },
    {
        code: "ES-HU",
        name: "Huesca",
        parent: "ES-AR"
    },
    {
        code: "ES-IB",
        name: "Illes Balears",
        parent: "ES"
    },
    {
        code: "ES-J",
        name: "Ja\xe9n",
        parent: "ES-AN"
    },
    {
        code: "ES-L",
        name: "Lleida",
        parent: "ES-CT"
    },
    {
        code: "ES-LE",
        name: "Le\xf3n",
        parent: "ES-CL"
    },
    {
        code: "ES-LO",
        name: "La Rioja",
        parent: "ES-RI"
    },
    {
        code: "ES-LU",
        name: "Lugo",
        parent: "ES-GA"
    },
    {
        code: "ES-M",
        name: "Madrid",
        parent: "ES-MD"
    },
    {
        code: "ES-MA",
        name: "M\xe1laga",
        parent: "ES-AN"
    },
    {
        code: "ES-MC",
        name: "Murcia, Regi\xf3n de",
        parent: "ES"
    },
    {
        code: "ES-MD",
        name: "Madrid, Comunidad de",
        parent: "ES"
    },
    {
        code: "ES-ML",
        name: "Melilla",
        parent: "ES"
    },
    {
        code: "ES-MU",
        name: "Murcia",
        parent: "ES-MC"
    },
    {
        code: "ES-NA",
        name: "Navarra",
        parent: "ES-NC"
    },
    {
        code: "ES-NC",
        name: "Navarra, Comunidad Foral de",
        parent: "ES"
    },
    {
        code: "ES-O",
        name: "Asturias",
        parent: "ES-AS"
    },
    {
        code: "ES-OR",
        name: "Ourense",
        parent: "ES-GA"
    },
    {
        code: "ES-P",
        name: "Palencia",
        parent: "ES-CL"
    },
    {
        code: "ES-PM",
        name: "Illes Balears",
        parent: "ES-IB"
    },
    {
        code: "ES-PO",
        name: "Pontevedra",
        parent: "ES-GA"
    },
    {
        code: "ES-PV",
        name: "Pa\xeds Vasco",
        parent: "ES"
    },
    {
        code: "ES-RI",
        name: "La Rioja",
        parent: "ES"
    },
    {
        code: "ES-S",
        name: "Cantabria",
        parent: "ES-CB"
    },
    {
        code: "ES-SA",
        name: "Salamanca",
        parent: "ES-CL"
    },
    {
        code: "ES-SE",
        name: "Sevilla",
        parent: "ES-AN"
    },
    {
        code: "ES-SG",
        name: "Segovia",
        parent: "ES-CL"
    },
    {
        code: "ES-SO",
        name: "Soria",
        parent: "ES-CL"
    },
    {
        code: "ES-SS",
        name: "Gipuzkoa",
        parent: "ES-PV"
    },
    {
        code: "ES-T",
        name: "Tarragona",
        parent: "ES-CT"
    },
    {
        code: "ES-TE",
        name: "Teruel",
        parent: "ES-AR"
    },
    {
        code: "ES-TF",
        name: "Santa Cruz de Tenerife",
        parent: "ES-CN"
    },
    {
        code: "ES-TO",
        name: "Toledo",
        parent: "ES-CM"
    },
    {
        code: "ES-V",
        name: "Valencia",
        parent: "ES-VC"
    },
    {
        code: "ES-VA",
        name: "Valladolid",
        parent: "ES-CL"
    },
    {
        code: "ES-VC",
        name: "Valenciana, Comunidad",
        parent: "ES"
    },
    {
        code: "ES-VI",
        name: "\xc1lava",
        parent: "ES-PV"
    },
    {
        code: "ES-Z",
        name: "Zaragoza",
        parent: "ES-AR"
    },
    {
        code: "ES-ZA",
        name: "Zamora",
        parent: "ES-CL"
    },
    {
        code: "ET-AA",
        name: "Ādīs Ābeba",
        parent: "ET"
    },
    {
        code: "ET-AF",
        name: "Āfar",
        parent: "ET"
    },
    {
        code: "ET-AM",
        name: "Āmara",
        parent: "ET"
    },
    {
        code: "ET-BE",
        name: "Bīnshangul Gumuz",
        parent: "ET"
    },
    {
        code: "ET-DD",
        name: "Dirē Dawa",
        parent: "ET"
    },
    {
        code: "ET-GA",
        name: "Gambēla Hizboch",
        parent: "ET"
    },
    {
        code: "ET-HA",
        name: "Hārerī Hizb",
        parent: "ET"
    },
    {
        code: "ET-OR",
        name: "Oromīya",
        parent: "ET"
    },
    {
        code: "ET-SI",
        name: "Sīdama",
        parent: "ET"
    },
    {
        code: "ET-SN",
        name: "YeDebub Bihēroch Bihēreseboch na Hizboch",
        parent: "ET"
    },
    {
        code: "ET-SO",
        name: "Sumalē",
        parent: "ET"
    },
    {
        code: "ET-SW",
        name: "YeDebub M‘irab Ītyop’iya Hizboch",
        parent: "ET"
    },
    {
        code: "ET-TI",
        name: "Tigray",
        parent: "ET"
    },
    {
        code: "FI-01",
        name: "Ahvenanmaan maakunta",
        parent: "FI"
    },
    {
        code: "FI-02",
        name: "Etel\xe4-Karjala",
        parent: "FI"
    },
    {
        code: "FI-03",
        name: "Etel\xe4-Pohjanmaa",
        parent: "FI"
    },
    {
        code: "FI-04",
        name: "Etel\xe4-Savo",
        parent: "FI"
    },
    {
        code: "FI-05",
        name: "Kainuu",
        parent: "FI"
    },
    {
        code: "FI-06",
        name: "Kanta-H\xe4me",
        parent: "FI"
    },
    {
        code: "FI-07",
        name: "Keski-Pohjanmaa",
        parent: "FI"
    },
    {
        code: "FI-08",
        name: "Keski-Suomi",
        parent: "FI"
    },
    {
        code: "FI-09",
        name: "Kymenlaakso",
        parent: "FI"
    },
    {
        code: "FI-10",
        name: "Lappi",
        parent: "FI"
    },
    {
        code: "FI-11",
        name: "Pirkanmaa",
        parent: "FI"
    },
    {
        code: "FI-12",
        name: "Pohjanmaa",
        parent: "FI"
    },
    {
        code: "FI-13",
        name: "Pohjois-Karjala",
        parent: "FI"
    },
    {
        code: "FI-14",
        name: "Pohjois-Pohjanmaa",
        parent: "FI"
    },
    {
        code: "FI-15",
        name: "Pohjois-Savo",
        parent: "FI"
    },
    {
        code: "FI-16",
        name: "P\xe4ij\xe4t-H\xe4me",
        parent: "FI"
    },
    {
        code: "FI-17",
        name: "Satakunta",
        parent: "FI"
    },
    {
        code: "FI-18",
        name: "Uusimaa",
        parent: "FI"
    },
    {
        code: "FI-19",
        name: "Varsinais-Suomi",
        parent: "FI"
    },
    {
        code: "FJ-01",
        name: "Ba",
        parent: "FJ-W"
    },
    {
        code: "FJ-02",
        name: "Bua",
        parent: "FJ-N"
    },
    {
        code: "FJ-03",
        name: "Cakaudrove",
        parent: "FJ-N"
    },
    {
        code: "FJ-04",
        name: "Kadavu",
        parent: "FJ-E"
    },
    {
        code: "FJ-05",
        name: "Lau",
        parent: "FJ-E"
    },
    {
        code: "FJ-06",
        name: "Lomaiviti",
        parent: "FJ-E"
    },
    {
        code: "FJ-07",
        name: "Macuata",
        parent: "FJ-N"
    },
    {
        code: "FJ-08",
        name: "Nadroga and Navosa",
        parent: "FJ-W"
    },
    {
        code: "FJ-09",
        name: "Naitasiri",
        parent: "FJ-C"
    },
    {
        code: "FJ-10",
        name: "Namosi",
        parent: "FJ-C"
    },
    {
        code: "FJ-11",
        name: "Ra",
        parent: "FJ-W"
    },
    {
        code: "FJ-12",
        name: "Rewa",
        parent: "FJ-C"
    },
    {
        code: "FJ-13",
        name: "Serua",
        parent: "FJ-C"
    },
    {
        code: "FJ-14",
        name: "Tailevu",
        parent: "FJ-C"
    },
    {
        code: "FJ-C",
        name: "Central",
        parent: "FJ"
    },
    {
        code: "FJ-E",
        name: "Eastern",
        parent: "FJ"
    },
    {
        code: "FJ-N",
        name: "Northern",
        parent: "FJ"
    },
    {
        code: "FJ-R",
        name: "Rotuma",
        parent: "FJ"
    },
    {
        code: "FJ-W",
        name: "Western",
        parent: "FJ"
    },
    {
        code: "FM-KSA",
        name: "Kosrae",
        parent: "FM"
    },
    {
        code: "FM-PNI",
        name: "Pohnpei",
        parent: "FM"
    },
    {
        code: "FM-TRK",
        name: "Chuuk",
        parent: "FM"
    },
    {
        code: "FM-YAP",
        name: "Yap",
        parent: "FM"
    },
    {
        code: "FR-01",
        name: "Ain",
        parent: "FR-ARA"
    },
    {
        code: "FR-02",
        name: "Aisne",
        parent: "FR-HDF"
    },
    {
        code: "FR-03",
        name: "Allier",
        parent: "FR-ARA"
    },
    {
        code: "FR-04",
        name: "Alpes-de-Haute-Provence",
        parent: "FR-PAC"
    },
    {
        code: "FR-05",
        name: "Hautes-Alpes",
        parent: "FR-PAC"
    },
    {
        code: "FR-06",
        name: "Alpes-Maritimes",
        parent: "FR-PAC"
    },
    {
        code: "FR-07",
        name: "Ard\xe8che",
        parent: "FR-ARA"
    },
    {
        code: "FR-08",
        name: "Ardennes",
        parent: "FR-GES"
    },
    {
        code: "FR-09",
        name: "Ari\xe8ge",
        parent: "FR-OCC"
    },
    {
        code: "FR-10",
        name: "Aube",
        parent: "FR-GES"
    },
    {
        code: "FR-11",
        name: "Aude",
        parent: "FR-OCC"
    },
    {
        code: "FR-12",
        name: "Aveyron",
        parent: "FR-OCC"
    },
    {
        code: "FR-13",
        name: "Bouches-du-Rh\xf4ne",
        parent: "FR-PAC"
    },
    {
        code: "FR-14",
        name: "Calvados",
        parent: "FR-NOR"
    },
    {
        code: "FR-15",
        name: "Cantal",
        parent: "FR-ARA"
    },
    {
        code: "FR-16",
        name: "Charente",
        parent: "FR-NAQ"
    },
    {
        code: "FR-17",
        name: "Charente-Maritime",
        parent: "FR-NAQ"
    },
    {
        code: "FR-18",
        name: "Cher",
        parent: "FR-CVL"
    },
    {
        code: "FR-19",
        name: "Corr\xe8ze",
        parent: "FR-NAQ"
    },
    {
        code: "FR-20R",
        name: "Corse",
        parent: "FR"
    },
    {
        code: "FR-21",
        name: "C\xf4te-d'Or",
        parent: "FR-BFC"
    },
    {
        code: "FR-22",
        name: "C\xf4tes-d'Armor",
        parent: "FR-BRE"
    },
    {
        code: "FR-23",
        name: "Creuse",
        parent: "FR-NAQ"
    },
    {
        code: "FR-24",
        name: "Dordogne",
        parent: "FR-NAQ"
    },
    {
        code: "FR-25",
        name: "Doubs",
        parent: "FR-BFC"
    },
    {
        code: "FR-26",
        name: "Dr\xf4me",
        parent: "FR-ARA"
    },
    {
        code: "FR-27",
        name: "Eure",
        parent: "FR-NOR"
    },
    {
        code: "FR-28",
        name: "Eure-et-Loir",
        parent: "FR-CVL"
    },
    {
        code: "FR-29",
        name: "Finist\xe8re",
        parent: "FR-BRE"
    },
    {
        code: "FR-2A",
        name: "Corse-du-Sud",
        parent: "FR-20R"
    },
    {
        code: "FR-2B",
        name: "Haute-Corse",
        parent: "FR-20R"
    },
    {
        code: "FR-30",
        name: "Gard",
        parent: "FR-OCC"
    },
    {
        code: "FR-31",
        name: "Haute-Garonne",
        parent: "FR-OCC"
    },
    {
        code: "FR-32",
        name: "Gers",
        parent: "FR-OCC"
    },
    {
        code: "FR-33",
        name: "Gironde",
        parent: "FR-NAQ"
    },
    {
        code: "FR-34",
        name: "H\xe9rault",
        parent: "FR-OCC"
    },
    {
        code: "FR-35",
        name: "Ille-et-Vilaine",
        parent: "FR-BRE"
    },
    {
        code: "FR-36",
        name: "Indre",
        parent: "FR-CVL"
    },
    {
        code: "FR-37",
        name: "Indre-et-Loire",
        parent: "FR-CVL"
    },
    {
        code: "FR-38",
        name: "Is\xe8re",
        parent: "FR-ARA"
    },
    {
        code: "FR-39",
        name: "Jura",
        parent: "FR-BFC"
    },
    {
        code: "FR-40",
        name: "Landes",
        parent: "FR-NAQ"
    },
    {
        code: "FR-41",
        name: "Loir-et-Cher",
        parent: "FR-CVL"
    },
    {
        code: "FR-42",
        name: "Loire",
        parent: "FR-ARA"
    },
    {
        code: "FR-43",
        name: "Haute-Loire",
        parent: "FR-ARA"
    },
    {
        code: "FR-44",
        name: "Loire-Atlantique",
        parent: "FR-PDL"
    },
    {
        code: "FR-45",
        name: "Loiret",
        parent: "FR-CVL"
    },
    {
        code: "FR-46",
        name: "Lot",
        parent: "FR-OCC"
    },
    {
        code: "FR-47",
        name: "Lot-et-Garonne",
        parent: "FR-NAQ"
    },
    {
        code: "FR-48",
        name: "Loz\xe8re",
        parent: "FR-OCC"
    },
    {
        code: "FR-49",
        name: "Maine-et-Loire",
        parent: "FR-PDL"
    },
    {
        code: "FR-50",
        name: "Manche",
        parent: "FR-NOR"
    },
    {
        code: "FR-51",
        name: "Marne",
        parent: "FR-GES"
    },
    {
        code: "FR-52",
        name: "Haute-Marne",
        parent: "FR-GES"
    },
    {
        code: "FR-53",
        name: "Mayenne",
        parent: "FR-PDL"
    },
    {
        code: "FR-54",
        name: "Meurthe-et-Moselle",
        parent: "FR-GES"
    },
    {
        code: "FR-55",
        name: "Meuse",
        parent: "FR-GES"
    },
    {
        code: "FR-56",
        name: "Morbihan",
        parent: "FR-BRE"
    },
    {
        code: "FR-57",
        name: "Moselle",
        parent: "FR-GES"
    },
    {
        code: "FR-58",
        name: "Ni\xe8vre",
        parent: "FR-BFC"
    },
    {
        code: "FR-59",
        name: "Nord",
        parent: "FR-HDF"
    },
    {
        code: "FR-60",
        name: "Oise",
        parent: "FR-HDF"
    },
    {
        code: "FR-61",
        name: "Orne",
        parent: "FR-NOR"
    },
    {
        code: "FR-62",
        name: "Pas-de-Calais",
        parent: "FR-HDF"
    },
    {
        code: "FR-63",
        name: "Puy-de-D\xf4me",
        parent: "FR-ARA"
    },
    {
        code: "FR-64",
        name: "Pyr\xe9n\xe9es-Atlantiques",
        parent: "FR-NAQ"
    },
    {
        code: "FR-65",
        name: "Hautes-Pyr\xe9n\xe9es",
        parent: "FR-OCC"
    },
    {
        code: "FR-66",
        name: "Pyr\xe9n\xe9es-Orientales",
        parent: "FR-OCC"
    },
    {
        code: "FR-67",
        name: "Bas-Rhin",
        parent: "FR-6AE"
    },
    {
        code: "FR-68",
        name: "Haut-Rhin",
        parent: "FR-6AE"
    },
    {
        code: "FR-69",
        name: "Rh\xf4ne",
        parent: "FR-ARA"
    },
    {
        code: "FR-69M",
        name: "M\xe9tropole de Lyon",
        parent: "FR-ARA"
    },
    {
        code: "FR-6AE",
        name: "Alsace",
        parent: "FR-GES"
    },
    {
        code: "FR-70",
        name: "Haute-Sa\xf4ne",
        parent: "FR-BFC"
    },
    {
        code: "FR-71",
        name: "Sa\xf4ne-et-Loire",
        parent: "FR-BFC"
    },
    {
        code: "FR-72",
        name: "Sarthe",
        parent: "FR-PDL"
    },
    {
        code: "FR-73",
        name: "Savoie",
        parent: "FR-ARA"
    },
    {
        code: "FR-74",
        name: "Haute-Savoie",
        parent: "FR-ARA"
    },
    {
        code: "FR-75C",
        name: "Paris",
        parent: "FR-IDF"
    },
    {
        code: "FR-76",
        name: "Seine-Maritime",
        parent: "FR-NOR"
    },
    {
        code: "FR-77",
        name: "Seine-et-Marne",
        parent: "FR-IDF"
    },
    {
        code: "FR-78",
        name: "Yvelines",
        parent: "FR-IDF"
    },
    {
        code: "FR-79",
        name: "Deux-S\xe8vres",
        parent: "FR-NAQ"
    },
    {
        code: "FR-80",
        name: "Somme",
        parent: "FR-HDF"
    },
    {
        code: "FR-81",
        name: "Tarn",
        parent: "FR-OCC"
    },
    {
        code: "FR-82",
        name: "Tarn-et-Garonne",
        parent: "FR-OCC"
    },
    {
        code: "FR-83",
        name: "Var",
        parent: "FR-PAC"
    },
    {
        code: "FR-84",
        name: "Vaucluse",
        parent: "FR-PAC"
    },
    {
        code: "FR-85",
        name: "Vend\xe9e",
        parent: "FR-PDL"
    },
    {
        code: "FR-86",
        name: "Vienne",
        parent: "FR-NAQ"
    },
    {
        code: "FR-87",
        name: "Haute-Vienne",
        parent: "FR-NAQ"
    },
    {
        code: "FR-88",
        name: "Vosges",
        parent: "FR-GES"
    },
    {
        code: "FR-89",
        name: "Yonne",
        parent: "FR-BFC"
    },
    {
        code: "FR-90",
        name: "Territoire de Belfort",
        parent: "FR-BFC"
    },
    {
        code: "FR-91",
        name: "Essonne",
        parent: "FR-IDF"
    },
    {
        code: "FR-92",
        name: "Hauts-de-Seine",
        parent: "FR-IDF"
    },
    {
        code: "FR-93",
        name: "Seine-Saint-Denis",
        parent: "FR-IDF"
    },
    {
        code: "FR-94",
        name: "Val-de-Marne",
        parent: "FR-IDF"
    },
    {
        code: "FR-95",
        name: "Val-d'Oise",
        parent: "FR-IDF"
    },
    {
        code: "FR-971",
        name: "Guadeloupe",
        parent: "FR"
    },
    {
        code: "FR-972",
        name: "Martinique",
        parent: "FR"
    },
    {
        code: "FR-973",
        name: "Guyane (fran\xe7aise)",
        parent: "FR"
    },
    {
        code: "FR-974",
        name: "La R\xe9union",
        parent: "FR"
    },
    {
        code: "FR-976",
        name: "Mayotte",
        parent: "FR"
    },
    {
        code: "FR-ARA",
        name: "Auvergne-Rh\xf4ne-Alpes",
        parent: "FR"
    },
    {
        code: "FR-BFC",
        name: "Bourgogne-Franche-Comt\xe9",
        parent: "FR"
    },
    {
        code: "FR-BL",
        name: "Saint-Barth\xe9lemy",
        parent: "FR"
    },
    {
        code: "FR-BRE",
        name: "Bretagne",
        parent: "FR"
    },
    {
        code: "FR-CP",
        name: "Clipperton",
        parent: "FR"
    },
    {
        code: "FR-CVL",
        name: "Centre-Val de Loire",
        parent: "FR"
    },
    {
        code: "FR-GES",
        name: "Grand-Est",
        parent: "FR"
    },
    {
        code: "FR-HDF",
        name: "Hauts-de-France",
        parent: "FR"
    },
    {
        code: "FR-IDF",
        name: "\xcele-de-France",
        parent: "FR"
    },
    {
        code: "FR-MF",
        name: "Saint-Martin",
        parent: "FR"
    },
    {
        code: "FR-NAQ",
        name: "Nouvelle-Aquitaine",
        parent: "FR"
    },
    {
        code: "FR-NC",
        name: "Nouvelle-Cal\xe9donie",
        parent: "FR"
    },
    {
        code: "FR-NOR",
        name: "Normandie",
        parent: "FR"
    },
    {
        code: "FR-OCC",
        name: "Occitanie",
        parent: "FR"
    },
    {
        code: "FR-PAC",
        name: "Provence-Alpes-C\xf4te-d’Azur",
        parent: "FR"
    },
    {
        code: "FR-PDL",
        name: "Pays-de-la-Loire",
        parent: "FR"
    },
    {
        code: "FR-PF",
        name: "Polyn\xe9sie fran\xe7aise",
        parent: "FR"
    },
    {
        code: "FR-PM",
        name: "Saint-Pierre-et-Miquelon",
        parent: "FR"
    },
    {
        code: "FR-TF",
        name: "Terres australes fran\xe7aises",
        parent: "FR"
    },
    {
        code: "FR-WF",
        name: "Wallis-et-Futuna",
        parent: "FR"
    },
    {
        code: "GA-1",
        name: "Estuaire",
        parent: "GA"
    },
    {
        code: "GA-2",
        name: "Haut-Ogoou\xe9",
        parent: "GA"
    },
    {
        code: "GA-3",
        name: "Moyen-Ogoou\xe9",
        parent: "GA"
    },
    {
        code: "GA-4",
        name: "Ngouni\xe9",
        parent: "GA"
    },
    {
        code: "GA-5",
        name: "Nyanga",
        parent: "GA"
    },
    {
        code: "GA-6",
        name: "Ogoou\xe9-Ivindo",
        parent: "GA"
    },
    {
        code: "GA-7",
        name: "Ogoou\xe9-Lolo",
        parent: "GA"
    },
    {
        code: "GA-8",
        name: "Ogoou\xe9-Maritime",
        parent: "GA"
    },
    {
        code: "GA-9",
        name: "Woleu-Ntem",
        parent: "GA"
    },
    {
        code: "GB-ABC",
        name: "Armagh City, Banbridge and Craigavon",
        parent: "GB-NIR"
    },
    {
        code: "GB-ABD",
        name: "Aberdeenshire",
        parent: "GB-SCT"
    },
    {
        code: "GB-ABE",
        name: "Aberdeen City",
        parent: "GB-SCT"
    },
    {
        code: "GB-AGB",
        name: "Argyll and Bute",
        parent: "GB-SCT"
    },
    {
        code: "GB-AGY",
        name: "Isle of Anglesey",
        parent: "GB-WLS"
    },
    {
        code: "GB-AND",
        name: "Ards and North Down",
        parent: "GB-NIR"
    },
    {
        code: "GB-ANN",
        name: "Antrim and Newtownabbey",
        parent: "GB-NIR"
    },
    {
        code: "GB-ANS",
        name: "Angus",
        parent: "GB-SCT"
    },
    {
        code: "GB-BAS",
        name: "Bath and North East Somerset",
        parent: "GB-ENG"
    },
    {
        code: "GB-BBD",
        name: "Blackburn with Darwen",
        parent: "GB-ENG"
    },
    {
        code: "GB-BCP",
        name: "Bournemouth, Christchurch and Poole",
        parent: "GB-ENG"
    },
    {
        code: "GB-BDF",
        name: "Bedford",
        parent: "GB-ENG"
    },
    {
        code: "GB-BDG",
        name: "Barking and Dagenham",
        parent: "GB-ENG"
    },
    {
        code: "GB-BEN",
        name: "Brent",
        parent: "GB-ENG"
    },
    {
        code: "GB-BEX",
        name: "Bexley",
        parent: "GB-ENG"
    },
    {
        code: "GB-BFS",
        name: "Belfast City",
        parent: "GB-NIR"
    },
    {
        code: "GB-BGE",
        name: "Bridgend",
        parent: "GB-WLS"
    },
    {
        code: "GB-BGW",
        name: "Blaenau Gwent",
        parent: "GB-WLS"
    },
    {
        code: "GB-BIR",
        name: "Birmingham",
        parent: "GB-ENG"
    },
    {
        code: "GB-BKM",
        name: "Buckinghamshire",
        parent: "GB-ENG"
    },
    {
        code: "GB-BNE",
        name: "Barnet",
        parent: "GB-ENG"
    },
    {
        code: "GB-BNH",
        name: "Brighton and Hove",
        parent: "GB-ENG"
    },
    {
        code: "GB-BNS",
        name: "Barnsley",
        parent: "GB-ENG"
    },
    {
        code: "GB-BOL",
        name: "Bolton",
        parent: "GB-ENG"
    },
    {
        code: "GB-BPL",
        name: "Blackpool",
        parent: "GB-ENG"
    },
    {
        code: "GB-BRC",
        name: "Bracknell Forest",
        parent: "GB-ENG"
    },
    {
        code: "GB-BRD",
        name: "Bradford",
        parent: "GB-ENG"
    },
    {
        code: "GB-BRY",
        name: "Bromley",
        parent: "GB-ENG"
    },
    {
        code: "GB-BST",
        name: "Bristol, City of",
        parent: "GB-ENG"
    },
    {
        code: "GB-BUR",
        name: "Bury",
        parent: "GB-ENG"
    },
    {
        code: "GB-CAM",
        name: "Cambridgeshire",
        parent: "GB-ENG"
    },
    {
        code: "GB-CAY",
        name: "Caerphilly",
        parent: "GB-WLS"
    },
    {
        code: "GB-CBF",
        name: "Central Bedfordshire",
        parent: "GB-ENG"
    },
    {
        code: "GB-CCG",
        name: "Causeway Coast and Glens",
        parent: "GB-NIR"
    },
    {
        code: "GB-CGN",
        name: "Ceredigion",
        parent: "GB-WLS"
    },
    {
        code: "GB-CHE",
        name: "Cheshire East",
        parent: "GB-ENG"
    },
    {
        code: "GB-CHW",
        name: "Cheshire West and Chester",
        parent: "GB-ENG"
    },
    {
        code: "GB-CLD",
        name: "Calderdale",
        parent: "GB-ENG"
    },
    {
        code: "GB-CLK",
        name: "Clackmannanshire",
        parent: "GB-SCT"
    },
    {
        code: "GB-CMA",
        name: "Cumbria",
        parent: "GB-ENG"
    },
    {
        code: "GB-CMD",
        name: "Camden",
        parent: "GB-ENG"
    },
    {
        code: "GB-CMN",
        name: "Carmarthenshire",
        parent: "GB-WLS"
    },
    {
        code: "GB-CON",
        name: "Cornwall",
        parent: "GB-ENG"
    },
    {
        code: "GB-COV",
        name: "Coventry",
        parent: "GB-ENG"
    },
    {
        code: "GB-CRF",
        name: "Cardiff",
        parent: "GB-WLS"
    },
    {
        code: "GB-CRY",
        name: "Croydon",
        parent: "GB-ENG"
    },
    {
        code: "GB-CWY",
        name: "Conwy",
        parent: "GB-WLS"
    },
    {
        code: "GB-DAL",
        name: "Darlington",
        parent: "GB-ENG"
    },
    {
        code: "GB-DBY",
        name: "Derbyshire",
        parent: "GB-ENG"
    },
    {
        code: "GB-DEN",
        name: "Denbighshire",
        parent: "GB-WLS"
    },
    {
        code: "GB-DER",
        name: "Derby",
        parent: "GB-ENG"
    },
    {
        code: "GB-DEV",
        name: "Devon",
        parent: "GB-ENG"
    },
    {
        code: "GB-DGY",
        name: "Dumfries and Galloway",
        parent: "GB-SCT"
    },
    {
        code: "GB-DNC",
        name: "Doncaster",
        parent: "GB-ENG"
    },
    {
        code: "GB-DND",
        name: "Dundee City",
        parent: "GB-SCT"
    },
    {
        code: "GB-DOR",
        name: "Dorset",
        parent: "GB-ENG"
    },
    {
        code: "GB-DRS",
        name: "Derry and Strabane",
        parent: "GB-NIR"
    },
    {
        code: "GB-DUD",
        name: "Dudley",
        parent: "GB-ENG"
    },
    {
        code: "GB-DUR",
        name: "Durham, County",
        parent: "GB-ENG"
    },
    {
        code: "GB-EAL",
        name: "Ealing",
        parent: "GB-ENG"
    },
    {
        code: "GB-EAW",
        name: "England and Wales",
        parent: "GB"
    },
    {
        code: "GB-EAY",
        name: "East Ayrshire",
        parent: "GB-SCT"
    },
    {
        code: "GB-EDH",
        name: "Edinburgh, City of",
        parent: "GB-SCT"
    },
    {
        code: "GB-EDU",
        name: "East Dunbartonshire",
        parent: "GB-SCT"
    },
    {
        code: "GB-ELN",
        name: "East Lothian",
        parent: "GB-SCT"
    },
    {
        code: "GB-ELS",
        name: "Eilean Siar",
        parent: "GB-SCT"
    },
    {
        code: "GB-ENF",
        name: "Enfield",
        parent: "GB-ENG"
    },
    {
        code: "GB-ENG",
        name: "England",
        parent: "GB"
    },
    {
        code: "GB-ERW",
        name: "East Renfrewshire",
        parent: "GB-SCT"
    },
    {
        code: "GB-ERY",
        name: "East Riding of Yorkshire",
        parent: "GB-ENG"
    },
    {
        code: "GB-ESS",
        name: "Essex",
        parent: "GB-ENG"
    },
    {
        code: "GB-ESX",
        name: "East Sussex",
        parent: "GB-ENG"
    },
    {
        code: "GB-FAL",
        name: "Falkirk",
        parent: "GB-SCT"
    },
    {
        code: "GB-FIF",
        name: "Fife",
        parent: "GB-SCT"
    },
    {
        code: "GB-FLN",
        name: "Flintshire",
        parent: "GB-WLS"
    },
    {
        code: "GB-FMO",
        name: "Fermanagh and Omagh",
        parent: "GB-NIR"
    },
    {
        code: "GB-GAT",
        name: "Gateshead",
        parent: "GB-ENG"
    },
    {
        code: "GB-GBN",
        name: "Great Britain",
        parent: "GB"
    },
    {
        code: "GB-GLG",
        name: "Glasgow City",
        parent: "GB-SCT"
    },
    {
        code: "GB-GLS",
        name: "Gloucestershire",
        parent: "GB-ENG"
    },
    {
        code: "GB-GRE",
        name: "Greenwich",
        parent: "GB-ENG"
    },
    {
        code: "GB-GWN",
        name: "Gwynedd",
        parent: "GB-WLS"
    },
    {
        code: "GB-HAL",
        name: "Halton",
        parent: "GB-ENG"
    },
    {
        code: "GB-HAM",
        name: "Hampshire",
        parent: "GB-ENG"
    },
    {
        code: "GB-HAV",
        name: "Havering",
        parent: "GB-ENG"
    },
    {
        code: "GB-HCK",
        name: "Hackney",
        parent: "GB-ENG"
    },
    {
        code: "GB-HEF",
        name: "Herefordshire",
        parent: "GB-ENG"
    },
    {
        code: "GB-HIL",
        name: "Hillingdon",
        parent: "GB-ENG"
    },
    {
        code: "GB-HLD",
        name: "Highland",
        parent: "GB-SCT"
    },
    {
        code: "GB-HMF",
        name: "Hammersmith and Fulham",
        parent: "GB-ENG"
    },
    {
        code: "GB-HNS",
        name: "Hounslow",
        parent: "GB-ENG"
    },
    {
        code: "GB-HPL",
        name: "Hartlepool",
        parent: "GB-ENG"
    },
    {
        code: "GB-HRT",
        name: "Hertfordshire",
        parent: "GB-ENG"
    },
    {
        code: "GB-HRW",
        name: "Harrow",
        parent: "GB-ENG"
    },
    {
        code: "GB-HRY",
        name: "Haringey",
        parent: "GB-ENG"
    },
    {
        code: "GB-IOS",
        name: "Isles of Scilly",
        parent: "GB-ENG"
    },
    {
        code: "GB-IOW",
        name: "Isle of Wight",
        parent: "GB-ENG"
    },
    {
        code: "GB-ISL",
        name: "Islington",
        parent: "GB-ENG"
    },
    {
        code: "GB-IVC",
        name: "Inverclyde",
        parent: "GB-SCT"
    },
    {
        code: "GB-KEC",
        name: "Kensington and Chelsea",
        parent: "GB-ENG"
    },
    {
        code: "GB-KEN",
        name: "Kent",
        parent: "GB-ENG"
    },
    {
        code: "GB-KHL",
        name: "Kingston upon Hull",
        parent: "GB-ENG"
    },
    {
        code: "GB-KIR",
        name: "Kirklees",
        parent: "GB-ENG"
    },
    {
        code: "GB-KTT",
        name: "Kingston upon Thames",
        parent: "GB-ENG"
    },
    {
        code: "GB-KWL",
        name: "Knowsley",
        parent: "GB-ENG"
    },
    {
        code: "GB-LAN",
        name: "Lancashire",
        parent: "GB-ENG"
    },
    {
        code: "GB-LBC",
        name: "Lisburn and Castlereagh",
        parent: "GB-NIR"
    },
    {
        code: "GB-LBH",
        name: "Lambeth",
        parent: "GB-ENG"
    },
    {
        code: "GB-LCE",
        name: "Leicester",
        parent: "GB-ENG"
    },
    {
        code: "GB-LDS",
        name: "Leeds",
        parent: "GB-ENG"
    },
    {
        code: "GB-LEC",
        name: "Leicestershire",
        parent: "GB-ENG"
    },
    {
        code: "GB-LEW",
        name: "Lewisham",
        parent: "GB-ENG"
    },
    {
        code: "GB-LIN",
        name: "Lincolnshire",
        parent: "GB-ENG"
    },
    {
        code: "GB-LIV",
        name: "Liverpool",
        parent: "GB-ENG"
    },
    {
        code: "GB-LND",
        name: "London, City of",
        parent: "GB-ENG"
    },
    {
        code: "GB-LUT",
        name: "Luton",
        parent: "GB-ENG"
    },
    {
        code: "GB-MAN",
        name: "Manchester",
        parent: "GB-ENG"
    },
    {
        code: "GB-MDB",
        name: "Middlesbrough",
        parent: "GB-ENG"
    },
    {
        code: "GB-MDW",
        name: "Medway",
        parent: "GB-ENG"
    },
    {
        code: "GB-MEA",
        name: "Mid and East Antrim",
        parent: "GB-NIR"
    },
    {
        code: "GB-MIK",
        name: "Milton Keynes",
        parent: "GB-ENG"
    },
    {
        code: "GB-MLN",
        name: "Midlothian",
        parent: "GB-SCT"
    },
    {
        code: "GB-MON",
        name: "Monmouthshire",
        parent: "GB-WLS"
    },
    {
        code: "GB-MRT",
        name: "Merton",
        parent: "GB-ENG"
    },
    {
        code: "GB-MRY",
        name: "Moray",
        parent: "GB-SCT"
    },
    {
        code: "GB-MTY",
        name: "Merthyr Tydfil",
        parent: "GB-WLS"
    },
    {
        code: "GB-MUL",
        name: "Mid-Ulster",
        parent: "GB-NIR"
    },
    {
        code: "GB-NAY",
        name: "North Ayrshire",
        parent: "GB-SCT"
    },
    {
        code: "GB-NBL",
        name: "Northumberland",
        parent: "GB-ENG"
    },
    {
        code: "GB-NEL",
        name: "North East Lincolnshire",
        parent: "GB-ENG"
    },
    {
        code: "GB-NET",
        name: "Newcastle upon Tyne",
        parent: "GB-ENG"
    },
    {
        code: "GB-NFK",
        name: "Norfolk",
        parent: "GB-ENG"
    },
    {
        code: "GB-NGM",
        name: "Nottingham",
        parent: "GB-ENG"
    },
    {
        code: "GB-NIR",
        name: "Northern Ireland",
        parent: "GB"
    },
    {
        code: "GB-NLK",
        name: "North Lanarkshire",
        parent: "GB-SCT"
    },
    {
        code: "GB-NLN",
        name: "North Lincolnshire",
        parent: "GB-ENG"
    },
    {
        code: "GB-NMD",
        name: "Newry, Mourne and Down",
        parent: "GB-NIR"
    },
    {
        code: "GB-NNH",
        name: "North Northamptonshire",
        parent: "GB-ENG"
    },
    {
        code: "GB-NSM",
        name: "North Somerset",
        parent: "GB-ENG"
    },
    {
        code: "GB-NTL",
        name: "Neath Port Talbot",
        parent: "GB-WLS"
    },
    {
        code: "GB-NTT",
        name: "Nottinghamshire",
        parent: "GB-ENG"
    },
    {
        code: "GB-NTY",
        name: "North Tyneside",
        parent: "GB-ENG"
    },
    {
        code: "GB-NWM",
        name: "Newham",
        parent: "GB-ENG"
    },
    {
        code: "GB-NWP",
        name: "Newport",
        parent: "GB-WLS"
    },
    {
        code: "GB-NYK",
        name: "North Yorkshire",
        parent: "GB-ENG"
    },
    {
        code: "GB-OLD",
        name: "Oldham",
        parent: "GB-ENG"
    },
    {
        code: "GB-ORK",
        name: "Orkney Islands",
        parent: "GB-SCT"
    },
    {
        code: "GB-OXF",
        name: "Oxfordshire",
        parent: "GB-ENG"
    },
    {
        code: "GB-PEM",
        name: "Pembrokeshire",
        parent: "GB-WLS"
    },
    {
        code: "GB-PKN",
        name: "Perth and Kinross",
        parent: "GB-SCT"
    },
    {
        code: "GB-PLY",
        name: "Plymouth",
        parent: "GB-ENG"
    },
    {
        code: "GB-POR",
        name: "Portsmouth",
        parent: "GB-ENG"
    },
    {
        code: "GB-POW",
        name: "Powys",
        parent: "GB-WLS"
    },
    {
        code: "GB-PTE",
        name: "Peterborough",
        parent: "GB-ENG"
    },
    {
        code: "GB-RCC",
        name: "Redcar and Cleveland",
        parent: "GB-ENG"
    },
    {
        code: "GB-RCH",
        name: "Rochdale",
        parent: "GB-ENG"
    },
    {
        code: "GB-RCT",
        name: "Rhondda Cynon Taff",
        parent: "GB-WLS"
    },
    {
        code: "GB-RDB",
        name: "Redbridge",
        parent: "GB-ENG"
    },
    {
        code: "GB-RDG",
        name: "Reading",
        parent: "GB-ENG"
    },
    {
        code: "GB-RFW",
        name: "Renfrewshire",
        parent: "GB-SCT"
    },
    {
        code: "GB-RIC",
        name: "Richmond upon Thames",
        parent: "GB-ENG"
    },
    {
        code: "GB-ROT",
        name: "Rotherham",
        parent: "GB-ENG"
    },
    {
        code: "GB-RUT",
        name: "Rutland",
        parent: "GB-ENG"
    },
    {
        code: "GB-SAW",
        name: "Sandwell",
        parent: "GB-ENG"
    },
    {
        code: "GB-SAY",
        name: "South Ayrshire",
        parent: "GB-SCT"
    },
    {
        code: "GB-SCB",
        name: "Scottish Borders",
        parent: "GB-SCT"
    },
    {
        code: "GB-SCT",
        name: "Scotland",
        parent: "GB"
    },
    {
        code: "GB-SFK",
        name: "Suffolk",
        parent: "GB-ENG"
    },
    {
        code: "GB-SFT",
        name: "Sefton",
        parent: "GB-ENG"
    },
    {
        code: "GB-SGC",
        name: "South Gloucestershire",
        parent: "GB-ENG"
    },
    {
        code: "GB-SHF",
        name: "Sheffield",
        parent: "GB-ENG"
    },
    {
        code: "GB-SHN",
        name: "St. Helens",
        parent: "GB-ENG"
    },
    {
        code: "GB-SHR",
        name: "Shropshire",
        parent: "GB-ENG"
    },
    {
        code: "GB-SKP",
        name: "Stockport",
        parent: "GB-ENG"
    },
    {
        code: "GB-SLF",
        name: "Salford",
        parent: "GB-ENG"
    },
    {
        code: "GB-SLG",
        name: "Slough",
        parent: "GB-ENG"
    },
    {
        code: "GB-SLK",
        name: "South Lanarkshire",
        parent: "GB-SCT"
    },
    {
        code: "GB-SND",
        name: "Sunderland",
        parent: "GB-ENG"
    },
    {
        code: "GB-SOL",
        name: "Solihull",
        parent: "GB-ENG"
    },
    {
        code: "GB-SOM",
        name: "Somerset",
        parent: "GB-ENG"
    },
    {
        code: "GB-SOS",
        name: "Southend-on-Sea",
        parent: "GB-ENG"
    },
    {
        code: "GB-SRY",
        name: "Surrey",
        parent: "GB-ENG"
    },
    {
        code: "GB-STE",
        name: "Stoke-on-Trent",
        parent: "GB-ENG"
    },
    {
        code: "GB-STG",
        name: "Stirling",
        parent: "GB-SCT"
    },
    {
        code: "GB-STH",
        name: "Southampton",
        parent: "GB-ENG"
    },
    {
        code: "GB-STN",
        name: "Sutton",
        parent: "GB-ENG"
    },
    {
        code: "GB-STS",
        name: "Staffordshire",
        parent: "GB-ENG"
    },
    {
        code: "GB-STT",
        name: "Stockton-on-Tees",
        parent: "GB-ENG"
    },
    {
        code: "GB-STY",
        name: "South Tyneside",
        parent: "GB-ENG"
    },
    {
        code: "GB-SWA",
        name: "Swansea",
        parent: "GB-WLS"
    },
    {
        code: "GB-SWD",
        name: "Swindon",
        parent: "GB-ENG"
    },
    {
        code: "GB-SWK",
        name: "Southwark",
        parent: "GB-ENG"
    },
    {
        code: "GB-TAM",
        name: "Tameside",
        parent: "GB-ENG"
    },
    {
        code: "GB-TFW",
        name: "Telford and Wrekin",
        parent: "GB-ENG"
    },
    {
        code: "GB-THR",
        name: "Thurrock",
        parent: "GB-ENG"
    },
    {
        code: "GB-TOB",
        name: "Torbay",
        parent: "GB-ENG"
    },
    {
        code: "GB-TOF",
        name: "Torfaen",
        parent: "GB-WLS"
    },
    {
        code: "GB-TRF",
        name: "Trafford",
        parent: "GB-ENG"
    },
    {
        code: "GB-TWH",
        name: "Tower Hamlets",
        parent: "GB-ENG"
    },
    {
        code: "GB-UKM",
        name: "United Kingdom",
        parent: "GB"
    },
    {
        code: "GB-VGL",
        name: "Vale of Glamorgan, The",
        parent: "GB-WLS"
    },
    {
        code: "GB-WAR",
        name: "Warwickshire",
        parent: "GB-ENG"
    },
    {
        code: "GB-WBK",
        name: "West Berkshire",
        parent: "GB-ENG"
    },
    {
        code: "GB-WDU",
        name: "West Dunbartonshire",
        parent: "GB-SCT"
    },
    {
        code: "GB-WFT",
        name: "Waltham Forest",
        parent: "GB-ENG"
    },
    {
        code: "GB-WGN",
        name: "Wigan",
        parent: "GB-ENG"
    },
    {
        code: "GB-WIL",
        name: "Wiltshire",
        parent: "GB-ENG"
    },
    {
        code: "GB-WKF",
        name: "Wakefield",
        parent: "GB-ENG"
    },
    {
        code: "GB-WLL",
        name: "Walsall",
        parent: "GB-ENG"
    },
    {
        code: "GB-WLN",
        name: "West Lothian",
        parent: "GB-SCT"
    },
    {
        code: "GB-WLS",
        name: "Wales",
        parent: "GB"
    },
    {
        code: "GB-WLV",
        name: "Wolverhampton",
        parent: "GB-ENG"
    },
    {
        code: "GB-WND",
        name: "Wandsworth",
        parent: "GB-ENG"
    },
    {
        code: "GB-WNH",
        name: "West Northamptonshire",
        parent: "GB-ENG"
    },
    {
        code: "GB-WNM",
        name: "Windsor and Maidenhead",
        parent: "GB-ENG"
    },
    {
        code: "GB-WOK",
        name: "Wokingham",
        parent: "GB-ENG"
    },
    {
        code: "GB-WOR",
        name: "Worcestershire",
        parent: "GB-ENG"
    },
    {
        code: "GB-WRL",
        name: "Wirral",
        parent: "GB-ENG"
    },
    {
        code: "GB-WRT",
        name: "Warrington",
        parent: "GB-ENG"
    },
    {
        code: "GB-WRX",
        name: "Wrexham",
        parent: "GB-WLS"
    },
    {
        code: "GB-WSM",
        name: "Westminster",
        parent: "GB-ENG"
    },
    {
        code: "GB-WSX",
        name: "West Sussex",
        parent: "GB-ENG"
    },
    {
        code: "GB-YOR",
        name: "York",
        parent: "GB-ENG"
    },
    {
        code: "GB-ZET",
        name: "Shetland Islands",
        parent: "GB-SCT"
    },
    {
        code: "GD-01",
        name: "Saint Andrew",
        parent: "GD"
    },
    {
        code: "GD-02",
        name: "Saint David",
        parent: "GD"
    },
    {
        code: "GD-03",
        name: "Saint George",
        parent: "GD"
    },
    {
        code: "GD-04",
        name: "Saint John",
        parent: "GD"
    },
    {
        code: "GD-05",
        name: "Saint Mark",
        parent: "GD"
    },
    {
        code: "GD-06",
        name: "Saint Patrick",
        parent: "GD"
    },
    {
        code: "GD-10",
        name: "Southern Grenadine Islands",
        parent: "GD"
    },
    {
        code: "GE-AB",
        name: "Abkhazia",
        parent: "GE"
    },
    {
        code: "GE-AJ",
        name: "Ajaria",
        parent: "GE"
    },
    {
        code: "GE-GU",
        name: "Guria",
        parent: "GE"
    },
    {
        code: "GE-IM",
        name: "Imereti",
        parent: "GE"
    },
    {
        code: "GE-KA",
        name: "K'akheti",
        parent: "GE"
    },
    {
        code: "GE-KK",
        name: "Kvemo Kartli",
        parent: "GE"
    },
    {
        code: "GE-MM",
        name: "Mtskheta-Mtianeti",
        parent: "GE"
    },
    {
        code: "GE-RL",
        name: "Rach'a-Lechkhumi-Kvemo Svaneti",
        parent: "GE"
    },
    {
        code: "GE-SJ",
        name: "Samtskhe-Javakheti",
        parent: "GE"
    },
    {
        code: "GE-SK",
        name: "Shida Kartli",
        parent: "GE"
    },
    {
        code: "GE-SZ",
        name: "Samegrelo-Zemo Svaneti",
        parent: "GE"
    },
    {
        code: "GE-TB",
        name: "Tbilisi",
        parent: "GE"
    },
    {
        code: "GH-AA",
        name: "Greater Accra",
        parent: "GH"
    },
    {
        code: "GH-AF",
        name: "Ahafo",
        parent: "GH"
    },
    {
        code: "GH-AH",
        name: "Ashanti",
        parent: "GH"
    },
    {
        code: "GH-BA",
        name: "Brong-Ahafo",
        parent: "GH"
    },
    {
        code: "GH-BE",
        name: "Bono East",
        parent: "GH"
    },
    {
        code: "GH-BO",
        name: "Bono",
        parent: "GH"
    },
    {
        code: "GH-CP",
        name: "Central",
        parent: "GH"
    },
    {
        code: "GH-EP",
        name: "Eastern",
        parent: "GH"
    },
    {
        code: "GH-NE",
        name: "North East",
        parent: "GH"
    },
    {
        code: "GH-NP",
        name: "Northern",
        parent: "GH"
    },
    {
        code: "GH-OT",
        name: "Oti",
        parent: "GH"
    },
    {
        code: "GH-SV",
        name: "Savannah",
        parent: "GH"
    },
    {
        code: "GH-TV",
        name: "Volta",
        parent: "GH"
    },
    {
        code: "GH-UE",
        name: "Upper East",
        parent: "GH"
    },
    {
        code: "GH-UW",
        name: "Upper West",
        parent: "GH"
    },
    {
        code: "GH-WN",
        name: "Western North",
        parent: "GH"
    },
    {
        code: "GH-WP",
        name: "Western",
        parent: "GH"
    },
    {
        code: "GL-AV",
        name: "Avannaata Kommunia",
        parent: "GL"
    },
    {
        code: "GL-KU",
        name: "Kommune Kujalleq",
        parent: "GL"
    },
    {
        code: "GL-QE",
        name: "Qeqqata Kommunia",
        parent: "GL"
    },
    {
        code: "GL-QT",
        name: "Kommune Qeqertalik",
        parent: "GL"
    },
    {
        code: "GL-SM",
        name: "Kommuneqarfik Sermersooq",
        parent: "GL"
    },
    {
        code: "GM-B",
        name: "Banjul",
        parent: "GM"
    },
    {
        code: "GM-L",
        name: "Lower River",
        parent: "GM"
    },
    {
        code: "GM-M",
        name: "Central River",
        parent: "GM"
    },
    {
        code: "GM-N",
        name: "North Bank",
        parent: "GM"
    },
    {
        code: "GM-U",
        name: "Upper River",
        parent: "GM"
    },
    {
        code: "GM-W",
        name: "Western",
        parent: "GM"
    },
    {
        code: "GN-B",
        name: "Bok\xe9",
        parent: "GN"
    },
    {
        code: "GN-BE",
        name: "Beyla",
        parent: "GN-N"
    },
    {
        code: "GN-BF",
        name: "Boffa",
        parent: "GN-B"
    },
    {
        code: "GN-BK",
        name: "Bok\xe9",
        parent: "GN-B"
    },
    {
        code: "GN-C",
        name: "Conakry",
        parent: "GN"
    },
    {
        code: "GN-CO",
        name: "Coyah",
        parent: "GN-D"
    },
    {
        code: "GN-D",
        name: "Kindia",
        parent: "GN"
    },
    {
        code: "GN-DB",
        name: "Dabola",
        parent: "GN-F"
    },
    {
        code: "GN-DI",
        name: "Dinguiraye",
        parent: "GN-F"
    },
    {
        code: "GN-DL",
        name: "Dalaba",
        parent: "GN-M"
    },
    {
        code: "GN-DU",
        name: "Dubr\xe9ka",
        parent: "GN-D"
    },
    {
        code: "GN-F",
        name: "Faranah",
        parent: "GN"
    },
    {
        code: "GN-FA",
        name: "Faranah",
        parent: "GN-F"
    },
    {
        code: "GN-FO",
        name: "For\xe9cariah",
        parent: "GN-D"
    },
    {
        code: "GN-FR",
        name: "Fria",
        parent: "GN-B"
    },
    {
        code: "GN-GA",
        name: "Gaoual",
        parent: "GN-B"
    },
    {
        code: "GN-GU",
        name: "Gu\xe9k\xe9dou",
        parent: "GN-N"
    },
    {
        code: "GN-K",
        name: "Kankan",
        parent: "GN"
    },
    {
        code: "GN-KA",
        name: "Kankan",
        parent: "GN-K"
    },
    {
        code: "GN-KB",
        name: "Koubia",
        parent: "GN-L"
    },
    {
        code: "GN-KD",
        name: "Kindia",
        parent: "GN-D"
    },
    {
        code: "GN-KE",
        name: "K\xe9rouan\xe9",
        parent: "GN-K"
    },
    {
        code: "GN-KN",
        name: "Koundara",
        parent: "GN-B"
    },
    {
        code: "GN-KO",
        name: "Kouroussa",
        parent: "GN-K"
    },
    {
        code: "GN-KS",
        name: "Kissidougou",
        parent: "GN-F"
    },
    {
        code: "GN-L",
        name: "Lab\xe9",
        parent: "GN"
    },
    {
        code: "GN-LA",
        name: "Lab\xe9",
        parent: "GN-L"
    },
    {
        code: "GN-LE",
        name: "L\xe9louma",
        parent: "GN-L"
    },
    {
        code: "GN-LO",
        name: "Lola",
        parent: "GN-N"
    },
    {
        code: "GN-M",
        name: "Mamou",
        parent: "GN"
    },
    {
        code: "GN-MC",
        name: "Macenta",
        parent: "GN-N"
    },
    {
        code: "GN-MD",
        name: "Mandiana",
        parent: "GN-K"
    },
    {
        code: "GN-ML",
        name: "Mali",
        parent: "GN-L"
    },
    {
        code: "GN-MM",
        name: "Mamou",
        parent: "GN-M"
    },
    {
        code: "GN-N",
        name: "Nz\xe9r\xe9kor\xe9",
        parent: "GN"
    },
    {
        code: "GN-NZ",
        name: "Nz\xe9r\xe9kor\xe9",
        parent: "GN-N"
    },
    {
        code: "GN-PI",
        name: "Pita",
        parent: "GN-M"
    },
    {
        code: "GN-SI",
        name: "Siguiri",
        parent: "GN-K"
    },
    {
        code: "GN-TE",
        name: "T\xe9lim\xe9l\xe9",
        parent: "GN-D"
    },
    {
        code: "GN-TO",
        name: "Tougu\xe9",
        parent: "GN-L"
    },
    {
        code: "GN-YO",
        name: "Yomou",
        parent: "GN-N"
    },
    {
        code: "GQ-AN",
        name: "Annob\xf3n",
        parent: "GQ-I"
    },
    {
        code: "GQ-BN",
        name: "Bioko Norte",
        parent: "GQ-I"
    },
    {
        code: "GQ-BS",
        name: "Bioko Sur",
        parent: "GQ-I"
    },
    {
        code: "GQ-C",
        name: "Regi\xf3n Continental",
        parent: "GQ"
    },
    {
        code: "GQ-CS",
        name: "Centro Sur",
        parent: "GQ-C"
    },
    {
        code: "GQ-DJ",
        name: "Djibloho",
        parent: "GQ-C"
    },
    {
        code: "GQ-I",
        name: "Regi\xf3n Insular",
        parent: "GQ"
    },
    {
        code: "GQ-KN",
        name: "Ki\xe9-Ntem",
        parent: "GQ-C"
    },
    {
        code: "GQ-LI",
        name: "Litoral",
        parent: "GQ-C"
    },
    {
        code: "GQ-WN",
        name: "Wele-Nzas",
        parent: "GQ-C"
    },
    {
        code: "GR-69",
        name: "\xc1gion \xd3ros",
        parent: "GR"
    },
    {
        code: "GR-A",
        name: "Anatolik\xed Makedon\xeda kai Thr\xe1ki",
        parent: "GR"
    },
    {
        code: "GR-B",
        name: "Kentrik\xed Makedon\xeda",
        parent: "GR"
    },
    {
        code: "GR-C",
        name: "Dytik\xed Makedon\xeda",
        parent: "GR"
    },
    {
        code: "GR-D",
        name: "\xcdpeiros",
        parent: "GR"
    },
    {
        code: "GR-E",
        name: "Thessal\xeda",
        parent: "GR"
    },
    {
        code: "GR-F",
        name: "Ion\xeda N\xedsia",
        parent: "GR"
    },
    {
        code: "GR-G",
        name: "Dytik\xed Ell\xe1da",
        parent: "GR"
    },
    {
        code: "GR-H",
        name: "Stere\xe1 Ell\xe1da",
        parent: "GR"
    },
    {
        code: "GR-I",
        name: "Attik\xed",
        parent: "GR"
    },
    {
        code: "GR-J",
        name: "Pelop\xf3nnisos",
        parent: "GR"
    },
    {
        code: "GR-K",
        name: "V\xf3reio Aiga\xedo",
        parent: "GR"
    },
    {
        code: "GR-L",
        name: "N\xf3tio Aiga\xedo",
        parent: "GR"
    },
    {
        code: "GR-M",
        name: "Kr\xedti",
        parent: "GR"
    },
    {
        code: "GT-01",
        name: "Guatemala",
        parent: "GT"
    },
    {
        code: "GT-02",
        name: "El Progreso",
        parent: "GT"
    },
    {
        code: "GT-03",
        name: "Sacatep\xe9quez",
        parent: "GT"
    },
    {
        code: "GT-04",
        name: "Chimaltenango",
        parent: "GT"
    },
    {
        code: "GT-05",
        name: "Escuintla",
        parent: "GT"
    },
    {
        code: "GT-06",
        name: "Santa Rosa",
        parent: "GT"
    },
    {
        code: "GT-07",
        name: "Solol\xe1",
        parent: "GT"
    },
    {
        code: "GT-08",
        name: "Totonicap\xe1n",
        parent: "GT"
    },
    {
        code: "GT-09",
        name: "Quetzaltenango",
        parent: "GT"
    },
    {
        code: "GT-10",
        name: "Suchitep\xe9quez",
        parent: "GT"
    },
    {
        code: "GT-11",
        name: "Retalhuleu",
        parent: "GT"
    },
    {
        code: "GT-12",
        name: "San Marcos",
        parent: "GT"
    },
    {
        code: "GT-13",
        name: "Huehuetenango",
        parent: "GT"
    },
    {
        code: "GT-14",
        name: "Quich\xe9",
        parent: "GT"
    },
    {
        code: "GT-15",
        name: "Baja Verapaz",
        parent: "GT"
    },
    {
        code: "GT-16",
        name: "Alta Verapaz",
        parent: "GT"
    },
    {
        code: "GT-17",
        name: "Pet\xe9n",
        parent: "GT"
    },
    {
        code: "GT-18",
        name: "Izabal",
        parent: "GT"
    },
    {
        code: "GT-19",
        name: "Zacapa",
        parent: "GT"
    },
    {
        code: "GT-20",
        name: "Chiquimula",
        parent: "GT"
    },
    {
        code: "GT-21",
        name: "Jalapa",
        parent: "GT"
    },
    {
        code: "GT-22",
        name: "Jutiapa",
        parent: "GT"
    },
    {
        code: "GW-BA",
        name: "Bafat\xe1",
        parent: "GW-L"
    },
    {
        code: "GW-BL",
        name: "Bolama / Bijag\xf3s",
        parent: "GW-S"
    },
    {
        code: "GW-BM",
        name: "Biombo",
        parent: "GW-N"
    },
    {
        code: "GW-BS",
        name: "Bissau",
        parent: "GW"
    },
    {
        code: "GW-CA",
        name: "Cacheu",
        parent: "GW-N"
    },
    {
        code: "GW-GA",
        name: "Gab\xfa",
        parent: "GW-L"
    },
    {
        code: "GW-L",
        name: "Leste",
        parent: "GW"
    },
    {
        code: "GW-N",
        name: "Norte",
        parent: "GW"
    },
    {
        code: "GW-OI",
        name: "Oio",
        parent: "GW-N"
    },
    {
        code: "GW-QU",
        name: "Quinara",
        parent: "GW-S"
    },
    {
        code: "GW-S",
        name: "Sul",
        parent: "GW"
    },
    {
        code: "GW-TO",
        name: "Tombali",
        parent: "GW-S"
    },
    {
        code: "GY-BA",
        name: "Barima-Waini",
        parent: "GY"
    },
    {
        code: "GY-CU",
        name: "Cuyuni-Mazaruni",
        parent: "GY"
    },
    {
        code: "GY-DE",
        name: "Demerara-Mahaica",
        parent: "GY"
    },
    {
        code: "GY-EB",
        name: "East Berbice-Corentyne",
        parent: "GY"
    },
    {
        code: "GY-ES",
        name: "Essequibo Islands-West Demerara",
        parent: "GY"
    },
    {
        code: "GY-MA",
        name: "Mahaica-Berbice",
        parent: "GY"
    },
    {
        code: "GY-PM",
        name: "Pomeroon-Supenaam",
        parent: "GY"
    },
    {
        code: "GY-PT",
        name: "Potaro-Siparuni",
        parent: "GY"
    },
    {
        code: "GY-UD",
        name: "Upper Demerara-Berbice",
        parent: "GY"
    },
    {
        code: "GY-UT",
        name: "Upper Takutu-Upper Essequibo",
        parent: "GY"
    },
    {
        code: "HN-AT",
        name: "Atl\xe1ntida",
        parent: "HN"
    },
    {
        code: "HN-CH",
        name: "Choluteca",
        parent: "HN"
    },
    {
        code: "HN-CL",
        name: "Col\xf3n",
        parent: "HN"
    },
    {
        code: "HN-CM",
        name: "Comayagua",
        parent: "HN"
    },
    {
        code: "HN-CP",
        name: "Cop\xe1n",
        parent: "HN"
    },
    {
        code: "HN-CR",
        name: "Cort\xe9s",
        parent: "HN"
    },
    {
        code: "HN-EP",
        name: "El Para\xedso",
        parent: "HN"
    },
    {
        code: "HN-FM",
        name: "Francisco Moraz\xe1n",
        parent: "HN"
    },
    {
        code: "HN-GD",
        name: "Gracias a Dios",
        parent: "HN"
    },
    {
        code: "HN-IB",
        name: "Islas de la Bah\xeda",
        parent: "HN"
    },
    {
        code: "HN-IN",
        name: "Intibuc\xe1",
        parent: "HN"
    },
    {
        code: "HN-LE",
        name: "Lempira",
        parent: "HN"
    },
    {
        code: "HN-LP",
        name: "La Paz",
        parent: "HN"
    },
    {
        code: "HN-OC",
        name: "Ocotepeque",
        parent: "HN"
    },
    {
        code: "HN-OL",
        name: "Olancho",
        parent: "HN"
    },
    {
        code: "HN-SB",
        name: "Santa B\xe1rbara",
        parent: "HN"
    },
    {
        code: "HN-VA",
        name: "Valle",
        parent: "HN"
    },
    {
        code: "HN-YO",
        name: "Yoro",
        parent: "HN"
    },
    {
        code: "HR-01",
        name: "Zagrebačka županija",
        parent: "HR"
    },
    {
        code: "HR-02",
        name: "Krapinsko-zagorska županija",
        parent: "HR"
    },
    {
        code: "HR-03",
        name: "Sisačko-moslavačka županija",
        parent: "HR"
    },
    {
        code: "HR-04",
        name: "Karlovačka županija",
        parent: "HR"
    },
    {
        code: "HR-05",
        name: "Varaždinska županija",
        parent: "HR"
    },
    {
        code: "HR-06",
        name: "Koprivničko-križevačka županija",
        parent: "HR"
    },
    {
        code: "HR-07",
        name: "Bjelovarsko-bilogorska županija",
        parent: "HR"
    },
    {
        code: "HR-08",
        name: "Primorsko-goranska županija",
        parent: "HR"
    },
    {
        code: "HR-09",
        name: "Ličko-senjska županija",
        parent: "HR"
    },
    {
        code: "HR-10",
        name: "Virovitičko-podravska županija",
        parent: "HR"
    },
    {
        code: "HR-11",
        name: "Požeško-slavonska županija",
        parent: "HR"
    },
    {
        code: "HR-12",
        name: "Brodsko-posavska županija",
        parent: "HR"
    },
    {
        code: "HR-13",
        name: "Zadarska županija",
        parent: "HR"
    },
    {
        code: "HR-14",
        name: "Osječko-baranjska županija",
        parent: "HR"
    },
    {
        code: "HR-15",
        name: "Šibensko-kninska županija",
        parent: "HR"
    },
    {
        code: "HR-16",
        name: "Vukovarsko-srijemska županija",
        parent: "HR"
    },
    {
        code: "HR-17",
        name: "Splitsko-dalmatinska županija",
        parent: "HR"
    },
    {
        code: "HR-18",
        name: "Istarska županija",
        parent: "HR"
    },
    {
        code: "HR-19",
        name: "Dubrovačko-neretvanska županija",
        parent: "HR"
    },
    {
        code: "HR-20",
        name: "Međimurska županija",
        parent: "HR"
    },
    {
        code: "HR-21",
        name: "Grad Zagreb",
        parent: "HR"
    },
    {
        code: "HT-AR",
        name: "Artibonite",
        parent: "HT"
    },
    {
        code: "HT-CE",
        name: "Centre",
        parent: "HT"
    },
    {
        code: "HT-GA",
        name: "Grande’Anse",
        parent: "HT"
    },
    {
        code: "HT-ND",
        name: "Nord",
        parent: "HT"
    },
    {
        code: "HT-NE",
        name: "Nord-Est",
        parent: "HT"
    },
    {
        code: "HT-NI",
        name: "Nippes",
        parent: "HT"
    },
    {
        code: "HT-NO",
        name: "Nord-Ouest",
        parent: "HT"
    },
    {
        code: "HT-OU",
        name: "Ouest",
        parent: "HT"
    },
    {
        code: "HT-SD",
        name: "Sud",
        parent: "HT"
    },
    {
        code: "HT-SE",
        name: "Sud-Est",
        parent: "HT"
    },
    {
        code: "HU-BA",
        name: "Baranya",
        parent: "HU"
    },
    {
        code: "HU-BC",
        name: "B\xe9k\xe9scsaba",
        parent: "HU"
    },
    {
        code: "HU-BE",
        name: "B\xe9k\xe9s",
        parent: "HU"
    },
    {
        code: "HU-BK",
        name: "B\xe1cs-Kiskun",
        parent: "HU"
    },
    {
        code: "HU-BU",
        name: "Budapest",
        parent: "HU"
    },
    {
        code: "HU-BZ",
        name: "Borsod-Aba\xfaj-Zempl\xe9n",
        parent: "HU"
    },
    {
        code: "HU-CS",
        name: "Csongr\xe1d-Csan\xe1d",
        parent: "HU"
    },
    {
        code: "HU-DE",
        name: "Debrecen",
        parent: "HU"
    },
    {
        code: "HU-DU",
        name: "Duna\xfajv\xe1ros",
        parent: "HU"
    },
    {
        code: "HU-EG",
        name: "Eger",
        parent: "HU"
    },
    {
        code: "HU-ER",
        name: "\xc9rd",
        parent: "HU"
    },
    {
        code: "HU-FE",
        name: "Fej\xe9r",
        parent: "HU"
    },
    {
        code: "HU-GS",
        name: "Győr-Moson-Sopron",
        parent: "HU"
    },
    {
        code: "HU-GY",
        name: "Győr",
        parent: "HU"
    },
    {
        code: "HU-HB",
        name: "Hajd\xfa-Bihar",
        parent: "HU"
    },
    {
        code: "HU-HE",
        name: "Heves",
        parent: "HU"
    },
    {
        code: "HU-HV",
        name: "H\xf3dmezőv\xe1s\xe1rhely",
        parent: "HU"
    },
    {
        code: "HU-JN",
        name: "J\xe1sz-Nagykun-Szolnok",
        parent: "HU"
    },
    {
        code: "HU-KE",
        name: "Kom\xe1rom-Esztergom",
        parent: "HU"
    },
    {
        code: "HU-KM",
        name: "Kecskem\xe9t",
        parent: "HU"
    },
    {
        code: "HU-KV",
        name: "Kaposv\xe1r",
        parent: "HU"
    },
    {
        code: "HU-MI",
        name: "Miskolc",
        parent: "HU"
    },
    {
        code: "HU-NK",
        name: "Nagykanizsa",
        parent: "HU"
    },
    {
        code: "HU-NO",
        name: "N\xf3gr\xe1d",
        parent: "HU"
    },
    {
        code: "HU-NY",
        name: "Ny\xedregyh\xe1za",
        parent: "HU"
    },
    {
        code: "HU-PE",
        name: "Pest",
        parent: "HU"
    },
    {
        code: "HU-PS",
        name: "P\xe9cs",
        parent: "HU"
    },
    {
        code: "HU-SD",
        name: "Szeged",
        parent: "HU"
    },
    {
        code: "HU-SF",
        name: "Sz\xe9kesfeh\xe9rv\xe1r",
        parent: "HU"
    },
    {
        code: "HU-SH",
        name: "Szombathely",
        parent: "HU"
    },
    {
        code: "HU-SK",
        name: "Szolnok",
        parent: "HU"
    },
    {
        code: "HU-SN",
        name: "Sopron",
        parent: "HU"
    },
    {
        code: "HU-SO",
        name: "Somogy",
        parent: "HU"
    },
    {
        code: "HU-SS",
        name: "Szeksz\xe1rd",
        parent: "HU"
    },
    {
        code: "HU-ST",
        name: "Salg\xf3tarj\xe1n",
        parent: "HU"
    },
    {
        code: "HU-SZ",
        name: "Szabolcs-Szatm\xe1r-Bereg",
        parent: "HU"
    },
    {
        code: "HU-TB",
        name: "Tatab\xe1nya",
        parent: "HU"
    },
    {
        code: "HU-TO",
        name: "Tolna",
        parent: "HU"
    },
    {
        code: "HU-VA",
        name: "Vas",
        parent: "HU"
    },
    {
        code: "HU-VE",
        name: "Veszpr\xe9m",
        parent: "HU"
    },
    {
        code: "HU-VM",
        name: "Veszpr\xe9m",
        parent: "HU"
    },
    {
        code: "HU-ZA",
        name: "Zala",
        parent: "HU"
    },
    {
        code: "HU-ZE",
        name: "Zalaegerszeg",
        parent: "HU"
    },
    {
        code: "ID-AC",
        name: "Aceh",
        parent: "ID-SM"
    },
    {
        code: "ID-BA",
        name: "Bali",
        parent: "ID-NU"
    },
    {
        code: "ID-BB",
        name: "Kepulauan Bangka Belitung",
        parent: "ID-SM"
    },
    {
        code: "ID-BE",
        name: "Bengkulu",
        parent: "ID-SM"
    },
    {
        code: "ID-BT",
        name: "Banten",
        parent: "ID-JW"
    },
    {
        code: "ID-GO",
        name: "Gorontalo",
        parent: "ID-SL"
    },
    {
        code: "ID-JA",
        name: "Jambi",
        parent: "ID-SM"
    },
    {
        code: "ID-JB",
        name: "Jawa Barat",
        parent: "ID-JW"
    },
    {
        code: "ID-JI",
        name: "Jawa Timur",
        parent: "ID-JW"
    },
    {
        code: "ID-JK",
        name: "Jakarta Raya",
        parent: "ID-JW"
    },
    {
        code: "ID-JT",
        name: "Jawa Tengah",
        parent: "ID-JW"
    },
    {
        code: "ID-JW",
        name: "Jawa",
        parent: "ID"
    },
    {
        code: "ID-KA",
        name: "Kalimantan",
        parent: "ID"
    },
    {
        code: "ID-KB",
        name: "Kalimantan Barat",
        parent: "ID-KA"
    },
    {
        code: "ID-KI",
        name: "Kalimantan Timur",
        parent: "ID-KA"
    },
    {
        code: "ID-KR",
        name: "Kepulauan Riau",
        parent: "ID-SM"
    },
    {
        code: "ID-KS",
        name: "Kalimantan Selatan",
        parent: "ID-KA"
    },
    {
        code: "ID-KT",
        name: "Kalimantan Tengah",
        parent: "ID-KA"
    },
    {
        code: "ID-KU",
        name: "Kalimantan Utara",
        parent: "ID-KA"
    },
    {
        code: "ID-LA",
        name: "Lampung",
        parent: "ID-SM"
    },
    {
        code: "ID-MA",
        name: "Maluku",
        parent: "ID-ML"
    },
    {
        code: "ID-ML",
        name: "Maluku",
        parent: "ID"
    },
    {
        code: "ID-MU",
        name: "Maluku Utara",
        parent: "ID-ML"
    },
    {
        code: "ID-NB",
        name: "Nusa Tenggara Barat",
        parent: "ID-NU"
    },
    {
        code: "ID-NT",
        name: "Nusa Tenggara Timur",
        parent: "ID-NU"
    },
    {
        code: "ID-NU",
        name: "Nusa Tenggara",
        parent: "ID"
    },
    {
        code: "ID-PA",
        name: "Papua",
        parent: "ID-PP"
    },
    {
        code: "ID-PB",
        name: "Papua Barat",
        parent: "ID-PP"
    },
    {
        code: "ID-PE",
        name: "Papua Pengunungan",
        parent: "ID-PP"
    },
    {
        code: "ID-PP",
        name: "Papua",
        parent: "ID"
    },
    {
        code: "ID-PS",
        name: "Papua Selatan",
        parent: "ID-PP"
    },
    {
        code: "ID-PT",
        name: "Papua Tengah",
        parent: "ID-PP"
    },
    {
        code: "ID-RI",
        name: "Riau",
        parent: "ID-SM"
    },
    {
        code: "ID-SA",
        name: "Sulawesi Utara",
        parent: "ID-SL"
    },
    {
        code: "ID-SB",
        name: "Sumatera Barat",
        parent: "ID-SM"
    },
    {
        code: "ID-SG",
        name: "Sulawesi Tenggara",
        parent: "ID-SL"
    },
    {
        code: "ID-SL",
        name: "Sulawesi",
        parent: "ID"
    },
    {
        code: "ID-SM",
        name: "Sumatera",
        parent: "ID"
    },
    {
        code: "ID-SN",
        name: "Sulawesi Selatan",
        parent: "ID-SL"
    },
    {
        code: "ID-SR",
        name: "Sulawesi Barat",
        parent: "ID-SL"
    },
    {
        code: "ID-SS",
        name: "Sumatera Selatan",
        parent: "ID-SM"
    },
    {
        code: "ID-ST",
        name: "Sulawesi Tengah",
        parent: "ID-SL"
    },
    {
        code: "ID-SU",
        name: "Sumatera Utara",
        parent: "ID-SM"
    },
    {
        code: "ID-YO",
        name: "Yogyakarta",
        parent: "ID-JW"
    },
    {
        code: "IE-C",
        name: "Connaught",
        parent: "IE"
    },
    {
        code: "IE-CE",
        name: "Clare",
        parent: "IE-M"
    },
    {
        code: "IE-CN",
        name: "Cavan",
        parent: "IE-U"
    },
    {
        code: "IE-CO",
        name: "Cork",
        parent: "IE-M"
    },
    {
        code: "IE-CW",
        name: "Carlow",
        parent: "IE-L"
    },
    {
        code: "IE-D",
        name: "Dublin",
        parent: "IE-L"
    },
    {
        code: "IE-DL",
        name: "Donegal",
        parent: "IE-U"
    },
    {
        code: "IE-G",
        name: "Galway",
        parent: "IE-C"
    },
    {
        code: "IE-KE",
        name: "Kildare",
        parent: "IE-L"
    },
    {
        code: "IE-KK",
        name: "Kilkenny",
        parent: "IE-L"
    },
    {
        code: "IE-KY",
        name: "Kerry",
        parent: "IE-M"
    },
    {
        code: "IE-L",
        name: "Leinster",
        parent: "IE"
    },
    {
        code: "IE-LD",
        name: "Longford",
        parent: "IE-L"
    },
    {
        code: "IE-LH",
        name: "Louth",
        parent: "IE-L"
    },
    {
        code: "IE-LK",
        name: "Limerick",
        parent: "IE-M"
    },
    {
        code: "IE-LM",
        name: "Leitrim",
        parent: "IE-C"
    },
    {
        code: "IE-LS",
        name: "Laois",
        parent: "IE-L"
    },
    {
        code: "IE-M",
        name: "Munster",
        parent: "IE"
    },
    {
        code: "IE-MH",
        name: "Meath",
        parent: "IE-L"
    },
    {
        code: "IE-MN",
        name: "Monaghan",
        parent: "IE-U"
    },
    {
        code: "IE-MO",
        name: "Mayo",
        parent: "IE-C"
    },
    {
        code: "IE-OY",
        name: "Offaly",
        parent: "IE-L"
    },
    {
        code: "IE-RN",
        name: "Roscommon",
        parent: "IE-C"
    },
    {
        code: "IE-SO",
        name: "Sligo",
        parent: "IE-C"
    },
    {
        code: "IE-TA",
        name: "Tipperary",
        parent: "IE-M"
    },
    {
        code: "IE-U",
        name: "Ulster",
        parent: "IE"
    },
    {
        code: "IE-WD",
        name: "Waterford",
        parent: "IE-M"
    },
    {
        code: "IE-WH",
        name: "Westmeath",
        parent: "IE-L"
    },
    {
        code: "IE-WW",
        name: "Wicklow",
        parent: "IE-L"
    },
    {
        code: "IE-WX",
        name: "Wexford",
        parent: "IE-L"
    },
    {
        code: "IL-D",
        name: "HaDarom",
        parent: "IL"
    },
    {
        code: "IL-HA",
        name: "H̱efa",
        parent: "IL"
    },
    {
        code: "IL-JM",
        name: "Yerushalayim",
        parent: "IL"
    },
    {
        code: "IL-M",
        name: "HaMerkaz",
        parent: "IL"
    },
    {
        code: "IL-TA",
        name: "Tel Aviv",
        parent: "IL"
    },
    {
        code: "IL-Z",
        name: "HaTsafon",
        parent: "IL"
    },
    {
        code: "IN-AN",
        name: "Andaman and Nicobar Islands",
        parent: "IN"
    },
    {
        code: "IN-AP",
        name: "Andhra Pradesh",
        parent: "IN"
    },
    {
        code: "IN-AR",
        name: "Arunāchal Pradesh",
        parent: "IN"
    },
    {
        code: "IN-AS",
        name: "Assam",
        parent: "IN"
    },
    {
        code: "IN-BR",
        name: "Bihār",
        parent: "IN"
    },
    {
        code: "IN-CH",
        name: "Chandīgarh",
        parent: "IN"
    },
    {
        code: "IN-CT",
        name: "Chhattīsgarh",
        parent: "IN"
    },
    {
        code: "IN-DH",
        name: "Dādra and Nagar Haveli and Damān and Diu",
        parent: "IN"
    },
    {
        code: "IN-DL",
        name: "Delhi",
        parent: "IN"
    },
    {
        code: "IN-GA",
        name: "Goa",
        parent: "IN"
    },
    {
        code: "IN-GJ",
        name: "Gujarāt",
        parent: "IN"
    },
    {
        code: "IN-HP",
        name: "Himāchal Pradesh",
        parent: "IN"
    },
    {
        code: "IN-HR",
        name: "Haryāna",
        parent: "IN"
    },
    {
        code: "IN-JH",
        name: "Jhārkhand",
        parent: "IN"
    },
    {
        code: "IN-JK",
        name: "Jammu and Kashmīr",
        parent: "IN"
    },
    {
        code: "IN-KA",
        name: "Karnātaka",
        parent: "IN"
    },
    {
        code: "IN-KL",
        name: "Kerala",
        parent: "IN"
    },
    {
        code: "IN-LA",
        name: "Ladākh",
        parent: "IN"
    },
    {
        code: "IN-LD",
        name: "Lakshadweep",
        parent: "IN"
    },
    {
        code: "IN-MH",
        name: "Mahārāshtra",
        parent: "IN"
    },
    {
        code: "IN-ML",
        name: "Meghālaya",
        parent: "IN"
    },
    {
        code: "IN-MN",
        name: "Manipur",
        parent: "IN"
    },
    {
        code: "IN-MP",
        name: "Madhya Pradesh",
        parent: "IN"
    },
    {
        code: "IN-MZ",
        name: "Mizoram",
        parent: "IN"
    },
    {
        code: "IN-NL",
        name: "Nāgāland",
        parent: "IN"
    },
    {
        code: "IN-OR",
        name: "Odisha",
        parent: "IN"
    },
    {
        code: "IN-PB",
        name: "Punjab",
        parent: "IN"
    },
    {
        code: "IN-PY",
        name: "Puducherry",
        parent: "IN"
    },
    {
        code: "IN-RJ",
        name: "Rājasthān",
        parent: "IN"
    },
    {
        code: "IN-SK",
        name: "Sikkim",
        parent: "IN"
    },
    {
        code: "IN-TG",
        name: "Telangāna",
        parent: "IN"
    },
    {
        code: "IN-TN",
        name: "Tamil Nādu",
        parent: "IN"
    },
    {
        code: "IN-TR",
        name: "Tripura",
        parent: "IN"
    },
    {
        code: "IN-UP",
        name: "Uttar Pradesh",
        parent: "IN"
    },
    {
        code: "IN-UT",
        name: "Uttarākhand",
        parent: "IN"
    },
    {
        code: "IN-WB",
        name: "West Bengal",
        parent: "IN"
    },
    {
        code: "IQ-AN",
        name: "Al Anbār",
        parent: "IQ"
    },
    {
        code: "IQ-AR",
        name: "Arbīl",
        parent: "IQ-KR"
    },
    {
        code: "IQ-BA",
        name: "Al Başrah",
        parent: "IQ"
    },
    {
        code: "IQ-BB",
        name: "Bābil",
        parent: "IQ"
    },
    {
        code: "IQ-BG",
        name: "Baghdād",
        parent: "IQ"
    },
    {
        code: "IQ-DA",
        name: "Dahūk",
        parent: "IQ-KR"
    },
    {
        code: "IQ-DI",
        name: "Diyāl\xe1",
        parent: "IQ"
    },
    {
        code: "IQ-DQ",
        name: "Dhī Qār",
        parent: "IQ"
    },
    {
        code: "IQ-KA",
        name: "Karbalā’",
        parent: "IQ"
    },
    {
        code: "IQ-KI",
        name: "Kirkūk",
        parent: "IQ"
    },
    {
        code: "IQ-KR",
        name: "Iqlīm Kūrdistān",
        parent: "IQ"
    },
    {
        code: "IQ-MA",
        name: "Maysān",
        parent: "IQ"
    },
    {
        code: "IQ-MU",
        name: "Al Muthann\xe1",
        parent: "IQ"
    },
    {
        code: "IQ-NA",
        name: "An Najaf",
        parent: "IQ"
    },
    {
        code: "IQ-NI",
        name: "Nīnaw\xe1",
        parent: "IQ"
    },
    {
        code: "IQ-QA",
        name: "Al Qādisīyah",
        parent: "IQ"
    },
    {
        code: "IQ-SD",
        name: "Şalāḩ ad Dīn",
        parent: "IQ"
    },
    {
        code: "IQ-SU",
        name: "As Sulaymānīyah",
        parent: "IQ-KR"
    },
    {
        code: "IQ-WA",
        name: "Wāsiţ",
        parent: "IQ"
    },
    {
        code: "IR-00",
        name: "Markazī",
        parent: "IR"
    },
    {
        code: "IR-01",
        name: "Gīlān",
        parent: "IR"
    },
    {
        code: "IR-02",
        name: "Māzandarān",
        parent: "IR"
    },
    {
        code: "IR-03",
        name: "Āz̄ārbāyjān-e Shārqī",
        parent: "IR"
    },
    {
        code: "IR-04",
        name: "Āz̄ārbāyjān-e Ghārbī",
        parent: "IR"
    },
    {
        code: "IR-05",
        name: "Kermānshāh",
        parent: "IR"
    },
    {
        code: "IR-06",
        name: "Khūzestān",
        parent: "IR"
    },
    {
        code: "IR-07",
        name: "Fārs",
        parent: "IR"
    },
    {
        code: "IR-08",
        name: "Kermān",
        parent: "IR"
    },
    {
        code: "IR-09",
        name: "Khorāsān-e Raẕavī",
        parent: "IR"
    },
    {
        code: "IR-10",
        name: "Eşfahān",
        parent: "IR"
    },
    {
        code: "IR-11",
        name: "Sīstān va Balūchestān",
        parent: "IR"
    },
    {
        code: "IR-12",
        name: "Kordestān",
        parent: "IR"
    },
    {
        code: "IR-13",
        name: "Hamadān",
        parent: "IR"
    },
    {
        code: "IR-14",
        name: "Chahār Maḩāl va Bakhtīārī",
        parent: "IR"
    },
    {
        code: "IR-15",
        name: "Lorestān",
        parent: "IR"
    },
    {
        code: "IR-16",
        name: "Īlām",
        parent: "IR"
    },
    {
        code: "IR-17",
        name: "Kohgīlūyeh va Bowyer Aḩmad",
        parent: "IR"
    },
    {
        code: "IR-18",
        name: "Būshehr",
        parent: "IR"
    },
    {
        code: "IR-19",
        name: "Zanjān",
        parent: "IR"
    },
    {
        code: "IR-20",
        name: "Semnān",
        parent: "IR"
    },
    {
        code: "IR-21",
        name: "Yazd",
        parent: "IR"
    },
    {
        code: "IR-22",
        name: "Hormozgān",
        parent: "IR"
    },
    {
        code: "IR-23",
        name: "Tehrān",
        parent: "IR"
    },
    {
        code: "IR-24",
        name: "Ardabīl",
        parent: "IR"
    },
    {
        code: "IR-25",
        name: "Qom",
        parent: "IR"
    },
    {
        code: "IR-26",
        name: "Qazvīn",
        parent: "IR"
    },
    {
        code: "IR-27",
        name: "Golestān",
        parent: "IR"
    },
    {
        code: "IR-28",
        name: "Khorāsān-e Shomālī",
        parent: "IR"
    },
    {
        code: "IR-29",
        name: "Khorāsān-e Jonūbī",
        parent: "IR"
    },
    {
        code: "IR-30",
        name: "Alborz",
        parent: "IR"
    },
    {
        code: "IS-1",
        name: "H\xf6fu\xf0borgarsv\xe6\xf0i",
        parent: "IS"
    },
    {
        code: "IS-2",
        name: "Su\xf0urnes",
        parent: "IS"
    },
    {
        code: "IS-3",
        name: "Vesturland",
        parent: "IS"
    },
    {
        code: "IS-4",
        name: "Vestfir\xf0ir",
        parent: "IS"
    },
    {
        code: "IS-5",
        name: "Nor\xf0urland vestra",
        parent: "IS"
    },
    {
        code: "IS-6",
        name: "Nor\xf0urland eystra",
        parent: "IS"
    },
    {
        code: "IS-7",
        name: "Austurland",
        parent: "IS"
    },
    {
        code: "IS-8",
        name: "Su\xf0urland",
        parent: "IS"
    },
    {
        code: "IS-AKN",
        name: "Akraneskaupsta\xf0ur",
        parent: "IS"
    },
    {
        code: "IS-AKU",
        name: "Akureyrarb\xe6r",
        parent: "IS"
    },
    {
        code: "IS-ARN",
        name: "\xc1rneshreppur",
        parent: "IS"
    },
    {
        code: "IS-ASA",
        name: "\xc1sahreppur",
        parent: "IS"
    },
    {
        code: "IS-BLA",
        name: "Bl\xe1sk\xf3gabygg\xf0",
        parent: "IS"
    },
    {
        code: "IS-BOG",
        name: "Borgarbygg\xf0",
        parent: "IS"
    },
    {
        code: "IS-BOL",
        name: "Bolungarv\xedkurkaupsta\xf0ur",
        parent: "IS"
    },
    {
        code: "IS-DAB",
        name: "Dalabygg\xf0",
        parent: "IS"
    },
    {
        code: "IS-DAV",
        name: "Dalv\xedkurbygg\xf0",
        parent: "IS"
    },
    {
        code: "IS-EOM",
        name: "Eyja- og Miklaholtshreppur",
        parent: "IS"
    },
    {
        code: "IS-EYF",
        name: "Eyjafjar\xf0arsveit",
        parent: "IS"
    },
    {
        code: "IS-FJD",
        name: "Fjar\xf0abygg\xf0",
        parent: "IS"
    },
    {
        code: "IS-FJL",
        name: "Fjallabygg\xf0",
        parent: "IS"
    },
    {
        code: "IS-FLA",
        name: "Fl\xf3ahreppur",
        parent: "IS"
    },
    {
        code: "IS-FLR",
        name: "Flj\xf3tsdalshreppur",
        parent: "IS"
    },
    {
        code: "IS-GAR",
        name: "Gar\xf0ab\xe6r",
        parent: "IS"
    },
    {
        code: "IS-GOG",
        name: "Gr\xedmsnes- og Grafningshreppur",
        parent: "IS"
    },
    {
        code: "IS-GRN",
        name: "Grindav\xedkurb\xe6r",
        parent: "IS"
    },
    {
        code: "IS-GRU",
        name: "Grundarfjar\xf0arb\xe6r",
        parent: "IS"
    },
    {
        code: "IS-GRY",
        name: "Gr\xfdtubakkahreppur",
        parent: "IS"
    },
    {
        code: "IS-HAF",
        name: "Hafnarfjar\xf0arkaupsta\xf0ur",
        parent: "IS"
    },
    {
        code: "IS-HRG",
        name: "H\xf6rg\xe1rsveit",
        parent: "IS"
    },
    {
        code: "IS-HRU",
        name: "Hrunamannahreppur",
        parent: "IS"
    },
    {
        code: "IS-HUG",
        name: "H\xfanabygg\xf0",
        parent: "IS"
    },
    {
        code: "IS-HUV",
        name: "H\xfana\xfeing vestra",
        parent: "IS"
    },
    {
        code: "IS-HVA",
        name: "Hvalfjar\xf0arsveit",
        parent: "IS"
    },
    {
        code: "IS-HVE",
        name: "Hverager\xf0isb\xe6r",
        parent: "IS"
    },
    {
        code: "IS-ISA",
        name: "\xcdsafjar\xf0arb\xe6r",
        parent: "IS"
    },
    {
        code: "IS-KAL",
        name: "Kaldrananeshreppur",
        parent: "IS"
    },
    {
        code: "IS-KJO",
        name: "Kj\xf3sarhreppur",
        parent: "IS"
    },
    {
        code: "IS-KOP",
        name: "K\xf3pavogsb\xe6r",
        parent: "IS"
    },
    {
        code: "IS-LAN",
        name: "Langanesbygg\xf0",
        parent: "IS"
    },
    {
        code: "IS-MOS",
        name: "Mosfellsb\xe6r",
        parent: "IS"
    },
    {
        code: "IS-MUL",
        name: "M\xfala\xfeing",
        parent: "IS"
    },
    {
        code: "IS-MYR",
        name: "M\xfdrdalshreppur",
        parent: "IS"
    },
    {
        code: "IS-NOR",
        name: "Nor\xf0ur\xfeing",
        parent: "IS"
    },
    {
        code: "IS-RGE",
        name: "Rang\xe1r\xfeing eystra",
        parent: "IS"
    },
    {
        code: "IS-RGY",
        name: "Rang\xe1r\xfeing ytra",
        parent: "IS"
    },
    {
        code: "IS-RHH",
        name: "Reykh\xf3lahreppur",
        parent: "IS"
    },
    {
        code: "IS-RKN",
        name: "Reykjanesb\xe6r",
        parent: "IS"
    },
    {
        code: "IS-RKV",
        name: "Reykjav\xedkurborg",
        parent: "IS"
    },
    {
        code: "IS-SBT",
        name: "Svalbar\xf0sstrandarhreppur",
        parent: "IS"
    },
    {
        code: "IS-SDN",
        name: "Su\xf0urnesjab\xe6r",
        parent: "IS"
    },
    {
        code: "IS-SDV",
        name: "S\xfa\xf0av\xedkurhreppur",
        parent: "IS"
    },
    {
        code: "IS-SEL",
        name: "Seltjarnarnesb\xe6r",
        parent: "IS"
    },
    {
        code: "IS-SFA",
        name: "Sveitarf\xe9lagi\xf0 \xc1rborg",
        parent: "IS"
    },
    {
        code: "IS-SHF",
        name: "Sveitarf\xe9lagi\xf0 Hornafj\xf6r\xf0ur",
        parent: "IS"
    },
    {
        code: "IS-SKF",
        name: "Skaft\xe1rhreppur",
        parent: "IS"
    },
    {
        code: "IS-SKG",
        name: "Skagabygg\xf0",
        parent: "IS"
    },
    {
        code: "IS-SKO",
        name: "Skorradalshreppur",
        parent: "IS"
    },
    {
        code: "IS-SKR",
        name: "Skagafj\xf6r\xf0ur",
        parent: "IS"
    },
    {
        code: "IS-SNF",
        name: "Sn\xe6fellsb\xe6r",
        parent: "IS"
    },
    {
        code: "IS-SOG",
        name: "Skei\xf0a- og Gn\xfapverjahreppur",
        parent: "IS"
    },
    {
        code: "IS-SOL",
        name: "Sveitarf\xe9lagi\xf0 \xd6lfus",
        parent: "IS"
    },
    {
        code: "IS-SSS",
        name: "Sveitarf\xe9lagi\xf0 Skagastr\xf6nd",
        parent: "IS"
    },
    {
        code: "IS-STR",
        name: "Strandabygg\xf0",
        parent: "IS"
    },
    {
        code: "IS-STY",
        name: "Stykkish\xf3lmsb\xe6r",
        parent: "IS"
    },
    {
        code: "IS-SVG",
        name: "Sveitarf\xe9lagi\xf0 Vogar",
        parent: "IS"
    },
    {
        code: "IS-TAL",
        name: "T\xe1lknafjar\xf0arhreppur",
        parent: "IS"
    },
    {
        code: "IS-THG",
        name: "\xdeingeyjarsveit",
        parent: "IS"
    },
    {
        code: "IS-TJO",
        name: "Tj\xf6rneshreppur",
        parent: "IS"
    },
    {
        code: "IS-VEM",
        name: "Vestmannaeyjab\xe6r",
        parent: "IS"
    },
    {
        code: "IS-VER",
        name: "Vesturbygg\xf0",
        parent: "IS"
    },
    {
        code: "IS-VOP",
        name: "Vopnafjar\xf0arhreppur",
        parent: "IS"
    },
    {
        code: "IT-21",
        name: "Piemonte",
        parent: "IT"
    },
    {
        code: "IT-23",
        name: "Valle d'Aosta, Val d'Aoste",
        parent: "IT"
    },
    {
        code: "IT-25",
        name: "Lombardia",
        parent: "IT"
    },
    {
        code: "IT-32",
        name: "Trentino-Alto Adige, Trentino-S\xfcdtirol",
        parent: "IT"
    },
    {
        code: "IT-34",
        name: "Veneto",
        parent: "IT"
    },
    {
        code: "IT-36",
        name: "Friuli Venezia Giulia",
        parent: "IT"
    },
    {
        code: "IT-42",
        name: "Liguria",
        parent: "IT"
    },
    {
        code: "IT-45",
        name: "Emilia-Romagna",
        parent: "IT"
    },
    {
        code: "IT-52",
        name: "Toscana",
        parent: "IT"
    },
    {
        code: "IT-55",
        name: "Umbria",
        parent: "IT"
    },
    {
        code: "IT-57",
        name: "Marche",
        parent: "IT"
    },
    {
        code: "IT-62",
        name: "Lazio",
        parent: "IT"
    },
    {
        code: "IT-65",
        name: "Abruzzo",
        parent: "IT"
    },
    {
        code: "IT-67",
        name: "Molise",
        parent: "IT"
    },
    {
        code: "IT-72",
        name: "Campania",
        parent: "IT"
    },
    {
        code: "IT-75",
        name: "Puglia",
        parent: "IT"
    },
    {
        code: "IT-77",
        name: "Basilicata",
        parent: "IT"
    },
    {
        code: "IT-78",
        name: "Calabria",
        parent: "IT"
    },
    {
        code: "IT-82",
        name: "Sicilia",
        parent: "IT"
    },
    {
        code: "IT-88",
        name: "Sardegna",
        parent: "IT"
    },
    {
        code: "IT-AG",
        name: "Agrigento",
        parent: "IT-82"
    },
    {
        code: "IT-AL",
        name: "Alessandria",
        parent: "IT-21"
    },
    {
        code: "IT-AN",
        name: "Ancona",
        parent: "IT-57"
    },
    {
        code: "IT-AP",
        name: "Ascoli Piceno",
        parent: "IT-57"
    },
    {
        code: "IT-AQ",
        name: "L'Aquila",
        parent: "IT-65"
    },
    {
        code: "IT-AR",
        name: "Arezzo",
        parent: "IT-52"
    },
    {
        code: "IT-AT",
        name: "Asti",
        parent: "IT-21"
    },
    {
        code: "IT-AV",
        name: "Avellino",
        parent: "IT-72"
    },
    {
        code: "IT-BA",
        name: "Bari",
        parent: "IT-75"
    },
    {
        code: "IT-BG",
        name: "Bergamo",
        parent: "IT-25"
    },
    {
        code: "IT-BI",
        name: "Biella",
        parent: "IT-21"
    },
    {
        code: "IT-BL",
        name: "Belluno",
        parent: "IT-34"
    },
    {
        code: "IT-BN",
        name: "Benevento",
        parent: "IT-72"
    },
    {
        code: "IT-BO",
        name: "Bologna",
        parent: "IT-45"
    },
    {
        code: "IT-BR",
        name: "Brindisi",
        parent: "IT-75"
    },
    {
        code: "IT-BS",
        name: "Brescia",
        parent: "IT-25"
    },
    {
        code: "IT-BT",
        name: "Barletta-Andria-Trani",
        parent: "IT-75"
    },
    {
        code: "IT-BZ",
        name: "Bolzano, Bozen",
        parent: "IT-32"
    },
    {
        code: "IT-CA",
        name: "Cagliari",
        parent: "IT-88"
    },
    {
        code: "IT-CB",
        name: "Campobasso",
        parent: "IT-67"
    },
    {
        code: "IT-CE",
        name: "Caserta",
        parent: "IT-72"
    },
    {
        code: "IT-CH",
        name: "Chieti",
        parent: "IT-65"
    },
    {
        code: "IT-CL",
        name: "Caltanissetta",
        parent: "IT-82"
    },
    {
        code: "IT-CN",
        name: "Cuneo",
        parent: "IT-21"
    },
    {
        code: "IT-CO",
        name: "Como",
        parent: "IT-25"
    },
    {
        code: "IT-CR",
        name: "Cremona",
        parent: "IT-25"
    },
    {
        code: "IT-CS",
        name: "Cosenza",
        parent: "IT-78"
    },
    {
        code: "IT-CT",
        name: "Catania",
        parent: "IT-82"
    },
    {
        code: "IT-CZ",
        name: "Catanzaro",
        parent: "IT-78"
    },
    {
        code: "IT-EN",
        name: "Enna",
        parent: "IT-82"
    },
    {
        code: "IT-FC",
        name: "Forl\xec-Cesena",
        parent: "IT-45"
    },
    {
        code: "IT-FE",
        name: "Ferrara",
        parent: "IT-45"
    },
    {
        code: "IT-FG",
        name: "Foggia",
        parent: "IT-75"
    },
    {
        code: "IT-FI",
        name: "Firenze",
        parent: "IT-52"
    },
    {
        code: "IT-FM",
        name: "Fermo",
        parent: "IT-57"
    },
    {
        code: "IT-FR",
        name: "Frosinone",
        parent: "IT-62"
    },
    {
        code: "IT-GE",
        name: "Genova",
        parent: "IT-42"
    },
    {
        code: "IT-GO",
        name: "Gorizia",
        parent: "IT-36"
    },
    {
        code: "IT-GR",
        name: "Grosseto",
        parent: "IT-52"
    },
    {
        code: "IT-IM",
        name: "Imperia",
        parent: "IT-42"
    },
    {
        code: "IT-IS",
        name: "Isernia",
        parent: "IT-67"
    },
    {
        code: "IT-KR",
        name: "Crotone",
        parent: "IT-78"
    },
    {
        code: "IT-LC",
        name: "Lecco",
        parent: "IT-25"
    },
    {
        code: "IT-LE",
        name: "Lecce",
        parent: "IT-75"
    },
    {
        code: "IT-LI",
        name: "Livorno",
        parent: "IT-52"
    },
    {
        code: "IT-LO",
        name: "Lodi",
        parent: "IT-25"
    },
    {
        code: "IT-LT",
        name: "Latina",
        parent: "IT-62"
    },
    {
        code: "IT-LU",
        name: "Lucca",
        parent: "IT-52"
    },
    {
        code: "IT-MB",
        name: "Monza e Brianza",
        parent: "IT-25"
    },
    {
        code: "IT-MC",
        name: "Macerata",
        parent: "IT-57"
    },
    {
        code: "IT-ME",
        name: "Messina",
        parent: "IT-82"
    },
    {
        code: "IT-MI",
        name: "Milano",
        parent: "IT-25"
    },
    {
        code: "IT-MN",
        name: "Mantova",
        parent: "IT-25"
    },
    {
        code: "IT-MO",
        name: "Modena",
        parent: "IT-45"
    },
    {
        code: "IT-MS",
        name: "Massa-Carrara",
        parent: "IT-52"
    },
    {
        code: "IT-MT",
        name: "Matera",
        parent: "IT-77"
    },
    {
        code: "IT-NA",
        name: "Napoli",
        parent: "IT-72"
    },
    {
        code: "IT-NO",
        name: "Novara",
        parent: "IT-21"
    },
    {
        code: "IT-NU",
        name: "Nuoro",
        parent: "IT-88"
    },
    {
        code: "IT-OR",
        name: "Oristano",
        parent: "IT-88"
    },
    {
        code: "IT-PA",
        name: "Palermo",
        parent: "IT-82"
    },
    {
        code: "IT-PC",
        name: "Piacenza",
        parent: "IT-45"
    },
    {
        code: "IT-PD",
        name: "Padova",
        parent: "IT-34"
    },
    {
        code: "IT-PE",
        name: "Pescara",
        parent: "IT-65"
    },
    {
        code: "IT-PG",
        name: "Perugia",
        parent: "IT-55"
    },
    {
        code: "IT-PI",
        name: "Pisa",
        parent: "IT-52"
    },
    {
        code: "IT-PN",
        name: "Pordenone",
        parent: "IT-36"
    },
    {
        code: "IT-PO",
        name: "Prato",
        parent: "IT-52"
    },
    {
        code: "IT-PR",
        name: "Parma",
        parent: "IT-45"
    },
    {
        code: "IT-PT",
        name: "Pistoia",
        parent: "IT-52"
    },
    {
        code: "IT-PU",
        name: "Pesaro e Urbino",
        parent: "IT-57"
    },
    {
        code: "IT-PV",
        name: "Pavia",
        parent: "IT-25"
    },
    {
        code: "IT-PZ",
        name: "Potenza",
        parent: "IT-77"
    },
    {
        code: "IT-RA",
        name: "Ravenna",
        parent: "IT-45"
    },
    {
        code: "IT-RC",
        name: "Reggio Calabria",
        parent: "IT-78"
    },
    {
        code: "IT-RE",
        name: "Reggio Emilia",
        parent: "IT-45"
    },
    {
        code: "IT-RG",
        name: "Ragusa",
        parent: "IT-82"
    },
    {
        code: "IT-RI",
        name: "Rieti",
        parent: "IT-62"
    },
    {
        code: "IT-RM",
        name: "Roma",
        parent: "IT-62"
    },
    {
        code: "IT-RN",
        name: "Rimini",
        parent: "IT-45"
    },
    {
        code: "IT-RO",
        name: "Rovigo",
        parent: "IT-34"
    },
    {
        code: "IT-SA",
        name: "Salerno",
        parent: "IT-72"
    },
    {
        code: "IT-SI",
        name: "Siena",
        parent: "IT-52"
    },
    {
        code: "IT-SO",
        name: "Sondrio",
        parent: "IT-25"
    },
    {
        code: "IT-SP",
        name: "La Spezia",
        parent: "IT-42"
    },
    {
        code: "IT-SR",
        name: "Siracusa",
        parent: "IT-82"
    },
    {
        code: "IT-SS",
        name: "Sassari",
        parent: "IT-88"
    },
    {
        code: "IT-SU",
        name: "Sud Sardegna",
        parent: "IT-88"
    },
    {
        code: "IT-SV",
        name: "Savona",
        parent: "IT-42"
    },
    {
        code: "IT-TA",
        name: "Taranto",
        parent: "IT-75"
    },
    {
        code: "IT-TE",
        name: "Teramo",
        parent: "IT-65"
    },
    {
        code: "IT-TN",
        name: "Trento",
        parent: "IT-32"
    },
    {
        code: "IT-TO",
        name: "Torino",
        parent: "IT-21"
    },
    {
        code: "IT-TP",
        name: "Trapani",
        parent: "IT-82"
    },
    {
        code: "IT-TR",
        name: "Terni",
        parent: "IT-55"
    },
    {
        code: "IT-TS",
        name: "Trieste",
        parent: "IT-36"
    },
    {
        code: "IT-TV",
        name: "Treviso",
        parent: "IT-34"
    },
    {
        code: "IT-UD",
        name: "Udine",
        parent: "IT-36"
    },
    {
        code: "IT-VA",
        name: "Varese",
        parent: "IT-25"
    },
    {
        code: "IT-VB",
        name: "Verbano-Cusio-Ossola",
        parent: "IT-21"
    },
    {
        code: "IT-VC",
        name: "Vercelli",
        parent: "IT-21"
    },
    {
        code: "IT-VE",
        name: "Venezia",
        parent: "IT-34"
    },
    {
        code: "IT-VI",
        name: "Vicenza",
        parent: "IT-34"
    },
    {
        code: "IT-VR",
        name: "Verona",
        parent: "IT-34"
    },
    {
        code: "IT-VT",
        name: "Viterbo",
        parent: "IT-62"
    },
    {
        code: "IT-VV",
        name: "Vibo Valentia",
        parent: "IT-78"
    },
    {
        code: "JM-01",
        name: "Kingston",
        parent: "JM"
    },
    {
        code: "JM-02",
        name: "Saint Andrew",
        parent: "JM"
    },
    {
        code: "JM-03",
        name: "Saint Thomas",
        parent: "JM"
    },
    {
        code: "JM-04",
        name: "Portland",
        parent: "JM"
    },
    {
        code: "JM-05",
        name: "Saint Mary",
        parent: "JM"
    },
    {
        code: "JM-06",
        name: "Saint Ann",
        parent: "JM"
    },
    {
        code: "JM-07",
        name: "Trelawny",
        parent: "JM"
    },
    {
        code: "JM-08",
        name: "Saint James",
        parent: "JM"
    },
    {
        code: "JM-09",
        name: "Hanover",
        parent: "JM"
    },
    {
        code: "JM-10",
        name: "Westmoreland",
        parent: "JM"
    },
    {
        code: "JM-11",
        name: "Saint Elizabeth",
        parent: "JM"
    },
    {
        code: "JM-12",
        name: "Manchester",
        parent: "JM"
    },
    {
        code: "JM-13",
        name: "Clarendon",
        parent: "JM"
    },
    {
        code: "JM-14",
        name: "Saint Catherine",
        parent: "JM"
    },
    {
        code: "JO-AJ",
        name: "‘Ajlūn",
        parent: "JO"
    },
    {
        code: "JO-AM",
        name: "Al ‘A̅şimah",
        parent: "JO"
    },
    {
        code: "JO-AQ",
        name: "Al ‘Aqabah",
        parent: "JO"
    },
    {
        code: "JO-AT",
        name: "Aţ Ţafīlah",
        parent: "JO"
    },
    {
        code: "JO-AZ",
        name: "Az Zarqā’",
        parent: "JO"
    },
    {
        code: "JO-BA",
        name: "Al Balqā’",
        parent: "JO"
    },
    {
        code: "JO-IR",
        name: "Irbid",
        parent: "JO"
    },
    {
        code: "JO-JA",
        name: "Jarash",
        parent: "JO"
    },
    {
        code: "JO-KA",
        name: "Al Karak",
        parent: "JO"
    },
    {
        code: "JO-MA",
        name: "Al Mafraq",
        parent: "JO"
    },
    {
        code: "JO-MD",
        name: "Mādabā",
        parent: "JO"
    },
    {
        code: "JO-MN",
        name: "Ma‘ān",
        parent: "JO"
    },
    {
        code: "JP-01",
        name: "Hokkaid\xf4",
        parent: "JP"
    },
    {
        code: "JP-02",
        name: "Aomori",
        parent: "JP"
    },
    {
        code: "JP-03",
        name: "Iwate",
        parent: "JP"
    },
    {
        code: "JP-04",
        name: "Miyagi",
        parent: "JP"
    },
    {
        code: "JP-05",
        name: "Akita",
        parent: "JP"
    },
    {
        code: "JP-06",
        name: "Yamagata",
        parent: "JP"
    },
    {
        code: "JP-07",
        name: "Hukusima",
        parent: "JP"
    },
    {
        code: "JP-08",
        name: "Ibaraki",
        parent: "JP"
    },
    {
        code: "JP-09",
        name: "Totigi",
        parent: "JP"
    },
    {
        code: "JP-10",
        name: "Gunma",
        parent: "JP"
    },
    {
        code: "JP-11",
        name: "Saitama",
        parent: "JP"
    },
    {
        code: "JP-12",
        name: "Tiba",
        parent: "JP"
    },
    {
        code: "JP-13",
        name: "T\xf4ky\xf4",
        parent: "JP"
    },
    {
        code: "JP-14",
        name: "Kanagawa",
        parent: "JP"
    },
    {
        code: "JP-15",
        name: "Niigata",
        parent: "JP"
    },
    {
        code: "JP-16",
        name: "Toyama",
        parent: "JP"
    },
    {
        code: "JP-17",
        name: "Isikawa",
        parent: "JP"
    },
    {
        code: "JP-18",
        name: "Hukui",
        parent: "JP"
    },
    {
        code: "JP-19",
        name: "Yamanasi",
        parent: "JP"
    },
    {
        code: "JP-20",
        name: "Nagano",
        parent: "JP"
    },
    {
        code: "JP-21",
        name: "Gihu",
        parent: "JP"
    },
    {
        code: "JP-22",
        name: "Sizuoka",
        parent: "JP"
    },
    {
        code: "JP-23",
        name: "Aiti",
        parent: "JP"
    },
    {
        code: "JP-24",
        name: "Mie",
        parent: "JP"
    },
    {
        code: "JP-25",
        name: "Siga",
        parent: "JP"
    },
    {
        code: "JP-26",
        name: "Ky\xf4to",
        parent: "JP"
    },
    {
        code: "JP-27",
        name: "\xd4saka",
        parent: "JP"
    },
    {
        code: "JP-28",
        name: "Hy\xf4go",
        parent: "JP"
    },
    {
        code: "JP-29",
        name: "Nara",
        parent: "JP"
    },
    {
        code: "JP-30",
        name: "Wakayama",
        parent: "JP"
    },
    {
        code: "JP-31",
        name: "Tottori",
        parent: "JP"
    },
    {
        code: "JP-32",
        name: "Simane",
        parent: "JP"
    },
    {
        code: "JP-33",
        name: "Okayama",
        parent: "JP"
    },
    {
        code: "JP-34",
        name: "Hirosima",
        parent: "JP"
    },
    {
        code: "JP-35",
        name: "Yamaguti",
        parent: "JP"
    },
    {
        code: "JP-36",
        name: "Tokusima",
        parent: "JP"
    },
    {
        code: "JP-37",
        name: "Kagawa",
        parent: "JP"
    },
    {
        code: "JP-38",
        name: "Ehime",
        parent: "JP"
    },
    {
        code: "JP-39",
        name: "K\xf4ti",
        parent: "JP"
    },
    {
        code: "JP-40",
        name: "Hukuoka",
        parent: "JP"
    },
    {
        code: "JP-41",
        name: "Saga",
        parent: "JP"
    },
    {
        code: "JP-42",
        name: "Nagasaki",
        parent: "JP"
    },
    {
        code: "JP-43",
        name: "Kumamoto",
        parent: "JP"
    },
    {
        code: "JP-44",
        name: "\xd4ita",
        parent: "JP"
    },
    {
        code: "JP-45",
        name: "Miyazaki",
        parent: "JP"
    },
    {
        code: "JP-46",
        name: "Kagosima",
        parent: "JP"
    },
    {
        code: "JP-47",
        name: "Okinawa",
        parent: "JP"
    },
    {
        code: "KE-01",
        name: "Baringo",
        parent: "KE"
    },
    {
        code: "KE-02",
        name: "Bomet",
        parent: "KE"
    },
    {
        code: "KE-03",
        name: "Bungoma",
        parent: "KE"
    },
    {
        code: "KE-04",
        name: "Busia",
        parent: "KE"
    },
    {
        code: "KE-05",
        name: "Elgeyo/Marakwet",
        parent: "KE"
    },
    {
        code: "KE-06",
        name: "Embu",
        parent: "KE"
    },
    {
        code: "KE-07",
        name: "Garissa",
        parent: "KE"
    },
    {
        code: "KE-08",
        name: "Homa Bay",
        parent: "KE"
    },
    {
        code: "KE-09",
        name: "Isiolo",
        parent: "KE"
    },
    {
        code: "KE-10",
        name: "Kajiado",
        parent: "KE"
    },
    {
        code: "KE-11",
        name: "Kakamega",
        parent: "KE"
    },
    {
        code: "KE-12",
        name: "Kericho",
        parent: "KE"
    },
    {
        code: "KE-13",
        name: "Kiambu",
        parent: "KE"
    },
    {
        code: "KE-14",
        name: "Kilifi",
        parent: "KE"
    },
    {
        code: "KE-15",
        name: "Kirinyaga",
        parent: "KE"
    },
    {
        code: "KE-16",
        name: "Kisii",
        parent: "KE"
    },
    {
        code: "KE-17",
        name: "Kisumu",
        parent: "KE"
    },
    {
        code: "KE-18",
        name: "Kitui",
        parent: "KE"
    },
    {
        code: "KE-19",
        name: "Kwale",
        parent: "KE"
    },
    {
        code: "KE-20",
        name: "Laikipia",
        parent: "KE"
    },
    {
        code: "KE-21",
        name: "Lamu",
        parent: "KE"
    },
    {
        code: "KE-22",
        name: "Machakos",
        parent: "KE"
    },
    {
        code: "KE-23",
        name: "Makueni",
        parent: "KE"
    },
    {
        code: "KE-24",
        name: "Mandera",
        parent: "KE"
    },
    {
        code: "KE-25",
        name: "Marsabit",
        parent: "KE"
    },
    {
        code: "KE-26",
        name: "Meru",
        parent: "KE"
    },
    {
        code: "KE-27",
        name: "Migori",
        parent: "KE"
    },
    {
        code: "KE-28",
        name: "Mombasa",
        parent: "KE"
    },
    {
        code: "KE-29",
        name: "Murang'a",
        parent: "KE"
    },
    {
        code: "KE-30",
        name: "Nairobi City",
        parent: "KE"
    },
    {
        code: "KE-31",
        name: "Nakuru",
        parent: "KE"
    },
    {
        code: "KE-32",
        name: "Nandi",
        parent: "KE"
    },
    {
        code: "KE-33",
        name: "Narok",
        parent: "KE"
    },
    {
        code: "KE-34",
        name: "Nyamira",
        parent: "KE"
    },
    {
        code: "KE-35",
        name: "Nyandarua",
        parent: "KE"
    },
    {
        code: "KE-36",
        name: "Nyeri",
        parent: "KE"
    },
    {
        code: "KE-37",
        name: "Samburu",
        parent: "KE"
    },
    {
        code: "KE-38",
        name: "Siaya",
        parent: "KE"
    },
    {
        code: "KE-39",
        name: "Taita/Taveta",
        parent: "KE"
    },
    {
        code: "KE-40",
        name: "Tana River",
        parent: "KE"
    },
    {
        code: "KE-41",
        name: "Tharaka-Nithi",
        parent: "KE"
    },
    {
        code: "KE-42",
        name: "Trans Nzoia",
        parent: "KE"
    },
    {
        code: "KE-43",
        name: "Turkana",
        parent: "KE"
    },
    {
        code: "KE-44",
        name: "Uasin Gishu",
        parent: "KE"
    },
    {
        code: "KE-45",
        name: "Vihiga",
        parent: "KE"
    },
    {
        code: "KE-46",
        name: "Wajir",
        parent: "KE"
    },
    {
        code: "KE-47",
        name: "West Pokot",
        parent: "KE"
    },
    {
        code: "KG-B",
        name: "Batken",
        parent: "KG"
    },
    {
        code: "KG-C",
        name: "Ch\xfcy",
        parent: "KG"
    },
    {
        code: "KG-GB",
        name: "Bishkek Shaary",
        parent: "KG"
    },
    {
        code: "KG-GO",
        name: "Osh Shaary",
        parent: "KG"
    },
    {
        code: "KG-J",
        name: "Jalal-Abad",
        parent: "KG"
    },
    {
        code: "KG-N",
        name: "Naryn",
        parent: "KG"
    },
    {
        code: "KG-O",
        name: "Osh",
        parent: "KG"
    },
    {
        code: "KG-T",
        name: "Talas",
        parent: "KG"
    },
    {
        code: "KG-Y",
        name: "Ysyk-K\xf6l",
        parent: "KG"
    },
    {
        code: "KH-1",
        name: "Banteay Mean Choăy",
        parent: "KH"
    },
    {
        code: "KH-10",
        name: "Kracheh",
        parent: "KH"
    },
    {
        code: "KH-11",
        name: "Mondol Kiri",
        parent: "KH"
    },
    {
        code: "KH-12",
        name: "Phnom Penh",
        parent: "KH"
    },
    {
        code: "KH-13",
        name: "Preah Vihear",
        parent: "KH"
    },
    {
        code: "KH-14",
        name: "Prey Veaeng",
        parent: "KH"
    },
    {
        code: "KH-15",
        name: "Pousaat",
        parent: "KH"
    },
    {
        code: "KH-16",
        name: "Rotanak Kiri",
        parent: "KH"
    },
    {
        code: "KH-17",
        name: "Siem Reab",
        parent: "KH"
    },
    {
        code: "KH-18",
        name: "Preah Sihanouk",
        parent: "KH"
    },
    {
        code: "KH-19",
        name: "Stueng Traeng",
        parent: "KH"
    },
    {
        code: "KH-2",
        name: "Baat Dambang",
        parent: "KH"
    },
    {
        code: "KH-20",
        name: "Svaay Rieng",
        parent: "KH"
    },
    {
        code: "KH-21",
        name: "Taakaev",
        parent: "KH"
    },
    {
        code: "KH-22",
        name: "Otdar Mean Chey",
        parent: "KH"
    },
    {
        code: "KH-23",
        name: "Kaeb",
        parent: "KH"
    },
    {
        code: "KH-24",
        name: "Pailin",
        parent: "KH"
    },
    {
        code: "KH-25",
        name: "Tbong Khmum",
        parent: "KH"
    },
    {
        code: "KH-3",
        name: "Kampong Chaam",
        parent: "KH"
    },
    {
        code: "KH-4",
        name: "Kampong Chhnang",
        parent: "KH"
    },
    {
        code: "KH-5",
        name: "Kampong Spueu",
        parent: "KH"
    },
    {
        code: "KH-6",
        name: "Kampong Thum",
        parent: "KH"
    },
    {
        code: "KH-7",
        name: "Kampot",
        parent: "KH"
    },
    {
        code: "KH-8",
        name: "Kandaal",
        parent: "KH"
    },
    {
        code: "KH-9",
        name: "Kaoh Kong",
        parent: "KH"
    },
    {
        code: "KI-G",
        name: "Gilbert Islands",
        parent: "KI"
    },
    {
        code: "KI-L",
        name: "Line Islands",
        parent: "KI"
    },
    {
        code: "KI-P",
        name: "Phoenix Islands",
        parent: "KI"
    },
    {
        code: "KM-A",
        name: "Anjouan",
        parent: "KM"
    },
    {
        code: "KM-G",
        name: "Grande Comore",
        parent: "KM"
    },
    {
        code: "KM-M",
        name: "Moh\xe9li",
        parent: "KM"
    },
    {
        code: "KN-01",
        name: "Christ Church Nichola Town",
        parent: "KN-K"
    },
    {
        code: "KN-02",
        name: "Saint Anne Sandy Point",
        parent: "KN-K"
    },
    {
        code: "KN-03",
        name: "Saint George Basseterre",
        parent: "KN-K"
    },
    {
        code: "KN-04",
        name: "Saint George Gingerland",
        parent: "KN-N"
    },
    {
        code: "KN-05",
        name: "Saint James Windward",
        parent: "KN-N"
    },
    {
        code: "KN-06",
        name: "Saint John Capisterre",
        parent: "KN-K"
    },
    {
        code: "KN-07",
        name: "Saint John Figtree",
        parent: "KN-N"
    },
    {
        code: "KN-08",
        name: "Saint Mary Cayon",
        parent: "KN-K"
    },
    {
        code: "KN-09",
        name: "Saint Paul Capisterre",
        parent: "KN-K"
    },
    {
        code: "KN-10",
        name: "Saint Paul Charlestown",
        parent: "KN-N"
    },
    {
        code: "KN-11",
        name: "Saint Peter Basseterre",
        parent: "KN-K"
    },
    {
        code: "KN-12",
        name: "Saint Thomas Lowland",
        parent: "KN-N"
    },
    {
        code: "KN-13",
        name: "Saint Thomas Middle Island",
        parent: "KN-K"
    },
    {
        code: "KN-15",
        name: "Trinity Palmetto Point",
        parent: "KN-K"
    },
    {
        code: "KN-K",
        name: "Saint Kitts",
        parent: "KN"
    },
    {
        code: "KN-N",
        name: "Nevis",
        parent: "KN"
    },
    {
        code: "KP-01",
        name: "Pyongyang",
        parent: "KP"
    },
    {
        code: "KP-02",
        name: "South Pyongan",
        parent: "KP"
    },
    {
        code: "KP-03",
        name: "North Pyongan",
        parent: "KP"
    },
    {
        code: "KP-04",
        name: "Chagang",
        parent: "KP"
    },
    {
        code: "KP-05",
        name: "South Hwanghae",
        parent: "KP"
    },
    {
        code: "KP-06",
        name: "North Hwanghae",
        parent: "KP"
    },
    {
        code: "KP-07",
        name: "Kangwon",
        parent: "KP"
    },
    {
        code: "KP-08",
        name: "South Hamgyong",
        parent: "KP"
    },
    {
        code: "KP-09",
        name: "North Hamgyong",
        parent: "KP"
    },
    {
        code: "KP-10",
        name: "Ryanggang",
        parent: "KP"
    },
    {
        code: "KP-13",
        name: "Rason",
        parent: "KP"
    },
    {
        code: "KP-14",
        name: "Nampo",
        parent: "KP"
    },
    {
        code: "KP-15",
        name: "Kaesong",
        parent: "KP"
    },
    {
        code: "KR-11",
        name: "Seoul",
        parent: "KR"
    },
    {
        code: "KR-26",
        name: "Busan",
        parent: "KR"
    },
    {
        code: "KR-27",
        name: "Daegu",
        parent: "KR"
    },
    {
        code: "KR-28",
        name: "Incheon",
        parent: "KR"
    },
    {
        code: "KR-29",
        name: "Gwangju",
        parent: "KR"
    },
    {
        code: "KR-30",
        name: "Daejeon",
        parent: "KR"
    },
    {
        code: "KR-31",
        name: "Ulsan",
        parent: "KR"
    },
    {
        code: "KR-41",
        name: "Gyeonggi",
        parent: "KR"
    },
    {
        code: "KR-42",
        name: "Gangwon",
        parent: "KR"
    },
    {
        code: "KR-43",
        name: "North Chungcheong",
        parent: "KR"
    },
    {
        code: "KR-44",
        name: "South Chungcheong",
        parent: "KR"
    },
    {
        code: "KR-45",
        name: "North Jeolla",
        parent: "KR"
    },
    {
        code: "KR-46",
        name: "South Jeolla",
        parent: "KR"
    },
    {
        code: "KR-47",
        name: "North Gyeongsang",
        parent: "KR"
    },
    {
        code: "KR-48",
        name: "South Gyeongsang",
        parent: "KR"
    },
    {
        code: "KR-49",
        name: "Jeju",
        parent: "KR"
    },
    {
        code: "KR-50",
        name: "Sejong",
        parent: "KR"
    },
    {
        code: "KW-AH",
        name: "Al Aḩmadī",
        parent: "KW"
    },
    {
        code: "KW-FA",
        name: "Al Farwānīyah",
        parent: "KW"
    },
    {
        code: "KW-HA",
        name: "Ḩawallī",
        parent: "KW"
    },
    {
        code: "KW-JA",
        name: "Al Jahrā’",
        parent: "KW"
    },
    {
        code: "KW-KU",
        name: "Al ‘Āşimah",
        parent: "KW"
    },
    {
        code: "KW-MU",
        name: "Mubārak al Kabīr",
        parent: "KW"
    },
    {
        code: "KZ-10",
        name: "Abay oblysy",
        parent: "KZ"
    },
    {
        code: "KZ-11",
        name: "Aqmola oblysy",
        parent: "KZ"
    },
    {
        code: "KZ-15",
        name: "Aqt\xf6be oblysy",
        parent: "KZ"
    },
    {
        code: "KZ-19",
        name: "Almaty oblysy",
        parent: "KZ"
    },
    {
        code: "KZ-23",
        name: "Atyraū oblysy",
        parent: "KZ"
    },
    {
        code: "KZ-27",
        name: "Batys Qazaqstan oblysy",
        parent: "KZ"
    },
    {
        code: "KZ-31",
        name: "Zhambyl oblysy",
        parent: "KZ"
    },
    {
        code: "KZ-33",
        name: "Zhetisū oblysy",
        parent: "KZ"
    },
    {
        code: "KZ-35",
        name: "Qaraghandy oblysy",
        parent: "KZ"
    },
    {
        code: "KZ-39",
        name: "Qostanay oblysy",
        parent: "KZ"
    },
    {
        code: "KZ-43",
        name: "Qyzylorda oblysy",
        parent: "KZ"
    },
    {
        code: "KZ-47",
        name: "Mangghystaū oblysy",
        parent: "KZ"
    },
    {
        code: "KZ-55",
        name: "Pavlodar oblysy",
        parent: "KZ"
    },
    {
        code: "KZ-59",
        name: "Solt\xfcstik Qazaqstan oblysy",
        parent: "KZ"
    },
    {
        code: "KZ-61",
        name: "T\xfcrkistan oblysy",
        parent: "KZ"
    },
    {
        code: "KZ-62",
        name: "Ulytaū oblysy",
        parent: "KZ"
    },
    {
        code: "KZ-63",
        name: "Shyghys Qazaqstan oblysy",
        parent: "KZ"
    },
    {
        code: "KZ-71",
        name: "Astana",
        parent: "KZ"
    },
    {
        code: "KZ-75",
        name: "Almaty",
        parent: "KZ"
    },
    {
        code: "KZ-79",
        name: "Shymkent",
        parent: "KZ"
    },
    {
        code: "LA-AT",
        name: "Attapu",
        parent: "LA"
    },
    {
        code: "LA-BK",
        name: "Bok\xe8o",
        parent: "LA"
    },
    {
        code: "LA-BL",
        name: "Bolikhamxai",
        parent: "LA"
    },
    {
        code: "LA-CH",
        name: "Champasak",
        parent: "LA"
    },
    {
        code: "LA-HO",
        name: "Houaphan",
        parent: "LA"
    },
    {
        code: "LA-KH",
        name: "Khammouan",
        parent: "LA"
    },
    {
        code: "LA-LM",
        name: "Louang Namtha",
        parent: "LA"
    },
    {
        code: "LA-LP",
        name: "Louangphabang",
        parent: "LA"
    },
    {
        code: "LA-OU",
        name: "Oud\xf4mxai",
        parent: "LA"
    },
    {
        code: "LA-PH",
        name: "Ph\xf4ngsali",
        parent: "LA"
    },
    {
        code: "LA-SL",
        name: "Salavan",
        parent: "LA"
    },
    {
        code: "LA-SV",
        name: "Savannakh\xe9t",
        parent: "LA"
    },
    {
        code: "LA-VI",
        name: "Viangchan",
        parent: "LA"
    },
    {
        code: "LA-VT",
        name: "Viangchan",
        parent: "LA"
    },
    {
        code: "LA-XA",
        name: "Xaignabouli",
        parent: "LA"
    },
    {
        code: "LA-XE",
        name: "X\xe9kong",
        parent: "LA"
    },
    {
        code: "LA-XI",
        name: "Xiangkhouang",
        parent: "LA"
    },
    {
        code: "LA-XS",
        name: "Xais\xf4mboun",
        parent: "LA"
    },
    {
        code: "LB-AK",
        name: "Aakk\xe2r",
        parent: "LB"
    },
    {
        code: "LB-AS",
        name: "Liban-Nord",
        parent: "LB"
    },
    {
        code: "LB-BA",
        name: "Beyrouth",
        parent: "LB"
    },
    {
        code: "LB-BH",
        name: "Baalbek-Hermel",
        parent: "LB"
    },
    {
        code: "LB-BI",
        name: "B\xe9qaa",
        parent: "LB"
    },
    {
        code: "LB-JA",
        name: "Liban-Sud",
        parent: "LB"
    },
    {
        code: "LB-JL",
        name: "Mont-Liban",
        parent: "LB"
    },
    {
        code: "LB-NA",
        name: "Nabat\xeey\xe9",
        parent: "LB"
    },
    {
        code: "LC-01",
        name: "Anse la Raye",
        parent: "LC"
    },
    {
        code: "LC-02",
        name: "Castries",
        parent: "LC"
    },
    {
        code: "LC-03",
        name: "Choiseul",
        parent: "LC"
    },
    {
        code: "LC-05",
        name: "Dennery",
        parent: "LC"
    },
    {
        code: "LC-06",
        name: "Gros Islet",
        parent: "LC"
    },
    {
        code: "LC-07",
        name: "Laborie",
        parent: "LC"
    },
    {
        code: "LC-08",
        name: "Micoud",
        parent: "LC"
    },
    {
        code: "LC-10",
        name: "Soufri\xe8re",
        parent: "LC"
    },
    {
        code: "LC-11",
        name: "Vieux Fort",
        parent: "LC"
    },
    {
        code: "LC-12",
        name: "Canaries",
        parent: "LC"
    },
    {
        code: "LI-01",
        name: "Balzers",
        parent: "LI"
    },
    {
        code: "LI-02",
        name: "Eschen",
        parent: "LI"
    },
    {
        code: "LI-03",
        name: "Gamprin",
        parent: "LI"
    },
    {
        code: "LI-04",
        name: "Mauren",
        parent: "LI"
    },
    {
        code: "LI-05",
        name: "Planken",
        parent: "LI"
    },
    {
        code: "LI-06",
        name: "Ruggell",
        parent: "LI"
    },
    {
        code: "LI-07",
        name: "Schaan",
        parent: "LI"
    },
    {
        code: "LI-08",
        name: "Schellenberg",
        parent: "LI"
    },
    {
        code: "LI-09",
        name: "Triesen",
        parent: "LI"
    },
    {
        code: "LI-10",
        name: "Triesenberg",
        parent: "LI"
    },
    {
        code: "LI-11",
        name: "Vaduz",
        parent: "LI"
    },
    {
        code: "LK-1",
        name: "Western Province",
        parent: "LK"
    },
    {
        code: "LK-11",
        name: "Colombo",
        parent: "LK-1"
    },
    {
        code: "LK-12",
        name: "Gampaha",
        parent: "LK-1"
    },
    {
        code: "LK-13",
        name: "Kalutara",
        parent: "LK-1"
    },
    {
        code: "LK-2",
        name: "Central Province",
        parent: "LK"
    },
    {
        code: "LK-21",
        name: "Kandy",
        parent: "LK-2"
    },
    {
        code: "LK-22",
        name: "Matale",
        parent: "LK-2"
    },
    {
        code: "LK-23",
        name: "Nuwara Eliya",
        parent: "LK-2"
    },
    {
        code: "LK-3",
        name: "Southern Province",
        parent: "LK"
    },
    {
        code: "LK-31",
        name: "Galle",
        parent: "LK-3"
    },
    {
        code: "LK-32",
        name: "Matara",
        parent: "LK-3"
    },
    {
        code: "LK-33",
        name: "Hambantota",
        parent: "LK-3"
    },
    {
        code: "LK-4",
        name: "Northern Province",
        parent: "LK"
    },
    {
        code: "LK-41",
        name: "Jaffna",
        parent: "LK-4"
    },
    {
        code: "LK-42",
        name: "Kilinochchi",
        parent: "LK-4"
    },
    {
        code: "LK-43",
        name: "Mannar",
        parent: "LK-4"
    },
    {
        code: "LK-44",
        name: "Vavuniya",
        parent: "LK-4"
    },
    {
        code: "LK-45",
        name: "Mullaittivu",
        parent: "LK-4"
    },
    {
        code: "LK-5",
        name: "Eastern Province",
        parent: "LK"
    },
    {
        code: "LK-51",
        name: "Batticaloa",
        parent: "LK-5"
    },
    {
        code: "LK-52",
        name: "Ampara",
        parent: "LK-5"
    },
    {
        code: "LK-53",
        name: "Trincomalee",
        parent: "LK-5"
    },
    {
        code: "LK-6",
        name: "North Western Province",
        parent: "LK"
    },
    {
        code: "LK-61",
        name: "Kurunegala",
        parent: "LK-6"
    },
    {
        code: "LK-62",
        name: "Puttalam",
        parent: "LK-6"
    },
    {
        code: "LK-7",
        name: "North Central Province",
        parent: "LK"
    },
    {
        code: "LK-71",
        name: "Anuradhapura",
        parent: "LK-7"
    },
    {
        code: "LK-72",
        name: "Polonnaruwa",
        parent: "LK-7"
    },
    {
        code: "LK-8",
        name: "Uva Province",
        parent: "LK"
    },
    {
        code: "LK-81",
        name: "Badulla",
        parent: "LK-8"
    },
    {
        code: "LK-82",
        name: "Monaragala",
        parent: "LK-8"
    },
    {
        code: "LK-9",
        name: "Sabaragamuwa Province",
        parent: "LK"
    },
    {
        code: "LK-91",
        name: "Ratnapura",
        parent: "LK-9"
    },
    {
        code: "LK-92",
        name: "Kegalla",
        parent: "LK-9"
    },
    {
        code: "LR-BG",
        name: "Bong",
        parent: "LR"
    },
    {
        code: "LR-BM",
        name: "Bomi",
        parent: "LR"
    },
    {
        code: "LR-CM",
        name: "Grand Cape Mount",
        parent: "LR"
    },
    {
        code: "LR-GB",
        name: "Grand Bassa",
        parent: "LR"
    },
    {
        code: "LR-GG",
        name: "Grand Gedeh",
        parent: "LR"
    },
    {
        code: "LR-GK",
        name: "Grand Kru",
        parent: "LR"
    },
    {
        code: "LR-GP",
        name: "Gbarpolu",
        parent: "LR"
    },
    {
        code: "LR-LO",
        name: "Lofa",
        parent: "LR"
    },
    {
        code: "LR-MG",
        name: "Margibi",
        parent: "LR"
    },
    {
        code: "LR-MO",
        name: "Montserrado",
        parent: "LR"
    },
    {
        code: "LR-MY",
        name: "Maryland",
        parent: "LR"
    },
    {
        code: "LR-NI",
        name: "Nimba",
        parent: "LR"
    },
    {
        code: "LR-RG",
        name: "River Gee",
        parent: "LR"
    },
    {
        code: "LR-RI",
        name: "River Cess",
        parent: "LR"
    },
    {
        code: "LR-SI",
        name: "Sinoe",
        parent: "LR"
    },
    {
        code: "LS-A",
        name: "Maseru",
        parent: "LS"
    },
    {
        code: "LS-B",
        name: "Botha-Bothe",
        parent: "LS"
    },
    {
        code: "LS-C",
        name: "Leribe",
        parent: "LS"
    },
    {
        code: "LS-D",
        name: "Berea",
        parent: "LS"
    },
    {
        code: "LS-E",
        name: "Mafeteng",
        parent: "LS"
    },
    {
        code: "LS-F",
        name: "Mohale's Hoek",
        parent: "LS"
    },
    {
        code: "LS-G",
        name: "Quthing",
        parent: "LS"
    },
    {
        code: "LS-H",
        name: "Qacha's Nek",
        parent: "LS"
    },
    {
        code: "LS-J",
        name: "Mokhotlong",
        parent: "LS"
    },
    {
        code: "LS-K",
        name: "Thaba-Tseka",
        parent: "LS"
    },
    {
        code: "LT-01",
        name: "Akmenė",
        parent: "LT-SA"
    },
    {
        code: "LT-02",
        name: "Alytaus miestas",
        parent: "LT-AL"
    },
    {
        code: "LT-03",
        name: "Alytus",
        parent: "LT-AL"
    },
    {
        code: "LT-04",
        name: "Anykščiai",
        parent: "LT-UT"
    },
    {
        code: "LT-05",
        name: "Birštonas",
        parent: "LT-KU"
    },
    {
        code: "LT-06",
        name: "Biržai",
        parent: "LT-PN"
    },
    {
        code: "LT-07",
        name: "Druskininkai",
        parent: "LT-AL"
    },
    {
        code: "LT-08",
        name: "Elektrėnai",
        parent: "LT-VL"
    },
    {
        code: "LT-09",
        name: "Ignalina",
        parent: "LT-UT"
    },
    {
        code: "LT-10",
        name: "Jonava",
        parent: "LT-KU"
    },
    {
        code: "LT-11",
        name: "Joniškis",
        parent: "LT-SA"
    },
    {
        code: "LT-12",
        name: "Jurbarkas",
        parent: "LT-TA"
    },
    {
        code: "LT-13",
        name: "Kaišiadorys",
        parent: "LT-KU"
    },
    {
        code: "LT-14",
        name: "Kalvarija",
        parent: "LT-MR"
    },
    {
        code: "LT-15",
        name: "Kauno miestas",
        parent: "LT-KU"
    },
    {
        code: "LT-16",
        name: "Kaunas",
        parent: "LT-KU"
    },
    {
        code: "LT-17",
        name: "Kazlų Rūdos",
        parent: "LT-MR"
    },
    {
        code: "LT-18",
        name: "Kėdainiai",
        parent: "LT-KU"
    },
    {
        code: "LT-19",
        name: "Kelmė",
        parent: "LT-SA"
    },
    {
        code: "LT-20",
        name: "Klaipėdos miestas",
        parent: "LT-KL"
    },
    {
        code: "LT-21",
        name: "Klaipėda",
        parent: "LT-KL"
    },
    {
        code: "LT-22",
        name: "Kretinga",
        parent: "LT-KL"
    },
    {
        code: "LT-23",
        name: "Kupiškis",
        parent: "LT-PN"
    },
    {
        code: "LT-24",
        name: "Lazdijai",
        parent: "LT-AL"
    },
    {
        code: "LT-25",
        name: "Marijampolė",
        parent: "LT-MR"
    },
    {
        code: "LT-26",
        name: "Mažeikiai",
        parent: "LT-TE"
    },
    {
        code: "LT-27",
        name: "Molėtai",
        parent: "LT-UT"
    },
    {
        code: "LT-28",
        name: "Neringa",
        parent: "LT-KL"
    },
    {
        code: "LT-29",
        name: "Pagėgiai",
        parent: "LT-TA"
    },
    {
        code: "LT-30",
        name: "Pakruojis",
        parent: "LT-SA"
    },
    {
        code: "LT-31",
        name: "Palangos miestas",
        parent: "LT-KL"
    },
    {
        code: "LT-32",
        name: "Panevėžio miestas",
        parent: "LT-PN"
    },
    {
        code: "LT-33",
        name: "Panevėžys",
        parent: "LT-PN"
    },
    {
        code: "LT-34",
        name: "Pasvalys",
        parent: "LT-PN"
    },
    {
        code: "LT-35",
        name: "Plungė",
        parent: "LT-TE"
    },
    {
        code: "LT-36",
        name: "Prienai",
        parent: "LT-KU"
    },
    {
        code: "LT-37",
        name: "Radviliškis",
        parent: "LT-SA"
    },
    {
        code: "LT-38",
        name: "Raseiniai",
        parent: "LT-KU"
    },
    {
        code: "LT-39",
        name: "Rietavas",
        parent: "LT-TE"
    },
    {
        code: "LT-40",
        name: "Rokiškis",
        parent: "LT-PN"
    },
    {
        code: "LT-41",
        name: "Šakiai",
        parent: "LT-MR"
    },
    {
        code: "LT-42",
        name: "Šalčininkai",
        parent: "LT-VL"
    },
    {
        code: "LT-43",
        name: "Šiaulių miestas",
        parent: "LT-SA"
    },
    {
        code: "LT-44",
        name: "Šiauliai",
        parent: "LT-SA"
    },
    {
        code: "LT-45",
        name: "Šilalė",
        parent: "LT-TA"
    },
    {
        code: "LT-46",
        name: "Šilutė",
        parent: "LT-KL"
    },
    {
        code: "LT-47",
        name: "Širvintos",
        parent: "LT-VL"
    },
    {
        code: "LT-48",
        name: "Skuodas",
        parent: "LT-KL"
    },
    {
        code: "LT-49",
        name: "Švenčionys",
        parent: "LT-VL"
    },
    {
        code: "LT-50",
        name: "Tauragė",
        parent: "LT-TA"
    },
    {
        code: "LT-51",
        name: "Telšiai",
        parent: "LT-TE"
    },
    {
        code: "LT-52",
        name: "Trakai",
        parent: "LT-VL"
    },
    {
        code: "LT-53",
        name: "Ukmergė",
        parent: "LT-VL"
    },
    {
        code: "LT-54",
        name: "Utena",
        parent: "LT-UT"
    },
    {
        code: "LT-55",
        name: "Varėna",
        parent: "LT-AL"
    },
    {
        code: "LT-56",
        name: "Vilkaviškis",
        parent: "LT-MR"
    },
    {
        code: "LT-57",
        name: "Vilniaus miestas",
        parent: "LT-VL"
    },
    {
        code: "LT-58",
        name: "Vilnius",
        parent: "LT-VL"
    },
    {
        code: "LT-59",
        name: "Visaginas",
        parent: "LT-UT"
    },
    {
        code: "LT-60",
        name: "Zarasai",
        parent: "LT-UT"
    },
    {
        code: "LT-AL",
        name: "Alytaus apskritis",
        parent: "LT"
    },
    {
        code: "LT-KL",
        name: "Klaipėdos apskritis",
        parent: "LT"
    },
    {
        code: "LT-KU",
        name: "Kauno apskritis",
        parent: "LT"
    },
    {
        code: "LT-MR",
        name: "Marijampolės apskritis",
        parent: "LT"
    },
    {
        code: "LT-PN",
        name: "Panevėžio apskritis",
        parent: "LT"
    },
    {
        code: "LT-SA",
        name: "Šiaulių apskritis",
        parent: "LT"
    },
    {
        code: "LT-TA",
        name: "Tauragės apskritis",
        parent: "LT"
    },
    {
        code: "LT-TE",
        name: "Telšių apskritis",
        parent: "LT"
    },
    {
        code: "LT-UT",
        name: "Utenos apskritis",
        parent: "LT"
    },
    {
        code: "LT-VL",
        name: "Vilniaus apskritis",
        parent: "LT"
    },
    {
        code: "LU-CA",
        name: "Capellen",
        parent: "LU"
    },
    {
        code: "LU-CL",
        name: "Clerf",
        parent: "LU"
    },
    {
        code: "LU-D",
        name: "Diekirch (de, lb)",
        parent: "LU"
    },
    {
        code: "LU-DI",
        name: "Diekirch",
        parent: "LU"
    },
    {
        code: "LU-EC",
        name: "Echternach",
        parent: "LU"
    },
    {
        code: "LU-ES",
        name: "Esch an der Alzette",
        parent: "LU"
    },
    {
        code: "LU-G",
        name: "Grevenmacher (de, lb)",
        parent: "LU"
    },
    {
        code: "LU-GR",
        name: "Grevenmacher",
        parent: "LU"
    },
    {
        code: "LU-L",
        name: "Luxembourg",
        parent: "LU"
    },
    {
        code: "LU-LU",
        name: "Luxemburg",
        parent: "LU"
    },
    {
        code: "LU-ME",
        name: "Mersch",
        parent: "LU"
    },
    {
        code: "LU-RD",
        name: "Redingen",
        parent: "LU"
    },
    {
        code: "LU-RM",
        name: "Remich",
        parent: "LU"
    },
    {
        code: "LU-VD",
        name: "Vianden",
        parent: "LU"
    },
    {
        code: "LU-WI",
        name: "Wiltz",
        parent: "LU"
    },
    {
        code: "LV-002",
        name: "Aizkraukles novads",
        parent: "LV"
    },
    {
        code: "LV-007",
        name: "Alūksnes novads",
        parent: "LV"
    },
    {
        code: "LV-011",
        name: "Ādažu novads",
        parent: "LV"
    },
    {
        code: "LV-015",
        name: "Balvu novads",
        parent: "LV"
    },
    {
        code: "LV-016",
        name: "Bauskas novads",
        parent: "LV"
    },
    {
        code: "LV-022",
        name: "Cēsu novads",
        parent: "LV"
    },
    {
        code: "LV-026",
        name: "Dobeles novads",
        parent: "LV"
    },
    {
        code: "LV-033",
        name: "Gulbenes novads",
        parent: "LV"
    },
    {
        code: "LV-041",
        name: "Jelgavas novads",
        parent: "LV"
    },
    {
        code: "LV-042",
        name: "Jēkabpils novads",
        parent: "LV"
    },
    {
        code: "LV-047",
        name: "Krāslavas novads",
        parent: "LV"
    },
    {
        code: "LV-050",
        name: "Kuldīgas novads",
        parent: "LV"
    },
    {
        code: "LV-052",
        name: "Ķekavas novads",
        parent: "LV"
    },
    {
        code: "LV-054",
        name: "Limbažu novads",
        parent: "LV"
    },
    {
        code: "LV-056",
        name: "Līvānu novads",
        parent: "LV"
    },
    {
        code: "LV-058",
        name: "Ludzas novads",
        parent: "LV"
    },
    {
        code: "LV-059",
        name: "Madonas novads",
        parent: "LV"
    },
    {
        code: "LV-062",
        name: "Mārupes novads",
        parent: "LV"
    },
    {
        code: "LV-067",
        name: "Ogres novads",
        parent: "LV"
    },
    {
        code: "LV-068",
        name: "Olaines novads",
        parent: "LV"
    },
    {
        code: "LV-073",
        name: "Preiļu novads",
        parent: "LV"
    },
    {
        code: "LV-077",
        name: "Rēzeknes novads",
        parent: "LV"
    },
    {
        code: "LV-080",
        name: "Ropažu novads",
        parent: "LV"
    },
    {
        code: "LV-087",
        name: "Salaspils novads",
        parent: "LV"
    },
    {
        code: "LV-088",
        name: "Saldus novads",
        parent: "LV"
    },
    {
        code: "LV-089",
        name: "Saulkrastu novads",
        parent: "LV"
    },
    {
        code: "LV-091",
        name: "Siguldas novads",
        parent: "LV"
    },
    {
        code: "LV-094",
        name: "Smiltenes novads",
        parent: "LV"
    },
    {
        code: "LV-097",
        name: "Talsu novads",
        parent: "LV"
    },
    {
        code: "LV-099",
        name: "Tukuma novads",
        parent: "LV"
    },
    {
        code: "LV-101",
        name: "Valkas novads",
        parent: "LV"
    },
    {
        code: "LV-102",
        name: "Varakļānu novads",
        parent: "LV"
    },
    {
        code: "LV-106",
        name: "Ventspils novads",
        parent: "LV"
    },
    {
        code: "LV-111",
        name: "Augšdaugavas novads",
        parent: "LV"
    },
    {
        code: "LV-112",
        name: "Dienvidkurzemes Novads",
        parent: "LV"
    },
    {
        code: "LV-113",
        name: "Valmieras Novads",
        parent: "LV"
    },
    {
        code: "LV-DGV",
        name: "Daugavpils",
        parent: "LV"
    },
    {
        code: "LV-JEL",
        name: "Jelgava",
        parent: "LV"
    },
    {
        code: "LV-JUR",
        name: "Jūrmala",
        parent: "LV"
    },
    {
        code: "LV-LPX",
        name: "Liepāja",
        parent: "LV"
    },
    {
        code: "LV-REZ",
        name: "Rēzekne",
        parent: "LV"
    },
    {
        code: "LV-RIX",
        name: "Rīga",
        parent: "LV"
    },
    {
        code: "LV-VEN",
        name: "Ventspils",
        parent: "LV"
    },
    {
        code: "LY-BA",
        name: "Banghāzī",
        parent: "LY"
    },
    {
        code: "LY-BU",
        name: "Al Buţnān",
        parent: "LY"
    },
    {
        code: "LY-DR",
        name: "Darnah",
        parent: "LY"
    },
    {
        code: "LY-GT",
        name: "Ghāt",
        parent: "LY"
    },
    {
        code: "LY-JA",
        name: "Al Jabal al Akhḑar",
        parent: "LY"
    },
    {
        code: "LY-JG",
        name: "Al Jabal al Gharbī",
        parent: "LY"
    },
    {
        code: "LY-JI",
        name: "Al Jafārah",
        parent: "LY"
    },
    {
        code: "LY-JU",
        name: "Al Jufrah",
        parent: "LY"
    },
    {
        code: "LY-KF",
        name: "Al Kufrah",
        parent: "LY"
    },
    {
        code: "LY-MB",
        name: "Al Marqab",
        parent: "LY"
    },
    {
        code: "LY-MI",
        name: "Mişrātah",
        parent: "LY"
    },
    {
        code: "LY-MJ",
        name: "Al Marj",
        parent: "LY"
    },
    {
        code: "LY-MQ",
        name: "Murzuq",
        parent: "LY"
    },
    {
        code: "LY-NL",
        name: "Nālūt",
        parent: "LY"
    },
    {
        code: "LY-NQ",
        name: "An Nuqāţ al Khams",
        parent: "LY"
    },
    {
        code: "LY-SB",
        name: "Sabhā",
        parent: "LY"
    },
    {
        code: "LY-SR",
        name: "Surt",
        parent: "LY"
    },
    {
        code: "LY-TB",
        name: "Ţarābulus",
        parent: "LY"
    },
    {
        code: "LY-WA",
        name: "Al Wāḩāt",
        parent: "LY"
    },
    {
        code: "LY-WD",
        name: "Wādī al Ḩayāt",
        parent: "LY"
    },
    {
        code: "LY-WS",
        name: "Wādī ash Shāţi’",
        parent: "LY"
    },
    {
        code: "LY-ZA",
        name: "Az Zāwiyah",
        parent: "LY"
    },
    {
        code: "MA-01",
        name: "Tanger-T\xe9touan-Al Hoce\xefma",
        parent: "MA"
    },
    {
        code: "MA-02",
        name: "L'Oriental",
        parent: "MA"
    },
    {
        code: "MA-03",
        name: "F\xe8s-Mekn\xe8s",
        parent: "MA"
    },
    {
        code: "MA-04",
        name: "Rabat-Sal\xe9-K\xe9nitra",
        parent: "MA"
    },
    {
        code: "MA-05",
        name: "B\xe9ni Mellal-Kh\xe9nifra",
        parent: "MA"
    },
    {
        code: "MA-06",
        name: "Casablanca-Settat",
        parent: "MA"
    },
    {
        code: "MA-07",
        name: "Marrakech-Safi",
        parent: "MA"
    },
    {
        code: "MA-08",
        name: "Dr\xe2a-Tafilalet",
        parent: "MA"
    },
    {
        code: "MA-09",
        name: "Souss-Massa",
        parent: "MA"
    },
    {
        code: "MA-10",
        name: "Guelmim-Oued Noun (EH-partial)",
        parent: "MA"
    },
    {
        code: "MA-11",
        name: "La\xe2youne-Sakia El Hamra (EH-partial)",
        parent: "MA"
    },
    {
        code: "MA-12",
        name: "Dakhla-Oued Ed-Dahab (EH)",
        parent: "MA"
    },
    {
        code: "MA-AGD",
        name: "Agadir-Ida-Ou-Tanane",
        parent: "MA-09"
    },
    {
        code: "MA-AOU",
        name: "Aousserd (EH)",
        parent: "MA-12"
    },
    {
        code: "MA-ASZ",
        name: "Assa-Zag (EH-partial)",
        parent: "MA-10"
    },
    {
        code: "MA-AZI",
        name: "Azilal",
        parent: "MA-05"
    },
    {
        code: "MA-BEM",
        name: "B\xe9ni Mellal",
        parent: "MA-05"
    },
    {
        code: "MA-BER",
        name: "Berkane",
        parent: "MA-02"
    },
    {
        code: "MA-BES",
        name: "Benslimane",
        parent: "MA-06"
    },
    {
        code: "MA-BOD",
        name: "Boujdour (EH)",
        parent: "MA-11"
    },
    {
        code: "MA-BOM",
        name: "Boulemane",
        parent: "MA-03"
    },
    {
        code: "MA-BRR",
        name: "Berrechid",
        parent: "MA-06"
    },
    {
        code: "MA-CAS",
        name: "Casablanca",
        parent: "MA-06"
    },
    {
        code: "MA-CHE",
        name: "Chefchaouen",
        parent: "MA-01"
    },
    {
        code: "MA-CHI",
        name: "Chichaoua",
        parent: "MA-07"
    },
    {
        code: "MA-CHT",
        name: "Chtouka-Ait Baha",
        parent: "MA-06"
    },
    {
        code: "MA-DRI",
        name: "Driouch",
        parent: "MA-02"
    },
    {
        code: "MA-ERR",
        name: "Errachidia",
        parent: "MA-08"
    },
    {
        code: "MA-ESI",
        name: "Essaouira",
        parent: "MA-07"
    },
    {
        code: "MA-ESM",
        name: "Es-Semara (EH-partial)",
        parent: "MA-11"
    },
    {
        code: "MA-FAH",
        name: "Fahs-Anjra",
        parent: "MA-01"
    },
    {
        code: "MA-FES",
        name: "F\xe8s",
        parent: "MA-03"
    },
    {
        code: "MA-FIG",
        name: "Figuig",
        parent: "MA-02"
    },
    {
        code: "MA-FQH",
        name: "Fquih Ben Salah",
        parent: "MA-05"
    },
    {
        code: "MA-GUE",
        name: "Guelmim",
        parent: "MA-10"
    },
    {
        code: "MA-GUF",
        name: "Guercif",
        parent: "MA-02"
    },
    {
        code: "MA-HAJ",
        name: "El Hajeb",
        parent: "MA-03"
    },
    {
        code: "MA-HAO",
        name: "Al Haouz",
        parent: "MA-07"
    },
    {
        code: "MA-HOC",
        name: "Al Hoce\xefma",
        parent: "MA-01"
    },
    {
        code: "MA-IFR",
        name: "Ifrane",
        parent: "MA-03"
    },
    {
        code: "MA-INE",
        name: "Inezgane-Ait Melloul",
        parent: "MA-09"
    },
    {
        code: "MA-JDI",
        name: "El Jadida",
        parent: "MA-06"
    },
    {
        code: "MA-JRA",
        name: "Jerada",
        parent: "MA-02"
    },
    {
        code: "MA-KEN",
        name: "K\xe9nitra",
        parent: "MA-04"
    },
    {
        code: "MA-KES",
        name: "El Kel\xe2a des Sraghna",
        parent: "MA-07"
    },
    {
        code: "MA-KHE",
        name: "Kh\xe9misset",
        parent: "MA-04"
    },
    {
        code: "MA-KHN",
        name: "Kh\xe9nifra",
        parent: "MA-05"
    },
    {
        code: "MA-KHO",
        name: "Khouribga",
        parent: "MA-05"
    },
    {
        code: "MA-LAA",
        name: "La\xe2youne (EH)",
        parent: "MA-11"
    },
    {
        code: "MA-LAR",
        name: "Larache",
        parent: "MA-01"
    },
    {
        code: "MA-MAR",
        name: "Marrakech",
        parent: "MA-07"
    },
    {
        code: "MA-MDF",
        name: "M’diq-Fnideq",
        parent: "MA-01"
    },
    {
        code: "MA-MED",
        name: "M\xe9diouna",
        parent: "MA-06"
    },
    {
        code: "MA-MEK",
        name: "Mekn\xe8s",
        parent: "MA-03"
    },
    {
        code: "MA-MID",
        name: "Midelt",
        parent: "MA-08"
    },
    {
        code: "MA-MOH",
        name: "Mohammadia",
        parent: "MA-06"
    },
    {
        code: "MA-MOU",
        name: "Moulay Yacoub",
        parent: "MA-03"
    },
    {
        code: "MA-NAD",
        name: "Nador",
        parent: "MA-02"
    },
    {
        code: "MA-NOU",
        name: "Nouaceur",
        parent: "MA-04"
    },
    {
        code: "MA-OUA",
        name: "Ouarzazate",
        parent: "MA-08"
    },
    {
        code: "MA-OUD",
        name: "Oued Ed-Dahab (EH)",
        parent: "MA-12"
    },
    {
        code: "MA-OUJ",
        name: "Oujda-Angad",
        parent: "MA-02"
    },
    {
        code: "MA-OUZ",
        name: "Ouezzane",
        parent: "MA-01"
    },
    {
        code: "MA-RAB",
        name: "Rabat",
        parent: "MA-04"
    },
    {
        code: "MA-REH",
        name: "Rehamna",
        parent: "MA-07"
    },
    {
        code: "MA-SAF",
        name: "Safi",
        parent: "MA-07"
    },
    {
        code: "MA-SAL",
        name: "Sal\xe9",
        parent: "MA-04"
    },
    {
        code: "MA-SEF",
        name: "Sefrou",
        parent: "MA-03"
    },
    {
        code: "MA-SET",
        name: "Settat",
        parent: "MA-06"
    },
    {
        code: "MA-SIB",
        name: "Sidi Bennour",
        parent: "MA-06"
    },
    {
        code: "MA-SIF",
        name: "Sidi Ifni",
        parent: "MA-10"
    },
    {
        code: "MA-SIK",
        name: "Sidi Kacem",
        parent: "MA-04"
    },
    {
        code: "MA-SIL",
        name: "Sidi Slimane",
        parent: "MA-04"
    },
    {
        code: "MA-SKH",
        name: "Skhirate-T\xe9mara",
        parent: "MA-04"
    },
    {
        code: "MA-TAF",
        name: "Tarfaya (EH-partial)",
        parent: "MA-11"
    },
    {
        code: "MA-TAI",
        name: "Taourirt",
        parent: "MA-02"
    },
    {
        code: "MA-TAO",
        name: "Taounate",
        parent: "MA-03"
    },
    {
        code: "MA-TAR",
        name: "Taroudannt",
        parent: "MA-09"
    },
    {
        code: "MA-TAT",
        name: "Tata",
        parent: "MA-09"
    },
    {
        code: "MA-TAZ",
        name: "Taza",
        parent: "MA-03"
    },
    {
        code: "MA-TET",
        name: "T\xe9touan",
        parent: "MA-01"
    },
    {
        code: "MA-TIN",
        name: "Tinghir",
        parent: "MA-08"
    },
    {
        code: "MA-TIZ",
        name: "Tiznit",
        parent: "MA-09"
    },
    {
        code: "MA-TNG",
        name: "Tanger-Assilah",
        parent: "MA-01"
    },
    {
        code: "MA-TNT",
        name: "Tan-Tan (EH-partial)",
        parent: "MA-10"
    },
    {
        code: "MA-YUS",
        name: "Youssoufia",
        parent: "MA-07"
    },
    {
        code: "MA-ZAG",
        name: "Zagora",
        parent: "MA-08"
    },
    {
        code: "MC-CL",
        name: "La Colle",
        parent: "MC"
    },
    {
        code: "MC-CO",
        name: "La Condamine",
        parent: "MC"
    },
    {
        code: "MC-FO",
        name: "Fontvieille",
        parent: "MC"
    },
    {
        code: "MC-GA",
        name: "La Gare",
        parent: "MC"
    },
    {
        code: "MC-JE",
        name: "Jardin Exotique",
        parent: "MC"
    },
    {
        code: "MC-LA",
        name: "Larvotto",
        parent: "MC"
    },
    {
        code: "MC-MA",
        name: "Malbousquet",
        parent: "MC"
    },
    {
        code: "MC-MC",
        name: "Monte-Carlo",
        parent: "MC"
    },
    {
        code: "MC-MG",
        name: "Moneghetti",
        parent: "MC"
    },
    {
        code: "MC-MO",
        name: "Monaco-Ville",
        parent: "MC"
    },
    {
        code: "MC-MU",
        name: "Moulins",
        parent: "MC"
    },
    {
        code: "MC-PH",
        name: "Port-Hercule",
        parent: "MC"
    },
    {
        code: "MC-SD",
        name: "Sainte-D\xe9vote",
        parent: "MC"
    },
    {
        code: "MC-SO",
        name: "La Source",
        parent: "MC"
    },
    {
        code: "MC-SP",
        name: "Sp\xe9lugues",
        parent: "MC"
    },
    {
        code: "MC-SR",
        name: "Saint-Roman",
        parent: "MC"
    },
    {
        code: "MC-VR",
        name: "Vallon de la Rousse",
        parent: "MC"
    },
    {
        code: "MD-AN",
        name: "Anenii Noi",
        parent: "MD"
    },
    {
        code: "MD-BA",
        name: "Bălți",
        parent: "MD"
    },
    {
        code: "MD-BD",
        name: "Bender",
        parent: "MD"
    },
    {
        code: "MD-BR",
        name: "Briceni",
        parent: "MD"
    },
    {
        code: "MD-BS",
        name: "Basarabeasca",
        parent: "MD"
    },
    {
        code: "MD-CA",
        name: "Cahul",
        parent: "MD"
    },
    {
        code: "MD-CL",
        name: "Călărași",
        parent: "MD"
    },
    {
        code: "MD-CM",
        name: "Cimișlia",
        parent: "MD"
    },
    {
        code: "MD-CR",
        name: "Criuleni",
        parent: "MD"
    },
    {
        code: "MD-CS",
        name: "Căușeni",
        parent: "MD"
    },
    {
        code: "MD-CT",
        name: "Cantemir",
        parent: "MD"
    },
    {
        code: "MD-CU",
        name: "Chișinău",
        parent: "MD"
    },
    {
        code: "MD-DO",
        name: "Dondușeni",
        parent: "MD"
    },
    {
        code: "MD-DR",
        name: "Drochia",
        parent: "MD"
    },
    {
        code: "MD-DU",
        name: "Dubăsari",
        parent: "MD"
    },
    {
        code: "MD-ED",
        name: "Edineț",
        parent: "MD"
    },
    {
        code: "MD-FA",
        name: "Fălești",
        parent: "MD"
    },
    {
        code: "MD-FL",
        name: "Florești",
        parent: "MD"
    },
    {
        code: "MD-GA",
        name: "Găgăuzia, Unitatea teritorială autonomă (UTAG)",
        parent: "MD"
    },
    {
        code: "MD-GL",
        name: "Glodeni",
        parent: "MD"
    },
    {
        code: "MD-HI",
        name: "H\xeencești",
        parent: "MD"
    },
    {
        code: "MD-IA",
        name: "Ialoveni",
        parent: "MD"
    },
    {
        code: "MD-LE",
        name: "Leova",
        parent: "MD"
    },
    {
        code: "MD-NI",
        name: "Nisporeni",
        parent: "MD"
    },
    {
        code: "MD-OC",
        name: "Ocnița",
        parent: "MD"
    },
    {
        code: "MD-OR",
        name: "Orhei",
        parent: "MD"
    },
    {
        code: "MD-RE",
        name: "Rezina",
        parent: "MD"
    },
    {
        code: "MD-RI",
        name: "R\xeeșcani",
        parent: "MD"
    },
    {
        code: "MD-SD",
        name: "Șoldănești",
        parent: "MD"
    },
    {
        code: "MD-SI",
        name: "S\xeengerei",
        parent: "MD"
    },
    {
        code: "MD-SN",
        name: "St\xeenga Nistrului, unitatea teritorială din",
        parent: "MD"
    },
    {
        code: "MD-SO",
        name: "Soroca",
        parent: "MD"
    },
    {
        code: "MD-ST",
        name: "Strășeni",
        parent: "MD"
    },
    {
        code: "MD-SV",
        name: "Ștefan Vodă",
        parent: "MD"
    },
    {
        code: "MD-TA",
        name: "Taraclia",
        parent: "MD"
    },
    {
        code: "MD-TE",
        name: "Telenești",
        parent: "MD"
    },
    {
        code: "MD-UN",
        name: "Ungheni",
        parent: "MD"
    },
    {
        code: "ME-01",
        name: "Andrijevica",
        parent: "ME"
    },
    {
        code: "ME-02",
        name: "Bar",
        parent: "ME"
    },
    {
        code: "ME-03",
        name: "Berane",
        parent: "ME"
    },
    {
        code: "ME-04",
        name: "Bijelo Polje",
        parent: "ME"
    },
    {
        code: "ME-05",
        name: "Budva",
        parent: "ME"
    },
    {
        code: "ME-06",
        name: "Cetinje",
        parent: "ME"
    },
    {
        code: "ME-07",
        name: "Danilovgrad",
        parent: "ME"
    },
    {
        code: "ME-08",
        name: "Herceg-Novi",
        parent: "ME"
    },
    {
        code: "ME-09",
        name: "Kolašin",
        parent: "ME"
    },
    {
        code: "ME-10",
        name: "Kotor",
        parent: "ME"
    },
    {
        code: "ME-11",
        name: "Mojkovac",
        parent: "ME"
    },
    {
        code: "ME-12",
        name: "Nikšić",
        parent: "ME"
    },
    {
        code: "ME-13",
        name: "Plav",
        parent: "ME"
    },
    {
        code: "ME-14",
        name: "Pljevlja",
        parent: "ME"
    },
    {
        code: "ME-15",
        name: "Plužine",
        parent: "ME"
    },
    {
        code: "ME-16",
        name: "Podgorica",
        parent: "ME"
    },
    {
        code: "ME-17",
        name: "Rožaje",
        parent: "ME"
    },
    {
        code: "ME-18",
        name: "Šavnik",
        parent: "ME"
    },
    {
        code: "ME-19",
        name: "Tivat",
        parent: "ME"
    },
    {
        code: "ME-20",
        name: "Ulcinj",
        parent: "ME"
    },
    {
        code: "ME-21",
        name: "Žabljak",
        parent: "ME"
    },
    {
        code: "ME-22",
        name: "Gusinje",
        parent: "ME"
    },
    {
        code: "ME-23",
        name: "Petnjica",
        parent: "ME"
    },
    {
        code: "ME-24",
        name: "Tuzi",
        parent: "ME"
    },
    {
        code: "MG-A",
        name: "Toamasina",
        parent: "MG"
    },
    {
        code: "MG-D",
        name: "Antsiranana",
        parent: "MG"
    },
    {
        code: "MG-F",
        name: "Fianarantsoa",
        parent: "MG"
    },
    {
        code: "MG-M",
        name: "Mahajanga",
        parent: "MG"
    },
    {
        code: "MG-T",
        name: "Antananarivo",
        parent: "MG"
    },
    {
        code: "MG-U",
        name: "Toliara",
        parent: "MG"
    },
    {
        code: "MH-ALK",
        name: "Ailuk",
        parent: "MH-T"
    },
    {
        code: "MH-ALL",
        name: "Ailinglaplap",
        parent: "MH-L"
    },
    {
        code: "MH-ARN",
        name: "Arno",
        parent: "MH-T"
    },
    {
        code: "MH-AUR",
        name: "Aur",
        parent: "MH-T"
    },
    {
        code: "MH-EBO",
        name: "Ebon",
        parent: "MH-L"
    },
    {
        code: "MH-ENI",
        name: "Enewetak & Ujelang",
        parent: "MH-L"
    },
    {
        code: "MH-JAB",
        name: "Jabat",
        parent: "MH-L"
    },
    {
        code: "MH-JAL",
        name: "Jaluit",
        parent: "MH-L"
    },
    {
        code: "MH-KIL",
        name: "Bikini & Kili",
        parent: "MH-L"
    },
    {
        code: "MH-KWA",
        name: "Kwajalein",
        parent: "MH-L"
    },
    {
        code: "MH-L",
        name: "Ralik chain",
        parent: "MH"
    },
    {
        code: "MH-LAE",
        name: "Lae",
        parent: "MH-L"
    },
    {
        code: "MH-LIB",
        name: "Lib",
        parent: "MH-L"
    },
    {
        code: "MH-LIK",
        name: "Likiep",
        parent: "MH-T"
    },
    {
        code: "MH-MAJ",
        name: "Majuro",
        parent: "MH-T"
    },
    {
        code: "MH-MAL",
        name: "Maloelap",
        parent: "MH-T"
    },
    {
        code: "MH-MEJ",
        name: "Mejit",
        parent: "MH-T"
    },
    {
        code: "MH-MIL",
        name: "Mili",
        parent: "MH-T"
    },
    {
        code: "MH-NMK",
        name: "Namdrik",
        parent: "MH-L"
    },
    {
        code: "MH-NMU",
        name: "Namu",
        parent: "MH-L"
    },
    {
        code: "MH-RON",
        name: "Rongelap",
        parent: "MH-L"
    },
    {
        code: "MH-T",
        name: "Ratak chain",
        parent: "MH"
    },
    {
        code: "MH-UJA",
        name: "Ujae",
        parent: "MH-L"
    },
    {
        code: "MH-UTI",
        name: "Utrik",
        parent: "MH-T"
    },
    {
        code: "MH-WTH",
        name: "Wotho",
        parent: "MH-L"
    },
    {
        code: "MH-WTJ",
        name: "Wotje",
        parent: "MH-T"
    },
    {
        code: "MK-101",
        name: "Veles",
        parent: "MK"
    },
    {
        code: "MK-102",
        name: "Gradsko",
        parent: "MK"
    },
    {
        code: "MK-103",
        name: "Demir Kapija",
        parent: "MK"
    },
    {
        code: "MK-104",
        name: "Kavadarci",
        parent: "MK"
    },
    {
        code: "MK-105",
        name: "Lozovo",
        parent: "MK"
    },
    {
        code: "MK-106",
        name: "Negotino",
        parent: "MK"
    },
    {
        code: "MK-107",
        name: "Rosoman",
        parent: "MK"
    },
    {
        code: "MK-108",
        name: "Sveti Nikole",
        parent: "MK"
    },
    {
        code: "MK-109",
        name: "Čaška",
        parent: "MK"
    },
    {
        code: "MK-201",
        name: "Berovo",
        parent: "MK"
    },
    {
        code: "MK-202",
        name: "Vinica",
        parent: "MK"
    },
    {
        code: "MK-203",
        name: "Delčevo",
        parent: "MK"
    },
    {
        code: "MK-204",
        name: "Zrnovci",
        parent: "MK"
    },
    {
        code: "MK-205",
        name: "Karbinci",
        parent: "MK"
    },
    {
        code: "MK-206",
        name: "Kočani",
        parent: "MK"
    },
    {
        code: "MK-207",
        name: "Makedonska Kamenica",
        parent: "MK"
    },
    {
        code: "MK-208",
        name: "Pehčevo",
        parent: "MK"
    },
    {
        code: "MK-209",
        name: "Probištip",
        parent: "MK"
    },
    {
        code: "MK-210",
        name: "Češinovo-Obleševo",
        parent: "MK"
    },
    {
        code: "MK-211",
        name: "Štip",
        parent: "MK"
    },
    {
        code: "MK-301",
        name: "Vevčani",
        parent: "MK"
    },
    {
        code: "MK-303",
        name: "Debar",
        parent: "MK"
    },
    {
        code: "MK-304",
        name: "Debrca",
        parent: "MK"
    },
    {
        code: "MK-307",
        name: "Kičevo",
        parent: "MK"
    },
    {
        code: "MK-308",
        name: "Makedonski Brod",
        parent: "MK"
    },
    {
        code: "MK-310",
        name: "Ohrid",
        parent: "MK"
    },
    {
        code: "MK-311",
        name: "Plasnica",
        parent: "MK"
    },
    {
        code: "MK-312",
        name: "Struga",
        parent: "MK"
    },
    {
        code: "MK-313",
        name: "Centar Župa",
        parent: "MK"
    },
    {
        code: "MK-401",
        name: "Bogdanci",
        parent: "MK"
    },
    {
        code: "MK-402",
        name: "Bosilovo",
        parent: "MK"
    },
    {
        code: "MK-403",
        name: "Valandovo",
        parent: "MK"
    },
    {
        code: "MK-404",
        name: "Vasilevo",
        parent: "MK"
    },
    {
        code: "MK-405",
        name: "Gevgelija",
        parent: "MK"
    },
    {
        code: "MK-406",
        name: "Dojran",
        parent: "MK"
    },
    {
        code: "MK-407",
        name: "Konče",
        parent: "MK"
    },
    {
        code: "MK-408",
        name: "Novo Selo",
        parent: "MK"
    },
    {
        code: "MK-409",
        name: "Radoviš",
        parent: "MK"
    },
    {
        code: "MK-410",
        name: "Strumica",
        parent: "MK"
    },
    {
        code: "MK-501",
        name: "Bitola",
        parent: "MK"
    },
    {
        code: "MK-502",
        name: "Demir Hisar",
        parent: "MK"
    },
    {
        code: "MK-503",
        name: "Dolneni",
        parent: "MK"
    },
    {
        code: "MK-504",
        name: "Krivogaštani",
        parent: "MK"
    },
    {
        code: "MK-505",
        name: "Kruševo",
        parent: "MK"
    },
    {
        code: "MK-506",
        name: "Mogila",
        parent: "MK"
    },
    {
        code: "MK-507",
        name: "Novaci",
        parent: "MK"
    },
    {
        code: "MK-508",
        name: "Prilep",
        parent: "MK"
    },
    {
        code: "MK-509",
        name: "Resen",
        parent: "MK"
    },
    {
        code: "MK-601",
        name: "Bogovinje",
        parent: "MK"
    },
    {
        code: "MK-602",
        name: "Brvenica",
        parent: "MK"
    },
    {
        code: "MK-603",
        name: "Vrapčište",
        parent: "MK"
    },
    {
        code: "MK-604",
        name: "Gostivar",
        parent: "MK"
    },
    {
        code: "MK-605",
        name: "Želino",
        parent: "MK"
    },
    {
        code: "MK-606",
        name: "Jegunovce",
        parent: "MK"
    },
    {
        code: "MK-607",
        name: "Mavrovo i Rostuše",
        parent: "MK"
    },
    {
        code: "MK-608",
        name: "Tearce",
        parent: "MK"
    },
    {
        code: "MK-609",
        name: "Tetovo",
        parent: "MK"
    },
    {
        code: "MK-701",
        name: "Kratovo",
        parent: "MK"
    },
    {
        code: "MK-702",
        name: "Kriva Palanka",
        parent: "MK"
    },
    {
        code: "MK-703",
        name: "Kumanovo",
        parent: "MK"
    },
    {
        code: "MK-704",
        name: "Lipkovo",
        parent: "MK"
    },
    {
        code: "MK-705",
        name: "Rankovce",
        parent: "MK"
    },
    {
        code: "MK-706",
        name: "Staro Nagoričane",
        parent: "MK"
    },
    {
        code: "MK-801",
        name: "Aerodrom",
        parent: "MK"
    },
    {
        code: "MK-802",
        name: "Aračinovo",
        parent: "MK"
    },
    {
        code: "MK-803",
        name: "Butel",
        parent: "MK"
    },
    {
        code: "MK-804",
        name: "Gazi Baba",
        parent: "MK"
    },
    {
        code: "MK-805",
        name: "Gjorče Petrov",
        parent: "MK"
    },
    {
        code: "MK-806",
        name: "Zelenikovo",
        parent: "MK"
    },
    {
        code: "MK-807",
        name: "Ilinden",
        parent: "MK"
    },
    {
        code: "MK-808",
        name: "Karpoš",
        parent: "MK"
    },
    {
        code: "MK-809",
        name: "Kisela Voda",
        parent: "MK"
    },
    {
        code: "MK-810",
        name: "Petrovec",
        parent: "MK"
    },
    {
        code: "MK-811",
        name: "Saraj",
        parent: "MK"
    },
    {
        code: "MK-812",
        name: "Sopište",
        parent: "MK"
    },
    {
        code: "MK-813",
        name: "Studeničani",
        parent: "MK"
    },
    {
        code: "MK-814",
        name: "Centar",
        parent: "MK"
    },
    {
        code: "MK-815",
        name: "Čair",
        parent: "MK"
    },
    {
        code: "MK-816",
        name: "Čučer-Sandevo",
        parent: "MK"
    },
    {
        code: "MK-817",
        name: "Šuto Orizari",
        parent: "MK"
    },
    {
        code: "ML-1",
        name: "Kayes",
        parent: "ML"
    },
    {
        code: "ML-10",
        name: "Taoud\xe9nit",
        parent: "ML"
    },
    {
        code: "ML-2",
        name: "Koulikoro",
        parent: "ML"
    },
    {
        code: "ML-3",
        name: "Sikasso",
        parent: "ML"
    },
    {
        code: "ML-4",
        name: "S\xe9gou",
        parent: "ML"
    },
    {
        code: "ML-5",
        name: "Mopti",
        parent: "ML"
    },
    {
        code: "ML-6",
        name: "Tombouctou",
        parent: "ML"
    },
    {
        code: "ML-7",
        name: "Gao",
        parent: "ML"
    },
    {
        code: "ML-8",
        name: "Kidal",
        parent: "ML"
    },
    {
        code: "ML-9",
        name: "M\xe9naka",
        parent: "ML"
    },
    {
        code: "ML-BKO",
        name: "Bamako",
        parent: "ML"
    },
    {
        code: "MM-01",
        name: "Sagaing",
        parent: "MM"
    },
    {
        code: "MM-02",
        name: "Bago",
        parent: "MM"
    },
    {
        code: "MM-03",
        name: "Magway",
        parent: "MM"
    },
    {
        code: "MM-04",
        name: "Mandalay",
        parent: "MM"
    },
    {
        code: "MM-05",
        name: "Tanintharyi",
        parent: "MM"
    },
    {
        code: "MM-06",
        name: "Yangon",
        parent: "MM"
    },
    {
        code: "MM-07",
        name: "Ayeyarwady",
        parent: "MM"
    },
    {
        code: "MM-11",
        name: "Kachin",
        parent: "MM"
    },
    {
        code: "MM-12",
        name: "Kayah",
        parent: "MM"
    },
    {
        code: "MM-13",
        name: "Kayin",
        parent: "MM"
    },
    {
        code: "MM-14",
        name: "Chin",
        parent: "MM"
    },
    {
        code: "MM-15",
        name: "Mon",
        parent: "MM"
    },
    {
        code: "MM-16",
        name: "Rakhine",
        parent: "MM"
    },
    {
        code: "MM-17",
        name: "Shan",
        parent: "MM"
    },
    {
        code: "MM-18",
        name: "Nay Pyi Taw",
        parent: "MM"
    },
    {
        code: "MN-035",
        name: "Orhon",
        parent: "MN"
    },
    {
        code: "MN-037",
        name: "Darhan uul",
        parent: "MN"
    },
    {
        code: "MN-039",
        name: "Hentiy",
        parent: "MN"
    },
    {
        code: "MN-041",
        name: "H\xf6vsg\xf6l",
        parent: "MN"
    },
    {
        code: "MN-043",
        name: "Hovd",
        parent: "MN"
    },
    {
        code: "MN-046",
        name: "Uvs",
        parent: "MN"
    },
    {
        code: "MN-047",
        name: "T\xf6v",
        parent: "MN"
    },
    {
        code: "MN-049",
        name: "Selenge",
        parent: "MN"
    },
    {
        code: "MN-051",
        name: "S\xfchbaatar",
        parent: "MN"
    },
    {
        code: "MN-053",
        name: "\xd6mn\xf6govĭ",
        parent: "MN"
    },
    {
        code: "MN-055",
        name: "\xd6v\xf6rhangay",
        parent: "MN"
    },
    {
        code: "MN-057",
        name: "Dzavhan",
        parent: "MN"
    },
    {
        code: "MN-059",
        name: "Dundgovĭ",
        parent: "MN"
    },
    {
        code: "MN-061",
        name: "Dornod",
        parent: "MN"
    },
    {
        code: "MN-063",
        name: "Dornogovĭ",
        parent: "MN"
    },
    {
        code: "MN-064",
        name: "Govĭ-S\xfcmber",
        parent: "MN"
    },
    {
        code: "MN-065",
        name: "Govĭ-Altay",
        parent: "MN"
    },
    {
        code: "MN-067",
        name: "Bulgan",
        parent: "MN"
    },
    {
        code: "MN-069",
        name: "Bayanhongor",
        parent: "MN"
    },
    {
        code: "MN-071",
        name: "Bayan-\xd6lgiy",
        parent: "MN"
    },
    {
        code: "MN-073",
        name: "Arhangay",
        parent: "MN"
    },
    {
        code: "MN-1",
        name: "Ulaanbaatar",
        parent: "MN"
    },
    {
        code: "MR-01",
        name: "Hodh ech Chargui",
        parent: "MR"
    },
    {
        code: "MR-02",
        name: "Hodh el Gharbi",
        parent: "MR"
    },
    {
        code: "MR-03",
        name: "Assaba",
        parent: "MR"
    },
    {
        code: "MR-04",
        name: "Gorgol",
        parent: "MR"
    },
    {
        code: "MR-05",
        name: "Brakna",
        parent: "MR"
    },
    {
        code: "MR-06",
        name: "Trarza",
        parent: "MR"
    },
    {
        code: "MR-07",
        name: "Adrar",
        parent: "MR"
    },
    {
        code: "MR-08",
        name: "Dakhlet Nou\xe2dhibou",
        parent: "MR"
    },
    {
        code: "MR-09",
        name: "Tagant",
        parent: "MR"
    },
    {
        code: "MR-10",
        name: "Guidimaka",
        parent: "MR"
    },
    {
        code: "MR-11",
        name: "Tiris Zemmour",
        parent: "MR"
    },
    {
        code: "MR-12",
        name: "Inchiri",
        parent: "MR"
    },
    {
        code: "MR-13",
        name: "Nuwākshūţ al Gharbīyah",
        parent: "MR"
    },
    {
        code: "MR-14",
        name: "Nuwākshūţ ash Shamālīyah",
        parent: "MR"
    },
    {
        code: "MR-15",
        name: "Nuwākshūţ al Janūbīyah",
        parent: "MR"
    },
    {
        code: "MT-01",
        name: "Attard",
        parent: "MT"
    },
    {
        code: "MT-02",
        name: "Balzan",
        parent: "MT"
    },
    {
        code: "MT-03",
        name: "Birgu",
        parent: "MT"
    },
    {
        code: "MT-04",
        name: "Birkirkara",
        parent: "MT"
    },
    {
        code: "MT-05",
        name: "Birżebbuġa",
        parent: "MT"
    },
    {
        code: "MT-06",
        name: "Bormla",
        parent: "MT"
    },
    {
        code: "MT-07",
        name: "Dingli",
        parent: "MT"
    },
    {
        code: "MT-08",
        name: "Fgura",
        parent: "MT"
    },
    {
        code: "MT-09",
        name: "Floriana",
        parent: "MT"
    },
    {
        code: "MT-10",
        name: "Fontana",
        parent: "MT"
    },
    {
        code: "MT-11",
        name: "Gudja",
        parent: "MT"
    },
    {
        code: "MT-12",
        name: "Gżira",
        parent: "MT"
    },
    {
        code: "MT-13",
        name: "Għajnsielem",
        parent: "MT"
    },
    {
        code: "MT-14",
        name: "Għarb",
        parent: "MT"
    },
    {
        code: "MT-15",
        name: "Għargħur",
        parent: "MT"
    },
    {
        code: "MT-16",
        name: "Għasri",
        parent: "MT"
    },
    {
        code: "MT-17",
        name: "Għaxaq",
        parent: "MT"
    },
    {
        code: "MT-18",
        name: "Ħamrun",
        parent: "MT"
    },
    {
        code: "MT-19",
        name: "Iklin",
        parent: "MT"
    },
    {
        code: "MT-20",
        name: "Isla",
        parent: "MT"
    },
    {
        code: "MT-21",
        name: "Kalkara",
        parent: "MT"
    },
    {
        code: "MT-22",
        name: "Kerċem",
        parent: "MT"
    },
    {
        code: "MT-23",
        name: "Kirkop",
        parent: "MT"
    },
    {
        code: "MT-24",
        name: "Lija",
        parent: "MT"
    },
    {
        code: "MT-25",
        name: "Luqa",
        parent: "MT"
    },
    {
        code: "MT-26",
        name: "Marsa",
        parent: "MT"
    },
    {
        code: "MT-27",
        name: "Marsaskala",
        parent: "MT"
    },
    {
        code: "MT-28",
        name: "Marsaxlokk",
        parent: "MT"
    },
    {
        code: "MT-29",
        name: "Mdina",
        parent: "MT"
    },
    {
        code: "MT-30",
        name: "Mellieħa",
        parent: "MT"
    },
    {
        code: "MT-31",
        name: "Mġarr",
        parent: "MT"
    },
    {
        code: "MT-32",
        name: "Mosta",
        parent: "MT"
    },
    {
        code: "MT-33",
        name: "Mqabba",
        parent: "MT"
    },
    {
        code: "MT-34",
        name: "Msida",
        parent: "MT"
    },
    {
        code: "MT-35",
        name: "Mtarfa",
        parent: "MT"
    },
    {
        code: "MT-36",
        name: "Munxar",
        parent: "MT"
    },
    {
        code: "MT-37",
        name: "Nadur",
        parent: "MT"
    },
    {
        code: "MT-38",
        name: "Naxxar",
        parent: "MT"
    },
    {
        code: "MT-39",
        name: "Paola",
        parent: "MT"
    },
    {
        code: "MT-40",
        name: "Pembroke",
        parent: "MT"
    },
    {
        code: "MT-41",
        name: "Piet\xe0",
        parent: "MT"
    },
    {
        code: "MT-42",
        name: "Qala",
        parent: "MT"
    },
    {
        code: "MT-43",
        name: "Qormi",
        parent: "MT"
    },
    {
        code: "MT-44",
        name: "Qrendi",
        parent: "MT"
    },
    {
        code: "MT-45",
        name: "Rabat Gozo",
        parent: "MT"
    },
    {
        code: "MT-46",
        name: "Rabat Malta",
        parent: "MT"
    },
    {
        code: "MT-47",
        name: "Safi",
        parent: "MT"
    },
    {
        code: "MT-48",
        name: "Saint Julian's",
        parent: "MT"
    },
    {
        code: "MT-49",
        name: "Saint John",
        parent: "MT"
    },
    {
        code: "MT-50",
        name: "Saint Lawrence",
        parent: "MT"
    },
    {
        code: "MT-51",
        name: "Saint Paul's Bay",
        parent: "MT"
    },
    {
        code: "MT-52",
        name: "Sannat",
        parent: "MT"
    },
    {
        code: "MT-53",
        name: "Saint Lucia's",
        parent: "MT"
    },
    {
        code: "MT-54",
        name: "Santa Venera",
        parent: "MT"
    },
    {
        code: "MT-55",
        name: "Siġġiewi",
        parent: "MT"
    },
    {
        code: "MT-56",
        name: "Sliema",
        parent: "MT"
    },
    {
        code: "MT-57",
        name: "Swieqi",
        parent: "MT"
    },
    {
        code: "MT-58",
        name: "Ta' Xbiex",
        parent: "MT"
    },
    {
        code: "MT-59",
        name: "Tarxien",
        parent: "MT"
    },
    {
        code: "MT-60",
        name: "Valletta",
        parent: "MT"
    },
    {
        code: "MT-61",
        name: "Xagħra",
        parent: "MT"
    },
    {
        code: "MT-62",
        name: "Xewkija",
        parent: "MT"
    },
    {
        code: "MT-63",
        name: "Xgħajra",
        parent: "MT"
    },
    {
        code: "MT-64",
        name: "Żabbar",
        parent: "MT"
    },
    {
        code: "MT-65",
        name: "Żebbuġ Gozo",
        parent: "MT"
    },
    {
        code: "MT-66",
        name: "Żebbuġ Malta",
        parent: "MT"
    },
    {
        code: "MT-67",
        name: "Żejtun",
        parent: "MT"
    },
    {
        code: "MT-68",
        name: "Żurrieq",
        parent: "MT"
    },
    {
        code: "MU-AG",
        name: "Agalega Islands",
        parent: "MU"
    },
    {
        code: "MU-BL",
        name: "Black River",
        parent: "MU"
    },
    {
        code: "MU-CC",
        name: "Cargados Carajos Shoals",
        parent: "MU"
    },
    {
        code: "MU-FL",
        name: "Flacq",
        parent: "MU"
    },
    {
        code: "MU-GP",
        name: "Grand Port",
        parent: "MU"
    },
    {
        code: "MU-MO",
        name: "Moka",
        parent: "MU"
    },
    {
        code: "MU-PA",
        name: "Pamplemousses",
        parent: "MU"
    },
    {
        code: "MU-PL",
        name: "Port Louis",
        parent: "MU"
    },
    {
        code: "MU-PW",
        name: "Plaines Wilhems",
        parent: "MU"
    },
    {
        code: "MU-RO",
        name: "Rodrigues Island",
        parent: "MU"
    },
    {
        code: "MU-RR",
        name: "Rivi\xe8re du Rempart",
        parent: "MU"
    },
    {
        code: "MU-SA",
        name: "Savanne",
        parent: "MU"
    },
    {
        code: "MV-00",
        name: "South Ari Atoll",
        parent: "MV"
    },
    {
        code: "MV-01",
        name: "Addu City",
        parent: "MV"
    },
    {
        code: "MV-02",
        name: "North Ari Atoll",
        parent: "MV"
    },
    {
        code: "MV-03",
        name: "Faadhippolhu",
        parent: "MV"
    },
    {
        code: "MV-04",
        name: "Felidhu Atoll",
        parent: "MV"
    },
    {
        code: "MV-05",
        name: "Hahdhunmathi",
        parent: "MV"
    },
    {
        code: "MV-07",
        name: "North Thiladhunmathi",
        parent: "MV"
    },
    {
        code: "MV-08",
        name: "Kolhumadulu",
        parent: "MV"
    },
    {
        code: "MV-12",
        name: "Mulaku Atoll",
        parent: "MV"
    },
    {
        code: "MV-13",
        name: "North Maalhosmadulu",
        parent: "MV"
    },
    {
        code: "MV-14",
        name: "North Nilandhe Atoll",
        parent: "MV"
    },
    {
        code: "MV-17",
        name: "South Nilandhe Atoll",
        parent: "MV"
    },
    {
        code: "MV-20",
        name: "South Maalhosmadulu",
        parent: "MV"
    },
    {
        code: "MV-23",
        name: "South Thiladhunmathi",
        parent: "MV"
    },
    {
        code: "MV-24",
        name: "North Miladhunmadulu",
        parent: "MV"
    },
    {
        code: "MV-25",
        name: "South Miladhunmadulu",
        parent: "MV"
    },
    {
        code: "MV-26",
        name: "Male Atoll",
        parent: "MV"
    },
    {
        code: "MV-27",
        name: "North Huvadhu Atoll",
        parent: "MV"
    },
    {
        code: "MV-28",
        name: "South Huvadhu Atoll",
        parent: "MV"
    },
    {
        code: "MV-29",
        name: "Fuvammulah",
        parent: "MV"
    },
    {
        code: "MV-MLE",
        name: "Male",
        parent: "MV"
    },
    {
        code: "MW-BA",
        name: "Balaka",
        parent: "MW-S"
    },
    {
        code: "MW-BL",
        name: "Blantyre",
        parent: "MW-S"
    },
    {
        code: "MW-C",
        name: "Central Region",
        parent: "MW"
    },
    {
        code: "MW-CK",
        name: "Chikwawa",
        parent: "MW-S"
    },
    {
        code: "MW-CR",
        name: "Chiradzulu",
        parent: "MW-S"
    },
    {
        code: "MW-CT",
        name: "Chitipa",
        parent: "MW-N"
    },
    {
        code: "MW-DE",
        name: "Dedza",
        parent: "MW-C"
    },
    {
        code: "MW-DO",
        name: "Dowa",
        parent: "MW-C"
    },
    {
        code: "MW-KR",
        name: "Karonga",
        parent: "MW-N"
    },
    {
        code: "MW-KS",
        name: "Kasungu",
        parent: "MW-C"
    },
    {
        code: "MW-LI",
        name: "Lilongwe",
        parent: "MW-C"
    },
    {
        code: "MW-LK",
        name: "Likoma",
        parent: "MW-N"
    },
    {
        code: "MW-MC",
        name: "Mchinji",
        parent: "MW-C"
    },
    {
        code: "MW-MG",
        name: "Mangochi",
        parent: "MW-S"
    },
    {
        code: "MW-MH",
        name: "Machinga",
        parent: "MW-S"
    },
    {
        code: "MW-MU",
        name: "Mulanje",
        parent: "MW-S"
    },
    {
        code: "MW-MW",
        name: "Mwanza",
        parent: "MW-S"
    },
    {
        code: "MW-MZ",
        name: "Mzimba",
        parent: "MW-N"
    },
    {
        code: "MW-N",
        name: "Northern Region",
        parent: "MW"
    },
    {
        code: "MW-NB",
        name: "Nkhata Bay",
        parent: "MW-N"
    },
    {
        code: "MW-NE",
        name: "Neno",
        parent: "MW-S"
    },
    {
        code: "MW-NI",
        name: "Ntchisi",
        parent: "MW-C"
    },
    {
        code: "MW-NK",
        name: "Nkhotakota",
        parent: "MW-C"
    },
    {
        code: "MW-NS",
        name: "Nsanje",
        parent: "MW-S"
    },
    {
        code: "MW-NU",
        name: "Ntcheu",
        parent: "MW-C"
    },
    {
        code: "MW-PH",
        name: "Phalombe",
        parent: "MW-S"
    },
    {
        code: "MW-RU",
        name: "Rumphi",
        parent: "MW-N"
    },
    {
        code: "MW-S",
        name: "Southern Region",
        parent: "MW"
    },
    {
        code: "MW-SA",
        name: "Salima",
        parent: "MW-C"
    },
    {
        code: "MW-TH",
        name: "Thyolo",
        parent: "MW-S"
    },
    {
        code: "MW-ZO",
        name: "Zomba",
        parent: "MW-S"
    },
    {
        code: "MX-AGU",
        name: "Aguascalientes",
        parent: "MX"
    },
    {
        code: "MX-BCN",
        name: "Baja California",
        parent: "MX"
    },
    {
        code: "MX-BCS",
        name: "Baja California Sur",
        parent: "MX"
    },
    {
        code: "MX-CAM",
        name: "Campeche",
        parent: "MX"
    },
    {
        code: "MX-CHH",
        name: "Chihuahua",
        parent: "MX"
    },
    {
        code: "MX-CHP",
        name: "Chiapas",
        parent: "MX"
    },
    {
        code: "MX-CMX",
        name: "Ciudad de M\xe9xico",
        parent: "MX"
    },
    {
        code: "MX-COA",
        name: "Coahuila de Zaragoza",
        parent: "MX"
    },
    {
        code: "MX-COL",
        name: "Colima",
        parent: "MX"
    },
    {
        code: "MX-DUR",
        name: "Durango",
        parent: "MX"
    },
    {
        code: "MX-GRO",
        name: "Guerrero",
        parent: "MX"
    },
    {
        code: "MX-GUA",
        name: "Guanajuato",
        parent: "MX"
    },
    {
        code: "MX-HID",
        name: "Hidalgo",
        parent: "MX"
    },
    {
        code: "MX-JAL",
        name: "Jalisco",
        parent: "MX"
    },
    {
        code: "MX-MEX",
        name: "M\xe9xico",
        parent: "MX"
    },
    {
        code: "MX-MIC",
        name: "Michoac\xe1n de Ocampo",
        parent: "MX"
    },
    {
        code: "MX-MOR",
        name: "Morelos",
        parent: "MX"
    },
    {
        code: "MX-NAY",
        name: "Nayarit",
        parent: "MX"
    },
    {
        code: "MX-NLE",
        name: "Nuevo Le\xf3n",
        parent: "MX"
    },
    {
        code: "MX-OAX",
        name: "Oaxaca",
        parent: "MX"
    },
    {
        code: "MX-PUE",
        name: "Puebla",
        parent: "MX"
    },
    {
        code: "MX-QUE",
        name: "Quer\xe9taro",
        parent: "MX"
    },
    {
        code: "MX-ROO",
        name: "Quintana Roo",
        parent: "MX"
    },
    {
        code: "MX-SIN",
        name: "Sinaloa",
        parent: "MX"
    },
    {
        code: "MX-SLP",
        name: "San Luis Potos\xed",
        parent: "MX"
    },
    {
        code: "MX-SON",
        name: "Sonora",
        parent: "MX"
    },
    {
        code: "MX-TAB",
        name: "Tabasco",
        parent: "MX"
    },
    {
        code: "MX-TAM",
        name: "Tamaulipas",
        parent: "MX"
    },
    {
        code: "MX-TLA",
        name: "Tlaxcala",
        parent: "MX"
    },
    {
        code: "MX-VER",
        name: "Veracruz de Ignacio de la Llave",
        parent: "MX"
    },
    {
        code: "MX-YUC",
        name: "Yucat\xe1n",
        parent: "MX"
    },
    {
        code: "MX-ZAC",
        name: "Zacatecas",
        parent: "MX"
    },
    {
        code: "MY-01",
        name: "Johor",
        parent: "MY"
    },
    {
        code: "MY-02",
        name: "Kedah",
        parent: "MY"
    },
    {
        code: "MY-03",
        name: "Kelantan",
        parent: "MY"
    },
    {
        code: "MY-04",
        name: "Melaka",
        parent: "MY"
    },
    {
        code: "MY-05",
        name: "Negeri Sembilan",
        parent: "MY"
    },
    {
        code: "MY-06",
        name: "Pahang",
        parent: "MY"
    },
    {
        code: "MY-07",
        name: "Pulau Pinang",
        parent: "MY"
    },
    {
        code: "MY-08",
        name: "Perak",
        parent: "MY"
    },
    {
        code: "MY-09",
        name: "Perlis",
        parent: "MY"
    },
    {
        code: "MY-10",
        name: "Selangor",
        parent: "MY"
    },
    {
        code: "MY-11",
        name: "Terengganu",
        parent: "MY"
    },
    {
        code: "MY-12",
        name: "Sabah",
        parent: "MY"
    },
    {
        code: "MY-13",
        name: "Sarawak",
        parent: "MY"
    },
    {
        code: "MY-14",
        name: "Wilayah Persekutuan Kuala Lumpur",
        parent: "MY"
    },
    {
        code: "MY-15",
        name: "Wilayah Persekutuan Labuan",
        parent: "MY"
    },
    {
        code: "MY-16",
        name: "Wilayah Persekutuan Putrajaya",
        parent: "MY"
    },
    {
        code: "MZ-A",
        name: "Niassa",
        parent: "MZ"
    },
    {
        code: "MZ-B",
        name: "Manica",
        parent: "MZ"
    },
    {
        code: "MZ-G",
        name: "Gaza",
        parent: "MZ"
    },
    {
        code: "MZ-I",
        name: "Inhambane",
        parent: "MZ"
    },
    {
        code: "MZ-L",
        name: "Maputo",
        parent: "MZ"
    },
    {
        code: "MZ-MPM",
        name: "Maputo",
        parent: "MZ"
    },
    {
        code: "MZ-N",
        name: "Nampula",
        parent: "MZ"
    },
    {
        code: "MZ-P",
        name: "Cabo Delgado",
        parent: "MZ"
    },
    {
        code: "MZ-Q",
        name: "Zamb\xe9zia",
        parent: "MZ"
    },
    {
        code: "MZ-S",
        name: "Sofala",
        parent: "MZ"
    },
    {
        code: "MZ-T",
        name: "Tete",
        parent: "MZ"
    },
    {
        code: "NA-CA",
        name: "Zambezi",
        parent: "NA"
    },
    {
        code: "NA-ER",
        name: "Erongo",
        parent: "NA"
    },
    {
        code: "NA-HA",
        name: "Hardap",
        parent: "NA"
    },
    {
        code: "NA-KA",
        name: "//Karas",
        parent: "NA"
    },
    {
        code: "NA-KE",
        name: "Kavango East",
        parent: "NA"
    },
    {
        code: "NA-KH",
        name: "Khomas",
        parent: "NA"
    },
    {
        code: "NA-KU",
        name: "Kunene",
        parent: "NA"
    },
    {
        code: "NA-KW",
        name: "Kavango West",
        parent: "NA"
    },
    {
        code: "NA-OD",
        name: "Otjozondjupa",
        parent: "NA"
    },
    {
        code: "NA-OH",
        name: "Omaheke",
        parent: "NA"
    },
    {
        code: "NA-ON",
        name: "Oshana",
        parent: "NA"
    },
    {
        code: "NA-OS",
        name: "Omusati",
        parent: "NA"
    },
    {
        code: "NA-OT",
        name: "Oshikoto",
        parent: "NA"
    },
    {
        code: "NA-OW",
        name: "Ohangwena",
        parent: "NA"
    },
    {
        code: "NE-1",
        name: "Agadez",
        parent: "NE"
    },
    {
        code: "NE-2",
        name: "Diffa",
        parent: "NE"
    },
    {
        code: "NE-3",
        name: "Dosso",
        parent: "NE"
    },
    {
        code: "NE-4",
        name: "Maradi",
        parent: "NE"
    },
    {
        code: "NE-5",
        name: "Tahoua",
        parent: "NE"
    },
    {
        code: "NE-6",
        name: "Tillab\xe9ri",
        parent: "NE"
    },
    {
        code: "NE-7",
        name: "Zinder",
        parent: "NE"
    },
    {
        code: "NE-8",
        name: "Niamey",
        parent: "NE"
    },
    {
        code: "NG-AB",
        name: "Abia",
        parent: "NG"
    },
    {
        code: "NG-AD",
        name: "Adamawa",
        parent: "NG"
    },
    {
        code: "NG-AK",
        name: "Akwa Ibom",
        parent: "NG"
    },
    {
        code: "NG-AN",
        name: "Anambra",
        parent: "NG"
    },
    {
        code: "NG-BA",
        name: "Bauchi",
        parent: "NG"
    },
    {
        code: "NG-BE",
        name: "Benue",
        parent: "NG"
    },
    {
        code: "NG-BO",
        name: "Borno",
        parent: "NG"
    },
    {
        code: "NG-BY",
        name: "Bayelsa",
        parent: "NG"
    },
    {
        code: "NG-CR",
        name: "Cross River",
        parent: "NG"
    },
    {
        code: "NG-DE",
        name: "Delta",
        parent: "NG"
    },
    {
        code: "NG-EB",
        name: "Ebonyi",
        parent: "NG"
    },
    {
        code: "NG-ED",
        name: "Edo",
        parent: "NG"
    },
    {
        code: "NG-EK",
        name: "Ekiti",
        parent: "NG"
    },
    {
        code: "NG-EN",
        name: "Enugu",
        parent: "NG"
    },
    {
        code: "NG-FC",
        name: "Abuja Federal Capital Territory",
        parent: "NG"
    },
    {
        code: "NG-GO",
        name: "Gombe",
        parent: "NG"
    },
    {
        code: "NG-IM",
        name: "Imo",
        parent: "NG"
    },
    {
        code: "NG-JI",
        name: "Jigawa",
        parent: "NG"
    },
    {
        code: "NG-KD",
        name: "Kaduna",
        parent: "NG"
    },
    {
        code: "NG-KE",
        name: "Kebbi",
        parent: "NG"
    },
    {
        code: "NG-KN",
        name: "Kano",
        parent: "NG"
    },
    {
        code: "NG-KO",
        name: "Kogi",
        parent: "NG"
    },
    {
        code: "NG-KT",
        name: "Katsina",
        parent: "NG"
    },
    {
        code: "NG-KW",
        name: "Kwara",
        parent: "NG"
    },
    {
        code: "NG-LA",
        name: "Lagos",
        parent: "NG"
    },
    {
        code: "NG-NA",
        name: "Nasarawa",
        parent: "NG"
    },
    {
        code: "NG-NI",
        name: "Niger",
        parent: "NG"
    },
    {
        code: "NG-OG",
        name: "Ogun",
        parent: "NG"
    },
    {
        code: "NG-ON",
        name: "Ondo",
        parent: "NG"
    },
    {
        code: "NG-OS",
        name: "Osun",
        parent: "NG"
    },
    {
        code: "NG-OY",
        name: "Oyo",
        parent: "NG"
    },
    {
        code: "NG-PL",
        name: "Plateau",
        parent: "NG"
    },
    {
        code: "NG-RI",
        name: "Rivers",
        parent: "NG"
    },
    {
        code: "NG-SO",
        name: "Sokoto",
        parent: "NG"
    },
    {
        code: "NG-TA",
        name: "Taraba",
        parent: "NG"
    },
    {
        code: "NG-YO",
        name: "Yobe",
        parent: "NG"
    },
    {
        code: "NG-ZA",
        name: "Zamfara",
        parent: "NG"
    },
    {
        code: "NI-AN",
        name: "Costa Caribe Norte",
        parent: "NI"
    },
    {
        code: "NI-AS",
        name: "Costa Caribe Sur",
        parent: "NI"
    },
    {
        code: "NI-BO",
        name: "Boaco",
        parent: "NI"
    },
    {
        code: "NI-CA",
        name: "Carazo",
        parent: "NI"
    },
    {
        code: "NI-CI",
        name: "Chinandega",
        parent: "NI"
    },
    {
        code: "NI-CO",
        name: "Chontales",
        parent: "NI"
    },
    {
        code: "NI-ES",
        name: "Estel\xed",
        parent: "NI"
    },
    {
        code: "NI-GR",
        name: "Granada",
        parent: "NI"
    },
    {
        code: "NI-JI",
        name: "Jinotega",
        parent: "NI"
    },
    {
        code: "NI-LE",
        name: "Le\xf3n",
        parent: "NI"
    },
    {
        code: "NI-MD",
        name: "Madriz",
        parent: "NI"
    },
    {
        code: "NI-MN",
        name: "Managua",
        parent: "NI"
    },
    {
        code: "NI-MS",
        name: "Masaya",
        parent: "NI"
    },
    {
        code: "NI-MT",
        name: "Matagalpa",
        parent: "NI"
    },
    {
        code: "NI-NS",
        name: "Nueva Segovia",
        parent: "NI"
    },
    {
        code: "NI-RI",
        name: "Rivas",
        parent: "NI"
    },
    {
        code: "NI-SJ",
        name: "R\xedo San Juan",
        parent: "NI"
    },
    {
        code: "NL-AW",
        name: "Aruba",
        parent: "NL"
    },
    {
        code: "NL-BQ1",
        name: "Bonaire",
        parent: "NL"
    },
    {
        code: "NL-BQ2",
        name: "Saba",
        parent: "NL"
    },
    {
        code: "NL-BQ3",
        name: "Sint Eustatius",
        parent: "NL"
    },
    {
        code: "NL-CW",
        name: "Cura\xe7ao",
        parent: "NL"
    },
    {
        code: "NL-DR",
        name: "Drenthe",
        parent: "NL"
    },
    {
        code: "NL-FL",
        name: "Flevoland",
        parent: "NL"
    },
    {
        code: "NL-FR",
        name: "Frysl\xe2n",
        parent: "NL"
    },
    {
        code: "NL-GE",
        name: "Gelderland",
        parent: "NL"
    },
    {
        code: "NL-GR",
        name: "Groningen",
        parent: "NL"
    },
    {
        code: "NL-LI",
        name: "Limburg",
        parent: "NL"
    },
    {
        code: "NL-NB",
        name: "Noord-Brabant",
        parent: "NL"
    },
    {
        code: "NL-NH",
        name: "Noord-Holland",
        parent: "NL"
    },
    {
        code: "NL-OV",
        name: "Overijssel",
        parent: "NL"
    },
    {
        code: "NL-SX",
        name: "Sint Maarten",
        parent: "NL"
    },
    {
        code: "NL-UT",
        name: "Utrecht",
        parent: "NL"
    },
    {
        code: "NL-ZE",
        name: "Zeeland",
        parent: "NL"
    },
    {
        code: "NL-ZH",
        name: "Zuid-Holland",
        parent: "NL"
    },
    {
        code: "NO-03",
        name: "Oslo",
        parent: "NO"
    },
    {
        code: "NO-11",
        name: "Rogaland",
        parent: "NO"
    },
    {
        code: "NO-15",
        name: "M\xf8re og Romsdal",
        parent: "NO"
    },
    {
        code: "NO-18",
        name: "Nordland",
        parent: "NO"
    },
    {
        code: "NO-21",
        name: "Svalbard",
        parent: "NO"
    },
    {
        code: "NO-22",
        name: "Jan Mayen",
        parent: "NO"
    },
    {
        code: "NO-30",
        name: "Viken",
        parent: "NO"
    },
    {
        code: "NO-34",
        name: "Innlandet",
        parent: "NO"
    },
    {
        code: "NO-38",
        name: "Vestfold og Telemark",
        parent: "NO"
    },
    {
        code: "NO-42",
        name: "Agder",
        parent: "NO"
    },
    {
        code: "NO-46",
        name: "Vestland",
        parent: "NO"
    },
    {
        code: "NO-50",
        name: "Tr\xf8ndelag / Tr\xf6\xf6ndelage (-)",
        parent: "NO"
    },
    {
        code: "NO-54",
        name: "Troms og Finnmark / Romsa ja Finnm\xe1rku",
        parent: "NO"
    },
    {
        code: "NP-P1",
        name: "Pradesh 1",
        parent: "NP"
    },
    {
        code: "NP-P2",
        name: "Madhesh",
        parent: "NP"
    },
    {
        code: "NP-P3",
        name: "Bāgmatī",
        parent: "NP"
    },
    {
        code: "NP-P4",
        name: "Gaṇḍakī",
        parent: "NP"
    },
    {
        code: "NP-P5",
        name: "Lumbinī",
        parent: "NP"
    },
    {
        code: "NP-P6",
        name: "Karṇālī",
        parent: "NP"
    },
    {
        code: "NP-P7",
        name: "Sudūrpashchim",
        parent: "NP"
    },
    {
        code: "NR-01",
        name: "Aiwo",
        parent: "NR"
    },
    {
        code: "NR-02",
        name: "Anabar",
        parent: "NR"
    },
    {
        code: "NR-03",
        name: "Anetan",
        parent: "NR"
    },
    {
        code: "NR-04",
        name: "Anibare",
        parent: "NR"
    },
    {
        code: "NR-05",
        name: "Baitsi (local variant is Baiti)",
        parent: "NR"
    },
    {
        code: "NR-06",
        name: "Boe",
        parent: "NR"
    },
    {
        code: "NR-07",
        name: "Buada",
        parent: "NR"
    },
    {
        code: "NR-08",
        name: "Denigomodu",
        parent: "NR"
    },
    {
        code: "NR-09",
        name: "Ewa",
        parent: "NR"
    },
    {
        code: "NR-10",
        name: "Ijuw",
        parent: "NR"
    },
    {
        code: "NR-11",
        name: "Meneng",
        parent: "NR"
    },
    {
        code: "NR-12",
        name: "Nibok",
        parent: "NR"
    },
    {
        code: "NR-13",
        name: "Uaboe",
        parent: "NR"
    },
    {
        code: "NR-14",
        name: "Yaren",
        parent: "NR"
    },
    {
        code: "NZ-AUK",
        name: "Auckland",
        parent: "NZ"
    },
    {
        code: "NZ-BOP",
        name: "Bay of Plenty",
        parent: "NZ"
    },
    {
        code: "NZ-CAN",
        name: "Canterbury",
        parent: "NZ"
    },
    {
        code: "NZ-CIT",
        name: "Chatham Islands Territory",
        parent: "NZ"
    },
    {
        code: "NZ-GIS",
        name: "Gisborne",
        parent: "NZ"
    },
    {
        code: "NZ-HKB",
        name: "Hawke's Bay",
        parent: "NZ"
    },
    {
        code: "NZ-MBH",
        name: "Marlborough",
        parent: "NZ"
    },
    {
        code: "NZ-MWT",
        name: "Manawatū-Whanganui",
        parent: "NZ"
    },
    {
        code: "NZ-NSN",
        name: "Nelson",
        parent: "NZ"
    },
    {
        code: "NZ-NTL",
        name: "Northland",
        parent: "NZ"
    },
    {
        code: "NZ-OTA",
        name: "Otago",
        parent: "NZ"
    },
    {
        code: "NZ-STL",
        name: "Southland",
        parent: "NZ"
    },
    {
        code: "NZ-TAS",
        name: "Tasman",
        parent: "NZ"
    },
    {
        code: "NZ-TKI",
        name: "Taranaki",
        parent: "NZ"
    },
    {
        code: "NZ-WGN",
        name: "Greater Wellington",
        parent: "NZ"
    },
    {
        code: "NZ-WKO",
        name: "Waikato",
        parent: "NZ"
    },
    {
        code: "NZ-WTC",
        name: "West Coast",
        parent: "NZ"
    },
    {
        code: "OM-BJ",
        name: "Janūb al Bāţinah",
        parent: "OM"
    },
    {
        code: "OM-BS",
        name: "Shamāl al Bāţinah",
        parent: "OM"
    },
    {
        code: "OM-BU",
        name: "Al Buraymī",
        parent: "OM"
    },
    {
        code: "OM-DA",
        name: "Ad Dākhilīyah",
        parent: "OM"
    },
    {
        code: "OM-MA",
        name: "Masqaţ",
        parent: "OM"
    },
    {
        code: "OM-MU",
        name: "Musandam",
        parent: "OM"
    },
    {
        code: "OM-SJ",
        name: "Janūb ash Sharqīyah",
        parent: "OM"
    },
    {
        code: "OM-SS",
        name: "Shamāl ash Sharqīyah",
        parent: "OM"
    },
    {
        code: "OM-WU",
        name: "Al Wusţ\xe1",
        parent: "OM"
    },
    {
        code: "OM-ZA",
        name: "Az̧ Z̧āhirah",
        parent: "OM"
    },
    {
        code: "OM-ZU",
        name: "Z̧ufār",
        parent: "OM"
    },
    {
        code: "PA-1",
        name: "Bocas del Toro",
        parent: "PA"
    },
    {
        code: "PA-10",
        name: "Panam\xe1 Oeste",
        parent: "PA"
    },
    {
        code: "PA-2",
        name: "Cocl\xe9",
        parent: "PA"
    },
    {
        code: "PA-3",
        name: "Col\xf3n",
        parent: "PA"
    },
    {
        code: "PA-4",
        name: "Chiriqu\xed",
        parent: "PA"
    },
    {
        code: "PA-5",
        name: "Dari\xe9n",
        parent: "PA"
    },
    {
        code: "PA-6",
        name: "Herrera",
        parent: "PA"
    },
    {
        code: "PA-7",
        name: "Los Santos",
        parent: "PA"
    },
    {
        code: "PA-8",
        name: "Panam\xe1",
        parent: "PA"
    },
    {
        code: "PA-9",
        name: "Veraguas",
        parent: "PA"
    },
    {
        code: "PA-EM",
        name: "Ember\xe1",
        parent: "PA"
    },
    {
        code: "PA-KY",
        name: "Guna Yala",
        parent: "PA"
    },
    {
        code: "PA-NB",
        name: "Ng\xe4be-Bugl\xe9",
        parent: "PA"
    },
    {
        code: "PA-NT",
        name: "Naso Tj\xebr Di",
        parent: "PA"
    },
    {
        code: "PE-AMA",
        name: "Amazonas",
        parent: "PE"
    },
    {
        code: "PE-ANC",
        name: "Ancash",
        parent: "PE"
    },
    {
        code: "PE-APU",
        name: "Apur\xedmac",
        parent: "PE"
    },
    {
        code: "PE-ARE",
        name: "Arequipa",
        parent: "PE"
    },
    {
        code: "PE-AYA",
        name: "Ayacucho",
        parent: "PE"
    },
    {
        code: "PE-CAJ",
        name: "Cajamarca",
        parent: "PE"
    },
    {
        code: "PE-CAL",
        name: "El Callao",
        parent: "PE"
    },
    {
        code: "PE-CUS",
        name: "Cusco",
        parent: "PE"
    },
    {
        code: "PE-HUC",
        name: "Hu\xe1nuco",
        parent: "PE"
    },
    {
        code: "PE-HUV",
        name: "Huancavelica",
        parent: "PE"
    },
    {
        code: "PE-ICA",
        name: "Ica",
        parent: "PE"
    },
    {
        code: "PE-JUN",
        name: "Jun\xedn",
        parent: "PE"
    },
    {
        code: "PE-LAL",
        name: "La Libertad",
        parent: "PE"
    },
    {
        code: "PE-LAM",
        name: "Lambayeque",
        parent: "PE"
    },
    {
        code: "PE-LIM",
        name: "Lima",
        parent: "PE"
    },
    {
        code: "PE-LMA",
        name: "Municipalidad Metropolitana de Lima",
        parent: "PE"
    },
    {
        code: "PE-LOR",
        name: "Loreto",
        parent: "PE"
    },
    {
        code: "PE-MDD",
        name: "Madre de Dios",
        parent: "PE"
    },
    {
        code: "PE-MOQ",
        name: "Moquegua",
        parent: "PE"
    },
    {
        code: "PE-PAS",
        name: "Pasco",
        parent: "PE"
    },
    {
        code: "PE-PIU",
        name: "Piura",
        parent: "PE"
    },
    {
        code: "PE-PUN",
        name: "Puno",
        parent: "PE"
    },
    {
        code: "PE-SAM",
        name: "San Mart\xedn",
        parent: "PE"
    },
    {
        code: "PE-TAC",
        name: "Tacna",
        parent: "PE"
    },
    {
        code: "PE-TUM",
        name: "Tumbes",
        parent: "PE"
    },
    {
        code: "PE-UCA",
        name: "Ucayali",
        parent: "PE"
    },
    {
        code: "PG-CPK",
        name: "Chimbu",
        parent: "PG"
    },
    {
        code: "PG-CPM",
        name: "Central",
        parent: "PG"
    },
    {
        code: "PG-EBR",
        name: "East New Britain",
        parent: "PG"
    },
    {
        code: "PG-EHG",
        name: "Eastern Highlands",
        parent: "PG"
    },
    {
        code: "PG-EPW",
        name: "Enga",
        parent: "PG"
    },
    {
        code: "PG-ESW",
        name: "East Sepik",
        parent: "PG"
    },
    {
        code: "PG-GPK",
        name: "Gulf",
        parent: "PG"
    },
    {
        code: "PG-HLA",
        name: "Hela",
        parent: "PG"
    },
    {
        code: "PG-JWK",
        name: "Jiwaka",
        parent: "PG"
    },
    {
        code: "PG-MBA",
        name: "Milne Bay",
        parent: "PG"
    },
    {
        code: "PG-MPL",
        name: "Morobe",
        parent: "PG"
    },
    {
        code: "PG-MPM",
        name: "Madang",
        parent: "PG"
    },
    {
        code: "PG-MRL",
        name: "Manus",
        parent: "PG"
    },
    {
        code: "PG-NCD",
        name: "National Capital District (Port Moresby)",
        parent: "PG"
    },
    {
        code: "PG-NIK",
        name: "New Ireland",
        parent: "PG"
    },
    {
        code: "PG-NPP",
        name: "Northern",
        parent: "PG"
    },
    {
        code: "PG-NSB",
        name: "Bougainville",
        parent: "PG"
    },
    {
        code: "PG-SAN",
        name: "West Sepik",
        parent: "PG"
    },
    {
        code: "PG-SHM",
        name: "Southern Highlands",
        parent: "PG"
    },
    {
        code: "PG-WBK",
        name: "West New Britain",
        parent: "PG"
    },
    {
        code: "PG-WHM",
        name: "Western Highlands",
        parent: "PG"
    },
    {
        code: "PG-WPD",
        name: "Western",
        parent: "PG"
    },
    {
        code: "PH-00",
        name: "National Capital Region",
        parent: "PH"
    },
    {
        code: "PH-01",
        name: "Ilocos",
        parent: "PH"
    },
    {
        code: "PH-02",
        name: "Cagayan Valley",
        parent: "PH"
    },
    {
        code: "PH-03",
        name: "Central Luzon",
        parent: "PH"
    },
    {
        code: "PH-05",
        name: "Bicol",
        parent: "PH"
    },
    {
        code: "PH-06",
        name: "Western Visayas",
        parent: "PH"
    },
    {
        code: "PH-07",
        name: "Central Visayas",
        parent: "PH"
    },
    {
        code: "PH-08",
        name: "Eastern Visayas",
        parent: "PH"
    },
    {
        code: "PH-09",
        name: "Zamboanga Peninsula",
        parent: "PH"
    },
    {
        code: "PH-10",
        name: "Northern Mindanao",
        parent: "PH"
    },
    {
        code: "PH-11",
        name: "Davao",
        parent: "PH"
    },
    {
        code: "PH-12",
        name: "Soccsksargen",
        parent: "PH"
    },
    {
        code: "PH-13",
        name: "Caraga",
        parent: "PH"
    },
    {
        code: "PH-14",
        name: "Autonomous Region in Muslim Mindanao",
        parent: "PH"
    },
    {
        code: "PH-15",
        name: "Cordillera Administrative Region",
        parent: "PH"
    },
    {
        code: "PH-40",
        name: "Calabarzon",
        parent: "PH"
    },
    {
        code: "PH-41",
        name: "Mimaropa",
        parent: "PH"
    },
    {
        code: "PH-ABR",
        name: "Abra",
        parent: "PH-15"
    },
    {
        code: "PH-AGN",
        name: "Agusan del Norte",
        parent: "PH-13"
    },
    {
        code: "PH-AGS",
        name: "Agusan del Sur",
        parent: "PH-13"
    },
    {
        code: "PH-AKL",
        name: "Aklan",
        parent: "PH-06"
    },
    {
        code: "PH-ALB",
        name: "Albay",
        parent: "PH-05"
    },
    {
        code: "PH-ANT",
        name: "Antique",
        parent: "PH-06"
    },
    {
        code: "PH-APA",
        name: "Apayao",
        parent: "PH-15"
    },
    {
        code: "PH-AUR",
        name: "Aurora",
        parent: "PH-03"
    },
    {
        code: "PH-BAN",
        name: "Bataan",
        parent: "PH-03"
    },
    {
        code: "PH-BAS",
        name: "Basilan",
        parent: "PH-09"
    },
    {
        code: "PH-BEN",
        name: "Benguet",
        parent: "PH-15"
    },
    {
        code: "PH-BIL",
        name: "Biliran",
        parent: "PH-08"
    },
    {
        code: "PH-BOH",
        name: "Bohol",
        parent: "PH-07"
    },
    {
        code: "PH-BTG",
        name: "Batangas",
        parent: "PH-40"
    },
    {
        code: "PH-BTN",
        name: "Batanes",
        parent: "PH-02"
    },
    {
        code: "PH-BUK",
        name: "Bukidnon",
        parent: "PH-10"
    },
    {
        code: "PH-BUL",
        name: "Bulacan",
        parent: "PH-03"
    },
    {
        code: "PH-CAG",
        name: "Cagayan",
        parent: "PH-02"
    },
    {
        code: "PH-CAM",
        name: "Camiguin",
        parent: "PH-10"
    },
    {
        code: "PH-CAN",
        name: "Camarines Norte",
        parent: "PH-05"
    },
    {
        code: "PH-CAP",
        name: "Capiz",
        parent: "PH-06"
    },
    {
        code: "PH-CAS",
        name: "Camarines Sur",
        parent: "PH-05"
    },
    {
        code: "PH-CAT",
        name: "Catanduanes",
        parent: "PH-05"
    },
    {
        code: "PH-CAV",
        name: "Cavite",
        parent: "PH-40"
    },
    {
        code: "PH-CEB",
        name: "Cebu",
        parent: "PH-07"
    },
    {
        code: "PH-COM",
        name: "Davao de Oro",
        parent: "PH-11"
    },
    {
        code: "PH-DAO",
        name: "Davao Oriental",
        parent: "PH-11"
    },
    {
        code: "PH-DAS",
        name: "Davao del Sur",
        parent: "PH-11"
    },
    {
        code: "PH-DAV",
        name: "Davao del Norte",
        parent: "PH-11"
    },
    {
        code: "PH-DIN",
        name: "Dinagat Islands",
        parent: "PH-13"
    },
    {
        code: "PH-DVO",
        name: "Davao Occidental",
        parent: "PH-11"
    },
    {
        code: "PH-EAS",
        name: "Eastern Samar",
        parent: "PH-08"
    },
    {
        code: "PH-GUI",
        name: "Guimaras",
        parent: "PH-06"
    },
    {
        code: "PH-IFU",
        name: "Ifugao",
        parent: "PH-15"
    },
    {
        code: "PH-ILI",
        name: "Iloilo",
        parent: "PH-06"
    },
    {
        code: "PH-ILN",
        name: "Ilocos Norte",
        parent: "PH-01"
    },
    {
        code: "PH-ILS",
        name: "Ilocos Sur",
        parent: "PH-01"
    },
    {
        code: "PH-ISA",
        name: "Isabela",
        parent: "PH-02"
    },
    {
        code: "PH-KAL",
        name: "Kalinga",
        parent: "PH-15"
    },
    {
        code: "PH-LAG",
        name: "Laguna",
        parent: "PH-40"
    },
    {
        code: "PH-LAN",
        name: "Lanao del Norte",
        parent: "PH-12"
    },
    {
        code: "PH-LAS",
        name: "Lanao del Sur",
        parent: "PH-14"
    },
    {
        code: "PH-LEY",
        name: "Leyte",
        parent: "PH-08"
    },
    {
        code: "PH-LUN",
        name: "La Union",
        parent: "PH-01"
    },
    {
        code: "PH-MAD",
        name: "Marinduque",
        parent: "PH-41"
    },
    {
        code: "PH-MAG",
        name: "Maguindanao",
        parent: "PH-14"
    },
    {
        code: "PH-MAS",
        name: "Masbate",
        parent: "PH-05"
    },
    {
        code: "PH-MDC",
        name: "Mindoro Occidental",
        parent: "PH-41"
    },
    {
        code: "PH-MDR",
        name: "Mindoro Oriental",
        parent: "PH-41"
    },
    {
        code: "PH-MOU",
        name: "Mountain Province",
        parent: "PH-15"
    },
    {
        code: "PH-MSC",
        name: "Misamis Occidental",
        parent: "PH-10"
    },
    {
        code: "PH-MSR",
        name: "Misamis Oriental",
        parent: "PH-10"
    },
    {
        code: "PH-NCO",
        name: "Cotabato",
        parent: "PH-12"
    },
    {
        code: "PH-NEC",
        name: "Negros Occidental",
        parent: "PH-06"
    },
    {
        code: "PH-NER",
        name: "Negros Oriental",
        parent: "PH-07"
    },
    {
        code: "PH-NSA",
        name: "Northern Samar",
        parent: "PH-08"
    },
    {
        code: "PH-NUE",
        name: "Nueva Ecija",
        parent: "PH-03"
    },
    {
        code: "PH-NUV",
        name: "Nueva Vizcaya",
        parent: "PH-02"
    },
    {
        code: "PH-PAM",
        name: "Pampanga",
        parent: "PH-03"
    },
    {
        code: "PH-PAN",
        name: "Pangasinan",
        parent: "PH-01"
    },
    {
        code: "PH-PLW",
        name: "Palawan",
        parent: "PH-41"
    },
    {
        code: "PH-QUE",
        name: "Quezon",
        parent: "PH-40"
    },
    {
        code: "PH-QUI",
        name: "Quirino",
        parent: "PH-02"
    },
    {
        code: "PH-RIZ",
        name: "Rizal",
        parent: "PH-40"
    },
    {
        code: "PH-ROM",
        name: "Romblon",
        parent: "PH-41"
    },
    {
        code: "PH-SAR",
        name: "Sarangani",
        parent: "PH-11"
    },
    {
        code: "PH-SCO",
        name: "South Cotabato",
        parent: "PH-11"
    },
    {
        code: "PH-SIG",
        name: "Siquijor",
        parent: "PH-07"
    },
    {
        code: "PH-SLE",
        name: "Southern Leyte",
        parent: "PH-08"
    },
    {
        code: "PH-SLU",
        name: "Sulu",
        parent: "PH-14"
    },
    {
        code: "PH-SOR",
        name: "Sorsogon",
        parent: "PH-05"
    },
    {
        code: "PH-SUK",
        name: "Sultan Kudarat",
        parent: "PH-12"
    },
    {
        code: "PH-SUN",
        name: "Surigao del Norte",
        parent: "PH-13"
    },
    {
        code: "PH-SUR",
        name: "Surigao del Sur",
        parent: "PH-13"
    },
    {
        code: "PH-TAR",
        name: "Tarlac",
        parent: "PH-03"
    },
    {
        code: "PH-TAW",
        name: "Tawi-Tawi",
        parent: "PH-14"
    },
    {
        code: "PH-WSA",
        name: "Samar (local variant: Western Samar)",
        parent: "PH-08"
    },
    {
        code: "PH-ZAN",
        name: "Zamboanga del Norte",
        parent: "PH-09"
    },
    {
        code: "PH-ZAS",
        name: "Zamboanga del Sur",
        parent: "PH-09"
    },
    {
        code: "PH-ZMB",
        name: "Zambales",
        parent: "PH-03"
    },
    {
        code: "PH-ZSI",
        name: "Zamboanga Sibugay",
        parent: "PH-09"
    },
    {
        code: "PK-BA",
        name: "Balochistan",
        parent: "PK"
    },
    {
        code: "PK-GB",
        name: "Gilgit-Baltistan",
        parent: "PK"
    },
    {
        code: "PK-IS",
        name: "Islamabad",
        parent: "PK"
    },
    {
        code: "PK-JK",
        name: "Azad Jammu and Kashmir",
        parent: "PK"
    },
    {
        code: "PK-KP",
        name: "Khyber Pakhtunkhwa",
        parent: "PK"
    },
    {
        code: "PK-PB",
        name: "Punjab",
        parent: "PK"
    },
    {
        code: "PK-SD",
        name: "Sindh",
        parent: "PK"
    },
    {
        code: "PK-TA",
        name: "Federally Administered Tribal Areas",
        parent: "PK"
    },
    {
        code: "PL-02",
        name: "Dolnośląskie",
        parent: "PL"
    },
    {
        code: "PL-04",
        name: "Kujawsko-pomorskie",
        parent: "PL"
    },
    {
        code: "PL-06",
        name: "Lubelskie",
        parent: "PL"
    },
    {
        code: "PL-08",
        name: "Lubuskie",
        parent: "PL"
    },
    {
        code: "PL-10",
        name: "Ł\xf3dzkie",
        parent: "PL"
    },
    {
        code: "PL-12",
        name: "Małopolskie",
        parent: "PL"
    },
    {
        code: "PL-14",
        name: "Mazowieckie",
        parent: "PL"
    },
    {
        code: "PL-16",
        name: "Opolskie",
        parent: "PL"
    },
    {
        code: "PL-18",
        name: "Podkarpackie",
        parent: "PL"
    },
    {
        code: "PL-20",
        name: "Podlaskie",
        parent: "PL"
    },
    {
        code: "PL-22",
        name: "Pomorskie",
        parent: "PL"
    },
    {
        code: "PL-24",
        name: "Śląskie",
        parent: "PL"
    },
    {
        code: "PL-26",
        name: "Świętokrzyskie",
        parent: "PL"
    },
    {
        code: "PL-28",
        name: "Warmińsko-mazurskie",
        parent: "PL"
    },
    {
        code: "PL-30",
        name: "Wielkopolskie",
        parent: "PL"
    },
    {
        code: "PL-32",
        name: "Zachodniopomorskie",
        parent: "PL"
    },
    {
        code: "PS-BTH",
        name: "Bethlehem",
        parent: "PS"
    },
    {
        code: "PS-DEB",
        name: "Deir El Balah",
        parent: "PS"
    },
    {
        code: "PS-GZA",
        name: "Gaza",
        parent: "PS"
    },
    {
        code: "PS-HBN",
        name: "Hebron",
        parent: "PS"
    },
    {
        code: "PS-JEM",
        name: "Jerusalem",
        parent: "PS"
    },
    {
        code: "PS-JEN",
        name: "Jenin",
        parent: "PS"
    },
    {
        code: "PS-JRH",
        name: "Jericho and Al Aghwar",
        parent: "PS"
    },
    {
        code: "PS-KYS",
        name: "Khan Yunis",
        parent: "PS"
    },
    {
        code: "PS-NBS",
        name: "Nablus",
        parent: "PS"
    },
    {
        code: "PS-NGZ",
        name: "North Gaza",
        parent: "PS"
    },
    {
        code: "PS-QQA",
        name: "Qalqilya",
        parent: "PS"
    },
    {
        code: "PS-RBH",
        name: "Ramallah",
        parent: "PS"
    },
    {
        code: "PS-RFH",
        name: "Rafah",
        parent: "PS"
    },
    {
        code: "PS-SLT",
        name: "Salfit",
        parent: "PS"
    },
    {
        code: "PS-TBS",
        name: "Tubas",
        parent: "PS"
    },
    {
        code: "PS-TKM",
        name: "Tulkarm",
        parent: "PS"
    },
    {
        code: "PT-01",
        name: "Aveiro",
        parent: "PT"
    },
    {
        code: "PT-02",
        name: "Beja",
        parent: "PT"
    },
    {
        code: "PT-03",
        name: "Braga",
        parent: "PT"
    },
    {
        code: "PT-04",
        name: "Bragan\xe7a",
        parent: "PT"
    },
    {
        code: "PT-05",
        name: "Castelo Branco",
        parent: "PT"
    },
    {
        code: "PT-06",
        name: "Coimbra",
        parent: "PT"
    },
    {
        code: "PT-07",
        name: "\xc9vora",
        parent: "PT"
    },
    {
        code: "PT-08",
        name: "Faro",
        parent: "PT"
    },
    {
        code: "PT-09",
        name: "Guarda",
        parent: "PT"
    },
    {
        code: "PT-10",
        name: "Leiria",
        parent: "PT"
    },
    {
        code: "PT-11",
        name: "Lisboa",
        parent: "PT"
    },
    {
        code: "PT-12",
        name: "Portalegre",
        parent: "PT"
    },
    {
        code: "PT-13",
        name: "Porto",
        parent: "PT"
    },
    {
        code: "PT-14",
        name: "Santar\xe9m",
        parent: "PT"
    },
    {
        code: "PT-15",
        name: "Set\xfabal",
        parent: "PT"
    },
    {
        code: "PT-16",
        name: "Viana do Castelo",
        parent: "PT"
    },
    {
        code: "PT-17",
        name: "Vila Real",
        parent: "PT"
    },
    {
        code: "PT-18",
        name: "Viseu",
        parent: "PT"
    },
    {
        code: "PT-20",
        name: "Regi\xe3o Aut\xf3noma dos A\xe7ores",
        parent: "PT"
    },
    {
        code: "PT-30",
        name: "Regi\xe3o Aut\xf3noma da Madeira",
        parent: "PT"
    },
    {
        code: "PW-002",
        name: "Aimeliik",
        parent: "PW"
    },
    {
        code: "PW-004",
        name: "Airai",
        parent: "PW"
    },
    {
        code: "PW-010",
        name: "Angaur",
        parent: "PW"
    },
    {
        code: "PW-050",
        name: "Hatohobei",
        parent: "PW"
    },
    {
        code: "PW-100",
        name: "Kayangel",
        parent: "PW"
    },
    {
        code: "PW-150",
        name: "Koror",
        parent: "PW"
    },
    {
        code: "PW-212",
        name: "Melekeok",
        parent: "PW"
    },
    {
        code: "PW-214",
        name: "Ngaraard",
        parent: "PW"
    },
    {
        code: "PW-218",
        name: "Ngarchelong",
        parent: "PW"
    },
    {
        code: "PW-222",
        name: "Ngardmau",
        parent: "PW"
    },
    {
        code: "PW-224",
        name: "Ngatpang",
        parent: "PW"
    },
    {
        code: "PW-226",
        name: "Ngchesar",
        parent: "PW"
    },
    {
        code: "PW-227",
        name: "Ngeremlengui",
        parent: "PW"
    },
    {
        code: "PW-228",
        name: "Ngiwal",
        parent: "PW"
    },
    {
        code: "PW-350",
        name: "Peleliu",
        parent: "PW"
    },
    {
        code: "PW-370",
        name: "Sonsorol",
        parent: "PW"
    },
    {
        code: "PY-1",
        name: "Concepci\xf3n",
        parent: "PY"
    },
    {
        code: "PY-10",
        name: "Alto Paran\xe1",
        parent: "PY"
    },
    {
        code: "PY-11",
        name: "Central",
        parent: "PY"
    },
    {
        code: "PY-12",
        name: "\xd1eembuc\xfa",
        parent: "PY"
    },
    {
        code: "PY-13",
        name: "Amambay",
        parent: "PY"
    },
    {
        code: "PY-14",
        name: "Canindey\xfa",
        parent: "PY"
    },
    {
        code: "PY-15",
        name: "Presidente Hayes",
        parent: "PY"
    },
    {
        code: "PY-16",
        name: "Alto Paraguay",
        parent: "PY"
    },
    {
        code: "PY-19",
        name: "Boquer\xf3n",
        parent: "PY"
    },
    {
        code: "PY-2",
        name: "San Pedro",
        parent: "PY"
    },
    {
        code: "PY-3",
        name: "Cordillera",
        parent: "PY"
    },
    {
        code: "PY-4",
        name: "Guair\xe1",
        parent: "PY"
    },
    {
        code: "PY-5",
        name: "Caaguaz\xfa",
        parent: "PY"
    },
    {
        code: "PY-6",
        name: "Caazap\xe1",
        parent: "PY"
    },
    {
        code: "PY-7",
        name: "Itap\xfaa",
        parent: "PY"
    },
    {
        code: "PY-8",
        name: "Misiones",
        parent: "PY"
    },
    {
        code: "PY-9",
        name: "Paraguar\xed",
        parent: "PY"
    },
    {
        code: "PY-ASU",
        name: "Asunci\xf3n",
        parent: "PY"
    },
    {
        code: "QA-DA",
        name: "Ad Dawḩah",
        parent: "QA"
    },
    {
        code: "QA-KH",
        name: "Al Khawr wa adh Dhakhīrah",
        parent: "QA"
    },
    {
        code: "QA-MS",
        name: "Ash Shamāl",
        parent: "QA"
    },
    {
        code: "QA-RA",
        name: "Ar Rayyān",
        parent: "QA"
    },
    {
        code: "QA-SH",
        name: "Ash Shīḩānīyah",
        parent: "QA"
    },
    {
        code: "QA-US",
        name: "Umm Şalāl",
        parent: "QA"
    },
    {
        code: "QA-WA",
        name: "Al Wakrah",
        parent: "QA"
    },
    {
        code: "QA-ZA",
        name: "Az̧ Z̧a‘āyin",
        parent: "QA"
    },
    {
        code: "RO-AB",
        name: "Alba",
        parent: "RO"
    },
    {
        code: "RO-AG",
        name: "Argeș",
        parent: "RO"
    },
    {
        code: "RO-AR",
        name: "Arad",
        parent: "RO"
    },
    {
        code: "RO-B",
        name: "București",
        parent: "RO"
    },
    {
        code: "RO-BC",
        name: "Bacău",
        parent: "RO"
    },
    {
        code: "RO-BH",
        name: "Bihor",
        parent: "RO"
    },
    {
        code: "RO-BN",
        name: "Bistrița-Năsăud",
        parent: "RO"
    },
    {
        code: "RO-BR",
        name: "Brăila",
        parent: "RO"
    },
    {
        code: "RO-BT",
        name: "Botoșani",
        parent: "RO"
    },
    {
        code: "RO-BV",
        name: "Brașov",
        parent: "RO"
    },
    {
        code: "RO-BZ",
        name: "Buzău",
        parent: "RO"
    },
    {
        code: "RO-CJ",
        name: "Cluj",
        parent: "RO"
    },
    {
        code: "RO-CL",
        name: "Călărași",
        parent: "RO"
    },
    {
        code: "RO-CS",
        name: "Caraș-Severin",
        parent: "RO"
    },
    {
        code: "RO-CT",
        name: "Constanța",
        parent: "RO"
    },
    {
        code: "RO-CV",
        name: "Covasna",
        parent: "RO"
    },
    {
        code: "RO-DB",
        name: "D\xe2mbovița",
        parent: "RO"
    },
    {
        code: "RO-DJ",
        name: "Dolj",
        parent: "RO"
    },
    {
        code: "RO-GJ",
        name: "Gorj",
        parent: "RO"
    },
    {
        code: "RO-GL",
        name: "Galați",
        parent: "RO"
    },
    {
        code: "RO-GR",
        name: "Giurgiu",
        parent: "RO"
    },
    {
        code: "RO-HD",
        name: "Hunedoara",
        parent: "RO"
    },
    {
        code: "RO-HR",
        name: "Harghita",
        parent: "RO"
    },
    {
        code: "RO-IF",
        name: "Ilfov",
        parent: "RO"
    },
    {
        code: "RO-IL",
        name: "Ialomița",
        parent: "RO"
    },
    {
        code: "RO-IS",
        name: "Iași",
        parent: "RO"
    },
    {
        code: "RO-MH",
        name: "Mehedinți",
        parent: "RO"
    },
    {
        code: "RO-MM",
        name: "Maramureș",
        parent: "RO"
    },
    {
        code: "RO-MS",
        name: "Mureș",
        parent: "RO"
    },
    {
        code: "RO-NT",
        name: "Neamț",
        parent: "RO"
    },
    {
        code: "RO-OT",
        name: "Olt",
        parent: "RO"
    },
    {
        code: "RO-PH",
        name: "Prahova",
        parent: "RO"
    },
    {
        code: "RO-SB",
        name: "Sibiu",
        parent: "RO"
    },
    {
        code: "RO-SJ",
        name: "Sălaj",
        parent: "RO"
    },
    {
        code: "RO-SM",
        name: "Satu Mare",
        parent: "RO"
    },
    {
        code: "RO-SV",
        name: "Suceava",
        parent: "RO"
    },
    {
        code: "RO-TL",
        name: "Tulcea",
        parent: "RO"
    },
    {
        code: "RO-TM",
        name: "Timiș",
        parent: "RO"
    },
    {
        code: "RO-TR",
        name: "Teleorman",
        parent: "RO"
    },
    {
        code: "RO-VL",
        name: "V\xe2lcea",
        parent: "RO"
    },
    {
        code: "RO-VN",
        name: "Vrancea",
        parent: "RO"
    },
    {
        code: "RO-VS",
        name: "Vaslui",
        parent: "RO"
    },
    {
        code: "RS-00",
        name: "Beograd",
        parent: "RS"
    },
    {
        code: "RS-01",
        name: "Severnobački okrug",
        parent: "RS-VO"
    },
    {
        code: "RS-02",
        name: "Srednjebanatski okrug",
        parent: "RS-VO"
    },
    {
        code: "RS-03",
        name: "Severnobanatski okrug",
        parent: "RS-VO"
    },
    {
        code: "RS-04",
        name: "Južnobanatski okrug",
        parent: "RS-VO"
    },
    {
        code: "RS-05",
        name: "Zapadnobački okrug",
        parent: "RS-VO"
    },
    {
        code: "RS-06",
        name: "Južnobački okrug",
        parent: "RS-VO"
    },
    {
        code: "RS-07",
        name: "Sremski okrug",
        parent: "RS-VO"
    },
    {
        code: "RS-08",
        name: "Mačvanski okrug",
        parent: "RS"
    },
    {
        code: "RS-09",
        name: "Kolubarski okrug",
        parent: "RS"
    },
    {
        code: "RS-10",
        name: "Podunavski okrug",
        parent: "RS"
    },
    {
        code: "RS-11",
        name: "Braničevski okrug",
        parent: "RS"
    },
    {
        code: "RS-12",
        name: "Šumadijski okrug",
        parent: "RS"
    },
    {
        code: "RS-13",
        name: "Pomoravski okrug",
        parent: "RS"
    },
    {
        code: "RS-14",
        name: "Borski okrug",
        parent: "RS"
    },
    {
        code: "RS-15",
        name: "Zaječarski okrug",
        parent: "RS"
    },
    {
        code: "RS-16",
        name: "Zlatiborski okrug",
        parent: "RS"
    },
    {
        code: "RS-17",
        name: "Moravički okrug",
        parent: "RS"
    },
    {
        code: "RS-18",
        name: "Raški okrug",
        parent: "RS"
    },
    {
        code: "RS-19",
        name: "Rasinski okrug",
        parent: "RS"
    },
    {
        code: "RS-20",
        name: "Nišavski okrug",
        parent: "RS"
    },
    {
        code: "RS-21",
        name: "Toplički okrug",
        parent: "RS"
    },
    {
        code: "RS-22",
        name: "Pirotski okrug",
        parent: "RS"
    },
    {
        code: "RS-23",
        name: "Jablanički okrug",
        parent: "RS"
    },
    {
        code: "RS-24",
        name: "Pčinjski okrug",
        parent: "RS"
    },
    {
        code: "RS-25",
        name: "Kosovski okrug",
        parent: "RS-KM"
    },
    {
        code: "RS-26",
        name: "Pećki okrug",
        parent: "RS-KM"
    },
    {
        code: "RS-27",
        name: "Prizrenski okrug",
        parent: "RS-KM"
    },
    {
        code: "RS-28",
        name: "Kosovsko-Mitrovački okrug",
        parent: "RS-KM"
    },
    {
        code: "RS-29",
        name: "Kosovsko-Pomoravski okrug",
        parent: "RS-KM"
    },
    {
        code: "RS-KM",
        name: "Kosovo-Metohija",
        parent: "RS"
    },
    {
        code: "RS-VO",
        name: "Vojvodina",
        parent: "RS"
    },
    {
        code: "RU-AD",
        name: "Adygeya, Respublika",
        parent: "RU"
    },
    {
        code: "RU-AL",
        name: "Altay, Respublika",
        parent: "RU"
    },
    {
        code: "RU-ALT",
        name: "Altayskiy kray",
        parent: "RU"
    },
    {
        code: "RU-AMU",
        name: "Amurskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-ARK",
        name: "Arkhangel'skaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-AST",
        name: "Astrakhanskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-BA",
        name: "Bashkortostan, Respublika",
        parent: "RU"
    },
    {
        code: "RU-BEL",
        name: "Belgorodskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-BRY",
        name: "Bryanskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-BU",
        name: "Buryatiya, Respublika",
        parent: "RU"
    },
    {
        code: "RU-CE",
        name: "Chechenskaya Respublika",
        parent: "RU"
    },
    {
        code: "RU-CHE",
        name: "Chelyabinskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-CHU",
        name: "Chukotskiy avtonomnyy okrug",
        parent: "RU"
    },
    {
        code: "RU-CU",
        name: "Chuvashskaya Respublika",
        parent: "RU"
    },
    {
        code: "RU-DA",
        name: "Dagestan, Respublika",
        parent: "RU"
    },
    {
        code: "RU-IN",
        name: "Ingushetiya, Respublika",
        parent: "RU"
    },
    {
        code: "RU-IRK",
        name: "Irkutskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-IVA",
        name: "Ivanovskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-KAM",
        name: "Kamchatskiy kray",
        parent: "RU"
    },
    {
        code: "RU-KB",
        name: "Kabardino-Balkarskaya Respublika",
        parent: "RU"
    },
    {
        code: "RU-KC",
        name: "Karachayevo-Cherkesskaya Respublika",
        parent: "RU"
    },
    {
        code: "RU-KDA",
        name: "Krasnodarskiy kray",
        parent: "RU"
    },
    {
        code: "RU-KEM",
        name: "Kemerovskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-KGD",
        name: "Kaliningradskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-KGN",
        name: "Kurganskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-KHA",
        name: "Khabarovskiy kray",
        parent: "RU"
    },
    {
        code: "RU-KHM",
        name: "Khanty-Mansiyskiy avtonomnyy okrug",
        parent: "RU"
    },
    {
        code: "RU-KIR",
        name: "Kirovskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-KK",
        name: "Khakasiya, Respublika",
        parent: "RU"
    },
    {
        code: "RU-KL",
        name: "Kalmykiya, Respublika",
        parent: "RU"
    },
    {
        code: "RU-KLU",
        name: "Kaluzhskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-KO",
        name: "Komi, Respublika",
        parent: "RU"
    },
    {
        code: "RU-KOS",
        name: "Kostromskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-KR",
        name: "Kareliya, Respublika",
        parent: "RU"
    },
    {
        code: "RU-KRS",
        name: "Kurskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-KYA",
        name: "Krasnoyarskiy kray",
        parent: "RU"
    },
    {
        code: "RU-LEN",
        name: "Leningradskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-LIP",
        name: "Lipetskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-MAG",
        name: "Magadanskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-ME",
        name: "Mariy El, Respublika",
        parent: "RU"
    },
    {
        code: "RU-MO",
        name: "Mordoviya, Respublika",
        parent: "RU"
    },
    {
        code: "RU-MOS",
        name: "Moskovskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-MOW",
        name: "Moskva",
        parent: "RU"
    },
    {
        code: "RU-MUR",
        name: "Murmanskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-NEN",
        name: "Nenetskiy avtonomnyy okrug",
        parent: "RU"
    },
    {
        code: "RU-NGR",
        name: "Novgorodskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-NIZ",
        name: "Nizhegorodskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-NVS",
        name: "Novosibirskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-OMS",
        name: "Omskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-ORE",
        name: "Orenburgskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-ORL",
        name: "Orlovskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-PER",
        name: "Permskiy kray",
        parent: "RU"
    },
    {
        code: "RU-PNZ",
        name: "Penzenskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-PRI",
        name: "Primorskiy kray",
        parent: "RU"
    },
    {
        code: "RU-PSK",
        name: "Pskovskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-ROS",
        name: "Rostovskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-RYA",
        name: "Ryazanskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-SA",
        name: "Saha, Respublika",
        parent: "RU"
    },
    {
        code: "RU-SAK",
        name: "Sakhalinskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-SAM",
        name: "Samarskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-SAR",
        name: "Saratovskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-SE",
        name: "Severnaya Osetiya, Respublika",
        parent: "RU"
    },
    {
        code: "RU-SMO",
        name: "Smolenskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-SPE",
        name: "Sankt-Peterburg",
        parent: "RU"
    },
    {
        code: "RU-STA",
        name: "Stavropol'skiy kray",
        parent: "RU"
    },
    {
        code: "RU-SVE",
        name: "Sverdlovskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-TA",
        name: "Tatarstan, Respublika",
        parent: "RU"
    },
    {
        code: "RU-TAM",
        name: "Tambovskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-TOM",
        name: "Tomskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-TUL",
        name: "Tul'skaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-TVE",
        name: "Tverskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-TY",
        name: "Tyva, Respublika",
        parent: "RU"
    },
    {
        code: "RU-TYU",
        name: "Tyumenskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-UD",
        name: "Udmurtskaya Respublika",
        parent: "RU"
    },
    {
        code: "RU-ULY",
        name: "Ul'yanovskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-VGG",
        name: "Volgogradskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-VLA",
        name: "Vladimirskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-VLG",
        name: "Vologodskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-VOR",
        name: "Voronezhskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-YAN",
        name: "Yamalo-Nenetskiy avtonomnyy okrug",
        parent: "RU"
    },
    {
        code: "RU-YAR",
        name: "Yaroslavskaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-YEV",
        name: "Yevreyskaya avtonomnaya oblast'",
        parent: "RU"
    },
    {
        code: "RU-ZAB",
        name: "Zabaykal'skiy kray",
        parent: "RU"
    },
    {
        code: "RW-01",
        name: "City of Kigali",
        parent: "RW"
    },
    {
        code: "RW-02",
        name: "Eastern",
        parent: "RW"
    },
    {
        code: "RW-03",
        name: "Northern",
        parent: "RW"
    },
    {
        code: "RW-04",
        name: "Western",
        parent: "RW"
    },
    {
        code: "RW-05",
        name: "Southern",
        parent: "RW"
    },
    {
        code: "SA-01",
        name: "Ar Riyāḑ",
        parent: "SA"
    },
    {
        code: "SA-02",
        name: "Makkah al Mukarramah",
        parent: "SA"
    },
    {
        code: "SA-03",
        name: "Al Madīnah al Munawwarah",
        parent: "SA"
    },
    {
        code: "SA-04",
        name: "Ash Sharqīyah",
        parent: "SA"
    },
    {
        code: "SA-05",
        name: "Al Qaşīm",
        parent: "SA"
    },
    {
        code: "SA-06",
        name: "Ḩā'il",
        parent: "SA"
    },
    {
        code: "SA-07",
        name: "Tabūk",
        parent: "SA"
    },
    {
        code: "SA-08",
        name: "Al Ḩudūd ash Shamālīyah",
        parent: "SA"
    },
    {
        code: "SA-09",
        name: "Jāzān",
        parent: "SA"
    },
    {
        code: "SA-10",
        name: "Najrān",
        parent: "SA"
    },
    {
        code: "SA-11",
        name: "Al Bāḩah",
        parent: "SA"
    },
    {
        code: "SA-12",
        name: "Al Jawf",
        parent: "SA"
    },
    {
        code: "SA-14",
        name: "'Asīr",
        parent: "SA"
    },
    {
        code: "SB-CE",
        name: "Central",
        parent: "SB"
    },
    {
        code: "SB-CH",
        name: "Choiseul",
        parent: "SB"
    },
    {
        code: "SB-CT",
        name: "Capital Territory (Honiara)",
        parent: "SB"
    },
    {
        code: "SB-GU",
        name: "Guadalcanal",
        parent: "SB"
    },
    {
        code: "SB-IS",
        name: "Isabel",
        parent: "SB"
    },
    {
        code: "SB-MK",
        name: "Makira-Ulawa",
        parent: "SB"
    },
    {
        code: "SB-ML",
        name: "Malaita",
        parent: "SB"
    },
    {
        code: "SB-RB",
        name: "Rennell and Bellona",
        parent: "SB"
    },
    {
        code: "SB-TE",
        name: "Temotu",
        parent: "SB"
    },
    {
        code: "SB-WE",
        name: "Western",
        parent: "SB"
    },
    {
        code: "SC-01",
        name: "Anse aux Pins",
        parent: "SC"
    },
    {
        code: "SC-02",
        name: "Anse Boileau",
        parent: "SC"
    },
    {
        code: "SC-03",
        name: "Anse Etoile",
        parent: "SC"
    },
    {
        code: "SC-04",
        name: "Au Cap",
        parent: "SC"
    },
    {
        code: "SC-05",
        name: "Anse Royale",
        parent: "SC"
    },
    {
        code: "SC-06",
        name: "Baie Lazare",
        parent: "SC"
    },
    {
        code: "SC-07",
        name: "Baie Sainte Anne",
        parent: "SC"
    },
    {
        code: "SC-08",
        name: "Beau Vallon",
        parent: "SC"
    },
    {
        code: "SC-09",
        name: "Bel Air",
        parent: "SC"
    },
    {
        code: "SC-10",
        name: "Bel Ombre",
        parent: "SC"
    },
    {
        code: "SC-11",
        name: "Cascade",
        parent: "SC"
    },
    {
        code: "SC-12",
        name: "Glacis",
        parent: "SC"
    },
    {
        code: "SC-13",
        name: "Grand Anse Mahe",
        parent: "SC"
    },
    {
        code: "SC-14",
        name: "Grand Anse Praslin",
        parent: "SC"
    },
    {
        code: "SC-15",
        name: "La Digue",
        parent: "SC"
    },
    {
        code: "SC-16",
        name: "English River",
        parent: "SC"
    },
    {
        code: "SC-17",
        name: "Mont Buxton",
        parent: "SC"
    },
    {
        code: "SC-18",
        name: "Mont Fleuri",
        parent: "SC"
    },
    {
        code: "SC-19",
        name: "Plaisance",
        parent: "SC"
    },
    {
        code: "SC-20",
        name: "Pointe Larue",
        parent: "SC"
    },
    {
        code: "SC-21",
        name: "Port Glaud",
        parent: "SC"
    },
    {
        code: "SC-22",
        name: "Saint Louis",
        parent: "SC"
    },
    {
        code: "SC-23",
        name: "Takamaka",
        parent: "SC"
    },
    {
        code: "SC-24",
        name: "Les Mamelles",
        parent: "SC"
    },
    {
        code: "SC-25",
        name: "Roche Caiman",
        parent: "SC"
    },
    {
        code: "SC-26",
        name: "Ile Perseverance I",
        parent: "SC"
    },
    {
        code: "SC-27",
        name: "Ile Perseverance II",
        parent: "SC"
    },
    {
        code: "SD-DC",
        name: "Wasaţ Dārfūr",
        parent: "SD"
    },
    {
        code: "SD-DE",
        name: "Sharq Dārfūr",
        parent: "SD"
    },
    {
        code: "SD-DN",
        name: "Shamāl Dārfūr",
        parent: "SD"
    },
    {
        code: "SD-DS",
        name: "Janūb Dārfūr",
        parent: "SD"
    },
    {
        code: "SD-DW",
        name: "Gharb Dārfūr",
        parent: "SD"
    },
    {
        code: "SD-GD",
        name: "Al Qaḑārif",
        parent: "SD"
    },
    {
        code: "SD-GK",
        name: "Gharb Kurdufān",
        parent: "SD"
    },
    {
        code: "SD-GZ",
        name: "Al Jazīrah",
        parent: "SD"
    },
    {
        code: "SD-KA",
        name: "Kassalā",
        parent: "SD"
    },
    {
        code: "SD-KH",
        name: "Al Kharţūm",
        parent: "SD"
    },
    {
        code: "SD-KN",
        name: "Shamāl Kurdufān",
        parent: "SD"
    },
    {
        code: "SD-KS",
        name: "Janūb Kurdufān",
        parent: "SD"
    },
    {
        code: "SD-NB",
        name: "An Nīl al Azraq",
        parent: "SD"
    },
    {
        code: "SD-NO",
        name: "Ash Shamālīyah",
        parent: "SD"
    },
    {
        code: "SD-NR",
        name: "Nahr an Nīl",
        parent: "SD"
    },
    {
        code: "SD-NW",
        name: "An Nīl al Abyaḑ",
        parent: "SD"
    },
    {
        code: "SD-RS",
        name: "Al Baḩr al Aḩmar",
        parent: "SD"
    },
    {
        code: "SD-SI",
        name: "Sinnār",
        parent: "SD"
    },
    {
        code: "SE-AB",
        name: "Stockholms l\xe4n",
        parent: "SE"
    },
    {
        code: "SE-AC",
        name: "V\xe4sterbottens l\xe4n",
        parent: "SE"
    },
    {
        code: "SE-BD",
        name: "Norrbottens l\xe4n",
        parent: "SE"
    },
    {
        code: "SE-C",
        name: "Uppsala l\xe4n",
        parent: "SE"
    },
    {
        code: "SE-D",
        name: "S\xf6dermanlands l\xe4n",
        parent: "SE"
    },
    {
        code: "SE-E",
        name: "\xd6sterg\xf6tlands l\xe4n",
        parent: "SE"
    },
    {
        code: "SE-F",
        name: "J\xf6nk\xf6pings l\xe4n",
        parent: "SE"
    },
    {
        code: "SE-G",
        name: "Kronobergs l\xe4n",
        parent: "SE"
    },
    {
        code: "SE-H",
        name: "Kalmar l\xe4n",
        parent: "SE"
    },
    {
        code: "SE-I",
        name: "Gotlands l\xe4n",
        parent: "SE"
    },
    {
        code: "SE-K",
        name: "Blekinge l\xe4n",
        parent: "SE"
    },
    {
        code: "SE-M",
        name: "Sk\xe5ne l\xe4n",
        parent: "SE"
    },
    {
        code: "SE-N",
        name: "Hallands l\xe4n",
        parent: "SE"
    },
    {
        code: "SE-O",
        name: "V\xe4stra G\xf6talands l\xe4n",
        parent: "SE"
    },
    {
        code: "SE-S",
        name: "V\xe4rmlands l\xe4n",
        parent: "SE"
    },
    {
        code: "SE-T",
        name: "\xd6rebro l\xe4n",
        parent: "SE"
    },
    {
        code: "SE-U",
        name: "V\xe4stmanlands l\xe4n",
        parent: "SE"
    },
    {
        code: "SE-W",
        name: "Dalarnas l\xe4n",
        parent: "SE"
    },
    {
        code: "SE-X",
        name: "G\xe4vleborgs l\xe4n",
        parent: "SE"
    },
    {
        code: "SE-Y",
        name: "V\xe4sternorrlands l\xe4n",
        parent: "SE"
    },
    {
        code: "SE-Z",
        name: "J\xe4mtlands l\xe4n",
        parent: "SE"
    },
    {
        code: "SG-01",
        name: "Central Singapore",
        parent: "SG"
    },
    {
        code: "SG-02",
        name: "North East",
        parent: "SG"
    },
    {
        code: "SG-03",
        name: "North West",
        parent: "SG"
    },
    {
        code: "SG-04",
        name: "South East",
        parent: "SG"
    },
    {
        code: "SG-05",
        name: "South West",
        parent: "SG"
    },
    {
        code: "SH-AC",
        name: "Ascension",
        parent: "SH"
    },
    {
        code: "SH-HL",
        name: "Saint Helena",
        parent: "SH"
    },
    {
        code: "SH-TA",
        name: "Tristan da Cunha",
        parent: "SH"
    },
    {
        code: "SI-001",
        name: "Ajdovščina",
        parent: "SI"
    },
    {
        code: "SI-002",
        name: "Beltinci",
        parent: "SI"
    },
    {
        code: "SI-003",
        name: "Bled",
        parent: "SI"
    },
    {
        code: "SI-004",
        name: "Bohinj",
        parent: "SI"
    },
    {
        code: "SI-005",
        name: "Borovnica",
        parent: "SI"
    },
    {
        code: "SI-006",
        name: "Bovec",
        parent: "SI"
    },
    {
        code: "SI-007",
        name: "Brda",
        parent: "SI"
    },
    {
        code: "SI-008",
        name: "Brezovica",
        parent: "SI"
    },
    {
        code: "SI-009",
        name: "Brežice",
        parent: "SI"
    },
    {
        code: "SI-010",
        name: "Tišina",
        parent: "SI"
    },
    {
        code: "SI-011",
        name: "Celje",
        parent: "SI"
    },
    {
        code: "SI-012",
        name: "Cerklje na Gorenjskem",
        parent: "SI"
    },
    {
        code: "SI-013",
        name: "Cerknica",
        parent: "SI"
    },
    {
        code: "SI-014",
        name: "Cerkno",
        parent: "SI"
    },
    {
        code: "SI-015",
        name: "Črenšovci",
        parent: "SI"
    },
    {
        code: "SI-016",
        name: "Črna na Koroškem",
        parent: "SI"
    },
    {
        code: "SI-017",
        name: "Črnomelj",
        parent: "SI"
    },
    {
        code: "SI-018",
        name: "Destrnik",
        parent: "SI"
    },
    {
        code: "SI-019",
        name: "Divača",
        parent: "SI"
    },
    {
        code: "SI-020",
        name: "Dobrepolje",
        parent: "SI"
    },
    {
        code: "SI-021",
        name: "Dobrova-Polhov Gradec",
        parent: "SI"
    },
    {
        code: "SI-022",
        name: "Dol pri Ljubljani",
        parent: "SI"
    },
    {
        code: "SI-023",
        name: "Domžale",
        parent: "SI"
    },
    {
        code: "SI-024",
        name: "Dornava",
        parent: "SI"
    },
    {
        code: "SI-025",
        name: "Dravograd",
        parent: "SI"
    },
    {
        code: "SI-026",
        name: "Duplek",
        parent: "SI"
    },
    {
        code: "SI-027",
        name: "Gorenja vas-Poljane",
        parent: "SI"
    },
    {
        code: "SI-028",
        name: "Gorišnica",
        parent: "SI"
    },
    {
        code: "SI-029",
        name: "Gornja Radgona",
        parent: "SI"
    },
    {
        code: "SI-030",
        name: "Gornji Grad",
        parent: "SI"
    },
    {
        code: "SI-031",
        name: "Gornji Petrovci",
        parent: "SI"
    },
    {
        code: "SI-032",
        name: "Grosuplje",
        parent: "SI"
    },
    {
        code: "SI-033",
        name: "Šalovci",
        parent: "SI"
    },
    {
        code: "SI-034",
        name: "Hrastnik",
        parent: "SI"
    },
    {
        code: "SI-035",
        name: "Hrpelje-Kozina",
        parent: "SI"
    },
    {
        code: "SI-036",
        name: "Idrija",
        parent: "SI"
    },
    {
        code: "SI-037",
        name: "Ig",
        parent: "SI"
    },
    {
        code: "SI-038",
        name: "Ilirska Bistrica",
        parent: "SI"
    },
    {
        code: "SI-039",
        name: "Ivančna Gorica",
        parent: "SI"
    },
    {
        code: "SI-040",
        name: "Izola",
        parent: "SI"
    },
    {
        code: "SI-041",
        name: "Jesenice",
        parent: "SI"
    },
    {
        code: "SI-042",
        name: "Juršinci",
        parent: "SI"
    },
    {
        code: "SI-043",
        name: "Kamnik",
        parent: "SI"
    },
    {
        code: "SI-044",
        name: "Kanal ob Soči",
        parent: "SI"
    },
    {
        code: "SI-045",
        name: "Kidričevo",
        parent: "SI"
    },
    {
        code: "SI-046",
        name: "Kobarid",
        parent: "SI"
    },
    {
        code: "SI-047",
        name: "Kobilje",
        parent: "SI"
    },
    {
        code: "SI-048",
        name: "Kočevje",
        parent: "SI"
    },
    {
        code: "SI-049",
        name: "Komen",
        parent: "SI"
    },
    {
        code: "SI-050",
        name: "Koper",
        parent: "SI"
    },
    {
        code: "SI-051",
        name: "Kozje",
        parent: "SI"
    },
    {
        code: "SI-052",
        name: "Kranj",
        parent: "SI"
    },
    {
        code: "SI-053",
        name: "Kranjska Gora",
        parent: "SI"
    },
    {
        code: "SI-054",
        name: "Krško",
        parent: "SI"
    },
    {
        code: "SI-055",
        name: "Kungota",
        parent: "SI"
    },
    {
        code: "SI-056",
        name: "Kuzma",
        parent: "SI"
    },
    {
        code: "SI-057",
        name: "Laško",
        parent: "SI"
    },
    {
        code: "SI-058",
        name: "Lenart",
        parent: "SI"
    },
    {
        code: "SI-059",
        name: "Lendava",
        parent: "SI"
    },
    {
        code: "SI-060",
        name: "Litija",
        parent: "SI"
    },
    {
        code: "SI-061",
        name: "Ljubljana",
        parent: "SI"
    },
    {
        code: "SI-062",
        name: "Ljubno",
        parent: "SI"
    },
    {
        code: "SI-063",
        name: "Ljutomer",
        parent: "SI"
    },
    {
        code: "SI-064",
        name: "Logatec",
        parent: "SI"
    },
    {
        code: "SI-065",
        name: "Loška dolina",
        parent: "SI"
    },
    {
        code: "SI-066",
        name: "Loški Potok",
        parent: "SI"
    },
    {
        code: "SI-067",
        name: "Luče",
        parent: "SI"
    },
    {
        code: "SI-068",
        name: "Lukovica",
        parent: "SI"
    },
    {
        code: "SI-069",
        name: "Majšperk",
        parent: "SI"
    },
    {
        code: "SI-070",
        name: "Maribor",
        parent: "SI"
    },
    {
        code: "SI-071",
        name: "Medvode",
        parent: "SI"
    },
    {
        code: "SI-072",
        name: "Mengeš",
        parent: "SI"
    },
    {
        code: "SI-073",
        name: "Metlika",
        parent: "SI"
    },
    {
        code: "SI-074",
        name: "Mežica",
        parent: "SI"
    },
    {
        code: "SI-075",
        name: "Miren-Kostanjevica",
        parent: "SI"
    },
    {
        code: "SI-076",
        name: "Mislinja",
        parent: "SI"
    },
    {
        code: "SI-077",
        name: "Moravče",
        parent: "SI"
    },
    {
        code: "SI-078",
        name: "Moravske Toplice",
        parent: "SI"
    },
    {
        code: "SI-079",
        name: "Mozirje",
        parent: "SI"
    },
    {
        code: "SI-080",
        name: "Murska Sobota",
        parent: "SI"
    },
    {
        code: "SI-081",
        name: "Muta",
        parent: "SI"
    },
    {
        code: "SI-082",
        name: "Naklo",
        parent: "SI"
    },
    {
        code: "SI-083",
        name: "Nazarje",
        parent: "SI"
    },
    {
        code: "SI-084",
        name: "Nova Gorica",
        parent: "SI"
    },
    {
        code: "SI-085",
        name: "Novo Mesto",
        parent: "SI"
    },
    {
        code: "SI-086",
        name: "Odranci",
        parent: "SI"
    },
    {
        code: "SI-087",
        name: "Ormož",
        parent: "SI"
    },
    {
        code: "SI-088",
        name: "Osilnica",
        parent: "SI"
    },
    {
        code: "SI-089",
        name: "Pesnica",
        parent: "SI"
    },
    {
        code: "SI-090",
        name: "Piran",
        parent: "SI"
    },
    {
        code: "SI-091",
        name: "Pivka",
        parent: "SI"
    },
    {
        code: "SI-092",
        name: "Podčetrtek",
        parent: "SI"
    },
    {
        code: "SI-093",
        name: "Podvelka",
        parent: "SI"
    },
    {
        code: "SI-094",
        name: "Postojna",
        parent: "SI"
    },
    {
        code: "SI-095",
        name: "Preddvor",
        parent: "SI"
    },
    {
        code: "SI-096",
        name: "Ptuj",
        parent: "SI"
    },
    {
        code: "SI-097",
        name: "Puconci",
        parent: "SI"
    },
    {
        code: "SI-098",
        name: "Rače-Fram",
        parent: "SI"
    },
    {
        code: "SI-099",
        name: "Radeče",
        parent: "SI"
    },
    {
        code: "SI-100",
        name: "Radenci",
        parent: "SI"
    },
    {
        code: "SI-101",
        name: "Radlje ob Dravi",
        parent: "SI"
    },
    {
        code: "SI-102",
        name: "Radovljica",
        parent: "SI"
    },
    {
        code: "SI-103",
        name: "Ravne na Koroškem",
        parent: "SI"
    },
    {
        code: "SI-104",
        name: "Ribnica",
        parent: "SI"
    },
    {
        code: "SI-105",
        name: "Rogašovci",
        parent: "SI"
    },
    {
        code: "SI-106",
        name: "Rogaška Slatina",
        parent: "SI"
    },
    {
        code: "SI-107",
        name: "Rogatec",
        parent: "SI"
    },
    {
        code: "SI-108",
        name: "Ruše",
        parent: "SI"
    },
    {
        code: "SI-109",
        name: "Semič",
        parent: "SI"
    },
    {
        code: "SI-110",
        name: "Sevnica",
        parent: "SI"
    },
    {
        code: "SI-111",
        name: "Sežana",
        parent: "SI"
    },
    {
        code: "SI-112",
        name: "Slovenj Gradec",
        parent: "SI"
    },
    {
        code: "SI-113",
        name: "Slovenska Bistrica",
        parent: "SI"
    },
    {
        code: "SI-114",
        name: "Slovenske Konjice",
        parent: "SI"
    },
    {
        code: "SI-115",
        name: "Starše",
        parent: "SI"
    },
    {
        code: "SI-116",
        name: "Sveti Jurij ob Ščavnici",
        parent: "SI"
    },
    {
        code: "SI-117",
        name: "Šenčur",
        parent: "SI"
    },
    {
        code: "SI-118",
        name: "Šentilj",
        parent: "SI"
    },
    {
        code: "SI-119",
        name: "Šentjernej",
        parent: "SI"
    },
    {
        code: "SI-120",
        name: "Šentjur",
        parent: "SI"
    },
    {
        code: "SI-121",
        name: "Škocjan",
        parent: "SI"
    },
    {
        code: "SI-122",
        name: "Škofja Loka",
        parent: "SI"
    },
    {
        code: "SI-123",
        name: "Škofljica",
        parent: "SI"
    },
    {
        code: "SI-124",
        name: "Šmarje pri Jelšah",
        parent: "SI"
    },
    {
        code: "SI-125",
        name: "Šmartno ob Paki",
        parent: "SI"
    },
    {
        code: "SI-126",
        name: "Šoštanj",
        parent: "SI"
    },
    {
        code: "SI-127",
        name: "Štore",
        parent: "SI"
    },
    {
        code: "SI-128",
        name: "Tolmin",
        parent: "SI"
    },
    {
        code: "SI-129",
        name: "Trbovlje",
        parent: "SI"
    },
    {
        code: "SI-130",
        name: "Trebnje",
        parent: "SI"
    },
    {
        code: "SI-131",
        name: "Tržič",
        parent: "SI"
    },
    {
        code: "SI-132",
        name: "Turnišče",
        parent: "SI"
    },
    {
        code: "SI-133",
        name: "Velenje",
        parent: "SI"
    },
    {
        code: "SI-134",
        name: "Velike Lašče",
        parent: "SI"
    },
    {
        code: "SI-135",
        name: "Videm",
        parent: "SI"
    },
    {
        code: "SI-136",
        name: "Vipava",
        parent: "SI"
    },
    {
        code: "SI-137",
        name: "Vitanje",
        parent: "SI"
    },
    {
        code: "SI-138",
        name: "Vodice",
        parent: "SI"
    },
    {
        code: "SI-139",
        name: "Vojnik",
        parent: "SI"
    },
    {
        code: "SI-140",
        name: "Vrhnika",
        parent: "SI"
    },
    {
        code: "SI-141",
        name: "Vuzenica",
        parent: "SI"
    },
    {
        code: "SI-142",
        name: "Zagorje ob Savi",
        parent: "SI"
    },
    {
        code: "SI-143",
        name: "Zavrč",
        parent: "SI"
    },
    {
        code: "SI-144",
        name: "Zreče",
        parent: "SI"
    },
    {
        code: "SI-146",
        name: "Železniki",
        parent: "SI"
    },
    {
        code: "SI-147",
        name: "Žiri",
        parent: "SI"
    },
    {
        code: "SI-148",
        name: "Benedikt",
        parent: "SI"
    },
    {
        code: "SI-149",
        name: "Bistrica ob Sotli",
        parent: "SI"
    },
    {
        code: "SI-150",
        name: "Bloke",
        parent: "SI"
    },
    {
        code: "SI-151",
        name: "Braslovče",
        parent: "SI"
    },
    {
        code: "SI-152",
        name: "Cankova",
        parent: "SI"
    },
    {
        code: "SI-153",
        name: "Cerkvenjak",
        parent: "SI"
    },
    {
        code: "SI-154",
        name: "Dobje",
        parent: "SI"
    },
    {
        code: "SI-155",
        name: "Dobrna",
        parent: "SI"
    },
    {
        code: "SI-156",
        name: "Dobrovnik",
        parent: "SI"
    },
    {
        code: "SI-157",
        name: "Dolenjske Toplice",
        parent: "SI"
    },
    {
        code: "SI-158",
        name: "Grad",
        parent: "SI"
    },
    {
        code: "SI-159",
        name: "Hajdina",
        parent: "SI"
    },
    {
        code: "SI-160",
        name: "Hoče-Slivnica",
        parent: "SI"
    },
    {
        code: "SI-161",
        name: "Hodoš",
        parent: "SI"
    },
    {
        code: "SI-162",
        name: "Horjul",
        parent: "SI"
    },
    {
        code: "SI-163",
        name: "Jezersko",
        parent: "SI"
    },
    {
        code: "SI-164",
        name: "Komenda",
        parent: "SI"
    },
    {
        code: "SI-165",
        name: "Kostel",
        parent: "SI"
    },
    {
        code: "SI-166",
        name: "Križevci",
        parent: "SI"
    },
    {
        code: "SI-167",
        name: "Lovrenc na Pohorju",
        parent: "SI"
    },
    {
        code: "SI-168",
        name: "Markovci",
        parent: "SI"
    },
    {
        code: "SI-169",
        name: "Miklavž na Dravskem polju",
        parent: "SI"
    },
    {
        code: "SI-170",
        name: "Mirna Peč",
        parent: "SI"
    },
    {
        code: "SI-171",
        name: "Oplotnica",
        parent: "SI"
    },
    {
        code: "SI-172",
        name: "Podlehnik",
        parent: "SI"
    },
    {
        code: "SI-173",
        name: "Polzela",
        parent: "SI"
    },
    {
        code: "SI-174",
        name: "Prebold",
        parent: "SI"
    },
    {
        code: "SI-175",
        name: "Prevalje",
        parent: "SI"
    },
    {
        code: "SI-176",
        name: "Razkrižje",
        parent: "SI"
    },
    {
        code: "SI-177",
        name: "Ribnica na Pohorju",
        parent: "SI"
    },
    {
        code: "SI-178",
        name: "Selnica ob Dravi",
        parent: "SI"
    },
    {
        code: "SI-179",
        name: "Sodražica",
        parent: "SI"
    },
    {
        code: "SI-180",
        name: "Solčava",
        parent: "SI"
    },
    {
        code: "SI-181",
        name: "Sveta Ana",
        parent: "SI"
    },
    {
        code: "SI-182",
        name: "Sveti Andraž v Slovenskih goricah",
        parent: "SI"
    },
    {
        code: "SI-183",
        name: "Šempeter-Vrtojba",
        parent: "SI"
    },
    {
        code: "SI-184",
        name: "Tabor",
        parent: "SI"
    },
    {
        code: "SI-185",
        name: "Trnovska Vas",
        parent: "SI"
    },
    {
        code: "SI-186",
        name: "Trzin",
        parent: "SI"
    },
    {
        code: "SI-187",
        name: "Velika Polana",
        parent: "SI"
    },
    {
        code: "SI-188",
        name: "Veržej",
        parent: "SI"
    },
    {
        code: "SI-189",
        name: "Vransko",
        parent: "SI"
    },
    {
        code: "SI-190",
        name: "Žalec",
        parent: "SI"
    },
    {
        code: "SI-191",
        name: "Žetale",
        parent: "SI"
    },
    {
        code: "SI-192",
        name: "Žirovnica",
        parent: "SI"
    },
    {
        code: "SI-193",
        name: "Žužemberk",
        parent: "SI"
    },
    {
        code: "SI-194",
        name: "Šmartno pri Litiji",
        parent: "SI"
    },
    {
        code: "SI-195",
        name: "Apače",
        parent: "SI"
    },
    {
        code: "SI-196",
        name: "Cirkulane",
        parent: "SI"
    },
    {
        code: "SI-197",
        name: "Kostanjevica na Krki",
        parent: "SI"
    },
    {
        code: "SI-198",
        name: "Makole",
        parent: "SI"
    },
    {
        code: "SI-199",
        name: "Mokronog-Trebelno",
        parent: "SI"
    },
    {
        code: "SI-200",
        name: "Poljčane",
        parent: "SI"
    },
    {
        code: "SI-201",
        name: "Renče-Vogrsko",
        parent: "SI"
    },
    {
        code: "SI-202",
        name: "Središče ob Dravi",
        parent: "SI"
    },
    {
        code: "SI-203",
        name: "Straža",
        parent: "SI"
    },
    {
        code: "SI-204",
        name: "Sveta Trojica v Slovenskih goricah",
        parent: "SI"
    },
    {
        code: "SI-205",
        name: "Sveti Tomaž",
        parent: "SI"
    },
    {
        code: "SI-206",
        name: "Šmarješke Toplice",
        parent: "SI"
    },
    {
        code: "SI-207",
        name: "Gorje",
        parent: "SI"
    },
    {
        code: "SI-208",
        name: "Log-Dragomer",
        parent: "SI"
    },
    {
        code: "SI-209",
        name: "Rečica ob Savinji",
        parent: "SI"
    },
    {
        code: "SI-210",
        name: "Sveti Jurij v Slovenskih goricah",
        parent: "SI"
    },
    {
        code: "SI-211",
        name: "Šentrupert",
        parent: "SI"
    },
    {
        code: "SI-212",
        name: "Mirna",
        parent: "SI"
    },
    {
        code: "SI-213",
        name: "Ankaran",
        parent: "SI"
    },
    {
        code: "SK-BC",
        name: "Banskobystrick\xfd kraj",
        parent: "SK"
    },
    {
        code: "SK-BL",
        name: "Bratislavsk\xfd kraj",
        parent: "SK"
    },
    {
        code: "SK-KI",
        name: "Košick\xfd kraj",
        parent: "SK"
    },
    {
        code: "SK-NI",
        name: "Nitriansky kraj",
        parent: "SK"
    },
    {
        code: "SK-PV",
        name: "Prešovsk\xfd kraj",
        parent: "SK"
    },
    {
        code: "SK-TA",
        name: "Trnavsk\xfd kraj",
        parent: "SK"
    },
    {
        code: "SK-TC",
        name: "Trenčiansky kraj",
        parent: "SK"
    },
    {
        code: "SK-ZI",
        name: "Žilinsk\xfd kraj",
        parent: "SK"
    },
    {
        code: "SL-E",
        name: "Eastern",
        parent: "SL"
    },
    {
        code: "SL-N",
        name: "Northern",
        parent: "SL"
    },
    {
        code: "SL-NW",
        name: "North Western",
        parent: "SL"
    },
    {
        code: "SL-S",
        name: "Southern",
        parent: "SL"
    },
    {
        code: "SL-W",
        name: "Western Area (Freetown)",
        parent: "SL"
    },
    {
        code: "SM-01",
        name: "Acquaviva",
        parent: "SM"
    },
    {
        code: "SM-02",
        name: "Chiesanuova",
        parent: "SM"
    },
    {
        code: "SM-03",
        name: "Domagnano",
        parent: "SM"
    },
    {
        code: "SM-04",
        name: "Faetano",
        parent: "SM"
    },
    {
        code: "SM-05",
        name: "Fiorentino",
        parent: "SM"
    },
    {
        code: "SM-06",
        name: "Borgo Maggiore",
        parent: "SM"
    },
    {
        code: "SM-07",
        name: "Citt\xe0 di San Marino",
        parent: "SM"
    },
    {
        code: "SM-08",
        name: "Montegiardino",
        parent: "SM"
    },
    {
        code: "SM-09",
        name: "Serravalle",
        parent: "SM"
    },
    {
        code: "SN-DB",
        name: "Diourbel",
        parent: "SN"
    },
    {
        code: "SN-DK",
        name: "Dakar",
        parent: "SN"
    },
    {
        code: "SN-FK",
        name: "Fatick",
        parent: "SN"
    },
    {
        code: "SN-KA",
        name: "Kaffrine",
        parent: "SN"
    },
    {
        code: "SN-KD",
        name: "Kolda",
        parent: "SN"
    },
    {
        code: "SN-KE",
        name: "K\xe9dougou",
        parent: "SN"
    },
    {
        code: "SN-KL",
        name: "Kaolack",
        parent: "SN"
    },
    {
        code: "SN-LG",
        name: "Louga",
        parent: "SN"
    },
    {
        code: "SN-MT",
        name: "Matam",
        parent: "SN"
    },
    {
        code: "SN-SE",
        name: "S\xe9dhiou",
        parent: "SN"
    },
    {
        code: "SN-SL",
        name: "Saint-Louis",
        parent: "SN"
    },
    {
        code: "SN-TC",
        name: "Tambacounda",
        parent: "SN"
    },
    {
        code: "SN-TH",
        name: "Thi\xe8s",
        parent: "SN"
    },
    {
        code: "SN-ZG",
        name: "Ziguinchor",
        parent: "SN"
    },
    {
        code: "SO-AW",
        name: "Awdal",
        parent: "SO"
    },
    {
        code: "SO-BK",
        name: "Bakool",
        parent: "SO"
    },
    {
        code: "SO-BN",
        name: "Banaadir",
        parent: "SO"
    },
    {
        code: "SO-BR",
        name: "Bari",
        parent: "SO"
    },
    {
        code: "SO-BY",
        name: "Bay",
        parent: "SO"
    },
    {
        code: "SO-GA",
        name: "Galguduud",
        parent: "SO"
    },
    {
        code: "SO-GE",
        name: "Gedo",
        parent: "SO"
    },
    {
        code: "SO-HI",
        name: "Hiiraan",
        parent: "SO"
    },
    {
        code: "SO-JD",
        name: "Jubbada Dhexe",
        parent: "SO"
    },
    {
        code: "SO-JH",
        name: "Jubbada Hoose",
        parent: "SO"
    },
    {
        code: "SO-MU",
        name: "Mudug",
        parent: "SO"
    },
    {
        code: "SO-NU",
        name: "Nugaal",
        parent: "SO"
    },
    {
        code: "SO-SA",
        name: "Sanaag",
        parent: "SO"
    },
    {
        code: "SO-SD",
        name: "Shabeellaha Dhexe",
        parent: "SO"
    },
    {
        code: "SO-SH",
        name: "Shabeellaha Hoose",
        parent: "SO"
    },
    {
        code: "SO-SO",
        name: "Sool",
        parent: "SO"
    },
    {
        code: "SO-TO",
        name: "Togdheer",
        parent: "SO"
    },
    {
        code: "SO-WO",
        name: "Woqooyi Galbeed",
        parent: "SO"
    },
    {
        code: "SR-BR",
        name: "Brokopondo",
        parent: "SR"
    },
    {
        code: "SR-CM",
        name: "Commewijne",
        parent: "SR"
    },
    {
        code: "SR-CR",
        name: "Coronie",
        parent: "SR"
    },
    {
        code: "SR-MA",
        name: "Marowijne",
        parent: "SR"
    },
    {
        code: "SR-NI",
        name: "Nickerie",
        parent: "SR"
    },
    {
        code: "SR-PM",
        name: "Paramaribo",
        parent: "SR"
    },
    {
        code: "SR-PR",
        name: "Para",
        parent: "SR"
    },
    {
        code: "SR-SA",
        name: "Saramacca",
        parent: "SR"
    },
    {
        code: "SR-SI",
        name: "Sipaliwini",
        parent: "SR"
    },
    {
        code: "SR-WA",
        name: "Wanica",
        parent: "SR"
    },
    {
        code: "SS-BN",
        name: "Northern Bahr el Ghazal",
        parent: "SS"
    },
    {
        code: "SS-BW",
        name: "Western Bahr el Ghazal",
        parent: "SS"
    },
    {
        code: "SS-EC",
        name: "Central Equatoria",
        parent: "SS"
    },
    {
        code: "SS-EE",
        name: "Eastern Equatoria",
        parent: "SS"
    },
    {
        code: "SS-EW",
        name: "Western Equatoria",
        parent: "SS"
    },
    {
        code: "SS-JG",
        name: "Jonglei",
        parent: "SS"
    },
    {
        code: "SS-LK",
        name: "Lakes",
        parent: "SS"
    },
    {
        code: "SS-NU",
        name: "Upper Nile",
        parent: "SS"
    },
    {
        code: "SS-UY",
        name: "Unity",
        parent: "SS"
    },
    {
        code: "SS-WR",
        name: "Warrap",
        parent: "SS"
    },
    {
        code: "ST-01",
        name: "\xc1gua Grande",
        parent: "ST"
    },
    {
        code: "ST-02",
        name: "Cantagalo",
        parent: "ST"
    },
    {
        code: "ST-03",
        name: "Cau\xe9",
        parent: "ST"
    },
    {
        code: "ST-04",
        name: "Lemb\xe1",
        parent: "ST"
    },
    {
        code: "ST-05",
        name: "Lobata",
        parent: "ST"
    },
    {
        code: "ST-06",
        name: "M\xe9-Z\xf3chi",
        parent: "ST"
    },
    {
        code: "ST-P",
        name: "Pr\xedncipe",
        parent: "ST"
    },
    {
        code: "SV-AH",
        name: "Ahuachap\xe1n",
        parent: "SV"
    },
    {
        code: "SV-CA",
        name: "Caba\xf1as",
        parent: "SV"
    },
    {
        code: "SV-CH",
        name: "Chalatenango",
        parent: "SV"
    },
    {
        code: "SV-CU",
        name: "Cuscatl\xe1n",
        parent: "SV"
    },
    {
        code: "SV-LI",
        name: "La Libertad",
        parent: "SV"
    },
    {
        code: "SV-MO",
        name: "Moraz\xe1n",
        parent: "SV"
    },
    {
        code: "SV-PA",
        name: "La Paz",
        parent: "SV"
    },
    {
        code: "SV-SA",
        name: "Santa Ana",
        parent: "SV"
    },
    {
        code: "SV-SM",
        name: "San Miguel",
        parent: "SV"
    },
    {
        code: "SV-SO",
        name: "Sonsonate",
        parent: "SV"
    },
    {
        code: "SV-SS",
        name: "San Salvador",
        parent: "SV"
    },
    {
        code: "SV-SV",
        name: "San Vicente",
        parent: "SV"
    },
    {
        code: "SV-UN",
        name: "La Uni\xf3n",
        parent: "SV"
    },
    {
        code: "SV-US",
        name: "Usulut\xe1n",
        parent: "SV"
    },
    {
        code: "SY-DI",
        name: "Dimashq",
        parent: "SY"
    },
    {
        code: "SY-DR",
        name: "Dar'ā",
        parent: "SY"
    },
    {
        code: "SY-DY",
        name: "Dayr az Zawr",
        parent: "SY"
    },
    {
        code: "SY-HA",
        name: "Al Ḩasakah",
        parent: "SY"
    },
    {
        code: "SY-HI",
        name: "Ḩimş",
        parent: "SY"
    },
    {
        code: "SY-HL",
        name: "Ḩalab",
        parent: "SY"
    },
    {
        code: "SY-HM",
        name: "Ḩamāh",
        parent: "SY"
    },
    {
        code: "SY-ID",
        name: "Idlib",
        parent: "SY"
    },
    {
        code: "SY-LA",
        name: "Al Lādhiqīyah",
        parent: "SY"
    },
    {
        code: "SY-QU",
        name: "Al Qunayţirah",
        parent: "SY"
    },
    {
        code: "SY-RA",
        name: "Ar Raqqah",
        parent: "SY"
    },
    {
        code: "SY-RD",
        name: "Rīf Dimashq",
        parent: "SY"
    },
    {
        code: "SY-SU",
        name: "As Suwaydā'",
        parent: "SY"
    },
    {
        code: "SY-TA",
        name: "Ţarţūs",
        parent: "SY"
    },
    {
        code: "SZ-HH",
        name: "Hhohho",
        parent: "SZ"
    },
    {
        code: "SZ-LU",
        name: "Lubombo",
        parent: "SZ"
    },
    {
        code: "SZ-MA",
        name: "Manzini",
        parent: "SZ"
    },
    {
        code: "SZ-SH",
        name: "Shiselweni",
        parent: "SZ"
    },
    {
        code: "TD-BA",
        name: "Al Baţḩā’",
        parent: "TD"
    },
    {
        code: "TD-BG",
        name: "Baḩr al Ghazāl",
        parent: "TD"
    },
    {
        code: "TD-BO",
        name: "Būrkū",
        parent: "TD"
    },
    {
        code: "TD-CB",
        name: "Shārī Bāqirmī",
        parent: "TD"
    },
    {
        code: "TD-EE",
        name: "Inīdī ash Sharqī",
        parent: "TD"
    },
    {
        code: "TD-EO",
        name: "Inīdī al Gharbī",
        parent: "TD"
    },
    {
        code: "TD-GR",
        name: "Qīrā",
        parent: "TD"
    },
    {
        code: "TD-HL",
        name: "Ḩajjar Lamīs",
        parent: "TD"
    },
    {
        code: "TD-KA",
        name: "Kānim",
        parent: "TD"
    },
    {
        code: "TD-LC",
        name: "Al Buḩayrah",
        parent: "TD"
    },
    {
        code: "TD-LO",
        name: "Lūghūn al Gharbī",
        parent: "TD"
    },
    {
        code: "TD-LR",
        name: "Lūghūn ash Sharqī",
        parent: "TD"
    },
    {
        code: "TD-MA",
        name: "Māndūl",
        parent: "TD"
    },
    {
        code: "TD-MC",
        name: "Shārī al Awsaţ",
        parent: "TD"
    },
    {
        code: "TD-ME",
        name: "Māyū Kībbī ash Sharqī",
        parent: "TD"
    },
    {
        code: "TD-MO",
        name: "Māyū Kībbī al Gharbī",
        parent: "TD"
    },
    {
        code: "TD-ND",
        name: "Madīnat Injamīnā",
        parent: "TD"
    },
    {
        code: "TD-OD",
        name: "Waddāy",
        parent: "TD"
    },
    {
        code: "TD-SA",
        name: "Salāmāt",
        parent: "TD"
    },
    {
        code: "TD-SI",
        name: "Sīlā",
        parent: "TD"
    },
    {
        code: "TD-TA",
        name: "Tānjīlī",
        parent: "TD"
    },
    {
        code: "TD-TI",
        name: "Tibastī",
        parent: "TD"
    },
    {
        code: "TD-WF",
        name: "Wādī Fīrā’",
        parent: "TD"
    },
    {
        code: "TG-C",
        name: "Centrale",
        parent: "TG"
    },
    {
        code: "TG-K",
        name: "Kara",
        parent: "TG"
    },
    {
        code: "TG-M",
        name: "Maritime (R\xe9gion)",
        parent: "TG"
    },
    {
        code: "TG-P",
        name: "Plateaux",
        parent: "TG"
    },
    {
        code: "TG-S",
        name: "Savanes",
        parent: "TG"
    },
    {
        code: "TH-10",
        name: "Krung Thep Maha Nakhon",
        parent: "TH"
    },
    {
        code: "TH-11",
        name: "Samut Prakan",
        parent: "TH"
    },
    {
        code: "TH-12",
        name: "Nonthaburi",
        parent: "TH"
    },
    {
        code: "TH-13",
        name: "Pathum Thani",
        parent: "TH"
    },
    {
        code: "TH-14",
        name: "Phra Nakhon Si Ayutthaya",
        parent: "TH"
    },
    {
        code: "TH-15",
        name: "Ang Thong",
        parent: "TH"
    },
    {
        code: "TH-16",
        name: "Lop Buri",
        parent: "TH"
    },
    {
        code: "TH-17",
        name: "Sing Buri",
        parent: "TH"
    },
    {
        code: "TH-18",
        name: "Chai Nat",
        parent: "TH"
    },
    {
        code: "TH-19",
        name: "Saraburi",
        parent: "TH"
    },
    {
        code: "TH-20",
        name: "Chon Buri",
        parent: "TH"
    },
    {
        code: "TH-21",
        name: "Rayong",
        parent: "TH"
    },
    {
        code: "TH-22",
        name: "Chanthaburi",
        parent: "TH"
    },
    {
        code: "TH-23",
        name: "Trat",
        parent: "TH"
    },
    {
        code: "TH-24",
        name: "Chachoengsao",
        parent: "TH"
    },
    {
        code: "TH-25",
        name: "Prachin Buri",
        parent: "TH"
    },
    {
        code: "TH-26",
        name: "Nakhon Nayok",
        parent: "TH"
    },
    {
        code: "TH-27",
        name: "Sa Kaeo",
        parent: "TH"
    },
    {
        code: "TH-30",
        name: "Nakhon Ratchasima",
        parent: "TH"
    },
    {
        code: "TH-31",
        name: "Buri Ram",
        parent: "TH"
    },
    {
        code: "TH-32",
        name: "Surin",
        parent: "TH"
    },
    {
        code: "TH-33",
        name: "Si Sa Ket",
        parent: "TH"
    },
    {
        code: "TH-34",
        name: "Ubon Ratchathani",
        parent: "TH"
    },
    {
        code: "TH-35",
        name: "Yasothon",
        parent: "TH"
    },
    {
        code: "TH-36",
        name: "Chaiyaphum",
        parent: "TH"
    },
    {
        code: "TH-37",
        name: "Amnat Charoen",
        parent: "TH"
    },
    {
        code: "TH-38",
        name: "Bueng Kan",
        parent: "TH"
    },
    {
        code: "TH-39",
        name: "Nong Bua Lam Phu",
        parent: "TH"
    },
    {
        code: "TH-40",
        name: "Khon Kaen",
        parent: "TH"
    },
    {
        code: "TH-41",
        name: "Udon Thani",
        parent: "TH"
    },
    {
        code: "TH-42",
        name: "Loei",
        parent: "TH"
    },
    {
        code: "TH-43",
        name: "Nong Khai",
        parent: "TH"
    },
    {
        code: "TH-44",
        name: "Maha Sarakham",
        parent: "TH"
    },
    {
        code: "TH-45",
        name: "Roi Et",
        parent: "TH"
    },
    {
        code: "TH-46",
        name: "Kalasin",
        parent: "TH"
    },
    {
        code: "TH-47",
        name: "Sakon Nakhon",
        parent: "TH"
    },
    {
        code: "TH-48",
        name: "Nakhon Phanom",
        parent: "TH"
    },
    {
        code: "TH-49",
        name: "Mukdahan",
        parent: "TH"
    },
    {
        code: "TH-50",
        name: "Chiang Mai",
        parent: "TH"
    },
    {
        code: "TH-51",
        name: "Lamphun",
        parent: "TH"
    },
    {
        code: "TH-52",
        name: "Lampang",
        parent: "TH"
    },
    {
        code: "TH-53",
        name: "Uttaradit",
        parent: "TH"
    },
    {
        code: "TH-54",
        name: "Phrae",
        parent: "TH"
    },
    {
        code: "TH-55",
        name: "Nan",
        parent: "TH"
    },
    {
        code: "TH-56",
        name: "Phayao",
        parent: "TH"
    },
    {
        code: "TH-57",
        name: "Chiang Rai",
        parent: "TH"
    },
    {
        code: "TH-58",
        name: "Mae Hong Son",
        parent: "TH"
    },
    {
        code: "TH-60",
        name: "Nakhon Sawan",
        parent: "TH"
    },
    {
        code: "TH-61",
        name: "Uthai Thani",
        parent: "TH"
    },
    {
        code: "TH-62",
        name: "Kamphaeng Phet",
        parent: "TH"
    },
    {
        code: "TH-63",
        name: "Tak",
        parent: "TH"
    },
    {
        code: "TH-64",
        name: "Sukhothai",
        parent: "TH"
    },
    {
        code: "TH-65",
        name: "Phitsanulok",
        parent: "TH"
    },
    {
        code: "TH-66",
        name: "Phichit",
        parent: "TH"
    },
    {
        code: "TH-67",
        name: "Phetchabun",
        parent: "TH"
    },
    {
        code: "TH-70",
        name: "Ratchaburi",
        parent: "TH"
    },
    {
        code: "TH-71",
        name: "Kanchanaburi",
        parent: "TH"
    },
    {
        code: "TH-72",
        name: "Suphan Buri",
        parent: "TH"
    },
    {
        code: "TH-73",
        name: "Nakhon Pathom",
        parent: "TH"
    },
    {
        code: "TH-74",
        name: "Samut Sakhon",
        parent: "TH"
    },
    {
        code: "TH-75",
        name: "Samut Songkhram",
        parent: "TH"
    },
    {
        code: "TH-76",
        name: "Phetchaburi",
        parent: "TH"
    },
    {
        code: "TH-77",
        name: "Prachuap Khiri Khan",
        parent: "TH"
    },
    {
        code: "TH-80",
        name: "Nakhon Si Thammarat",
        parent: "TH"
    },
    {
        code: "TH-81",
        name: "Krabi",
        parent: "TH"
    },
    {
        code: "TH-82",
        name: "Phangnga",
        parent: "TH"
    },
    {
        code: "TH-83",
        name: "Phuket",
        parent: "TH"
    },
    {
        code: "TH-84",
        name: "Surat Thani",
        parent: "TH"
    },
    {
        code: "TH-85",
        name: "Ranong",
        parent: "TH"
    },
    {
        code: "TH-86",
        name: "Chumphon",
        parent: "TH"
    },
    {
        code: "TH-90",
        name: "Songkhla",
        parent: "TH"
    },
    {
        code: "TH-91",
        name: "Satun",
        parent: "TH"
    },
    {
        code: "TH-92",
        name: "Trang",
        parent: "TH"
    },
    {
        code: "TH-93",
        name: "Phatthalung",
        parent: "TH"
    },
    {
        code: "TH-94",
        name: "Pattani",
        parent: "TH"
    },
    {
        code: "TH-95",
        name: "Yala",
        parent: "TH"
    },
    {
        code: "TH-96",
        name: "Narathiwat",
        parent: "TH"
    },
    {
        code: "TH-S",
        name: "Phatthaya",
        parent: "TH"
    },
    {
        code: "TJ-DU",
        name: "Dushanbe",
        parent: "TJ"
    },
    {
        code: "TJ-GB",
        name: "Kŭhistoni Badakhshon",
        parent: "TJ"
    },
    {
        code: "TJ-KT",
        name: "Khatlon",
        parent: "TJ"
    },
    {
        code: "TJ-RA",
        name: "nohiyahoi tobei jumhur\xed",
        parent: "TJ"
    },
    {
        code: "TJ-SU",
        name: "Sughd",
        parent: "TJ"
    },
    {
        code: "TL-AL",
        name: "Aileu",
        parent: "TL"
    },
    {
        code: "TL-AN",
        name: "Ainaro",
        parent: "TL"
    },
    {
        code: "TL-BA",
        name: "Baucau",
        parent: "TL"
    },
    {
        code: "TL-BO",
        name: "Bobonaro",
        parent: "TL"
    },
    {
        code: "TL-CO",
        name: "Cova Lima",
        parent: "TL"
    },
    {
        code: "TL-DI",
        name: "D\xedli",
        parent: "TL"
    },
    {
        code: "TL-ER",
        name: "Ermera",
        parent: "TL"
    },
    {
        code: "TL-LA",
        name: "Laut\xe9m",
        parent: "TL"
    },
    {
        code: "TL-LI",
        name: "Liqui\xe7a",
        parent: "TL"
    },
    {
        code: "TL-MF",
        name: "Manufahi",
        parent: "TL"
    },
    {
        code: "TL-MT",
        name: "Manatuto",
        parent: "TL"
    },
    {
        code: "TL-OE",
        name: "O\xe9-Cusse Ambeno",
        parent: "TL"
    },
    {
        code: "TL-VI",
        name: "Viqueque",
        parent: "TL"
    },
    {
        code: "TM-A",
        name: "Ahal",
        parent: "TM"
    },
    {
        code: "TM-B",
        name: "Balkan",
        parent: "TM"
    },
    {
        code: "TM-D",
        name: "Daşoguz",
        parent: "TM"
    },
    {
        code: "TM-L",
        name: "Lebap",
        parent: "TM"
    },
    {
        code: "TM-M",
        name: "Mary",
        parent: "TM"
    },
    {
        code: "TM-S",
        name: "Aşgabat",
        parent: "TM"
    },
    {
        code: "TN-11",
        name: "Tunis",
        parent: "TN"
    },
    {
        code: "TN-12",
        name: "L'Ariana",
        parent: "TN"
    },
    {
        code: "TN-13",
        name: "Ben Arous",
        parent: "TN"
    },
    {
        code: "TN-14",
        name: "La Manouba",
        parent: "TN"
    },
    {
        code: "TN-21",
        name: "Nabeul",
        parent: "TN"
    },
    {
        code: "TN-22",
        name: "Zaghouan",
        parent: "TN"
    },
    {
        code: "TN-23",
        name: "Bizerte",
        parent: "TN"
    },
    {
        code: "TN-31",
        name: "B\xe9ja",
        parent: "TN"
    },
    {
        code: "TN-32",
        name: "Jendouba",
        parent: "TN"
    },
    {
        code: "TN-33",
        name: "Le Kef",
        parent: "TN"
    },
    {
        code: "TN-34",
        name: "Siliana",
        parent: "TN"
    },
    {
        code: "TN-41",
        name: "Kairouan",
        parent: "TN"
    },
    {
        code: "TN-42",
        name: "Kasserine",
        parent: "TN"
    },
    {
        code: "TN-43",
        name: "Sidi Bouzid",
        parent: "TN"
    },
    {
        code: "TN-51",
        name: "Sousse",
        parent: "TN"
    },
    {
        code: "TN-52",
        name: "Monastir",
        parent: "TN"
    },
    {
        code: "TN-53",
        name: "Mahdia",
        parent: "TN"
    },
    {
        code: "TN-61",
        name: "Sfax",
        parent: "TN"
    },
    {
        code: "TN-71",
        name: "Gafsa",
        parent: "TN"
    },
    {
        code: "TN-72",
        name: "Tozeur",
        parent: "TN"
    },
    {
        code: "TN-73",
        name: "K\xe9bili",
        parent: "TN"
    },
    {
        code: "TN-81",
        name: "Gab\xe8s",
        parent: "TN"
    },
    {
        code: "TN-82",
        name: "M\xe9denine",
        parent: "TN"
    },
    {
        code: "TN-83",
        name: "Tataouine",
        parent: "TN"
    },
    {
        code: "TO-01",
        name: "'Eua",
        parent: "TO"
    },
    {
        code: "TO-02",
        name: "Ha'apai",
        parent: "TO"
    },
    {
        code: "TO-03",
        name: "Niuas",
        parent: "TO"
    },
    {
        code: "TO-04",
        name: "Tongatapu",
        parent: "TO"
    },
    {
        code: "TO-05",
        name: "Vava'u",
        parent: "TO"
    },
    {
        code: "TR-01",
        name: "Adana",
        parent: "TR"
    },
    {
        code: "TR-02",
        name: "Adıyaman",
        parent: "TR"
    },
    {
        code: "TR-03",
        name: "Afyonkarahisar",
        parent: "TR"
    },
    {
        code: "TR-04",
        name: "Ağrı",
        parent: "TR"
    },
    {
        code: "TR-05",
        name: "Amasya",
        parent: "TR"
    },
    {
        code: "TR-06",
        name: "Ankara",
        parent: "TR"
    },
    {
        code: "TR-07",
        name: "Antalya",
        parent: "TR"
    },
    {
        code: "TR-08",
        name: "Artvin",
        parent: "TR"
    },
    {
        code: "TR-09",
        name: "Aydın",
        parent: "TR"
    },
    {
        code: "TR-10",
        name: "Balıkesir",
        parent: "TR"
    },
    {
        code: "TR-11",
        name: "Bilecik",
        parent: "TR"
    },
    {
        code: "TR-12",
        name: "Bing\xf6l",
        parent: "TR"
    },
    {
        code: "TR-13",
        name: "Bitlis",
        parent: "TR"
    },
    {
        code: "TR-14",
        name: "Bolu",
        parent: "TR"
    },
    {
        code: "TR-15",
        name: "Burdur",
        parent: "TR"
    },
    {
        code: "TR-16",
        name: "Bursa",
        parent: "TR"
    },
    {
        code: "TR-17",
        name: "\xc7anakkale",
        parent: "TR"
    },
    {
        code: "TR-18",
        name: "\xc7ankırı",
        parent: "TR"
    },
    {
        code: "TR-19",
        name: "\xc7orum",
        parent: "TR"
    },
    {
        code: "TR-20",
        name: "Denizli",
        parent: "TR"
    },
    {
        code: "TR-21",
        name: "Diyarbakır",
        parent: "TR"
    },
    {
        code: "TR-22",
        name: "Edirne",
        parent: "TR"
    },
    {
        code: "TR-23",
        name: "Elazığ",
        parent: "TR"
    },
    {
        code: "TR-24",
        name: "Erzincan",
        parent: "TR"
    },
    {
        code: "TR-25",
        name: "Erzurum",
        parent: "TR"
    },
    {
        code: "TR-26",
        name: "Eskişehir",
        parent: "TR"
    },
    {
        code: "TR-27",
        name: "Gaziantep",
        parent: "TR"
    },
    {
        code: "TR-28",
        name: "Giresun",
        parent: "TR"
    },
    {
        code: "TR-29",
        name: "G\xfcm\xfcşhane",
        parent: "TR"
    },
    {
        code: "TR-30",
        name: "Hakk\xe2ri",
        parent: "TR"
    },
    {
        code: "TR-31",
        name: "Hatay",
        parent: "TR"
    },
    {
        code: "TR-32",
        name: "Isparta",
        parent: "TR"
    },
    {
        code: "TR-33",
        name: "Mersin",
        parent: "TR"
    },
    {
        code: "TR-34",
        name: "İstanbul",
        parent: "TR"
    },
    {
        code: "TR-35",
        name: "İzmir",
        parent: "TR"
    },
    {
        code: "TR-36",
        name: "Kars",
        parent: "TR"
    },
    {
        code: "TR-37",
        name: "Kastamonu",
        parent: "TR"
    },
    {
        code: "TR-38",
        name: "Kayseri",
        parent: "TR"
    },
    {
        code: "TR-39",
        name: "Kırklareli",
        parent: "TR"
    },
    {
        code: "TR-40",
        name: "Kırşehir",
        parent: "TR"
    },
    {
        code: "TR-41",
        name: "Kocaeli",
        parent: "TR"
    },
    {
        code: "TR-42",
        name: "Konya",
        parent: "TR"
    },
    {
        code: "TR-43",
        name: "K\xfctahya",
        parent: "TR"
    },
    {
        code: "TR-44",
        name: "Malatya",
        parent: "TR"
    },
    {
        code: "TR-45",
        name: "Manisa",
        parent: "TR"
    },
    {
        code: "TR-46",
        name: "Kahramanmaraş",
        parent: "TR"
    },
    {
        code: "TR-47",
        name: "Mardin",
        parent: "TR"
    },
    {
        code: "TR-48",
        name: "Muğla",
        parent: "TR"
    },
    {
        code: "TR-49",
        name: "Muş",
        parent: "TR"
    },
    {
        code: "TR-50",
        name: "Nevşehir",
        parent: "TR"
    },
    {
        code: "TR-51",
        name: "Niğde",
        parent: "TR"
    },
    {
        code: "TR-52",
        name: "Ordu",
        parent: "TR"
    },
    {
        code: "TR-53",
        name: "Rize",
        parent: "TR"
    },
    {
        code: "TR-54",
        name: "Sakarya",
        parent: "TR"
    },
    {
        code: "TR-55",
        name: "Samsun",
        parent: "TR"
    },
    {
        code: "TR-56",
        name: "Siirt",
        parent: "TR"
    },
    {
        code: "TR-57",
        name: "Sinop",
        parent: "TR"
    },
    {
        code: "TR-58",
        name: "Sivas",
        parent: "TR"
    },
    {
        code: "TR-59",
        name: "Tekirdağ",
        parent: "TR"
    },
    {
        code: "TR-60",
        name: "Tokat",
        parent: "TR"
    },
    {
        code: "TR-61",
        name: "Trabzon",
        parent: "TR"
    },
    {
        code: "TR-62",
        name: "Tunceli",
        parent: "TR"
    },
    {
        code: "TR-63",
        name: "Şanlıurfa",
        parent: "TR"
    },
    {
        code: "TR-64",
        name: "Uşak",
        parent: "TR"
    },
    {
        code: "TR-65",
        name: "Van",
        parent: "TR"
    },
    {
        code: "TR-66",
        name: "Yozgat",
        parent: "TR"
    },
    {
        code: "TR-67",
        name: "Zonguldak",
        parent: "TR"
    },
    {
        code: "TR-68",
        name: "Aksaray",
        parent: "TR"
    },
    {
        code: "TR-69",
        name: "Bayburt",
        parent: "TR"
    },
    {
        code: "TR-70",
        name: "Karaman",
        parent: "TR"
    },
    {
        code: "TR-71",
        name: "Kırıkkale",
        parent: "TR"
    },
    {
        code: "TR-72",
        name: "Batman",
        parent: "TR"
    },
    {
        code: "TR-73",
        name: "Şırnak",
        parent: "TR"
    },
    {
        code: "TR-74",
        name: "Bartın",
        parent: "TR"
    },
    {
        code: "TR-75",
        name: "Ardahan",
        parent: "TR"
    },
    {
        code: "TR-76",
        name: "Iğdır",
        parent: "TR"
    },
    {
        code: "TR-77",
        name: "Yalova",
        parent: "TR"
    },
    {
        code: "TR-78",
        name: "Karab\xfck",
        parent: "TR"
    },
    {
        code: "TR-79",
        name: "Kilis",
        parent: "TR"
    },
    {
        code: "TR-80",
        name: "Osmaniye",
        parent: "TR"
    },
    {
        code: "TR-81",
        name: "D\xfczce",
        parent: "TR"
    },
    {
        code: "TT-ARI",
        name: "Arima",
        parent: "TT"
    },
    {
        code: "TT-CHA",
        name: "Chaguanas",
        parent: "TT"
    },
    {
        code: "TT-CTT",
        name: "Couva-Tabaquite-Talparo",
        parent: "TT"
    },
    {
        code: "TT-DMN",
        name: "Diego Martin",
        parent: "TT"
    },
    {
        code: "TT-MRC",
        name: "Mayaro-Rio Claro",
        parent: "TT"
    },
    {
        code: "TT-PED",
        name: "Penal-Debe",
        parent: "TT"
    },
    {
        code: "TT-POS",
        name: "Port of Spain",
        parent: "TT"
    },
    {
        code: "TT-PRT",
        name: "Princes Town",
        parent: "TT"
    },
    {
        code: "TT-PTF",
        name: "Point Fortin",
        parent: "TT"
    },
    {
        code: "TT-SFO",
        name: "San Fernando",
        parent: "TT"
    },
    {
        code: "TT-SGE",
        name: "Sangre Grande",
        parent: "TT"
    },
    {
        code: "TT-SIP",
        name: "Siparia",
        parent: "TT"
    },
    {
        code: "TT-SJL",
        name: "San Juan-Laventille",
        parent: "TT"
    },
    {
        code: "TT-TOB",
        name: "Tobago",
        parent: "TT"
    },
    {
        code: "TT-TUP",
        name: "Tunapuna-Piarco",
        parent: "TT"
    },
    {
        code: "TV-FUN",
        name: "Funafuti",
        parent: "TV"
    },
    {
        code: "TV-NIT",
        name: "Niutao",
        parent: "TV"
    },
    {
        code: "TV-NKF",
        name: "Nukufetau",
        parent: "TV"
    },
    {
        code: "TV-NKL",
        name: "Nukulaelae",
        parent: "TV"
    },
    {
        code: "TV-NMA",
        name: "Nanumea",
        parent: "TV"
    },
    {
        code: "TV-NMG",
        name: "Nanumaga",
        parent: "TV"
    },
    {
        code: "TV-NUI",
        name: "Nui",
        parent: "TV"
    },
    {
        code: "TV-VAI",
        name: "Vaitupu",
        parent: "TV"
    },
    {
        code: "TW-CHA",
        name: "Changhua",
        parent: "TW"
    },
    {
        code: "TW-CYI",
        name: "Chiayi",
        parent: "TW"
    },
    {
        code: "TW-CYQ",
        name: "Chiayi",
        parent: "TW"
    },
    {
        code: "TW-HSQ",
        name: "Hsinchu",
        parent: "TW"
    },
    {
        code: "TW-HSZ",
        name: "Hsinchu",
        parent: "TW"
    },
    {
        code: "TW-HUA",
        name: "Hualien",
        parent: "TW"
    },
    {
        code: "TW-ILA",
        name: "Yilan",
        parent: "TW"
    },
    {
        code: "TW-KEE",
        name: "Keelung",
        parent: "TW"
    },
    {
        code: "TW-KHH",
        name: "Kaohsiung",
        parent: "TW"
    },
    {
        code: "TW-KIN",
        name: "Kinmen",
        parent: "TW"
    },
    {
        code: "TW-LIE",
        name: "Lienchiang",
        parent: "TW"
    },
    {
        code: "TW-MIA",
        name: "Miaoli",
        parent: "TW"
    },
    {
        code: "TW-NAN",
        name: "Nantou",
        parent: "TW"
    },
    {
        code: "TW-NWT",
        name: "New Taipei",
        parent: "TW"
    },
    {
        code: "TW-PEN",
        name: "Penghu",
        parent: "TW"
    },
    {
        code: "TW-PIF",
        name: "Pingtung",
        parent: "TW"
    },
    {
        code: "TW-TAO",
        name: "Taoyuan",
        parent: "TW"
    },
    {
        code: "TW-TNN",
        name: "Tainan",
        parent: "TW"
    },
    {
        code: "TW-TPE",
        name: "Taipei",
        parent: "TW"
    },
    {
        code: "TW-TTT",
        name: "Taitung",
        parent: "TW"
    },
    {
        code: "TW-TXG",
        name: "Taichung",
        parent: "TW"
    },
    {
        code: "TW-YUN",
        name: "Yunlin",
        parent: "TW"
    },
    {
        code: "TZ-01",
        name: "Arusha",
        parent: "TZ"
    },
    {
        code: "TZ-02",
        name: "Dar es Salaam",
        parent: "TZ"
    },
    {
        code: "TZ-03",
        name: "Dodoma",
        parent: "TZ"
    },
    {
        code: "TZ-04",
        name: "Iringa",
        parent: "TZ"
    },
    {
        code: "TZ-05",
        name: "Kagera",
        parent: "TZ"
    },
    {
        code: "TZ-06",
        name: "Kaskazini Pemba",
        parent: "TZ"
    },
    {
        code: "TZ-07",
        name: "Kaskazini Unguja",
        parent: "TZ"
    },
    {
        code: "TZ-08",
        name: "Kigoma",
        parent: "TZ"
    },
    {
        code: "TZ-09",
        name: "Kilimanjaro",
        parent: "TZ"
    },
    {
        code: "TZ-10",
        name: "Kusini Pemba",
        parent: "TZ"
    },
    {
        code: "TZ-11",
        name: "Kusini Unguja",
        parent: "TZ"
    },
    {
        code: "TZ-12",
        name: "Lindi",
        parent: "TZ"
    },
    {
        code: "TZ-13",
        name: "Mara",
        parent: "TZ"
    },
    {
        code: "TZ-14",
        name: "Mbeya",
        parent: "TZ"
    },
    {
        code: "TZ-15",
        name: "Mjini Magharibi",
        parent: "TZ"
    },
    {
        code: "TZ-16",
        name: "Morogoro",
        parent: "TZ"
    },
    {
        code: "TZ-17",
        name: "Mtwara",
        parent: "TZ"
    },
    {
        code: "TZ-18",
        name: "Mwanza",
        parent: "TZ"
    },
    {
        code: "TZ-19",
        name: "Pwani",
        parent: "TZ"
    },
    {
        code: "TZ-20",
        name: "Rukwa",
        parent: "TZ"
    },
    {
        code: "TZ-21",
        name: "Ruvuma",
        parent: "TZ"
    },
    {
        code: "TZ-22",
        name: "Shinyanga",
        parent: "TZ"
    },
    {
        code: "TZ-23",
        name: "Singida",
        parent: "TZ"
    },
    {
        code: "TZ-24",
        name: "Tabora",
        parent: "TZ"
    },
    {
        code: "TZ-25",
        name: "Tanga",
        parent: "TZ"
    },
    {
        code: "TZ-26",
        name: "Manyara",
        parent: "TZ"
    },
    {
        code: "TZ-27",
        name: "Geita",
        parent: "TZ"
    },
    {
        code: "TZ-28",
        name: "Katavi",
        parent: "TZ"
    },
    {
        code: "TZ-29",
        name: "Njombe",
        parent: "TZ"
    },
    {
        code: "TZ-30",
        name: "Simiyu",
        parent: "TZ"
    },
    {
        code: "TZ-31",
        name: "Songwe",
        parent: "TZ"
    },
    {
        code: "UA-05",
        name: "Vinnytska oblast",
        parent: "UA"
    },
    {
        code: "UA-07",
        name: "Volynska oblast",
        parent: "UA"
    },
    {
        code: "UA-09",
        name: "Luhanska oblast",
        parent: "UA"
    },
    {
        code: "UA-12",
        name: "Dnipropetrovska oblast",
        parent: "UA"
    },
    {
        code: "UA-14",
        name: "Donetska oblast",
        parent: "UA"
    },
    {
        code: "UA-18",
        name: "Zhytomyrska oblast",
        parent: "UA"
    },
    {
        code: "UA-21",
        name: "Zakarpatska oblast",
        parent: "UA"
    },
    {
        code: "UA-23",
        name: "Zaporizka oblast",
        parent: "UA"
    },
    {
        code: "UA-26",
        name: "Ivano-Frankivska oblast",
        parent: "UA"
    },
    {
        code: "UA-30",
        name: "Kyiv",
        parent: "UA"
    },
    {
        code: "UA-32",
        name: "Kyivska oblast",
        parent: "UA"
    },
    {
        code: "UA-35",
        name: "Kirovohradska oblast",
        parent: "UA"
    },
    {
        code: "UA-40",
        name: "Sevastopol",
        parent: "UA"
    },
    {
        code: "UA-43",
        name: "Avtonomna Respublika Krym",
        parent: "UA"
    },
    {
        code: "UA-46",
        name: "Lvivska oblast",
        parent: "UA"
    },
    {
        code: "UA-48",
        name: "Mykolaivska oblast",
        parent: "UA"
    },
    {
        code: "UA-51",
        name: "Odeska oblast",
        parent: "UA"
    },
    {
        code: "UA-53",
        name: "Poltavska oblast",
        parent: "UA"
    },
    {
        code: "UA-56",
        name: "Rivnenska oblast",
        parent: "UA"
    },
    {
        code: "UA-59",
        name: "Sumska oblast",
        parent: "UA"
    },
    {
        code: "UA-61",
        name: "Ternopilska oblast",
        parent: "UA"
    },
    {
        code: "UA-63",
        name: "Kharkivska oblast",
        parent: "UA"
    },
    {
        code: "UA-65",
        name: "Khersonska oblast",
        parent: "UA"
    },
    {
        code: "UA-68",
        name: "Khmelnytska oblast",
        parent: "UA"
    },
    {
        code: "UA-71",
        name: "Cherkaska oblast",
        parent: "UA"
    },
    {
        code: "UA-74",
        name: "Chernihivska oblast",
        parent: "UA"
    },
    {
        code: "UA-77",
        name: "Chernivetska oblast",
        parent: "UA"
    },
    {
        code: "UG-101",
        name: "Kalangala",
        parent: "UG-C"
    },
    {
        code: "UG-102",
        name: "Kampala",
        parent: "UG-C"
    },
    {
        code: "UG-103",
        name: "Kiboga",
        parent: "UG-C"
    },
    {
        code: "UG-104",
        name: "Luwero",
        parent: "UG-C"
    },
    {
        code: "UG-105",
        name: "Masaka",
        parent: "UG-C"
    },
    {
        code: "UG-106",
        name: "Mpigi",
        parent: "UG-C"
    },
    {
        code: "UG-107",
        name: "Mubende",
        parent: "UG-C"
    },
    {
        code: "UG-108",
        name: "Mukono",
        parent: "UG-C"
    },
    {
        code: "UG-109",
        name: "Nakasongola",
        parent: "UG-C"
    },
    {
        code: "UG-110",
        name: "Rakai",
        parent: "UG-C"
    },
    {
        code: "UG-111",
        name: "Sembabule",
        parent: "UG-C"
    },
    {
        code: "UG-112",
        name: "Kayunga",
        parent: "UG-C"
    },
    {
        code: "UG-113",
        name: "Wakiso",
        parent: "UG-C"
    },
    {
        code: "UG-114",
        name: "Lyantonde",
        parent: "UG-C"
    },
    {
        code: "UG-115",
        name: "Mityana",
        parent: "UG-C"
    },
    {
        code: "UG-116",
        name: "Nakaseke",
        parent: "UG-C"
    },
    {
        code: "UG-117",
        name: "Buikwe",
        parent: "UG-C"
    },
    {
        code: "UG-118",
        name: "Bukomansibi",
        parent: "UG-C"
    },
    {
        code: "UG-119",
        name: "Butambala",
        parent: "UG-C"
    },
    {
        code: "UG-120",
        name: "Buvuma",
        parent: "UG-C"
    },
    {
        code: "UG-121",
        name: "Gomba",
        parent: "UG-C"
    },
    {
        code: "UG-122",
        name: "Kalungu",
        parent: "UG-C"
    },
    {
        code: "UG-123",
        name: "Kyankwanzi",
        parent: "UG-C"
    },
    {
        code: "UG-124",
        name: "Lwengo",
        parent: "UG-C"
    },
    {
        code: "UG-125",
        name: "Kyotera",
        parent: "UG-C"
    },
    {
        code: "UG-126",
        name: "Kasanda",
        parent: "UG-C"
    },
    {
        code: "UG-201",
        name: "Bugiri",
        parent: "UG-E"
    },
    {
        code: "UG-202",
        name: "Busia",
        parent: "UG-E"
    },
    {
        code: "UG-203",
        name: "Iganga",
        parent: "UG-E"
    },
    {
        code: "UG-204",
        name: "Jinja",
        parent: "UG-E"
    },
    {
        code: "UG-205",
        name: "Kamuli",
        parent: "UG-E"
    },
    {
        code: "UG-206",
        name: "Kapchorwa",
        parent: "UG-E"
    },
    {
        code: "UG-207",
        name: "Katakwi",
        parent: "UG-E"
    },
    {
        code: "UG-208",
        name: "Kumi",
        parent: "UG-E"
    },
    {
        code: "UG-209",
        name: "Mbale",
        parent: "UG-E"
    },
    {
        code: "UG-210",
        name: "Pallisa",
        parent: "UG-E"
    },
    {
        code: "UG-211",
        name: "Soroti",
        parent: "UG-E"
    },
    {
        code: "UG-212",
        name: "Tororo",
        parent: "UG-E"
    },
    {
        code: "UG-213",
        name: "Kaberamaido",
        parent: "UG-E"
    },
    {
        code: "UG-214",
        name: "Mayuge",
        parent: "UG-E"
    },
    {
        code: "UG-215",
        name: "Sironko",
        parent: "UG-E"
    },
    {
        code: "UG-216",
        name: "Amuria",
        parent: "UG-E"
    },
    {
        code: "UG-217",
        name: "Budaka",
        parent: "UG-E"
    },
    {
        code: "UG-218",
        name: "Bududa",
        parent: "UG-E"
    },
    {
        code: "UG-219",
        name: "Bukedea",
        parent: "UG-E"
    },
    {
        code: "UG-220",
        name: "Bukwo",
        parent: "UG-E"
    },
    {
        code: "UG-221",
        name: "Butaleja",
        parent: "UG-E"
    },
    {
        code: "UG-222",
        name: "Kaliro",
        parent: "UG-E"
    },
    {
        code: "UG-223",
        name: "Manafwa",
        parent: "UG-E"
    },
    {
        code: "UG-224",
        name: "Namutumba",
        parent: "UG-E"
    },
    {
        code: "UG-225",
        name: "Bulambuli",
        parent: "UG-E"
    },
    {
        code: "UG-226",
        name: "Buyende",
        parent: "UG-E"
    },
    {
        code: "UG-227",
        name: "Kibuku",
        parent: "UG-E"
    },
    {
        code: "UG-228",
        name: "Kween",
        parent: "UG-E"
    },
    {
        code: "UG-229",
        name: "Luuka",
        parent: "UG-E"
    },
    {
        code: "UG-230",
        name: "Namayingo",
        parent: "UG-E"
    },
    {
        code: "UG-231",
        name: "Ngora",
        parent: "UG-E"
    },
    {
        code: "UG-232",
        name: "Serere",
        parent: "UG-E"
    },
    {
        code: "UG-233",
        name: "Butebo",
        parent: "UG-E"
    },
    {
        code: "UG-234",
        name: "Namisindwa",
        parent: "UG-E"
    },
    {
        code: "UG-235",
        name: "Bugweri",
        parent: "UG-E"
    },
    {
        code: "UG-236",
        name: "Kapelebyong",
        parent: "UG-E"
    },
    {
        code: "UG-237",
        name: "Kalaki",
        parent: "UG-E"
    },
    {
        code: "UG-301",
        name: "Adjumani",
        parent: "UG-N"
    },
    {
        code: "UG-302",
        name: "Apac",
        parent: "UG-N"
    },
    {
        code: "UG-303",
        name: "Arua",
        parent: "UG-N"
    },
    {
        code: "UG-304",
        name: "Gulu",
        parent: "UG-N"
    },
    {
        code: "UG-305",
        name: "Kitgum",
        parent: "UG-N"
    },
    {
        code: "UG-306",
        name: "Kotido",
        parent: "UG-N"
    },
    {
        code: "UG-307",
        name: "Lira",
        parent: "UG-N"
    },
    {
        code: "UG-308",
        name: "Moroto",
        parent: "UG-N"
    },
    {
        code: "UG-309",
        name: "Moyo",
        parent: "UG-N"
    },
    {
        code: "UG-310",
        name: "Nebbi",
        parent: "UG-N"
    },
    {
        code: "UG-311",
        name: "Nakapiripirit",
        parent: "UG-N"
    },
    {
        code: "UG-312",
        name: "Pader",
        parent: "UG-N"
    },
    {
        code: "UG-313",
        name: "Yumbe",
        parent: "UG-N"
    },
    {
        code: "UG-314",
        name: "Abim",
        parent: "UG-N"
    },
    {
        code: "UG-315",
        name: "Amolatar",
        parent: "UG-N"
    },
    {
        code: "UG-316",
        name: "Amuru",
        parent: "UG-N"
    },
    {
        code: "UG-317",
        name: "Dokolo",
        parent: "UG-N"
    },
    {
        code: "UG-318",
        name: "Kaabong",
        parent: "UG-N"
    },
    {
        code: "UG-319",
        name: "Koboko",
        parent: "UG-N"
    },
    {
        code: "UG-320",
        name: "Maracha",
        parent: "UG-N"
    },
    {
        code: "UG-321",
        name: "Oyam",
        parent: "UG-N"
    },
    {
        code: "UG-322",
        name: "Agago",
        parent: "UG-N"
    },
    {
        code: "UG-323",
        name: "Alebtong",
        parent: "UG-N"
    },
    {
        code: "UG-324",
        name: "Amudat",
        parent: "UG-N"
    },
    {
        code: "UG-325",
        name: "Kole",
        parent: "UG-N"
    },
    {
        code: "UG-326",
        name: "Lamwo",
        parent: "UG-N"
    },
    {
        code: "UG-327",
        name: "Napak",
        parent: "UG-N"
    },
    {
        code: "UG-328",
        name: "Nwoya",
        parent: "UG-N"
    },
    {
        code: "UG-329",
        name: "Otuke",
        parent: "UG-N"
    },
    {
        code: "UG-330",
        name: "Zombo",
        parent: "UG-N"
    },
    {
        code: "UG-331",
        name: "Omoro",
        parent: "UG-N"
    },
    {
        code: "UG-332",
        name: "Pakwach",
        parent: "UG-N"
    },
    {
        code: "UG-333",
        name: "Kwania",
        parent: "UG-N"
    },
    {
        code: "UG-334",
        name: "Nabilatuk",
        parent: "UG-N"
    },
    {
        code: "UG-335",
        name: "Karenga",
        parent: "UG-N"
    },
    {
        code: "UG-336",
        name: "Madi-Okollo",
        parent: "UG-N"
    },
    {
        code: "UG-337",
        name: "Obongi",
        parent: "UG-N"
    },
    {
        code: "UG-401",
        name: "Bundibugyo",
        parent: "UG-W"
    },
    {
        code: "UG-402",
        name: "Bushenyi",
        parent: "UG-W"
    },
    {
        code: "UG-403",
        name: "Hoima",
        parent: "UG-W"
    },
    {
        code: "UG-404",
        name: "Kabale",
        parent: "UG-W"
    },
    {
        code: "UG-405",
        name: "Kabarole",
        parent: "UG-W"
    },
    {
        code: "UG-406",
        name: "Kasese",
        parent: "UG-W"
    },
    {
        code: "UG-407",
        name: "Kibaale",
        parent: "UG-W"
    },
    {
        code: "UG-408",
        name: "Kisoro",
        parent: "UG-W"
    },
    {
        code: "UG-409",
        name: "Masindi",
        parent: "UG-W"
    },
    {
        code: "UG-410",
        name: "Mbarara",
        parent: "UG-W"
    },
    {
        code: "UG-411",
        name: "Ntungamo",
        parent: "UG-W"
    },
    {
        code: "UG-412",
        name: "Rukungiri",
        parent: "UG-W"
    },
    {
        code: "UG-413",
        name: "Kamwenge",
        parent: "UG-W"
    },
    {
        code: "UG-414",
        name: "Kanungu",
        parent: "UG-W"
    },
    {
        code: "UG-415",
        name: "Kyenjojo",
        parent: "UG-W"
    },
    {
        code: "UG-416",
        name: "Buliisa",
        parent: "UG-W"
    },
    {
        code: "UG-417",
        name: "Ibanda",
        parent: "UG-W"
    },
    {
        code: "UG-418",
        name: "Isingiro",
        parent: "UG-W"
    },
    {
        code: "UG-419",
        name: "Kiruhura",
        parent: "UG-W"
    },
    {
        code: "UG-420",
        name: "Buhweju",
        parent: "UG-W"
    },
    {
        code: "UG-421",
        name: "Kiryandongo",
        parent: "UG-W"
    },
    {
        code: "UG-422",
        name: "Kyegegwa",
        parent: "UG-W"
    },
    {
        code: "UG-423",
        name: "Mitooma",
        parent: "UG-W"
    },
    {
        code: "UG-424",
        name: "Ntoroko",
        parent: "UG-W"
    },
    {
        code: "UG-425",
        name: "Rubirizi",
        parent: "UG-W"
    },
    {
        code: "UG-426",
        name: "Sheema",
        parent: "UG-W"
    },
    {
        code: "UG-427",
        name: "Kagadi",
        parent: "UG-W"
    },
    {
        code: "UG-428",
        name: "Kakumiro",
        parent: "UG-W"
    },
    {
        code: "UG-429",
        name: "Rubanda",
        parent: "UG-W"
    },
    {
        code: "UG-430",
        name: "Bunyangabu",
        parent: "UG-W"
    },
    {
        code: "UG-431",
        name: "Rukiga",
        parent: "UG-W"
    },
    {
        code: "UG-432",
        name: "Kikuube",
        parent: "UG-W"
    },
    {
        code: "UG-433",
        name: "Kazo",
        parent: "UG-W"
    },
    {
        code: "UG-434",
        name: "Kitagwenda",
        parent: "UG-W"
    },
    {
        code: "UG-435",
        name: "Rwampara",
        parent: "UG-W"
    },
    {
        code: "UG-C",
        name: "Central",
        parent: "UG"
    },
    {
        code: "UG-E",
        name: "Eastern",
        parent: "UG"
    },
    {
        code: "UG-N",
        name: "Northern",
        parent: "UG"
    },
    {
        code: "UG-W",
        name: "Western",
        parent: "UG"
    },
    {
        code: "UM-67",
        name: "Johnston Atoll",
        parent: "UM"
    },
    {
        code: "UM-71",
        name: "Midway Islands",
        parent: "UM"
    },
    {
        code: "UM-76",
        name: "Navassa Island",
        parent: "UM"
    },
    {
        code: "UM-79",
        name: "Wake Island",
        parent: "UM"
    },
    {
        code: "UM-81",
        name: "Baker Island",
        parent: "UM"
    },
    {
        code: "UM-84",
        name: "Howland Island",
        parent: "UM"
    },
    {
        code: "UM-86",
        name: "Jarvis Island",
        parent: "UM"
    },
    {
        code: "UM-89",
        name: "Kingman Reef",
        parent: "UM"
    },
    {
        code: "UM-95",
        name: "Palmyra Atoll",
        parent: "UM"
    },
    {
        code: "US-AK",
        name: "Alaska",
        parent: "US"
    },
    {
        code: "US-AL",
        name: "Alabama",
        parent: "US"
    },
    {
        code: "US-AR",
        name: "Arkansas",
        parent: "US"
    },
    {
        code: "US-AS",
        name: "American Samoa",
        parent: "US"
    },
    {
        code: "US-AZ",
        name: "Arizona",
        parent: "US"
    },
    {
        code: "US-CA",
        name: "California",
        parent: "US"
    },
    {
        code: "US-CO",
        name: "Colorado",
        parent: "US"
    },
    {
        code: "US-CT",
        name: "Connecticut",
        parent: "US"
    },
    {
        code: "US-DC",
        name: "District of Columbia",
        parent: "US"
    },
    {
        code: "US-DE",
        name: "Delaware",
        parent: "US"
    },
    {
        code: "US-FL",
        name: "Florida",
        parent: "US"
    },
    {
        code: "US-GA",
        name: "Georgia",
        parent: "US"
    },
    {
        code: "US-GU",
        name: "Guam",
        parent: "US"
    },
    {
        code: "US-HI",
        name: "Hawaii",
        parent: "US"
    },
    {
        code: "US-IA",
        name: "Iowa",
        parent: "US"
    },
    {
        code: "US-ID",
        name: "Idaho",
        parent: "US"
    },
    {
        code: "US-IL",
        name: "Illinois",
        parent: "US"
    },
    {
        code: "US-IN",
        name: "Indiana",
        parent: "US"
    },
    {
        code: "US-KS",
        name: "Kansas",
        parent: "US"
    },
    {
        code: "US-KY",
        name: "Kentucky",
        parent: "US"
    },
    {
        code: "US-LA",
        name: "Louisiana",
        parent: "US"
    },
    {
        code: "US-MA",
        name: "Massachusetts",
        parent: "US"
    },
    {
        code: "US-MD",
        name: "Maryland",
        parent: "US"
    },
    {
        code: "US-ME",
        name: "Maine",
        parent: "US"
    },
    {
        code: "US-MI",
        name: "Michigan",
        parent: "US"
    },
    {
        code: "US-MN",
        name: "Minnesota",
        parent: "US"
    },
    {
        code: "US-MO",
        name: "Missouri",
        parent: "US"
    },
    {
        code: "US-MP",
        name: "Northern Mariana Islands",
        parent: "US"
    },
    {
        code: "US-MS",
        name: "Mississippi",
        parent: "US"
    },
    {
        code: "US-MT",
        name: "Montana",
        parent: "US"
    },
    {
        code: "US-NC",
        name: "North Carolina",
        parent: "US"
    },
    {
        code: "US-ND",
        name: "North Dakota",
        parent: "US"
    },
    {
        code: "US-NE",
        name: "Nebraska",
        parent: "US"
    },
    {
        code: "US-NH",
        name: "New Hampshire",
        parent: "US"
    },
    {
        code: "US-NJ",
        name: "New Jersey",
        parent: "US"
    },
    {
        code: "US-NM",
        name: "New Mexico",
        parent: "US"
    },
    {
        code: "US-NV",
        name: "Nevada",
        parent: "US"
    },
    {
        code: "US-NY",
        name: "New York",
        parent: "US"
    },
    {
        code: "US-OH",
        name: "Ohio",
        parent: "US"
    },
    {
        code: "US-OK",
        name: "Oklahoma",
        parent: "US"
    },
    {
        code: "US-OR",
        name: "Oregon",
        parent: "US"
    },
    {
        code: "US-PA",
        name: "Pennsylvania",
        parent: "US"
    },
    {
        code: "US-PR",
        name: "Puerto Rico",
        parent: "US"
    },
    {
        code: "US-RI",
        name: "Rhode Island",
        parent: "US"
    },
    {
        code: "US-SC",
        name: "South Carolina",
        parent: "US"
    },
    {
        code: "US-SD",
        name: "South Dakota",
        parent: "US"
    },
    {
        code: "US-TN",
        name: "Tennessee",
        parent: "US"
    },
    {
        code: "US-TX",
        name: "Texas",
        parent: "US"
    },
    {
        code: "US-UM",
        name: "United States Minor Outlying Islands",
        parent: "US"
    },
    {
        code: "US-UT",
        name: "Utah",
        parent: "US"
    },
    {
        code: "US-VA",
        name: "Virginia",
        parent: "US"
    },
    {
        code: "US-VI",
        name: "Virgin Islands, U.S.",
        parent: "US"
    },
    {
        code: "US-VT",
        name: "Vermont",
        parent: "US"
    },
    {
        code: "US-WA",
        name: "Washington",
        parent: "US"
    },
    {
        code: "US-WI",
        name: "Wisconsin",
        parent: "US"
    },
    {
        code: "US-WV",
        name: "West Virginia",
        parent: "US"
    },
    {
        code: "US-WY",
        name: "Wyoming",
        parent: "US"
    },
    {
        code: "UY-AR",
        name: "Artigas",
        parent: "UY"
    },
    {
        code: "UY-CA",
        name: "Canelones",
        parent: "UY"
    },
    {
        code: "UY-CL",
        name: "Cerro Largo",
        parent: "UY"
    },
    {
        code: "UY-CO",
        name: "Colonia",
        parent: "UY"
    },
    {
        code: "UY-DU",
        name: "Durazno",
        parent: "UY"
    },
    {
        code: "UY-FD",
        name: "Florida",
        parent: "UY"
    },
    {
        code: "UY-FS",
        name: "Flores",
        parent: "UY"
    },
    {
        code: "UY-LA",
        name: "Lavalleja",
        parent: "UY"
    },
    {
        code: "UY-MA",
        name: "Maldonado",
        parent: "UY"
    },
    {
        code: "UY-MO",
        name: "Montevideo",
        parent: "UY"
    },
    {
        code: "UY-PA",
        name: "Paysand\xfa",
        parent: "UY"
    },
    {
        code: "UY-RN",
        name: "R\xedo Negro",
        parent: "UY"
    },
    {
        code: "UY-RO",
        name: "Rocha",
        parent: "UY"
    },
    {
        code: "UY-RV",
        name: "Rivera",
        parent: "UY"
    },
    {
        code: "UY-SA",
        name: "Salto",
        parent: "UY"
    },
    {
        code: "UY-SJ",
        name: "San Jos\xe9",
        parent: "UY"
    },
    {
        code: "UY-SO",
        name: "Soriano",
        parent: "UY"
    },
    {
        code: "UY-TA",
        name: "Tacuaremb\xf3",
        parent: "UY"
    },
    {
        code: "UY-TT",
        name: "Treinta y Tres",
        parent: "UY"
    },
    {
        code: "UZ-AN",
        name: "Andijon",
        parent: "UZ"
    },
    {
        code: "UZ-BU",
        name: "Buxoro",
        parent: "UZ"
    },
    {
        code: "UZ-FA",
        name: "Farg‘ona",
        parent: "UZ"
    },
    {
        code: "UZ-JI",
        name: "Jizzax",
        parent: "UZ"
    },
    {
        code: "UZ-NG",
        name: "Namangan",
        parent: "UZ"
    },
    {
        code: "UZ-NW",
        name: "Navoiy",
        parent: "UZ"
    },
    {
        code: "UZ-QA",
        name: "Qashqadaryo",
        parent: "UZ"
    },
    {
        code: "UZ-QR",
        name: "Qoraqalpog‘iston Respublikasi",
        parent: "UZ"
    },
    {
        code: "UZ-SA",
        name: "Samarqand",
        parent: "UZ"
    },
    {
        code: "UZ-SI",
        name: "Sirdaryo",
        parent: "UZ"
    },
    {
        code: "UZ-SU",
        name: "Surxondaryo",
        parent: "UZ"
    },
    {
        code: "UZ-TK",
        name: "Toshkent",
        parent: "UZ"
    },
    {
        code: "UZ-TO",
        name: "Toshkent",
        parent: "UZ"
    },
    {
        code: "UZ-XO",
        name: "Xorazm",
        parent: "UZ"
    },
    {
        code: "VC-01",
        name: "Charlotte",
        parent: "VC"
    },
    {
        code: "VC-02",
        name: "Saint Andrew",
        parent: "VC"
    },
    {
        code: "VC-03",
        name: "Saint David",
        parent: "VC"
    },
    {
        code: "VC-04",
        name: "Saint George",
        parent: "VC"
    },
    {
        code: "VC-05",
        name: "Saint Patrick",
        parent: "VC"
    },
    {
        code: "VC-06",
        name: "Grenadines",
        parent: "VC"
    },
    {
        code: "VE-A",
        name: "Distrito Capital",
        parent: "VE"
    },
    {
        code: "VE-B",
        name: "Anzo\xe1tegui",
        parent: "VE"
    },
    {
        code: "VE-C",
        name: "Apure",
        parent: "VE"
    },
    {
        code: "VE-D",
        name: "Aragua",
        parent: "VE"
    },
    {
        code: "VE-E",
        name: "Barinas",
        parent: "VE"
    },
    {
        code: "VE-F",
        name: "Bol\xedvar",
        parent: "VE"
    },
    {
        code: "VE-G",
        name: "Carabobo",
        parent: "VE"
    },
    {
        code: "VE-H",
        name: "Cojedes",
        parent: "VE"
    },
    {
        code: "VE-I",
        name: "Falc\xf3n",
        parent: "VE"
    },
    {
        code: "VE-J",
        name: "Gu\xe1rico",
        parent: "VE"
    },
    {
        code: "VE-K",
        name: "Lara",
        parent: "VE"
    },
    {
        code: "VE-L",
        name: "M\xe9rida",
        parent: "VE"
    },
    {
        code: "VE-M",
        name: "Miranda",
        parent: "VE"
    },
    {
        code: "VE-N",
        name: "Monagas",
        parent: "VE"
    },
    {
        code: "VE-O",
        name: "Nueva Esparta",
        parent: "VE"
    },
    {
        code: "VE-P",
        name: "Portuguesa",
        parent: "VE"
    },
    {
        code: "VE-R",
        name: "Sucre",
        parent: "VE"
    },
    {
        code: "VE-S",
        name: "T\xe1chira",
        parent: "VE"
    },
    {
        code: "VE-T",
        name: "Trujillo",
        parent: "VE"
    },
    {
        code: "VE-U",
        name: "Yaracuy",
        parent: "VE"
    },
    {
        code: "VE-V",
        name: "Zulia",
        parent: "VE"
    },
    {
        code: "VE-W",
        name: "Dependencias Federales",
        parent: "VE"
    },
    {
        code: "VE-X",
        name: "La Guaira",
        parent: "VE"
    },
    {
        code: "VE-Y",
        name: "Delta Amacuro",
        parent: "VE"
    },
    {
        code: "VE-Z",
        name: "Amazonas",
        parent: "VE"
    },
    {
        code: "VN-01",
        name: "Lai Ch\xe2u",
        parent: "VN"
    },
    {
        code: "VN-02",
        name: "L\xe0o Cai",
        parent: "VN"
    },
    {
        code: "VN-03",
        name: "H\xe0 Giang",
        parent: "VN"
    },
    {
        code: "VN-04",
        name: "Cao Bằng",
        parent: "VN"
    },
    {
        code: "VN-05",
        name: "Sơn La",
        parent: "VN"
    },
    {
        code: "VN-06",
        name: "Y\xean B\xe1i",
        parent: "VN"
    },
    {
        code: "VN-07",
        name: "Tuy\xean Quang",
        parent: "VN"
    },
    {
        code: "VN-09",
        name: "Lạng Sơn",
        parent: "VN"
    },
    {
        code: "VN-13",
        name: "Quảng Ninh",
        parent: "VN"
    },
    {
        code: "VN-14",
        name: "H\xf2a B\xecnh",
        parent: "VN"
    },
    {
        code: "VN-18",
        name: "Ninh B\xecnh",
        parent: "VN"
    },
    {
        code: "VN-20",
        name: "Th\xe1i B\xecnh",
        parent: "VN"
    },
    {
        code: "VN-21",
        name: "Thanh H\xf3a",
        parent: "VN"
    },
    {
        code: "VN-22",
        name: "Nghệ An",
        parent: "VN"
    },
    {
        code: "VN-23",
        name: "H\xe0 Tĩnh",
        parent: "VN"
    },
    {
        code: "VN-24",
        name: "Quảng B\xecnh",
        parent: "VN"
    },
    {
        code: "VN-25",
        name: "Quảng Trị",
        parent: "VN"
    },
    {
        code: "VN-26",
        name: "Thừa Thi\xean-Huế",
        parent: "VN"
    },
    {
        code: "VN-27",
        name: "Quảng Nam",
        parent: "VN"
    },
    {
        code: "VN-28",
        name: "Kon Tum",
        parent: "VN"
    },
    {
        code: "VN-29",
        name: "Quảng Ng\xe3i",
        parent: "VN"
    },
    {
        code: "VN-30",
        name: "Gia Lai",
        parent: "VN"
    },
    {
        code: "VN-31",
        name: "B\xecnh Định",
        parent: "VN"
    },
    {
        code: "VN-32",
        name: "Ph\xfa Y\xean",
        parent: "VN"
    },
    {
        code: "VN-33",
        name: "Đắk Lắk",
        parent: "VN"
    },
    {
        code: "VN-34",
        name: "Kh\xe1nh H\xf2a",
        parent: "VN"
    },
    {
        code: "VN-35",
        name: "L\xe2m Đồng",
        parent: "VN"
    },
    {
        code: "VN-36",
        name: "Ninh Thuận",
        parent: "VN"
    },
    {
        code: "VN-37",
        name: "T\xe2y Ninh",
        parent: "VN"
    },
    {
        code: "VN-39",
        name: "Đồng Nai",
        parent: "VN"
    },
    {
        code: "VN-40",
        name: "B\xecnh Thuận",
        parent: "VN"
    },
    {
        code: "VN-41",
        name: "Long An",
        parent: "VN"
    },
    {
        code: "VN-43",
        name: "B\xe0 Rịa - Vũng T\xe0u",
        parent: "VN"
    },
    {
        code: "VN-44",
        name: "An Giang",
        parent: "VN"
    },
    {
        code: "VN-45",
        name: "Đồng Th\xe1p",
        parent: "VN"
    },
    {
        code: "VN-46",
        name: "Tiền Giang",
        parent: "VN"
    },
    {
        code: "VN-47",
        name: "Kiến Giang",
        parent: "VN"
    },
    {
        code: "VN-49",
        name: "Vĩnh Long",
        parent: "VN"
    },
    {
        code: "VN-50",
        name: "Bến Tre",
        parent: "VN"
    },
    {
        code: "VN-51",
        name: "Tr\xe0 Vinh",
        parent: "VN"
    },
    {
        code: "VN-52",
        name: "S\xf3c Trăng",
        parent: "VN"
    },
    {
        code: "VN-53",
        name: "Bắc Kạn",
        parent: "VN"
    },
    {
        code: "VN-54",
        name: "Bắc Giang",
        parent: "VN"
    },
    {
        code: "VN-55",
        name: "Bạc Li\xeau",
        parent: "VN"
    },
    {
        code: "VN-56",
        name: "Bắc Ninh",
        parent: "VN"
    },
    {
        code: "VN-57",
        name: "B\xecnh Dương",
        parent: "VN"
    },
    {
        code: "VN-58",
        name: "B\xecnh Phước",
        parent: "VN"
    },
    {
        code: "VN-59",
        name: "C\xe0 Mau",
        parent: "VN"
    },
    {
        code: "VN-61",
        name: "Hải Dương",
        parent: "VN"
    },
    {
        code: "VN-63",
        name: "H\xe0 Nam",
        parent: "VN"
    },
    {
        code: "VN-66",
        name: "Hưng Y\xean",
        parent: "VN"
    },
    {
        code: "VN-67",
        name: "Nam Định",
        parent: "VN"
    },
    {
        code: "VN-68",
        name: "Ph\xfa Thọ",
        parent: "VN"
    },
    {
        code: "VN-69",
        name: "Th\xe1i Nguy\xean",
        parent: "VN"
    },
    {
        code: "VN-70",
        name: "Vĩnh Ph\xfac",
        parent: "VN"
    },
    {
        code: "VN-71",
        name: "Điện Bi\xean",
        parent: "VN"
    },
    {
        code: "VN-72",
        name: "Đắk N\xf4ng",
        parent: "VN"
    },
    {
        code: "VN-73",
        name: "Hậu Giang",
        parent: "VN"
    },
    {
        code: "VN-CT",
        name: "Cần Thơ",
        parent: "VN"
    },
    {
        code: "VN-DN",
        name: "Đ\xe0 Nẵng",
        parent: "VN"
    },
    {
        code: "VN-HN",
        name: "H\xe0 Nội",
        parent: "VN"
    },
    {
        code: "VN-HP",
        name: "Hải Ph\xf2ng",
        parent: "VN"
    },
    {
        code: "VN-SG",
        name: "Hồ Ch\xed Minh",
        parent: "VN"
    },
    {
        code: "VU-MAP",
        name: "Malampa",
        parent: "VU"
    },
    {
        code: "VU-PAM",
        name: "P\xe9nama",
        parent: "VU"
    },
    {
        code: "VU-SAM",
        name: "Sanma",
        parent: "VU"
    },
    {
        code: "VU-SEE",
        name: "Sh\xe9fa",
        parent: "VU"
    },
    {
        code: "VU-TAE",
        name: "Taf\xe9a",
        parent: "VU"
    },
    {
        code: "VU-TOB",
        name: "Torba",
        parent: "VU"
    },
    {
        code: "WF-AL",
        name: "Alo",
        parent: "WF"
    },
    {
        code: "WF-SG",
        name: "Sigave",
        parent: "WF"
    },
    {
        code: "WF-UV",
        name: "Uvea",
        parent: "WF"
    },
    {
        code: "WS-AA",
        name: "A'ana",
        parent: "WS"
    },
    {
        code: "WS-AL",
        name: "Aiga-i-le-Tai",
        parent: "WS"
    },
    {
        code: "WS-AT",
        name: "Atua",
        parent: "WS"
    },
    {
        code: "WS-FA",
        name: "Fa'asaleleaga",
        parent: "WS"
    },
    {
        code: "WS-GE",
        name: "Gaga'emauga",
        parent: "WS"
    },
    {
        code: "WS-GI",
        name: "Gagaifomauga",
        parent: "WS"
    },
    {
        code: "WS-PA",
        name: "Palauli",
        parent: "WS"
    },
    {
        code: "WS-SA",
        name: "Satupa'itea",
        parent: "WS"
    },
    {
        code: "WS-TU",
        name: "Tuamasaga",
        parent: "WS"
    },
    {
        code: "WS-VF",
        name: "Va'a-o-Fonoti",
        parent: "WS"
    },
    {
        code: "WS-VS",
        name: "Vaisigano",
        parent: "WS"
    },
    {
        code: "YE-AB",
        name: "Abyan",
        parent: "YE"
    },
    {
        code: "YE-AD",
        name: "‘Adan",
        parent: "YE"
    },
    {
        code: "YE-AM",
        name: "‘Amrān",
        parent: "YE"
    },
    {
        code: "YE-BA",
        name: "Al Bayḑā’",
        parent: "YE"
    },
    {
        code: "YE-DA",
        name: "Aḑ Ḑāli‘",
        parent: "YE"
    },
    {
        code: "YE-DH",
        name: "Dhamār",
        parent: "YE"
    },
    {
        code: "YE-HD",
        name: "Ḩaḑramawt",
        parent: "YE"
    },
    {
        code: "YE-HJ",
        name: "Ḩajjah",
        parent: "YE"
    },
    {
        code: "YE-HU",
        name: "Al Ḩudaydah",
        parent: "YE"
    },
    {
        code: "YE-IB",
        name: "Ibb",
        parent: "YE"
    },
    {
        code: "YE-JA",
        name: "Al Jawf",
        parent: "YE"
    },
    {
        code: "YE-LA",
        name: "Laḩij",
        parent: "YE"
    },
    {
        code: "YE-MA",
        name: "Ma’rib",
        parent: "YE"
    },
    {
        code: "YE-MR",
        name: "Al Mahrah",
        parent: "YE"
    },
    {
        code: "YE-MW",
        name: "Al Maḩwīt",
        parent: "YE"
    },
    {
        code: "YE-RA",
        name: "Raymah",
        parent: "YE"
    },
    {
        code: "YE-SA",
        name: "Amānat al ‘Āşimah",
        parent: "YE"
    },
    {
        code: "YE-SD",
        name: "Şāʻdah",
        parent: "YE"
    },
    {
        code: "YE-SH",
        name: "Shabwah",
        parent: "YE"
    },
    {
        code: "YE-SN",
        name: "Şanʻā’",
        parent: "YE"
    },
    {
        code: "YE-SU",
        name: "Arkhabīl Suquţr\xe1",
        parent: "YE"
    },
    {
        code: "YE-TA",
        name: "Tāʻizz",
        parent: "YE"
    },
    {
        code: "ZA-EC",
        name: "Kapa-Vuxa",
        parent: "ZA"
    },
    {
        code: "ZA-FS",
        name: "Free State",
        parent: "ZA"
    },
    {
        code: "ZA-GP",
        name: "Gauteng",
        parent: "ZA"
    },
    {
        code: "ZA-KZN",
        name: "Kwazulu-Natal",
        parent: "ZA"
    },
    {
        code: "ZA-LP",
        name: "Limpopo",
        parent: "ZA"
    },
    {
        code: "ZA-MP",
        name: "Mpumalanga",
        parent: "ZA"
    },
    {
        code: "ZA-NC",
        name: "Kapa-N'walungu",
        parent: "ZA"
    },
    {
        code: "ZA-NW",
        name: "N'walungu-Vupeladyambu",
        parent: "ZA"
    },
    {
        code: "ZA-WC",
        name: "Kapa-Vupeladyambu",
        parent: "ZA"
    },
    {
        code: "ZM-01",
        name: "Western",
        parent: "ZM"
    },
    {
        code: "ZM-02",
        name: "Central",
        parent: "ZM"
    },
    {
        code: "ZM-03",
        name: "Eastern",
        parent: "ZM"
    },
    {
        code: "ZM-04",
        name: "Luapula",
        parent: "ZM"
    },
    {
        code: "ZM-05",
        name: "Northern",
        parent: "ZM"
    },
    {
        code: "ZM-06",
        name: "North-Western",
        parent: "ZM"
    },
    {
        code: "ZM-07",
        name: "Southern",
        parent: "ZM"
    },
    {
        code: "ZM-08",
        name: "Copperbelt",
        parent: "ZM"
    },
    {
        code: "ZM-09",
        name: "Lusaka",
        parent: "ZM"
    },
    {
        code: "ZM-10",
        name: "Muchinga",
        parent: "ZM"
    },
    {
        code: "ZW-BU",
        name: "Bulawayo",
        parent: "ZW"
    },
    {
        code: "ZW-HA",
        name: "Harare",
        parent: "ZW"
    },
    {
        code: "ZW-MA",
        name: "Manicaland",
        parent: "ZW"
    },
    {
        code: "ZW-MC",
        name: "Mashonaland Central",
        parent: "ZW"
    },
    {
        code: "ZW-ME",
        name: "Mashonaland East",
        parent: "ZW"
    },
    {
        code: "ZW-MI",
        name: "Midlands",
        parent: "ZW"
    },
    {
        code: "ZW-MN",
        name: "Matabeleland North",
        parent: "ZW"
    },
    {
        code: "ZW-MS",
        name: "Matabeleland South",
        parent: "ZW"
    },
    {
        code: "ZW-MV",
        name: "Masvingo",
        parent: "ZW"
    },
    {
        code: "ZW-MW",
        name: "Mashonaland West",
        parent: "ZW"
    }
];

});

parcelRequire.register("kZ0jS", function(module, exports) {

$parcel$export(module.exports, "iso31663", function () { return $f469c0a2b9a12c4e$export$eb8e843d1fd6c37f; });
/**
 * @typedef {'merge'|'change'|'split'} Type
 *
 * @typedef ISO31661FromEntry
 * @property {'formerly-assigned'} state
 * @property {string} alpha2
 * @property {string} alpha3
 * @property {string} [numeric]
 * @property {string} name
 *
 * @typedef ISO31661ToEntry
 * @property {'formerly-assigned'|'assigned'} state
 * @property {string} alpha2
 * @property {string} alpha3
 * @property {string} numeric
 * @property {string} name
 *
 * @typedef ISO31663Entry
 *   Object representing a former country.
 * @property {string} alpha4
 *   ISO 3166-3 alpha-4 code (example: `ANHH`)
 * @property {Type} type
 *   Type of revision (example: `'split'`)
 * @property {ISO31661FromEntry} from
 *   Country before revision
 * @property {Array<ISO31661ToEntry>} to
 *   List of countries after revision
 */ /**
 * List of former countries.
 *
 * @type {Array<ISO31663Entry>}
 */ var $f469c0a2b9a12c4e$export$eb8e843d1fd6c37f = [
    {
        alpha4: "AIDJ",
        type: "change",
        from: {
            state: "formerly-assigned",
            alpha2: "AI",
            alpha3: "AFI",
            name: "French Afars and Issas"
        },
        to: [
            {
                state: "assigned",
                alpha2: "DJ",
                alpha3: "DJI",
                numeric: "262",
                name: "Djibouti"
            }
        ]
    },
    {
        alpha4: "ANHH",
        type: "split",
        from: {
            state: "formerly-assigned",
            alpha2: "AN",
            alpha3: "ANT",
            numeric: "530",
            name: "Netherlands Antilles"
        },
        to: [
            {
                state: "assigned",
                alpha2: "BQ",
                alpha3: "BES",
                numeric: "535",
                name: "Bonaire, Sint Eustatius and Saba"
            },
            {
                state: "assigned",
                alpha2: "CW",
                alpha3: "CUW",
                numeric: "531",
                name: "Cura\xe7ao"
            },
            {
                state: "assigned",
                alpha2: "SX",
                alpha3: "SXM",
                numeric: "534",
                name: "Sint Maarten (Dutch part)"
            }
        ]
    },
    {
        alpha4: "BQAQ",
        type: "merge",
        from: {
            state: "formerly-assigned",
            alpha2: "BQ",
            alpha3: "ATB",
            name: "British Antarctic Territory"
        },
        to: [
            {
                state: "assigned",
                alpha2: "AQ",
                alpha3: "ATA",
                numeric: "010",
                name: "Antarctica"
            }
        ]
    },
    {
        alpha4: "BUMM",
        type: "change",
        from: {
            state: "formerly-assigned",
            alpha2: "BU",
            alpha3: "BUR",
            numeric: "104",
            name: "Burma"
        },
        to: [
            {
                state: "assigned",
                alpha2: "MM",
                alpha3: "MMR",
                numeric: "104",
                name: "Myanmar"
            }
        ]
    },
    {
        alpha4: "BYAA",
        type: "change",
        from: {
            state: "formerly-assigned",
            alpha2: "BY",
            alpha3: "BYS",
            numeric: "112",
            name: "Byelorussian SSR"
        },
        to: [
            {
                state: "assigned",
                alpha2: "BY",
                alpha3: "BLR",
                numeric: "112",
                name: "Belarus"
            }
        ]
    },
    {
        alpha4: "CSHH",
        type: "split",
        from: {
            state: "formerly-assigned",
            alpha2: "CS",
            alpha3: "CSK",
            numeric: "200",
            name: "Czechoslovakia"
        },
        to: [
            {
                state: "assigned",
                alpha2: "CZ",
                alpha3: "CZE",
                numeric: "203",
                name: "Czechia"
            },
            {
                state: "assigned",
                alpha2: "SK",
                alpha3: "SVK",
                numeric: "703",
                name: "Slovakia"
            }
        ]
    },
    {
        alpha4: "CSXX",
        type: "split",
        from: {
            state: "formerly-assigned",
            alpha2: "CS",
            alpha3: "SCG",
            numeric: "891",
            name: "Serbia and Montenegro"
        },
        to: [
            {
                state: "assigned",
                alpha2: "ME",
                alpha3: "MNE",
                numeric: "499",
                name: "Montenegro"
            },
            {
                state: "assigned",
                alpha2: "RS",
                alpha3: "SRB",
                numeric: "688",
                name: "Serbia"
            }
        ]
    },
    {
        alpha4: "CTKI",
        type: "merge",
        from: {
            state: "formerly-assigned",
            alpha2: "CT",
            alpha3: "CTE",
            numeric: "128",
            name: "Canton and Enderbury Islands"
        },
        to: [
            {
                state: "assigned",
                alpha2: "KI",
                alpha3: "KIR",
                numeric: "296",
                name: "Kiribati"
            }
        ]
    },
    {
        alpha4: "DDDE",
        type: "merge",
        from: {
            state: "formerly-assigned",
            alpha2: "DD",
            alpha3: "DDR",
            numeric: "278",
            name: "German Democratic Republic"
        },
        to: [
            {
                state: "assigned",
                alpha2: "DE",
                alpha3: "DEU",
                numeric: "276",
                name: "Germany"
            }
        ]
    },
    {
        alpha4: "DYBJ",
        type: "change",
        from: {
            state: "formerly-assigned",
            alpha2: "DY",
            alpha3: "DHY",
            name: "Dahomey"
        },
        to: [
            {
                state: "assigned",
                alpha2: "BJ",
                alpha3: "BEN",
                numeric: "204",
                name: "Benin"
            }
        ]
    },
    {
        alpha4: "FQHH",
        type: "split",
        from: {
            state: "formerly-assigned",
            alpha2: "FQ",
            alpha3: "ATF",
            name: "French Southern and Antarctic Territories"
        },
        to: [
            {
                state: "assigned",
                alpha2: "AQ",
                alpha3: "ATA",
                numeric: "010",
                name: "Antarctica"
            }
        ]
    },
    {
        alpha4: "FXFR",
        type: "merge",
        from: {
            state: "formerly-assigned",
            alpha2: "FX",
            alpha3: "FXX",
            numeric: "249",
            name: "France, Metropolitan"
        },
        to: [
            {
                state: "assigned",
                alpha2: "FR",
                alpha3: "FRA",
                numeric: "250",
                name: "France"
            }
        ]
    },
    {
        alpha4: "GEHH",
        type: "change",
        from: {
            state: "formerly-assigned",
            alpha2: "GE",
            alpha3: "GEL",
            name: "Gilbert Islands"
        },
        to: [
            {
                state: "assigned",
                alpha2: "KI",
                alpha3: "KIR",
                numeric: "296",
                name: "Kiribati"
            }
        ]
    },
    {
        alpha4: "HVBF",
        type: "change",
        from: {
            state: "formerly-assigned",
            alpha2: "HV",
            alpha3: "HVO",
            numeric: "854",
            name: "Upper Volta"
        },
        to: [
            {
                state: "assigned",
                alpha2: "BF",
                alpha3: "BFA",
                numeric: "854",
                name: "Burkina Faso"
            }
        ]
    },
    {
        alpha4: "JTUM",
        type: "merge",
        from: {
            state: "formerly-assigned",
            alpha2: "JT",
            alpha3: "JTN",
            numeric: "396",
            name: "Johnston Island"
        },
        to: [
            {
                state: "assigned",
                alpha2: "UM",
                alpha3: "UMI",
                numeric: "581",
                name: "United States Minor Outlying Islands"
            }
        ]
    },
    {
        alpha4: "MIUM",
        type: "merge",
        from: {
            state: "formerly-assigned",
            alpha2: "MI",
            alpha3: "MID",
            numeric: "488",
            name: "Midway Islands"
        },
        to: [
            {
                state: "assigned",
                alpha2: "UM",
                alpha3: "UMI",
                numeric: "581",
                name: "United States Minor Outlying Islands"
            }
        ]
    },
    {
        alpha4: "NHVU",
        type: "change",
        from: {
            state: "formerly-assigned",
            alpha2: "NH",
            alpha3: "NHB",
            name: "New Hebrides"
        },
        to: [
            {
                state: "assigned",
                alpha2: "VU",
                alpha3: "VUT",
                numeric: "548",
                name: "Vanuatu"
            }
        ]
    },
    {
        alpha4: "NQAQ",
        type: "merge",
        from: {
            state: "formerly-assigned",
            alpha2: "NQ",
            alpha3: "ATN",
            numeric: "216",
            name: "Dronning Maud Land"
        },
        to: [
            {
                state: "assigned",
                alpha2: "AQ",
                alpha3: "ATA",
                numeric: "010",
                name: "Antarctica"
            }
        ]
    },
    {
        alpha4: "NTHH",
        type: "split",
        from: {
            state: "formerly-assigned",
            alpha2: "NT",
            alpha3: "NTZ",
            numeric: "536",
            name: "Neutral Zone"
        },
        to: [
            {
                state: "assigned",
                alpha2: "IQ",
                alpha3: "IRQ",
                numeric: "368",
                name: "Iraq"
            },
            {
                state: "assigned",
                alpha2: "SA",
                alpha3: "SAU",
                numeric: "682",
                name: "Saudi Arabia"
            }
        ]
    },
    {
        alpha4: "PCHH",
        type: "split",
        from: {
            state: "formerly-assigned",
            alpha2: "PC",
            alpha3: "PCI",
            numeric: "582",
            name: "Pacific Islands (Trust Territory)"
        },
        to: [
            {
                state: "assigned",
                alpha2: "MH",
                alpha3: "MHL",
                numeric: "584",
                name: "Marshall Islands"
            },
            {
                state: "assigned",
                alpha2: "FM",
                alpha3: "FSM",
                numeric: "583",
                name: "Micronesia (Federated States of)"
            },
            {
                state: "assigned",
                alpha2: "MP",
                alpha3: "MNP",
                numeric: "580",
                name: "Northern Mariana Islands"
            },
            {
                state: "assigned",
                alpha2: "PW",
                alpha3: "PLW",
                numeric: "585",
                name: "Palau"
            }
        ]
    },
    {
        alpha4: "PUUM",
        type: "merge",
        from: {
            state: "formerly-assigned",
            alpha2: "PU",
            alpha3: "PUS",
            numeric: "849",
            name: "United States Miscellaneous Pacific Islands"
        },
        to: [
            {
                state: "assigned",
                alpha2: "UM",
                alpha3: "UMI",
                numeric: "581",
                name: "United States Minor Outlying Islands"
            }
        ]
    },
    {
        alpha4: "PZPA",
        type: "merge",
        from: {
            state: "formerly-assigned",
            alpha2: "PZ",
            alpha3: "PCZ",
            name: "Panama Canal Zone"
        },
        to: [
            {
                state: "assigned",
                alpha2: "PA",
                alpha3: "PAN",
                numeric: "591",
                name: "Panama"
            }
        ]
    },
    {
        alpha4: "RHZW",
        type: "change",
        from: {
            state: "formerly-assigned",
            alpha2: "RH",
            alpha3: "RHO",
            name: "Southern Rhodesia"
        },
        to: [
            {
                state: "assigned",
                alpha2: "ZW",
                alpha3: "ZWE",
                numeric: "716",
                name: "Zimbabwe"
            }
        ]
    },
    {
        alpha4: "SKIN",
        type: "merge",
        from: {
            state: "formerly-assigned",
            alpha2: "SK",
            alpha3: "SKM",
            name: "Sikkim"
        },
        to: [
            {
                state: "assigned",
                alpha2: "IN",
                alpha3: "IND",
                numeric: "356",
                name: "India"
            }
        ]
    },
    {
        alpha4: "SUHH",
        type: "split",
        from: {
            state: "formerly-assigned",
            alpha2: "SU",
            alpha3: "SUN",
            numeric: "810",
            name: "USSR"
        },
        to: [
            {
                state: "assigned",
                alpha2: "AM",
                alpha3: "ARM",
                numeric: "051",
                name: "Armenia"
            },
            {
                state: "assigned",
                alpha2: "AZ",
                alpha3: "AZE",
                numeric: "031",
                name: "Azerbaijan"
            },
            {
                state: "assigned",
                alpha2: "EE",
                alpha3: "EST",
                numeric: "233",
                name: "Estonia"
            },
            {
                state: "assigned",
                alpha2: "GE",
                alpha3: "GEO",
                numeric: "268",
                name: "Georgia"
            },
            {
                state: "assigned",
                alpha2: "KZ",
                alpha3: "KAZ",
                numeric: "398",
                name: "Kazakhstan"
            },
            {
                state: "assigned",
                alpha2: "KG",
                alpha3: "KGZ",
                numeric: "417",
                name: "Kyrgyzstan"
            },
            {
                state: "assigned",
                alpha2: "LV",
                alpha3: "LVA",
                numeric: "428",
                name: "Latvia"
            },
            {
                state: "assigned",
                alpha2: "LT",
                alpha3: "LTU",
                numeric: "440",
                name: "Lithuania"
            },
            {
                state: "assigned",
                alpha2: "MD",
                alpha3: "MDA",
                numeric: "498",
                name: "Moldova, Republic of"
            },
            {
                state: "assigned",
                alpha2: "RU",
                alpha3: "RUS",
                numeric: "643",
                name: "Russian Federation"
            },
            {
                state: "assigned",
                alpha2: "TJ",
                alpha3: "TJK",
                numeric: "762",
                name: "Tajikistan"
            },
            {
                state: "assigned",
                alpha2: "TM",
                alpha3: "TKM",
                numeric: "795",
                name: "Turkmenistan"
            },
            {
                state: "assigned",
                alpha2: "UZ",
                alpha3: "UZB",
                numeric: "860",
                name: "Uzbekistan"
            }
        ]
    },
    {
        alpha4: "TPTL",
        type: "change",
        from: {
            state: "formerly-assigned",
            alpha2: "TP",
            alpha3: "TMP",
            numeric: "626",
            name: "East Timor"
        },
        to: [
            {
                state: "assigned",
                alpha2: "TL",
                alpha3: "TLS",
                numeric: "626",
                name: "Timor-Leste"
            }
        ]
    },
    {
        alpha4: "VDVN",
        type: "merge",
        from: {
            state: "formerly-assigned",
            alpha2: "VD",
            alpha3: "VDR",
            name: "Viet-Nam, Democratic Republic of"
        },
        to: [
            {
                state: "assigned",
                alpha2: "VN",
                alpha3: "VNM",
                numeric: "704",
                name: "Viet Nam"
            }
        ]
    },
    {
        alpha4: "WKUM",
        type: "merge",
        from: {
            state: "formerly-assigned",
            alpha2: "WK",
            alpha3: "WAK",
            numeric: "872",
            name: "Wake Island"
        },
        to: [
            {
                state: "assigned",
                alpha2: "UM",
                alpha3: "UMI",
                numeric: "581",
                name: "United States Minor Outlying Islands"
            }
        ]
    },
    {
        alpha4: "YDYE",
        type: "merge",
        from: {
            state: "formerly-assigned",
            alpha2: "YD",
            alpha3: "YMD",
            numeric: "720",
            name: "Yemen, Democratic"
        },
        to: [
            {
                state: "assigned",
                alpha2: "YE",
                alpha3: "YEM",
                numeric: "887",
                name: "Yemen"
            }
        ]
    },
    {
        alpha4: "YUCS",
        type: "change",
        from: {
            state: "formerly-assigned",
            alpha2: "YU",
            alpha3: "YUG",
            numeric: "891",
            name: "Yugoslavia"
        },
        to: [
            {
                state: "formerly-assigned",
                alpha2: "CS",
                alpha3: "SCG",
                numeric: "891",
                name: "Serbia and Montenegro"
            }
        ]
    },
    {
        alpha4: "ZRCD",
        type: "change",
        from: {
            state: "formerly-assigned",
            alpha2: "ZR",
            alpha3: "ZAR",
            numeric: "180",
            name: "Zaire"
        },
        to: [
            {
                state: "assigned",
                alpha2: "CD",
                alpha3: "COD",
                numeric: "180",
                name: "Congo, Democratic Republic of the"
            }
        ]
    }
];

});


})();
//# sourceMappingURL=iso-3166.c5c390d9.js.map
