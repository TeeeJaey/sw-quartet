import React from 'react';
import { useSelector } from 'react-redux';
import List from "./List";

export default function Admin() {
    const cards = useSelector(state => state.admin.cards)
    return (
        <List cards={cards} />
    )
}