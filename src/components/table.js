import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'


const Styles = styled.div`

  table {
    border-spacing: 0;
    border-radius: 4px;
    width: 100%;
    border: 1px solid #f2f2f2;
    tr {
        :hover {
          background: #1A61CB10;
      }
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th {
        text-align: left;
        padding: 1rem;
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #f2f2f2;
      font-size: 14px;

      :last-child {
        border-right: 0;
      }

      
    }
  }
`

function TableContainer({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    // Render the UI for your table
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export const Table = () => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Time Stamp',
                accessor: 'col2',
            },
            {
                Header: 'City',
                accessor: 'col3', // accessor is the "key" in the data
            },
            {
                Header: 'State',
                accessor: 'col4',
            },
            {
                Header: 'Long/Lat',
                accessor: 'col5', // accessor is the "key" in the data
            },
            {
                Header: 'Duration',
                accessor: 'col6',
            },
            {
                Header: 'Platform',
                accessor: 'col7',
            },
        ],
        []
    )

    const data = React.useMemo(
        () => [
            {
                col1: 1,
                col2: '10/4/2019 12:00:00AM',
                col3: 'Mabank',
                col4: 'Texas',
                col5: '42.213,-49.211',
                col6: '142s',
                col7: 'iOS',
            },
            {
                col1: 2,
                col2: '10/4/2019 12:00:00AM',
                col3: 'Mabank',
                col4: 'Texas',
                col5: '42.213,-49.211',
                col6: '142s',
                col7: 'iOS',
            },
            {
                col1: 3,
                col2: '10/4/2019 12:00:00AM',
                col3: 'Mabank',
                col4: 'Texas',
                col5: '42.213,-49.211',
                col6: '142s',
                col7: 'iOS',
            }, {
                col1: 4,
                col2: '10/4/2019 12:00:00AM',
                col3: 'Mabank',
                col4: 'Texas',
                col5: '42.213,-49.211',
                col6: '142s',
                col7: 'iOS',
            },
            {
                col1: 5,
                col2: '10/4/2019 12:00:00AM',
                col3: 'Mabank',
                col4: 'Texas',
                col5: '42.213,-49.211',
                col6: '142s',
                col7: 'iOS',
            },
            {
                col1: 6,
                col2: '10/4/2019 12:00:00AM',
                col3: 'Mabank',
                col4: 'Texas',
                col5: '42.213,-49.211',
                col6: '142s',
                col7: 'iOS',
            },
        ],
        []
    )

    return (
        <Styles>
            <TableContainer columns={columns} data={data} />
        </Styles>
    )
}

