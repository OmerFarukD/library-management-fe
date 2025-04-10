import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function AuthorsPage(props) {
    const  [authors,setAuthors] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5078/api/Authors/getall")
            .then(data=> setAuthors(data.data))
        console.log(authors)
    },[])
    return (
        <Box>
            <Typography sx={{marginY:2}}  variant={"h5"} color={"textSecondary"}>Yazarlar Listesi</Typography>
            <TableContainer component={Paper}>

                <Table sx={{ minWidth: 650 }} aria-label="simple table">



                    <TableHead>
                        <TableRow>

                            <TableCell align="right">Adı</TableCell>
                            <TableCell align="right">Soyadı</TableCell>
                            <TableCell align="right">Doğduğu Yıl</TableCell>
                            <TableCell align="right">Doğduğu Gün</TableCell>
                            <TableCell align="right">Doğduğu Ay</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>


                        {
                            authors.map(author=>(

                                <TableRow key={author.id}>
                                    <TableCell align="right">{author.firstName}</TableCell>
                                    <TableCell align="right">{author.surName}</TableCell>
                                    <TableCell align="right">{author.birthYear}</TableCell>
                                    <TableCell align="right">{author.birthDay}</TableCell>
                                    <TableCell align="right">{author.birthMonth}</TableCell>


                                </TableRow>

                            ))
                        }

                    </TableBody>
                </Table>
            </TableContainer>
        </Box>


    );
}

export default AuthorsPage;
