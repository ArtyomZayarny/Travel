import React from 'react'
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
const Header = () => {

    return (
        <TableHead className="table-head">
        <TableRow className="grid three">
          <TableCell>Reciver</TableCell>
          <TableCell >Object</TableCell>
          <TableCell >Text</TableCell>
        </TableRow>
      </TableHead>
    )
}
export default Header