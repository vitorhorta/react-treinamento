import React, {Component} from 'react';
import { Provider } from 'react-redux';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

// It's a data format example.
function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

var selectRowProp = {
  mode: "checkbox",  //checkbox for multi select, radio for single select.
  clickToSelect: true,   //click row will trigger a selection on that row.
  bgColor: "rgb(238, 193, 213)"   //selected row background color
};

class ProductsTable extends Component {
    constructor(props) {
        super(props);
    }

    onDeleteRow(row){
        console.log("ON DELETE ROW" + row);
    }

    onFilterChange(filterObj){
        console.log(filterObj);
    }
    
    render() {
        console.log(this.props.products);
        return (
            <div>
                <BootstrapTable remote={true} data={this.props.products} striped={true}>
                    <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}



export default ProductsTable;
