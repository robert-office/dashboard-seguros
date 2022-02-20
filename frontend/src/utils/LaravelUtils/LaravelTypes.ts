
////// HELPERS /////

export interface IPaginateLinks {
    "url": string,
    "label": string,
    "active": boolean
}

//////////////////  USER  ////////////////////////

export interface LaravelUser {
    "id": number,
    "nome": string,
    "email": string,
    "created_at": string,
    "roles": LaravelUserRoles[]
}

export interface LaravelUserRoles {
    "id": number,
    "role": string,
    "created_at": string,
    "updated_at": string
}

export interface LaravelUserByRole {
    "id": 1,
    "roles_users_roles": LaravelUser[],
}

export interface IPaginateUsers {
    "result": {
        "current_page": number,
        "data": LaravelUser[],
        "from": number,
        "last_page": number,
        "links": IPaginateLinks[],
        "per_page": number,
        "prev_page_url": boolean,
        "to": number,
        "total": number
    }
}

export interface IPaginateUsersByRole {
    "result": {
        "current_page": number,
        "data": LaravelUserByRole[],
        "from": number,
        "last_page": number,
        "links": IPaginateLinks[],
        "per_page": number,
        "prev_page_url": boolean,
        "to": number,
        "total": number
    }
}

//////////////////// RASTREADORES ///////////////

export interface LaravelOperadora {
    "id": number,
    "nome": string,
    "created_at": string,
    "updated_at": string
}

export interface LaravelRastreador {
    "id": number,
    "id_operadora": number,
    "serial_number": string,
    "created_at": string,
    "updated_at": string,
    "operadora": LaravelOperadora
}

export interface IPaginateRastreadores {
    "result": {
        "current_page": number,
        "data": LaravelRastreador[],
        "from": number,
        "last_page": number,
        "links": IPaginateLinks[],
        "per_page": number,
        "prev_page_url": boolean,
        "to": number,
        "total": number
    }
}


//////////////// VEICULOS //////////////

export interface LaravelCliente {
    "id": number,
    "nome": string,
    "created_at": string,
    "updated_at": string
}

export interface LaravelVeiculoType {
    "id": 2,
    "tipo": "moto",
    "created_at": null,
    "updated_at": null
}

export interface LaravelVeiculo {
    "id": number,
    "id_cliente": number,
    "tipo": LaravelVeiculoType,
    "valor": number,
    "nome": string,
    "created_at": string,
    "updated_at": string,
    "cliente": LaravelCliente
}


export interface IPaginateVeiculos {
    "result": {
        "current_page": number,
        "data": LaravelVeiculo[],
        "from": number,
        "last_page": number,
        "links": IPaginateLinks[],
        "per_page": number,
        "prev_page_url": boolean,
        "to": number,
        "total": number
    }
}

////////////////// SEGUROS ///////////////

export interface LaravelVendedor {
    "id": number,
    "nome": string,
    "email": string
}

export interface LaravelSeguro {
    "id": number,
    "id_vendedor": number,
    "id_rastreador": number,
    "id_veiculo": number,
    "id_cliente": number,
    "valor": number,
    "created_at": string,
    "updated_at": string,

    "vendedor": LaravelVendedor,
    "rastreador": LaravelRastreador,
    "rastreador_operadora": LaravelOperadora,
    "veiculo": LaravelVeiculo,
    "veiculo_tipo": LaravelVeiculoType,
    "cliente": LaravelCliente
}

export interface IPaginateSeguros {
    "result": {
        "current_page": number,
        "data": LaravelSeguro[],
        "from": number,
        "last_page": number,
        "links": IPaginateLinks[],
        "per_page": number,
        "prev_page_url": boolean,
        "to": number,
        "total": number
    }
}
