import { LaravelSeguro } from "../LaravelUtils/LaravelTypes";
import { getAllSeguros } from "../LaravelUtils/requests/seguro/getAllSeguros";
import { datatableHOption } from "./datableHOptions";

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
        ],

    getRowsFN: getAllSeguros,

    formatData: (data: LaravelSeguro[]) => {
        let finalData: any[] = [];
        
        data.map( (seguro) => {
            finalData.push({
                "id" :              seguro.id,
                "Valor":            seguro.valor,
                "Criado em":        seguro.created_at,
                "Vendedor":         seguro.vendedor?.nome || "",
                "Veículo":          seguro.veiculo?.nome || "",
                "Valor do Veículo": seguro.veiculo?.valor || "",
                "Rastreador":       seguro.rastreador?.serial_number || "",
                "Operadora":        seguro.rastreador_operadora?.nome || ""
            });
        });

        return finalData;
    }
}