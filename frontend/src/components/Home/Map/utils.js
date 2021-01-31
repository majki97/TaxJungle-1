// Constants
// Lookup dict to map cantons between taxJSON and topoJSON data
export const cantons = {
    1: "ZH",
    2: "BE",
    3: "LU",
    4: "UR",
    5: "SZ",
    6: "OW",
    7: "NW",
    8: "GL",
    9: "ZG",
    10: "FR",
    11: "SO",
    12: "BS",
    13: "BL",
    14: "SH",
    15: "AR",
    16: "AI",
    17: "SG",
    18: "GR",
    19: "AG",
    20: "TG",
    21: "TI",
    22: "VD",
    23: "VS",
    24: "NE",
    25: "GE",
    26: "JU"
}
// Colorscheme
export const colors = {
    one: "#FEF6D0",
    two: "#FEECC3",
    three: "#ffe3b7",
    four: "#FFD2A2",
    five: "#FFD09E",
    six: "#F2AF8B",
    seven: "#DC766A",
    eight: "#CF5657",
    nine: "#C33846",
    ten: "#B40F2E"
}

export const fetchTaxData = async () => {
    const baseTaxURL = 'https://antp5lwq3i.execute-api.eu-west-1.amazonaws.com/dev/steuern?'

    const headers = {
        "x-api-key": "ZzjM5cQPzL6w6eqVAkFn41Je2snct0Gf6Dx8ivlu",
    }

    const config = {
        method: "GET",
        headers: headers,
    }

    const query = "einkommen1=100000&jahrgang1=1990&zivilstand=0&kinder=0&kirche=0&plz=0"

    const response = await fetch(baseTaxURL + query, config)
    if (response.ok) {
        const json = await response.json()
        return json
    }

    return null
}