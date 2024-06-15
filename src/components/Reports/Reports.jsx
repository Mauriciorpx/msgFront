import React, { useEffect, useState } from 'react';
import { getReports } from '../../api/api';

const Reports = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchReports = async () => {
            const data = await getReports();
            setReports(data);
        };
        fetchReports();
    }, []);

    return (
        <div>
            <h2>Reports</h2>
            <ul>
                {reports.map(report => (
                    <li key={report.Id}>{report.Descripcion}</li>
                ))}
            </ul>
        </div>
    );
};

export default Reports;
