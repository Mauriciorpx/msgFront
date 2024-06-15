import React, { useState, useEffect } from 'react';
import { createOrder, updateOrder } from '../../api/api';

const OrderForm = ({ order, onSave }) => {
    const [formData, setFormData] = useState({
        Usuario_Login: '',
        Mensajero_Id: '',
        Fecha_Hora_Solicitud: '',
        Origen: '',
        Destino: '',
        Ciudad: '',
        Descripcion: '',
        Tipo_Transporte: 'moto',
        Numero_Paquetes: 1
    });

    useEffect(() => {
        if (order) {
            setFormData(order);
        }
    }, [order]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (order) {
                await updateOrder(order.Codigo, formData);
            } else {
                await createOrder(formData);
            }
            onSave();
            setFormData({
                Usuario_Login: '',
                Mensajero_Id: '',
                Fecha_Hora_Solicitud: '',
                Origen: '',
                Destino: '',
                Ciudad: '',
                Descripcion: '',
                Tipo_Transporte: 'moto',
                Numero_Paquetes: 1
            });
        } catch (error) {
            console.error('Error saving order:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="Usuario_Login" value={formData.Usuario_Login} onChange={handleChange} placeholder="Usuario Login" required />
            <input type="text" name="Mensajero_Id" value={formData.Mensajero_Id} onChange={handleChange} placeholder="Mensajero Id" required />
            <input type="datetime-local" name="Fecha_Hora_Solicitud" value={formData.Fecha_Hora_Solicitud} onChange={handleChange} placeholder="Fecha y Hora de Solicitud" required />
            <input type="text" name="Origen" value={formData.Origen} onChange={handleChange} placeholder="Origen" required />
            <input type="text" name="Destino" value={formData.Destino} onChange={handleChange} placeholder="Destino" required />
            <input type="text" name="Ciudad" value={formData.Ciudad} onChange={handleChange} placeholder="Ciudad" required />
            <textarea name="Descripcion" value={formData.Descripcion} onChange={handleChange} placeholder="Descripción" required />
            <select name="Tipo_Transporte" value={formData.Tipo_Transporte} onChange={handleChange}>
                <option value="moto">Moto</option>
                <option value="carro">Carro</option>
                <option value="camion">Camion</option>
            </select>
            <input type="number" name="Numero_Paquetes" value={formData.Numero_Paquetes} onChange={handleChange} placeholder="Número de Paquetes" required />
            <button type="submit">Save</button>
        </form>
    );
};

export default OrderForm;

