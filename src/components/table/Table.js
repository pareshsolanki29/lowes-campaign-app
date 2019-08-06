import React, { useEffect, useState, Fragment } from "react";
import TableTitle from "./tableTitle";
import axios from "axios";
import EnhancedTableHead from "./tableHead";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import FilterListIcon from "@material-ui/icons/FilterList";

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
function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const ContentTable = props => {
  const isEdit = props.isEdit;
  console.log("this is:" + isEdit);
  const classes = useStyles();
  const [campaignList, setcampaignList] = useState([]);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, campaignList.length - page * rowsPerPage);

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  function handleChangeDense(event) {
    setDense(event.target.checked);
  }

  useEffect(() => {
    axios.get("https://api.myjson.com/bins/130qpd").then(result => {
      console.log(result);
      setcampaignList(result.data);
    });

    return () => {
      console.log("Cleanup");
    };
  }, []);
  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
  }

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      const newSelecteds = campaignList.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }

  return (
    <Fragment>
      <TableTitle isEdit="isEdit" handleOpen="handleOpen" />
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Location</TableCell>
              <TableCell align="left">Type</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Last Updated</TableCell>
              <TableCell align="left">Clear</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {stableSort(campaignList, getSorting(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    <div>{row.name}</div>
                  </TableCell>
                  <TableCell align="left">
                    <div>{row.location}</div>
                  </TableCell>
                  <TableCell align="left">
                    <div>{row.type}</div>
                  </TableCell>
                  <TableCell align="left">
                    <div>{row.status}</div>
                  </TableCell>
                  <TableCell align="left">
                    <div>{row.last_updtae}</div>
                  </TableCell>
                  <TableCell align="left">
                    <DeleteIcon className={classes.icon} />
                    <EditIcon className={classes.icon} />
                    <FileCopyIcon className={classes.icon} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={campaignList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              "aria-label": "previous page"
            }}
            nextIconButtonProps={{
              "aria-label": "next page"
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Table>
      </Paper>
    </Fragment>
  );
};

export default ContentTable;
