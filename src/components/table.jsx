import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  root: {
    width: '99.9%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    // minWidth: 700,
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

class ScanTable extends Component{
  constructor(props) {
    super(props);
      this.state = {
        row: 0
      };
    }

    handleRows() {
      this.setState({ row: this.state.value + 1 })
    }

  render() {
  const { classes } = this.props;
  const data = this.props.data;

  return (
    <Paper className={classes.root}>
       <TextField
          label="Search"
          className={classes.textField}
          value={this.props.query}
          name='query'
          onChange={(event, value) => this.props.handleChange(event)}
          margin="normal"
        />   

           <Select
             
             value={this.props.column}
             name='columnToQuery'
             MenuProps={MenuProps}
             onChange={(e) => this.props.handleChange(e)}
           >
             <MenuItem value='sourceFile'>Source File</MenuItem>
             <MenuItem value='numberOfImportedModules'>Number of Imported Modules</MenuItem>
             <MenuItem value='moduleName'>Module Name</MenuItem>
             <MenuItem value='moduleLocation'>Module Location</MenuItem>
           </Select>
<div>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Souce File</TableCell>
              <TableCell align="left">Number of Imported Modules</TableCell>
              <TableCell align="left">Module Name</TableCell>
              <TableCell align="left">Module Location</TableCell>
              <TableCell align="left">Import</TableCell>
              <TableCell align="left">Local</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => {
              return (

                // row.importedModules.length > 0 ?
                
                // <TableRow key={row.sourceFile}>
                //   <TableCell component="th" scope="row">
                //     {row.sourceFile}
                //   </TableCell>
                //   <TableCell align="right">{row.importedModules.length}</TableCell>
                //   <TableCell align="left">
                //     <ul>
                //       {row.importedModules.map(res => {
                //         return <li key={res.absolute}>{res.source}</li>
                //         })
                //       }
                //     </ul>
                //   </TableCell>
                //   <TableCell align="left"> 
                //     <ul>
                //       {row.importedModules.map(res => {
                //         return <li key={res.source}>{res.absolute}</li>
                //         })
                //       }
                //     </ul></TableCell>
                // </TableRow>
                // :
                // null
                <TableRow key={this.state.row}>
                  <TableCell align="right">{this.state.row}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.sourceFile}
                    
                  </TableCell>
                  <TableCell align="right">{row.importedModules.length}</TableCell>

                  {row.importedModules.length > 0 ?
  
                  <TableCell align="left">
                    
                      {row.importedModules.map(res => {
                        return <div key={res.absolute}>{res.source}</div>
                        })
                      }
                    
                  </TableCell>
                    :
                    <TableCell>
                      
                        <div key={row.importedModules.absolute}>None</div>
                      
                    </TableCell>
                  }

                  {row.importedModules.length > 0 ?

                  <TableCell align="left"> 
                    
                      {row.importedModules.map(res => {
                        return <div key={res.source}>{res.absolute}</div>
                        })
                      }
                    
                  </TableCell>
                  :
                  <TableCell>
                    
                      <div key={row.importedModules.absolute}>None</div>
                    
                  </TableCell>
                }
                
                {row.importedModules.length > 0 ?

                  <TableCell align="left"> 
                      {row.importedModules.map(res => 
                        res.imports.map(imps => {
                        return  <div key={imps.imported}>{imps.imported}</div>
                        }))
                      }
                  </TableCell>
                  :
                  <TableCell>
                    
                    <div key={row.index}>None</div>                    
                  </TableCell>
                  }

                  {row.importedModules.length > 0 ?

                  <TableCell align="left"> 
                      {row.importedModules.map(res => 
                        res.imports.map(imps => {console.log(imps.local)
                        return  <div key={imps.local}>{imps.local}</div>
                        
                        }))
                      }
                  </TableCell>
                  :
                  <TableCell>
                    
                    <div key={row.index}>None</div>
                    
                  </TableCell>
                  }
                </TableRow>

              );                
            }
            ) 
            }
          </TableBody>
        </Table>
        </div>
    </Paper>
  );
}
}
ScanTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScanTable);