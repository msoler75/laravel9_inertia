<?php

namespace App\Pigmalion;

class Countries
{

    public static function getCountry($code)
    {
        $countries = [
            "AF" => "Afganistán",
            "AL" => "Albania",
            "DE" => "Alemania",
            "DZ" => "Argelia",
            "AD" => "Andorra",
            "AO" => "Angola",
            "AI" => "Anguila",
            "AQ" => "Antártida",
            "AG" => "Antigua y Barbuda",
            "AN" => "Antillas Holandesas",
            "SA" => "Arabia Saudita",
            "AR" => "Argentina",
            "AM" => "Armenia",
            "AW" => "Aruba",
            "AU" => "Australia",
            "AT" => "Austria",
            "AZ" => "Azerbaiyán",
            "BS" => "Bahamas",
            "BH" => "Bahréin",
            "BD" => "Bangladesh",
            "BB" => "Barbados",
            "BE" => "Bélgica",
            "BZ" => "Belice",
            "BJ" => "Benin",
            "BM" => "Bermudas",
            "BY" => "Bielorrusia",
            "BO" => "Bolivia",
            "BA" => "Bosnia y Herzegovina",
            "BW" => "Botsuana",
            "BR" => "Brasil",
            "BN" => "Brunéi",
            "BG" => "Bulgaria",
            "BF" => "Burkina Faso",
            "BI" => "Burundi",
            "BT" => "Bután",
            "CV" => "Cabo Verde",
            "KH" => "Camboya",
            "CM" => "Camerún",
            "CA" => "Canadá",
            "TD" => "Chad",
            "CL" => "Chile",
            "CN" => "China",
            "CY" => "Chipre",
            "VA" => "Ciudad del Vaticano",
            "CO" => "Colombia",
            "KM" => "Comoras",
            "CG" => "Congo",
            "KP" => "Corea del Norte",
            "KR" => "Corea del Sur",
            "CI" => "Costa de Marfil",
            "CR" => "Costa Rica",
            "HR" => "Croacia",
            "CU" => "Cuba",
            "DK" => "Dinamarca",
            "DM" => "Dominica",
            "EC" => "Ecuador",
            "EG" => "Egipto",
            "SV" => "El Salvador",
            "AE" => "Emiratos Árabes Unidos",
            "ER" => "Eritrea",
            "SK" => "Eslovaquia",
            "SI" => "Eslovenia",
            "ES" => "España",
            "US" => "Estados Unidos",
            "EE" => "Estonia",
            "ET" => "Etiopía",
            "FJ" => "Fiji",
            "PH" => "Filipinas",
            "FI" => "Finlandia",
            "FR" => "Francia",
            "GA" => "Gabón",
            "GM" => "Gambia",
            "GE" => "Georgia",
            "GH" => "Ghana",
            "GI" => "Gibraltar",
            "GR" => "Grecia",
            "GD" => "Granada",
            "GL" => "Groenlandia",
            "GP" => "Guadalupe",
            "GU" => "Guam",
            "GT" => "Guatemala",
            "GF" => "Guayana Francesa",
            "GG" => "Guernsey",
            "GN" => "Guinea",
            "GQ" => "Guinea Ecuatorial",
            "GW" => "Guinea-Bissau",
            "GY" => "Guyana",
            "HT" => "Haití",
            "HN" => "Honduras",
            "HK" => "Hong Kong",
            "HU" => "Hungría",
            "IN" => "India",
            "ID" => "Indonesia",
            "IQ" => "Irak",
            "IR" => "Irán",
            "IE" => "Irlanda",
            "BV" => "Isla Bouvet",
            "IM" => "Isla de Man",
            "CX" => "Isla de Navidad",
            "NF" => "Isla Norfolk",
            "IS" => "Islandia",
            "AX" => "Islas Áland",
            "KY" => "Islas Caimán",
            "CC" => "Islas Cocos",
            "CK" => "Islas Cook",
            "FO" => "Islas Feroe",
            "GS" => "Islas Georgia del Sur y Sandwich del Sur",
            "HM" => "Islas Heard y McDonald",
            "FK" => "Islas Malvinas",
            "MP" => "Islas Marianas del Norte",
            "MH" => "Islas Marshall",
            "UM" => "Islas menores alejadas de los Estados Unidos",
            "SB" => "Islas Salomón",
            "TC" => "Islas Turcas y Caicos",
            "VG" => "Islas Vírgenes Británicas",
            "VI" => "Islas Vírgenes de los Estados Unidos",
            "IL" => "Israel",
            "IT" => "Italia",
            "JM" => "Jamaica",
            "JP" => "Japón",
            "JE" => "Jersey",
            "JO" => "Jordania",
            "KZ" => "Kazajstán",
            "KE" => "Kenia",
            "KG" => "Kirguistán",
            "KI" => "Kiribati",
            "KW" => "Kuwait",
            "LA" => "Laos",
            "LS" => "Lesotho",
            "LV" => "Letonia",
            "LB" => "Líbano",
            "LR" => "Liberia",
            "LY" => "Libia",
            "LI" => "Liechtenstein",
            "LT" => "Lituania",
            "LU" => "Luxemburgo",
            "MK" => "Macedonia",
            "MG" => "Madagascar",
            "MY" => "Malasia",
            "MW" => "Malawi",
            "MV" => "Maldivas",
            "ML" => "Malí",
            "MT" => "Malta",
            "MA" => "Marruecos",
            "MQ" => "Martinica",
            "MU" => "Mauricio",
            "MR" => "Mauritania",
            "YT" => "Mayotte",
            "MX" => "México",
            "FM" => "Micronesia",
            "MD" => "Moldavia",
            "MC" => "Mónaco",
            "MN" => "Mongolia",
            "ME" => "Montenegro",
            "MS" => "Montserrat",
            "MZ" => "Mozambique",
            "MM" => "Myanmar",
            "NA" => "Namibia",
            "NR" => "Nauru",
            "NP" => "Nepal",
            "NI" => "Nicaragua",
            "NE" => "Níger",
            "NG" => "Nigeria",
            "NU" => "Niue",
            "NO" => "Noruega",
            "NC" => "Nueva Caledonia",
            "NZ" => "Nueva Zelanda",
            "OM" => "Omán",
            "NL" => "Países Bajos",
            "PK" => "Pakistán",
            "PW" => "Palau",
            "PS" => "Palestina",
            "PA" => "Panamá",
            "PG" => "Papúa Nueva Guinea",
            "PY" => "Paraguay",
            "PE" => "Perú",
            "PN" => "Pitcairn",
            "PF" => "Polinesia Francesa",
            "PL" => "Polonia",
            "PT" => "Portugal",
            "PR" => "Puerto Rico",
            "QA" => "Qatar",
            "UK" => "Reino Unido",
            "CF" => "República Centroafricana",
            "CZ" => "República Checa",
            "CG" => "República del Congo",
            "DO" => "República Dominicana",
            "RE" => "Reunión",
            "RW" => "Ruanda",
            "RO" => "Rumania",
            "RU" => "Rusia",
            "EH" => "Sahara Occidental",
            "WS" => "Samoa",
            "AS" => "Samoa Americana",
            "BL" => "San Bartolomé",
            "KN" => "San Cristóbal y Nieves",
            "SM" => "San Marino",
            "MF" => "San Martín",
            "PM" => "San Pedro y Miquelón",
            "VC" => "San Vicente y las Granadinas",
            "SH" => "Santa Elena",
            "LC" => "Santa Lucía",
            "ST" => "Santo Tomé y Príncipe",
            "SN" => "Senegal",
            "RS" => "Serbia",
            "SC" => "Seychelles",
            "SL" => "Sierra Leona",
            "SG" => "Singapur",
            "SY" => "Siria",
            "SO" => "Somalia",
            "LK" => "Sri Lanka",
            "SZ" => "Suazilandia",
            "ZA" => "Sudáfrica",
            "SD" => "Sudán",
            "SE" => "Suecia",
            "CH" => "Suiza",
            "SR" => "Surinam",
            "SJ" => "Svalbard y Jan Mayen",
            "TH" => "Tailandia",
            "TW" => "Taiwán",
            "TZ" => "Tanzania",
            "TJ" => "Tayikistán",
            "IO" => "Territorio Británico del Océano Índico",
            "TF" => "Territorios Australes Franceses",
            "TL" => "Timor Oriental",
            "TG" => "Togo",
            "TK" => "Tokelau",
            "TO" => "Tonga",
            "TT" => "Trinidad y Tobago",
            "TN" => "Túnez",
            "TM" => "Turkmenistán",
            "TR" => "Turquía",
            "TV" => "Tuvalu",
            "UA" => "Ucrania",
            "UG" => "Uganda",
            "UY" => "Uruguay",
            "UZ" => "Uzbekistán",
            "VU" => "Vanuatu",
            "VE" => "Venezuela",
            "VN" => "Vietnam",
            "WF" => "Wallis y Futuna",
            "YE" => "Yemen",
            "DJ" => "Yibuti",
            "ZM" => "Zambia",
            "ZW" => "Zimbabue"
          ];

        return $countries[$code];
    }
}