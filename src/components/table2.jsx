import React, { Component } from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css';
 
class Table2 extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

render() {
    const columns = [
        {
            Header: "Source File",
            accessor: "sourceFile",
            sortable: true
        },
        // {
        //     Header: "Imported Modules",
        //     id: "importedModules",
        //     accessor: d => d.importedModules
        // }
    ]

  return (
    <ReactTable
      columns={columns}
      data={this.props.data}
      filterable
      
    >

    </ReactTable>
    )
}
}

export default Table2;