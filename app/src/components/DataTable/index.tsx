import React, { useState, useEffect } from 'react'
import { generateFakeData } from '../../mocks/handlers';
import { DataGrid, GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import { Container } from '@mui/material';
import SearchBar from '../SearchBar ';

interface User {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    dob: Date;
    updated_at: Date;
}

type UserKey = keyof User;


function DataTable() {
    const [fakeData, setFakeData] = useState<User[]>([]);
    const [filteredData, setFilteredData] = useState<User[]>([]);

    const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
        page: 0,
        pageSize: 5,
    });

    const [search, setSearch] = useState<{ field: UserKey; query: string }>({
        field: "id",
        query: ""
    });


    useEffect(() => {
        const data = generateFakeData(10);
        setFakeData(data);
    }, []);

    useEffect(() => {
        const newFilteredData = fakeData.filter((user) => {
            if (!search.field || !search.query) return true;

            return user[search.field]?.toString().toLowerCase().includes(search.query.toLowerCase());
        });

        setFilteredData(newFilteredData);

    }, [search, fakeData]);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'address', headerName: 'Address', width: 150 },
        { field: 'dob', headerName: 'Birth Date', width: 150 },
        { field: 'phone', headerName: 'Phone', width: 150 },
        { field: 'updated_at', headerName: 'Last Modified', width: 150 },
    ];

    return (
        <Container>
            <div style={{ height: 400, width: '100%', margin: '20px' }}>
                <h1>Data Management</h1>
                <div>
                    <SearchBar
                        columns={columns}
                        setSearch={setSearch}
                    />
                </div>
                <DataGrid
                    rows={search.field && search.query ? filteredData : fakeData}
                    columns={columns}
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    checkboxSelection
                />
            </div>
        </Container>
    )
}

export default DataTable