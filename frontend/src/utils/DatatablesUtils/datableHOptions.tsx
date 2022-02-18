import { DHeader } from "./subcomponents/DHeader";

export const datatableHOption = {
  renderCell: (cellValues: any) => {
    return (
      <DHeader>
        {cellValues.value}
      </DHeader >
    );
  },
  renderHeader: (headerValue: any) => {
    return (<p style={{ color: '#FF2D20', fontWeight: 'bolder' }}> {headerValue.field} </p>);
  },
}