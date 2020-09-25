import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TableSortLabel from '@material-ui/core/TableSortLabel';

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset"
    }
  }
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.type.name}</TableCell>
        <TableCell align="right">{row.coordinates.latitude}</TableCell>
        <TableCell align="right">{row.coordinates.longitude}</TableCell>
        <TableCell align="right">
          <EditIcon />
        </TableCell>
        <TableCell align="right">
          <DeleteIcon />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Field Data
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Value</TableCell>
                    <TableCell colSpan="3" align="center">
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.fields.map((field, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {field.name}
                      </TableCell>
                      <TableCell>{field.value}</TableCell>
                      <TableCell align="center">
                        <EditIcon
                          onClick={() => console.log("inside editIcon")}
                        />
                        &nbsp;&nbsp;&nbsp;
                        <DeleteIcon
                          onClick={() => console.log("inside DELETE ICON!")}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const filterData2 = [
  {
    id: "RecordId1",
    name: "Brad Soap Worksasd",
    type: {
      name: "Manufacturing Partners"
    },
    coordinates: {
      latitude: 41.715078567567566,
      longitude: -71.510541777777
    },
    fields: []
  },
  {
    id: "RecordId2",
    name: "Unilever",
    type: {
      name: "Manufacturing Partners"
    },
    coordinates: {
      latitude: 51.511327,
      longitude: -0.104398
    },
    fields: []
  },
  {
    id: "RecordId3",
    name: "Hunter Amenities",
    type: {
      name: "Manufacturing Partners"
    },
    coordinates: {
      latitude: 43.381225,
      longitude: -79.78313
    },
    fields: [
      {
        name: "Website",
        value: "https://www.hunteramenities.com/"
      }
    ]
  },
  {
    id: "RecordId4",
    name: "PSG Holdings",
    type: {
      name: "Manufacturing Partners"
    },
    coordinates: {
      latitude: -33.939862,
      longitude: 151.196746
    },
    fields: [
      {
        name: "Website",
        value: "https://www.psgholdings.com.au/"
      }
    ]
  },
  {
    id: "RecordId6",
    name: "Eco-Soap Bank Siem Reap",
    type: {
      name: "Eco-Soap Bank Hubs"
    },
    coordinates: {
      latitude: 13.349215,
      longitude: 103.891303
    },
    fields: [
      {
        name: "Women Employed",
        value: "24"
      },
      {
        name: "Soap Recycled",
        value: "374,680 lbs"
      }
    ]
  },
  {
    id: "RecordId7",
    name: "Eco-Soap Bank Mbabane",
    type: {
      name: "Eco-Soap Bank Hubs"
    },
    coordinates: {
      latitude: -26.293168,
      longitude: 31.111064
    },
    fields: [
      {
        name: "Women Employed",
        value: "18"
      },
      {
        name: "Soap Recycled",
        value: "120,230 lbs"
      }
    ]
  },
  {
    id: "RecordId8",
    name: "Eco-Soap Bank Mombasa",
    type: {
      name: "Eco-Soap Bank Hubs"
    },
    coordinates: {
      latitude: -4.017299,
      longitude: 39.624757
    },
    fields: [
      {
        name: "Women Employed",
        value: "12"
      },
      {
        name: "Soap Recycled",
        value: "101,670 lbs"
      }
    ]
  },
  {
    id: "RecordId9",
    name: "Eco-Soap Bank Luang Prabang",
    type: {
      name: "Eco-Soap Bank Hubs"
    },
    coordinates: {
      latitude: 19.873947,
      longitude: 102.13379
    },
    fields: [
      {
        name: "Women Employed",
        value: "19"
      },
      {
        name: "Soap Recycled",
        value: "146,250 lbs"
      }
    ]
  },
  {
    id: "RecordId10",
    name: "Eco-Soap Bank Beirut",
    type: {
      name: "Eco-Soap Bank Hubs"
    },
    coordinates: {
      latitude: 33.864423,
      longitude: 35.545074
    },
    fields: [
      {
        name: "Women Employed",
        value: "8"
      },
      {
        name: "Soap Recycled",
        value: "82,110 lbs"
      }
    ]
  }
];

export default function CollapsibleTable() {
  const pages = [3, 5, 10];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Latitude&nbsp;</TableCell>
              <TableCell align="right">Longitude&nbsp;</TableCell>
              <TableCell colSpan="2" align="center">
                Actions&nbsp;
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterData2
              .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .map((row) => (
                <Row key={row.id} row={row} />
              ))}
          </TableBody>
        </Table>
        <TablePagination
          page={page}
          component="div"
          rowsPerPageOptions={pages}
          rowsPerPage={rowsPerPage}
          count={filterData2.length}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
}
