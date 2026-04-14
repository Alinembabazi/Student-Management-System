'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function EditStudent(){
  const router = useRouter();
  const params = useParams();
  const [student, setStudent] = useState({
    name: '',
    place: '',
    phone: ''
  });
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
        setError('Unable to fetch student');
        console.error(err);
        setLoading(false);
      });
  }, [params.id]);

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
      const response = await fetch(`http://localhost:8000/students/${params.id}`, {
        method: 'PUT',
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
      setError('Unable to update student. Make sure json-server is running on http://localhost:8000.');
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>Edit Student</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={student.name} onChange={handleChange} required />
        
        <label htmlFor="place">Place:</label>
        <input type="text" id="place" name="place" value={student.place} onChange={handleChange} required />
        
        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" name="phone" value={student.phone} onChange={handleChange} required />
        
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
} 