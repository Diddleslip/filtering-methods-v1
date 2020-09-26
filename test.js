              {/* INDIAN YOUTUBE GUY
              
              {headCells.map((head, index) => (
                <TableCell 
                  align={head === "Name" ? "left" : "right"} 
                  key={index}
                  sortDirection={orderBy === index ? order : false}  
                >
                  <TableSortLabel 
                    active={orderBy === index}
                    direction={orderBy === index ? order : "asc"}
                    onClick={() => {handleSortRequest(index)}}
                  >
                    {head}
                  </TableSortLabel>
                </TableCell>
              ))} */}

              {/* PERSONAL
              
              <TableCell>
                <TableSortLabel onClick={(e) => {console.log(e)}}>Name</TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel>Type</TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel>Latitude&nbsp;</TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel>Longitude&nbsp;</TableSortLabel>
              </TableCell>
              <TableCell colSpan="2" align="center">
                <TableSortLabel>Actions&nbsp;</TableSortLabel>
              </TableCell> */}

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
                    <TableCell>NAME</TableCell>
                    <TableCell>VALUE</TableCell>
                    <TableCell colSpan="3">ACTIONS</TableCell>
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


// className={classes.root}
// hover
// aria-checked={props.isItemSelected}
// tabIndex={-1}
// key={row.id}
// selected={props.isItemSelected}

orderBy === headCell.id ? order : false