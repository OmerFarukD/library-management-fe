import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function CategoriesPage() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5078/api/Categories/getall")
            .then(res => setCategories(res.data))
    },[])

    return (

        <Box>

            <Typography sx={{marginY:2}} variant="h5" color="textSecondary">Kategoriler Listesi</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">Kategori Adı</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>


                        {
                            categories.map(category=>(

                                <TableRow key={category.id}>
                                    <TableCell align="center">{category.id}</TableCell>
                                    <TableCell align="center">{category.name}</TableCell>
                                </TableRow>

                            ))
                        }

                    </TableBody>
                </Table>
            </TableContainer>
        </Box>


    );
}

export default CategoriesPage;
