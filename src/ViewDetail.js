'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function ViewDetail(){
    const params = useParams();
    const [student, setStudent] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!params.id) return;
        
        fetch(`http://localhost:8000/students/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setStudent(data);
                setLoading(false);
            })
            .catch(err => {
                setError('Unable to fetch student details');
                console.error(err);
                setLoading(false);
            });
    }, [params.id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="error">{error}</p>;
    if (!student) return <p>Student not found</p>;

    return (
        <div className="container">
            <div className="student-detail">
                <p><strong>ID:</strong> {student.id}</p>
                <p><strong>Name:</strong> {student.name}</p>
                <p><strong>Place:</strong> {student.Place || student.place}</p>
                <p><strong>Phone:</strong> {student.phone}</p>
            </div>
        </div>
    );
}