import React from "react";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import TableHead from "@mui/material/TableHead";


const theme = createTheme({
    palette: {
        primary: {
            main: '#9e9e9e',
        },
        secondary: {
            main: '#11cb5f',
        },
    },
});

function Dati(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Grid mt={10}>
            <Box sx={{ flexShrink: 0, ml: 2.5 }}>
                <IconButton
                    onClick={handleFirstPageButtonClick}
                    disabled={page === 0}
                    aria-label="first page"
                >
                    {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
                </IconButton>
                <IconButton
                    onClick={handleBackButtonClick}
                    disabled={page === 0}
                    aria-label="previous page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </IconButton>
                <IconButton
                    onClick={handleNextButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="next page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </IconButton>
                <IconButton
                    onClick={handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="last page"
                >
                    {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
                </IconButton>
            </Box>
        </Grid>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, Daudzums, cena) {
    return { name, Daudzums, cena };
}

const rows = [
    createData('Svaigas zivis', 305, 3.7),
    createData('Fileja', 127, 4.2),
    createData('Mencu aknas', 67, 3.3),
    createData('Vistas cūkas ciskas', 27, 5.1),
    createData('Twix', 121, 1.21),
    createData('Mars', 232, 1.4),
    createData('Snickers', 97, 1.55),
    createData('Bounty', 131, 1.72),
    createData('Šokolādes batoniņi', 334, 0.89),
    createData('Šokolādes konfektes', 311, 7.2),
    createData('Karameles', 132, 5.51),
    createData('Sviests', 254, 2.20),
    createData('Holandiešu siers', 155, 3.39),
    createData('Gouda siers', 195, 5.76),
    createData('Desu siers', 266, 2.64),
    createData('Krējuma siers', 80, 2.80),
    createData('Rīsi', 237, 3.10),
    createData('Hercules', 229, 3.78),
    createData('Prosa', 208, 2.80),
    createData('Ananāsu konservi.', 308, 3.2),
    createData('Zaļie zirnīši', 350, 1.58),
    createData('Čipsi', 245, 4.78),
    createData('Dabiskās sulas', 74, 3.58),
    createData('Cola', 286, 1.78),
    createData('Sprite', 393, 1.45),
    createData('Fanta', 66, 1.39),
    createData('Āboli', 229, 2.21),
].sort((a, b) => (a.Daudzums < b.Daudzums ? -1 : 1));

export default function CustomPaginationActionsTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);
    return (
        <><Container maxWidth="xl" sx={{ display: "flex", height: "150px" }}>
            <Grid container xs={12} justifyContent="center" mt={10} fontSize="xxx-large">
                <div>
                    {dateState.toLocaleString('en-LV', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: false,
                    })}
                </div>
            </Grid>
        </Container><Container maxWidth="xl">
                <Grid mt={3}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Daudzums</TableCell>
                                <TableCell align="right">Cena</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                {(rowsPerPage > 0
                                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : rows
                                ).map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell style={{ width: 160 }} align="right">
                                            {row.Daudzums}
                                        </TableCell>
                                        <TableCell style={{ width: 160 }} align="right">
                                            {row.cena}
                                        </TableCell>
                                    </TableRow>
                                ))}

                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows }}>
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                        colSpan={3}
                                        count={rows.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        SelectProps={{
                                            inputProps: {
                                                'aria-label': 'rows per page',
                                            },
                                            native: true,
                                        }}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                        ActionsComponent={TablePaginationActions} />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                </Grid>
                <ThemeProvider theme={theme}>
                    <Grid container xs={12} justifyContent="space-between">
                        <Grid item xs={12} md={1} mt={3}>
                            <Button
                                variant="contained"
                                color='primary'
                                fullWidth
                            >Back
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={1} mt={3}>
                            <Button
                                variant="contained"
                                fullWidth
                                color="success"
                            >Add
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={1} mt={3}>
                            <Button
                                variant="contained"
                                color='secondary'
                                fullWidth
                            >Edit
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={1} mt={3}>
                            <Button
                                variant="contained"
                                color='error'
                                fullWidth
                            >Delete
                            </Button>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </Container></>
    );
}