import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import "./tableComponent.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function TableComponent(props) {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    console.log(newPage, "newpage");
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log(+event.target.value, "handle change row");
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="tableContainer">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {props.column.map((item) => (
                <StyledTableCell>{item.header}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data === "no data" ? (
              <StyledTableRow>
                <StyledTableCell colSpan={props.column.length} align="center">
                  No Data
                </StyledTableCell>
              </StyledTableRow>
            ) : (
              props.data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <StyledTableRow key={row._id}>
                    {props.column.map((itemField) => (
                      <StyledTableCell>{row[itemField.field]}</StyledTableCell>
                    ))}
                  </StyledTableRow>
                ))
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={props.data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
}
