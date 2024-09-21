import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    const [users, setUsers] = useState([]);

    // Fetch random user datas
    useEffect(() => {
        axios
            .get('https://randomuser.me/api/?results=20&nat=us')
            .then((response) => {
                setUsers(response.data.results);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    return (
        <div className="table-container">
            <h2 >Students Information</h2>
            <div style={{ textAlign: 'right', padding: 20 }}><Link to={`/`}>Logout</Link></div>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{`${user.name.first}, ${user.name.last}`}</td>
                            <td>{user.phone}</td>
                            <td>{`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;