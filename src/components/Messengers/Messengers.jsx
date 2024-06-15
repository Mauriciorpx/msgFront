import React, { useState, useEffect } from 'react';
import { getMessengers, deleteMessenger } from '../../api/api';
import MessengerForm from './MessengerForm';

const Messengers = () => {
    const [messengers, setMessengers] = useState([]);
    const [editingMessenger, setEditingMessenger] = useState(null);

    useEffect(() => {
        fetchMessengers();
    }, []);

    const fetchMessengers = async () => {
        const data = await getMessengers();
        setMessengers(data);
    };

    const handleEdit = (messenger) => {
        setEditingMessenger(messenger);
    };

    const handleDelete = async (id) => {
        await deleteMessenger(id);
        fetchMessengers();
    };

    const handleSave = () => {
        setEditingMessenger(null);
        fetchMessengers();
    };

    return (
        <div>
            <h2>Messengers</h2>
            <MessengerForm messenger={editingMessenger} onSave={handleSave} />
            <ul>
                {messengers.map(messenger => (
                    <li key={messenger.Identificacion}>
                        {messenger.Nombre} - {messenger.Email}
                        <button onClick={() => handleEdit(messenger)}>Edit</button>
                        <button onClick={() => handleDelete(messenger.Identificacion)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Messengers;

