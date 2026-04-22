"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function StudentTable() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/students")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        return res.json();
      })
      .then((data) => {
        setStudents(data);
      })
      .catch((err) => {
        setError("Unable to load students.");
        console.error(err);
      });
  }, []);

  const handleDelete = async (id) => {
    setError("");

    try {
      const response = await fetch(`/api/students/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setStudents((current) => current.filter((student) => student.id !== id));
    } catch (err) {
      setError("Unable to delete student.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-4xl rounded-xl border border-slate-200 bg-white p-6 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-purple-800">
          Student Records
        </h2>

        <div className="mb-4">
          <Link
            href="/student/create"
            className="inline-block rounded-md bg-purple-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-purple-800"
          >
            Add new Student
          </Link>
        </div>

        {error ? <p className="mb-4 text-sm text-rose-600">{error}</p> : null}

        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="bg-purple-700 text-white">
                <th className="px-4 py-3 font-semibold">ID</th>
                <th className="px-4 py-3 font-semibold">NAME</th>
                <th className="px-4 py-3 font-semibold">PLACE</th>
                <th className="px-4 py-3 font-semibold">PHONE</th>
                <th className="px-4 py-3 font-semibold">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {students.map((item) => (
                <tr key={item.id} className="border-t border-slate-200 bg-white">
                  <td className="px-4 py-3 text-slate-700">{item.id}</td>
                  <td className="px-4 py-3 text-slate-700">{item.name}</td>
                  <td className="px-4 py-3 text-slate-700">{item.place}</td>
                  <td className="px-4 py-3 text-slate-700">{item.phone}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <Link
                        href={`/student/${item.id}`}
                        className="rounded bg-cyan-500 px-3 py-1 text-xs font-semibold text-white hover:bg-cyan-600"
                      >
                        View
                      </Link>
                      <Link
                        href={`/student/edit/${item.id}`}
                        className="rounded bg-purple-600 px-3 py-1 text-xs font-semibold text-white hover:bg-purple-700"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
                        className="rounded bg-rose-500 px-3 py-1 text-xs font-semibold text-white hover:bg-rose-600"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
