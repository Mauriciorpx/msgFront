import React, { useState, useEffect } from 'react';
import { getClients, deleteClient } from '../../api/api';
import ClientForm from './ClientForm';

const Clients = () => {
    const [clients, setClients] = useState([]);
    const [editingClient, setEditingClient] = useState(null);

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = async () => {
        const data = await getClients();
        setClients(data);
    };

    const handleEdit = (client) => {
        setEditingClient(client);
    };

    const handleDelete = async (id) => {
        await deleteClient(id);
        fetchClients();
    };

    const handleSave = () => {
        setEditingClient(null);
        fetchClients();
    };

    return (
        <div>
            <h2>Clients</h2>
            <ClientForm client={editingClient} onSave={handleSave} />
            <ul>
                {clients.map(client => (
                    <li key={client.Identificacion}>
                        {client.Nombre} - {client.Ciudad}
                        <button onClick={() => handleEdit(client)}>Edit</button>
                        <button onClick={() => handleDelete(client.Identificacion)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Clients;


