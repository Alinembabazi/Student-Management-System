'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateStudent() {
    const router = useRouter();
    const [student, setStudent] = useState({
        name: '',
        place: '',
        phone: ''
    });
    const [error, setError] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setStudent((current) => ({
            ...current,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:8000/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(student)
            });

            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            router.push('/');
        } catch (err) {
            setError('Unable to create student. Make sure json-server is running on http://localhost:8000.');
            console.error(err);
        }
    };

    return (
        <div className="container">
            <h2>Add New Student</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={student.name} onChange={handleChange} required />

                <label htmlFor="place">Place:</label>
                <input type="text" id="place" name="place" value={student.place} onChange={handleChange} required />

                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" name="phone" value={student.phone} onChange={handleChange} required />

                <button type="submit">Add Student</button>
            </form>
            {error ? <p>{error}</p> : null}
        </div>
    );
}
