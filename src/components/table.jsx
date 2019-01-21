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
    // overflowX: 'auto',
  },
  table: {
    // overflowX: 'auto',
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

  render() {
  const { classes } = this.props;

  return (
    <Paper className={classes.root}>
       <TextField
          label="Search"
          className={classes.textField}
          value={this.props.query}
          name='query'
          onChange={(event) => this.props.handleChange(event)}
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
             <MenuItem value='absolute'>Module Location</MenuItem>
           </Select>
        <div>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="left">Source File</TableCell>
              <TableCell align="left">number of modules</TableCell>
              <TableCell align="left">module</TableCell>
              <TableCell align="left">location</TableCell>
              <TableCell align="left">imported as</TableCell>
              <TableCell align="left">imported as local</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.props.data.map((row, i)   => {
                return (
                  <TableRow key={i}>
                    <TableCell key={i}>
                      {row.sourceFile}
                    </TableCell>
                    <TableCell >
                      {row.importedModules.length}
                    </TableCell>
                    <TableCell >
                    {row.importedModules.map((res, j) => {
                      return (
                    <div key={j}>
                      {res.source}
                      </div>
                    )})}
                    </TableCell>
                    <TableCell >
                    {row.importedModules.map((res, g) => {
                      return (
                    <div key={g}>
                      {res.absolute}
                      </div>
                    )})}
                    </TableCell>
                    <TableCell >
                    {row.importedModules.map((res, g) => {
                      return (
                    <div key={g}>
                      {res.imports.map((bob, d) => {
                        return (
                          <div key={d}>
                            {bob.imported}
                            </div>
                        )
                      })}
                      </div>
                    )})}
                    </TableCell>
                    <TableCell >
                    {row.importedModules.map((res, g) => {
                      return (
                    <div key={g}>
                      {res.imports.map((bob, m) => {
                        return (
                          <div key={m}>
                            {bob.local}
                            </div>
                        )
                      })}
                      </div>
                    )})}
                    </TableCell>
              </TableRow>
            )})} 
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