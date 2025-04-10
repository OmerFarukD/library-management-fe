import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

function App() {
  const  [authors,setAuthors] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5078/api/Authors/getall")
            .then(data=> setAuthors(data.data))
        console.log(authors)
    },[])




  return (
    <>
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
    </>
  )
}

export default App
