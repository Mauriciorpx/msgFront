import React, { useState, useEffect } from 'react';
import { getOrders, deleteOrder } from '../../api/api';
import OrderForm from './OrderForm';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [editingOrder, setEditingOrder] = useState(null);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        const data = await getOrders();
        setOrders(data);
    };

    const handleEdit = (order) => {
        setEditingOrder(order);
    };

    const handleDelete = async (id) => {
        await deleteOrder(id);
        fetchOrders();
    };

    const handleSave = () => {
        setEditingOrder(null);
        fetchOrders();
    };

    return (
        <div>
            <h2>Orders</h2>
            <OrderForm order={editingOrder} onSave={handleSave} />
            <ul>
                {orders.map(order => (
                    <li key={order.Codigo}>
                        {order.Descripcion} - {order.Estado}
                        <button onClick={() => handleEdit(order)}>Edit</button>
                        <button onClick={() => handleDelete(order.Codigo)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Orders;

