import { simpleFormValuesToMerchant, simpleMerchantToFormValues } from '../adapters';

export default {
    id : 'com.2checkout',

    form : [
        {type : 'string', name : 'sellerId'},
        {type : 'string', name : 'publishableKey'},
        {type : 'string', name : 'privateKey'}
    ],

    // @see https://www.2checkout.com/global-payments
    countries : [
        "AX", "AL", "DZ", "AD", "AO", "AI", "AQ", "AG", "AR", "AM",
        "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE",
        "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BV", "BR", "IO",
        "BN", "BG", "BF", "BI", "CA", "CV", "KY", "CF", "TD", "CL",
        "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "HR",
        "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "EC", "EG", "SV",
        "GQ", "ER", "EE", "ET", "FK", "FJ", "FI", "FR", "PF", "TF",
        "GM", "GE", "DE", "GH", "GI", "GR", "GD", "GU", "GT", "GG",
        "GY", "HT", "HM", "HN", "HK", "HU", "IS", "IN", "ID", "IE",
        "IM", "IL", "IT", "JP", "JE", "JO", "KZ", "KE", "KI", "KR",
        "KS", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI",
        "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MT", "MH", "MQ",
        "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS",
        "MA", "NR", "NP", "NL", "AN", "NZ", "NI", "NE", "NG", "NU",
        "NF", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE",
        "PH", "PN", "PL", "PT", "PR", "QA", "RO", "RU", "SH", "KN",
        "LC", "PM", "VC", "WS", "SM", "ST", "SA", "RS", "SC", "SL",
        "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "ES", "LK",
        "SR", "SJ", "SE", "CH", "TW", "TZ", "TH", "TG", "TK", "TO",
        "TT", "TN", "TM", "TC", "TV", "UA", "AE", "GB", "US", "UY",
        "UZ", "VU", "VA", "VE", "VN", "VG", "VI", "WF", "EH", "YE",
        "ZM", "ZW"
    ],
	
    fields: [],

    formValuesToMerchant : simpleFormValuesToMerchant,
    merchantToFormValues : simpleMerchantToFormValues,
    keyToMerchant        : JSON.parse,
    merchantToKey        : JSON.stringify
};
