export function formatarDinheiro(valor) { return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }

export function formatarData(data) {
    var data = new Date(data),
    dia = data.getDate().toString(),
    diaF = (dia.length == 1) ? '0' + dia : dia,
    mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
    mesF = (mes.length == 1) ? '0' + mes : mes,
    anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
}

/// serialize a form and return all data, key => value
/// to send a API
export const serializeForm = (form) => {
    var obj = {};
    var formData = new FormData(form);
    for (var key of formData.keys()) {
        obj[key] = formData.get(key);
    }
    return obj;
}

export function compareObjects(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }