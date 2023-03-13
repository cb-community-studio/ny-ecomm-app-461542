
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';


const ProductDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.productname}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.price}</p>
    const ratingTemplate4 = (rowData, { rowIndex }) => <Rating stars={5} style={{width:"20rem"}} value={rowData.rating} cancel={false}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="productid" header="Product SKU"  style={{ minWidth: "8rem" }} />
            <Column field="productname" header="Name" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="quantity" header="quantity"  style={{ minWidth: "8rem" }} />
            <Column field="price" header="Product Price" body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="rating" header="Product Rating" body={ratingTemplate4} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ProductDataTable;