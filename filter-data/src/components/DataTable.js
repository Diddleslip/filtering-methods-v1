import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import FilterListIcon from "@material-ui/icons/FilterList";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";


const filterData2 = [
  {
    "id": "RecordId1",
    "name": "Bradford Soap Works",
    "type": {
      "name": "Manufacturing Partners"
    },
    "coordinates": {
      "latitude": 41.715078,
      "longitude": -71.510541
    },
    "fields": [
      {
        "name": "Website",
        "value": "http://www.bradfordsoap.com/"
      },
      {
        "name": "Image",
        "value": "https://drive.google.com/uc?id=1guusykr1Sr6OciyvGMdls6BN70C4HFD7"
      }
    ]
  },
  {
    "id": "RecordId2",
    "name": "Unilever",
    "type": {
      "name": "Manufacturing Partners"
    },
    "coordinates": {
      "latitude": 51.511327,
      "longitude": -0.10439
    },
    "fields": [
      {
        "name": "Website",
        "value": "https://unilever.com/"
      },
      {
        "name": "Image",
        "value": "https://drive.google.com/uc?id=132zeCXLOXvWJv9t2iXKXwAyaEzv-CvO6"
      },
      {
        "name": "Image",
        "value": "https://drive.google.com/uc?id=1L1EtgTx6Mo-IF3zUeHcdwAXQTh5OLds-"
      },
      {
        "name": "Image",
        "value": "https://drive.google.com/uc?id=1XZV1CMEG5ex5_prpHJP8Eo8HZsOUT6wv"
      },
      {
        "name": "Image",
        "value": "https://drive.google.com/uc?id=1P_Qd8CdY9BSoEr-bfQJWpD_9_Mst9JoF"
      },
      {
        "name": "Image",
        "value": "https://drive.google.com/uc?id=1vMj3T96QCzcSg8CXVZ4sh0kUWhXAnGAN"
      }
    ]
  },
  {
    "id": "RecordId3",
    "name": "Hunter Amenities",
    "type": {
      "name": "Manufacturing Partners"
    },
    "coordinates": {
      "latitude": 43.381225,
      "longitude": -79.78313
    },
    "fields": [
      {
        "name": "Website",
        "value": "https://www.hunteramenities.com/"
      }
    ]
  },
  {
    "id": "RecordId4",
    "name": "PSG Holdings",
    "type": {
      "name": "Manufacturing Partners"
    },
    "coordinates": {
      "latitude": -33.939862,
      "longitude": 151.196746
    },
    "fields": [
      {
        "name": "Website",
        "value": "https://www.psgholdings.com.au/"
      }
    ]
  },
  {
    "id": "RecordId5",
    "name": "Gojo Industries, Inc.",
    "type": {
      "name": "Manufacturing Partners"
    },
    "coordinates": {
      "latitude": 41.175194,
      "longitude": -81.501463
    },
    "fields": [
      {
        "name": "Website",
        "value": "https://www.gojo.com/"
      }
    ]
  },
  {
    "id": "RecordId6",
    "name": "Eco-Soap Bank Siem Reap",
    "type": {
      "name": "Eco-Soap Bank Hubs"
    },
    "coordinates": {
      "latitude": 13.349215,
      "longitude": 103.891303
    },
    "fields": [
      {
        "name": "Women Employed",
        "value": "24"
      },
      {
        "name": "Soap Recycled",
        "value": "374,680 lbs"
      },
      {
        "name": "Image",
        "value": "https://drive.google.com/uc?id=1wE8RcoUBs0KAPNB7hGnX2puOTZewYVfO"
      },
      {
        "name": "Video",
        "value": "https://drive.google.com/uc?id=0B74qHrVHeg3rMTk1SWswUWZyMVE"
      }
    ]
  },
  {
    "id": "RecordId7",
    "name": "Eco-Soap Bank Mbabane",
    "type": {
      "name": "Eco-Soap Bank Hubs"
    },
    "coordinates": {
      "latitude": -26.293168,
      "longitude": 31.111064
    },
    "fields": [
      {
        "name": "Women Employed",
        "value": "18"
      },
      {
        "name": "Soap Recycled",
        "value": "120,230 lbs"
      }
    ]
  },
  {
    "id": "RecordId8",
    "name": "Eco-Soap Bank Mombasa",
    "type": {
      "name": "Eco-Soap Bank Hubs"
    },
    "coordinates": {
      "latitude": -4.017299,
      "longitude": 39.624757
    },
    "fields": [
      {
        "name": "Women Employed",
        "value": "12"
      },
      {
        "name": "Soap Recycled",
        "value": "101,670 lbs"
      }
    ]
  },
  {
    "id": "RecordId9",
    "name": "Eco-Soap Bank Luang Prabang",
    "type": {
      "name": "Eco-Soap Bank Hubs"
    },
    "coordinates": {
      "latitude": 19.873947,
      "longitude": 102.13379
    },
    "fields": [
      {
        "name": "Women Employed",
        "value": "19"
      },
      {
        "name": "Soap Recycled",
        "value": "146,250 lbs"
      },
      {
        "name": "Image",
        "value": "https://drive.google.com/uc?id=0B5O63muqEpojRnh1M0ZKbUxsUEp0R3oydTlEZWpleWxIREsw"
      },
      {
        "name": "Image",
        "value": "https://drive.google.com/uc?id=0B5O63muqEpojcjJXX2R1d2xIbkdUVGJvZTNpU1JsS3VUcGd3"
      }
    ]
  },
];

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  lightBold: {
    fontWeight: "bold"
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
            {open ? (
              <KeyboardArrowUpIcon
                style={{ color: '#3BB54A', cursor: 'pointer' }}
              />
            ) : (
              <KeyboardArrowDownIcon
                style={{ color: '#3BB54A', cursor: 'pointer' }}
              />
            )}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.type.name}</TableCell>
        <TableCell align="center">{row.coordinates.latitude}</TableCell>
        <TableCell align="center">{row.coordinates.longitude}</TableCell>
        <TableCell align="center">
          <EditIcon
            style={{ color: '#3BB54A', cursor: 'pointer' }}
            onClick={() => {
              props.setRecordUpdateData(row);
              props.onOpenUpdateModal();
            }}
          />
          &nbsp;&nbsp;&nbsp;
          <DeleteIcon
            style={{ color: '#C84E47', cursor: 'pointer' }}
            onClick={() => {
              props.setDeleteRecordData(row.id);
              props.onOpenDeleteModal();
            }}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow style={{ background: '#deffde' }}>
                    <TableCell className={classes.lightBold}>NAME</TableCell>
                    <TableCell className={classes.lightBold}>VALUE</TableCell>
                    <TableCell className={classes.lightBold}>ACTIONS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.fields.map((field, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {field.name}
                      </TableCell>
                      <TableCell>{field.value}</TableCell>
                      <TableCell>
                        <EditIcon
                          style={{ color: '#3BB54A', cursor: 'pointer' }}
                          onClick={() => console.log('inside editIcon')}
                        />
                        &nbsp;&nbsp;&nbsp;
                        <DeleteIcon
                          style={{ color: '#C84E47', cursor: 'pointer' }}
                          onClick={() => console.log('inside DELETE ICON!')}
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

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: "name", align: "left", label: "Name" },
  { id: "typeName", align: "center",  label: "Type" },
  { id: "latitude", align: "center",  label: "Latitude" },
  { id: "longitude", align: "center", label: "Longitude" },
  { id: "actions", align: "center", label: "Actions" }
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell/>
        {headCells.map((headCell) => (
          headCell.label !== "Actions" ?
          <TableCell
            key={headCell.id}
            align={headCell.align}
            sortDirection={null}
            className={classes.bold}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
          : // Do this is rendering Actions tab
          <TableCell
            key={headCell.id}
            align={headCell.align}
            className={classes.bold}
          >
            <Table>{headCell.label}</Table>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  title: {
    flex: "1 1 100%"
  }
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  },
  bold: {
    fontWeight: "900"
  }
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [schedData, setSchedData] = useState([]);
  console.log("BYE", schedData);

  useEffect(() => {
    const schedData = filterData2.map((record) => {
      const { name: typeName } = record.type;
      // make all `details` properties to be accessible
      // on the same level as `status`
      return { ...record, typeName, ...record.coordinates };
    });

    setSchedData(schedData);
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = schedData.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, schedData.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={schedData.length}
            />
            <TableBody>
              {stableSort(schedData, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <Row 
                      key={row.id} 
                      row={row} 
                      index={index} 
                      useStyles={useStyles}
                      isItemSelected={isItemSelected} 
                      handleClick={handleClick}
                      labelId={labelId}
                    />
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={schedData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}
