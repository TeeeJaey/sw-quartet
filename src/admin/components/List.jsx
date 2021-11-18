import React, {useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Person from '../../comparable/Person';
import { useDispatch } from 'react-redux';

export default function List({cards}) {
    const dispatch = useDispatch();
    
    const deleteCard = (index) => {
        const action = {type:"delete_card",payload:{index:index}};
        dispatch(action);
    };

    const deleteAllCards = () => {
        const action = {type:"delete_all"};
        dispatch(action);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        {Object.keys(Person.properties).map((property) => (
                            <TableCell>
                                {Person.properties[property].label}
                                {Person.properties[property].unit !== '' &&
                                ' (' + Person.properties[property].unit + ')'}
                            </TableCell>
                        ))}
                        <TableCell>
                            <button className="btn btn-danger" onClick={() => deleteAllCards()}>Delete All</button>
                        </TableCell>
                    </TableRow>
                    {cards.map((card,index) => (<TableRow>
                        <TableCell>{card.name}</TableCell>
                        {Object.keys(Person.properties).map((property) => (
                            <TableCell>
                                {card[property]}
                            </TableCell>
                        ))}
                        <TableCell>
                            <button className="btn btn-danger" onClick={() => deleteCard(index)}>Delete</button>
                        </TableCell>
                    </TableRow>))}
                </TableHead>
                <TableBody>
                </TableBody>
            </Table>
        </TableContainer>
    )
}