import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import AuthorsPage from "./pages/authors/AuthorsPage.jsx";
import Navbar from "./components/Navbar.jsx";
import CategoriesPage from "./pages/category/CategoriesPage.jsx";
import {Routes,Route} from "react-router";
import BooksPage from "./pages/book/BooksPage.jsx";

function App() {




  return (
    <Container>
        <Navbar/>


        <Routes>

            <Route path={"/books"}  element={<BooksPage/>}/>
            <Route path={"/"}  element={<BooksPage/>}/>
            <Route path={"/categories"}  element={<CategoriesPage/>}/>
            <Route path={"/authors"}  element={<AuthorsPage/>}/>
        </Routes>
    </Container>
  )
}

export default App
