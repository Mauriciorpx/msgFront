import React, { useState, useEffect } from 'react';
import { createMessenger, updateMessenger } from '../../api/api';

const MessengerForm = ({ messenger, onSave }) => {
    const [formData, setFormData] = useState({
        Nombre: '',
        Direccion: '',
        Email: '',
        Telefono: ''
    });

    useEffect(() => {
        if (messenger) {
            setFormData(messenger);
        }
    }, [messenger]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (messenger) {
            await updateMessenger(messenger.Identificacion, formData);
        } else {
            await createMessenger(formData);
        }
        onSave();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="Nombre" value={formData.Nombre} onChange={handleChange} placeholder="Nombre" required />
            <input type="text" name="Direccion" value={formData.Direccion} onChange={handleChange} placeholder="Direccion" required />
            <input type="email" name="Email" value={formData.Email} onChange={handleChange} placeholder="Email" required />
            <input type="tel" name="Telefono" value={formData.Telefono} onChange={handleChange} placeholder="Telefono" required />
            <button type="submit">Save</button>
        </form>
    );
};

export default MessengerForm;
