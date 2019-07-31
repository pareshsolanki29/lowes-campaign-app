import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import FileCopyIcon from "@material-ui/icons/FileCopy";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
    display: "flex"
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 20
  },
  table: {
    minWidth: 700
  }
}));
function createData(name, location, type, status, last_updated) {
  return { name, location, type, status, last_updated };
}
const rows = [
  createData(
    "Customer Also Viewed (CAV)",
    "lwscom-pdp-cav",
    "RECO",
    "Inactive",
    "6-10-2019 5est"
  ),
  createData(
    "Copy of Customer Also Viewed (CAV)",
    "lwscom-pdp-cav",
    "RECO",
    "Inactive",
    "6-10-2019 5est"
  )
];

const ContentTable = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Location</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Last Updated</TableCell>
            <TableCell align="center">Clear</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.location}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.last_updated}</TableCell>
              <TableCell align="center">
                <DeleteIcon className={classes.icon} />
                <EditIcon className={classes.icon} />
                <FileCopyIcon className={classes.icon} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ContentTable;
