import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Auth
export const login = async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
};

// Clients
export const getClients = async () => {
    const response = await api.get('/clients');
    return response.data;
};

export const createClient = async (client) => {
    const response = await api.post('/clients', client);
    return response.data;
};

export const updateClient = async (id, client) => {
    const response = await api.put(`/clients/${id}`, client);
    return response.data;
};

export const deleteClient = async (id) => {
    const response = await api.delete(`/clients/${id}`);
    return response.data;
};

// Messengers
export const getMessengers = async () => {
    const response = await api.get('/messengers');
    return response.data;
};

export const createMessenger = async (messenger) => {
    const response = await api.post('/messengers', messenger);
    return response.data;
};

export const updateMessenger = async (id, messenger) => {
    const response = await api.put(`/messengers/${id}`, messenger);
    return response.data;
};

export const deleteMessenger = async (id) => {
    const response = await api.delete(`/messengers/${id}`);
    return response.data;
};

// Orders
export const getOrders = async () => {
    const response = await api.get('/orders');
    return response.data;
};

export const createOrder = async (order) => {
    const response = await api.post('/orders', order);
    return response.data;
};

export const updateOrder = async (id, order) => {
    const response = await api.put(`/orders/${id}`, order);
    return response.data;
};

export const deleteOrder = async (id) => {
    const response = await api.delete(`/orders/${id}`);
    return response.data;
};

// Reports
export const getReports = async () => {
    const response = await api.get('/reports');
    return response.data;
};
