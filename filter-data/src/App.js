import React from 'react';
import { useTable, useExpanded, useRowSelect } from 'react-table';
import {filterData2} from "./components/FilterableData";
import styled from 'styled-components';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from "react-icons/ai";

import "./App.css";

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 1rem;
  
  table {
    border-spacing: 0;
    border: 1px solid black;
    
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    
    th {
      text-align: start;
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }

    #index0 {
      th {
        :last-child {
          text-align: center;
          border-left: 1px solid black;
        }        
      }
    }

    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      // border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

const createData = (data) => {
  let dataArray = [];
  
  data.forEach(record => {
    dataArray.push(record)
  });

  return data;
}

function Table({ columns: userColumns, data, renderRowSubComponent }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
    selectedFlatRows,
    state: { expanded, selectedRowIds }
  } = useTable(
    {
      columns: userColumns,
      data
    },
    useExpanded, // Use the useExpanded plugin hook
  );

  return (
    <>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr id={`index`+index} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            const rowProps = row.getRowProps();
            return (
              // Use a React.Fragment here so the table markup is still valid
              <React.Fragment key={rowProps.key}>
                <tr>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
                {/*
                    If the row is in an expanded state, render a row with a
                    column that fills the entire length of the table.
                  */}
                {row.isExpanded ? (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      {/*
                          Inside it, call our renderRowSubComponent function. In reality,
                          you could pass whatever you want as props to
                          a component like this, including the entire
                          table instance. But for this example, we'll just
                          pass the row
                        */}
                      {renderRowSubComponent({ row })}
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            )
          })}
        </tbody>
    </table>
    <br />
    <pre>
      <code>{JSON.stringify({ expanded: expanded }, null, 2)}</code>
    </pre>
    </>
  )
}

function App() {
  const columns = React.useMemo(
    () => [
      {
        // Make an expander cell
        Header: () => null, // No header
        id: 'expander', // It needs an ID
        Cell: ({ row }) => (
          // Use Cell to render an expander for each row.
          // We can use the getToggleRowExpandedProps prop-getter
          // to build the expander.
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? <FaIcons.FaChevronUp /> : <FaIcons.FaChevronDown />}
          </span>
        ),
        // We can override the cell renderer with a SubCell to be used with an expanded row
        // SubCell: () => null // No expander on an expanded row
      },
      {
        Header: 'NAME',
        accessor: 'name',
      },
      {
        Header: 'TYPE',
        accessor: 'type.name',
      },
      {
        Header: 'COORDINATES',
        id: "poop",
        columns: [
          {
            Header: 'Latitude',
            accessor: 'coordinates.latitude',
          },
          {
            Header: 'Longitude',
            accessor: 'coordinates.longitude',
          },
        ]
      },
    ],
    []
  )

  const data = React.useMemo(() => createData(filterData2), []);

  // Create a function that will render our row sub components
  const renderRowSubComponent = React.useCallback(
    ({ row }) => (
      <Styles>
        <table>
          {/* {console.log("What is row? ", row.original.fields)} */}
          <thead>
            <tr>
              <th>NAME:</th>
              <th>VALUE:</th>
            </tr>
          </thead>
          <tbody>
            {row.original.fields.map((field, index) => (
              <tr key={index}>
                <td>{field.name}</td>
                <td>{field.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Styles>
    ),
    []
  )

  return (
    <div className="App">
      <h1>Hello world</h1>
      <Styles>
        <Table columns={columns} data={data} renderRowSubComponent={renderRowSubComponent}/>
      </Styles>
    </div>
  )
}

export default App;
