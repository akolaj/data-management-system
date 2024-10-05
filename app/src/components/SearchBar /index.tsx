import { useState } from "react";
import { GridColDef } from '@mui/x-data-grid';
import { TextField, IconButton, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type UserKey = keyof User;
interface User {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    dob: Date;
    updated_at: Date;
}

interface SearchFunction {
    field: UserKey;
    query: string; 
}

interface SearchBarProps {
    columns: GridColDef[];
    setSearch: {
        (params: SearchFunction): void; 
    };
}

function SearchBar({ columns, setSearch }: SearchBarProps) {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedField, setSelectedField] = useState<UserKey>("id");

    const handleFieldChange = (event: SelectChangeEvent<string>) => {
        setSelectedField(event.target.value as UserKey);
    };

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch({ field: selectedField, query: searchQuery });
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormControl variant="outlined" size="small" style={{ marginInline: '10px', width: "200px" }}>
                    <InputLabel id="field-select-label">Select Field</InputLabel>
                    <Select
                        labelId="field-select-label"
                        id="field-select"
                        value={selectedField}
                        label="Field"
                        onChange={handleFieldChange}
                    >
                        {columns.map((data: any) => (
                            <MenuItem key={data.field} value={data.field}>
                                {data.headerName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    id="search-bar"
                    className="text"
                    onChange={handleSearchInput}
                    label="Enter a field name"
                    variant="outlined"
                    placeholder="Search..."
                    size="small"
                />
                <IconButton type="submit" aria-label="search">
                    <SearchIcon style={{ fill: "blue" }} />
                </IconButton>
            </form>
        </div>
    );
}

export default SearchBar;
