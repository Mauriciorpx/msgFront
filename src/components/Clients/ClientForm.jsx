import React, { useState, useEffect } from 'react';
import { createClient, updateClient } from '../../api/api';

const ClientForm = ({ client, onSave }) => {
    const [formData, setFormData] = useState({
        Nombre: '',
        Direccion: '',
        Ciudad: '',
        Email: '',
        Telefono: ''
    });

    useEffect(() => {
        if (client) {
            setFormData(client);
        }
    }, [client]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (client) {
            await updateClient(client.Identificacion, formData);
        } else {
            await createClient(formData);
        }
        onSave();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="Nombre" value={formData.Nombre} onChange={handleChange} placeholder="Nombre" required />
            <input type="text" name="Direccion" value={formData.Direccion} onChange={handleChange} placeholder="Direccion" required />
            <input type="text" name="Ciudad" value={formData.Ciudad} onChange={handleChange} placeholder="Ciudad" required />
            <input type="email" name="Email" value={formData.Email} onChange={handleChange} placeholder="Email" required />
            <input type="tel" name="Telefono" value={formData.Telefono} onChange={handleChange} placeholder="Telefono" required />
            <button type="submit">Guardar</button>
        </form>
    );
};

export default ClientForm;
