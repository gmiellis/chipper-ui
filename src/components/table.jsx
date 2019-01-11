import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function ScanTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>

          {/* <Select
            multiple
            value={this.state.name}
            onChange={this.handleChange}
            input={<Input id="select-multiple" />}
            MenuProps={MenuProps}
          >
          {names.map(name => (
            <MenuItem key={name} value={name} style={getStyles(name, this)}>
              {name}
             </MenuItem>
          ))}
          </Select> */}

      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Souce File</TableCell>
            <TableCell align="left">Number of Imported Modules</TableCell>
            <TableCell align="left">Module Name</TableCell>
            <TableCell align="left">Module Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(row => {
            return (
              <TableRow key={row.sourceFile}>
                <TableCell component="th" scope="row">
                  {row.sourceFile}
                </TableCell>
                <TableCell align="right">{row.importedModules.length}</TableCell>
                <TableCell align="left">
                  <ul>
                    {row.importedModules.map(res => {
                      return <li key={res.source}>{res.source}</li>
                      })
                    }
                  </ul>
                </TableCell>
                <TableCell align="left"> 
                  <ul>
                    {row.importedModules.map(res => {
                      return <li key={res.source}>{res.absolute}</li>
                      })
                    }
                  </ul></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

ScanTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScanTable);