export function formatarDinheiro(valor) { if( valor ) { return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) } return valor; }

export function formatarData(data) {
    var data = new Date(data),
        dia = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0' + dia : dia,
        mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0' + mes : mes,
        anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
}


export function formatarValor(obj) {

    //retornará 1234.53
    const formatNumber = (value) => parseFloat(value);

    const testValorFormatado = (valor) => {
        let first3chars = valor.substring(0,3);
        return first3chars === 'R$ '
    }

    /// percorre os pares do obj e testa eles
    const array = Object.entries(obj)
    array.map((array_key_value) => {
        const value = array_key_value[1]
        const key = array_key_value[0]

        /// se é uma data valida
        if (testValorFormatado(value)) {
            let valueSemSufixo = value.substr(3);
            
            /// formata a data e coloca seu novo valor formatado no lugar do antigo
            obj[key] = formatNumber(valueSemSufixo)
        }
    })

    return obj
}

export function formatarDataInvertida(obj) {
    /// testa pra saber se a string é uma data no padrão dd/mm/YYYY
    function testDate(str) {
        var t = str.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
        if (t === null)
            return false;
        var d = +t[1], m = +t[2], y = +t[3];

        // Below should be a more acurate algorithm
        if (m >= 1 && m <= 12 && d >= 1 && d <= 31) {
            return true;
        }

        return false;
    }

    /// transforma data do tipo dd/mm/YYYY em YYYY-mm-dd
    function FormataStringData(data) {
        var dia = data.split("/")[0];
        var mes = data.split("/")[1];
        var ano = data.split("/")[2];

        return ano + '-' + ("0" + mes).slice(-2) + '-' + ("0" + dia).slice(-2);
        // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
    }

    /// percorre os pares do obj e testa eles
    const array = Object.entries(obj)
    array.map((array_key_value) => {
        const value = array_key_value[1]
        const key = array_key_value[0]

        /// se é uma data valida
        if (testDate(value)) {
            /// formata a data e coloca seu novo valor formatado no lugar do antigo
            obj[key] = FormataStringData(value)
        }
    })

    return obj
}

/// serialize a form and return all data, key => value
/// to send a API
export const serializeForm = (form) => {
    var obj = {};
    var formData = new FormData(form);
    for (var key of formData.keys()) {
        obj[key] = formData.get(key);
    }
    return formatarDataInvertida(formatarValor(obj));
}

export function compareObjects(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}