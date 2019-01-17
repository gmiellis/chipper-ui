import React, {Component } from 'react';
// import { Switch, Route } from 'react-router-dom';

import Header from './components/header';
// import ScanTable from './components/table';
// import Table1 from './components/table1';
import Table2 from './components/table2';


// import orderBy from "lodash/orderBy";

class App extends Component{
  constructor(props) {
    super(props);
      this.state = {
        query: '',
        columnToQuery: 'moduleName',
      };
  }

  handleChange = event => {
    this.setState({ [event.target.name] : event.target.value })
    console.log(this.state)
  }


  render() {
    return (
      <div>
        <Header scan={this.props.scan} />
        
        {/* <Table1 data={this.props.data} column={this.state.columnToQuery} /> */}
        {/* <ScanTable
          handleChange={this.handleChange}
          query={this.state.query}
          column={this.state.columnToQuery}
          data={orderBy(
          this.state.query
          ? this.props.data.filter(x =>
            x[this.state.columnToQuery]
              .toLowerCase()
              .includes(this.state.query)
          )
            : this.props.data
          )} 
        /> */}
        <Table2 data={this.props.data}/>

    </div>
  )}
}

export default App;