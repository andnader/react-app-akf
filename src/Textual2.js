import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './App.css';

const columns = [
  { field: 'weight', headerName: 'Skill Weight', width: 110 },
  { field: 'name', headerName: 'Name', width: 160 },
  { field: 'title', headerName: 'Title', width: 200 },

];

const rows = [
  { weight: 4, name: 'Andrew Nader', title: 'Solutions Architect'},
  { weight: 5, name: 'Prasad Kodali', title: 'Novartis MMU Leader'},
  { weight: 3, name: 'David Fletcher', title: 'Mgr Solutions Architect'},
];

export default function Textual2() {
  return (
    <div className="app__textual">
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}
