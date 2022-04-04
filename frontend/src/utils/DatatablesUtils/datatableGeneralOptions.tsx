import { LaravelClienteSeguroVeiculo, LaravelSeguro, LaravelUser, LaravelUserByRole, LaravelVeiculo } from "../LaravelUtils/LaravelTypes";
import { getAllClientes } from "../LaravelUtils/requests/cliente/getAllClientes";
import { getAllSeguros } from "../LaravelUtils/requests/seguro/getAllSeguros";
import { getAllUserByRole } from "../LaravelUtils/requests/user/getAllUserByRole";
import { getAllVeiculos } from "../LaravelUtils/requests/veiculo/getAllVeiculos";
import { formatarData, formatarDinheiro } from "../utils";
import { datatableHOption } from "./datableHOptions";
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { getCliente } from "../LaravelUtils/requests/cliente/getCliente";

export type IEditarButton = {
    icon: JSX.Element,
    href: string,
    title: string
}

export const EditarButton = ({ icon, href, title }: IEditarButton) => {
    return (
        <Tooltip title={title}>
            <Link to={href}>
                <IconButton sx={{ color: 'white' }}> {icon} </IconButton>
            </Link>
        </Tooltip>
    )
}

export const DatatableDashboardOptions = {
    tableName: "seguros",
    columns:
        [
            { field: 'id', headerName: 'ID', width: 70, ...datatableHOption },
            { field: 'Valor', headerName: 'Valor', width: 130, ...datatableHOption },
            { field: 'Criado em', headerName: 'Criado em', width: 150, ...datatableHOption },
            { field: 'Vendedor', headerName: 'Vendedor', width: 200, ...datatableHOption },
            { field: 'Veículo', headerName: 'Veículo', width: 160, ...datatableHOption },
            { field: 'Valor do Veículo', headerName: 'Valor do Veículo', width: 150, ...datatableHOption },
            { field: 'Rastreador', headerName: 'Rastreador', width: 150, ...datatableHOption },
            { field: 'Operadora', headerName: 'Operadora', width: 100, ...datatableHOption },
            { field: 'ação', headerName: 'ação', width: 100, ...datatableHOption },
        ],

    getRowsFN: getAllSeguros,

    formatData: (data: LaravelSeguro[]) => {
        let finalData: any[] = [];

        data.map((seguro) => {
            finalData.push({
                "id": seguro.id,
                "Valor": formatarDinheiro(seguro.valor),
                "Criado em": formatarData(seguro.created_at),
                "Vendedor": seguro.vendedor?.nome || "",
                "Veículo": seguro.veiculo?.nome || "",
                "Valor do Veículo": formatarDinheiro(seguro.veiculo?.valor) || "",
                "Rastreador": seguro.rastreador?.serial_number || "",
                "Operadora": seguro.rastreador_operadora?.nome || "",
                'ação': <EditarButton icon={<ModeEditOutlinedIcon />} title={"Editar"} href={`/editar/seguro/${seguro.id}`} />
            });
        });

        return finalData;
    }
}

export const DatatableUsersByRolesOptions = {
    tableName: "users",
    columns:
        [
            { field: 'id', headerName: 'id', width: 70, ...datatableHOption },
            { field: 'Nome', headerName: 'Nome', width: 130, ...datatableHOption },
            { field: 'E-mail', headerName: 'E-mail', width: 150, ...datatableHOption },
            { field: 'Criado em', headerName: 'Criado em', width: 150, ...datatableHOption },
        ],

    getRowsFN: getAllUserByRole,

    formatData: (data: LaravelUserByRole[]) => {
        let finalData: any[] = [];

        data.map((users) => {
            users.roles_users_roles?.map((user) => {
                finalData.push({
                    "id": user.id,
                    "Nome": user.nome,
                    "E-mail": user.email,
                    "Criado em": formatarData(user.created_at)
                });
            })
        });

        return finalData;
    }
}

export const DatatableClientesOptions = {
    tableName: "clientes",
    columns:
        [
            { field: 'id', headerName: 'id', width: 70, ...datatableHOption },
            { field: 'Nome', headerName: 'Nome', width: 130, ...datatableHOption },
            { field: 'Entrou em', headerName: 'Entrou em', width: 150, ...datatableHOption },
            { field: 'Ultimo Veiculo', headerName: 'Ultimo Veiculo', width: 150, ...datatableHOption },
            { field: 'Valor Veiculo', headerName: 'Valor Veiculo', width: 150, ...datatableHOption },
            { field: 'Ultimo Seguro ID', headerName: 'Ultimo Seguro ID', width: 150, ...datatableHOption },
            { field: 'Valor Seguro', headerName: 'Valor Seguro', width: 150, ...datatableHOption },
            { field: 'ação', headerName: 'ação', width: 100, ...datatableHOption },
        ],

    getRowsFN:  getAllClientes,

    formatData: (data: LaravelClienteSeguroVeiculo[]) => {
        let finalData: any[] = [];

        data.map((user) => {
            finalData.push({
                "id": user.id,
                "Nome": user.nome,
                "Entrou em": formatarData(user.created_at),
                "Ultimo Veiculo": user.ultimo_veiculo?.nome || "",
                'Valor Veiculo': formatarDinheiro(user.ultimo_veiculo?.valor) || "",
                "Ultimo Seguro ID": user.ultimo_seguro?.id || "",
                "Valor Seguro": formatarDinheiro(user.ultimo_seguro?.valor) || "",
                'ação': <EditarButton icon={<ModeEditOutlinedIcon />} title={"Editar"} href={`/editar/cliente/${user.id}`} />
            });
        });

        return finalData;
    }
}

export const DatatableVeiculosOptions = {
    tableName: "veiculos",
    columns:
        [
            { field: 'id', headerName: 'id', width: 70, ...datatableHOption },
            { field: 'Nome', headerName: 'Nome', width: 130, ...datatableHOption },
            { field: 'Tipo', headerName: 'Tipo', width: 130, ...datatableHOption },
            { field: 'Valor Veiculo', headerName: 'Valor Veiculo', width: 150, ...datatableHOption },
            { field: 'Cadastrado em', headerName: 'Cadastrado em', width: 150, ...datatableHOption },
            { field: 'Nome Cliente', headerName: 'Nome Cliente', width: 150, ...datatableHOption },
        ],

    getRowsFN: getAllVeiculos,

    formatData: (data: LaravelVeiculo[]) => {
        let finalData: any[] = [];

        data.map((veiculo) => {
            finalData.push({
                "id": veiculo.id,
                "Nome": veiculo.nome,
                "Tipo": veiculo.tipo?.tipo || "",
                'Valor Veiculo': formatarDinheiro(veiculo.valor),
                "Cadastrado em": formatarData(veiculo.created_at),
                "Nome Cliente": veiculo.cliente?.nome || ""
            });
        });

        return finalData;
    }
}