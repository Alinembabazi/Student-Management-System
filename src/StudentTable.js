"use client";

import { useEffect, useState } from "react";
export default function StudentTable() {
// console.log(useState(1))
const [students,setStudents]= useState([]);
useEffect(() => {
fetch('http://localhost:8000/students').then((res)=> res.json())
.then((data) => {setStudents(data);
console.log(data);
})
.catch((err) => {
console.log(err.message);
});

}, []); 
return (
<div className="min-h-screen bg-slate-100 px-4 py-10">
    <div className="mx-auto max-w-4xl rounded-xl border border-slate-200 bg-white p-6 shadow-md">
    <h2 className="mb-6 text-center text-2xl font-bold text-purple-800">
        Student Records
    </h2>

    <div className="mb-4">
        <a
        href="#"
        className="inline-block rounded-md bg-purple-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-purple-800"
        >
        Add new Student
        </a>
        {/* <Link class="btn btn-add"> add new student</Link> */}
    </div>

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
            <tr className="border-t border-slate-200 bg-white">
            <td className="px-4 py-3 text-slate-700">1</td>
            <td className="px-4 py-3 text-slate-700">Aline</td>
            <td className="px-4 py-3 text-slate-700">Nyamirambo</td>
            <td className="px-4 py-3 text-slate-700">0780304991</td>
            <td className="px-4 py-3">
                <div className="flex gap-2">
                <a
                    href="#"
                    className="rounded bg-cyan-500 px-3 py-1 text-xs font-semibold text-white hover:bg-cyan-600"
                >
                    View
                </a>
                <a
                    href="#"
                    className="rounded bg-purple-600 px-3 py-1 text-xs font-semibold text-white hover:bg-purple-700"
                >
                    Edit
                </a>
                <a
                    href="#"
                    className="rounded bg-rose-500 px-3 py-1 text-xs font-semibold text-white hover:bg-rose-600"
                >
                    Delete
                </a>
                </div>
            </td>
            </tr>
        </tbody>
        <tbody>
            <tr className="border-t border-slate-200 bg-white">
            <td className="px-4 py-3 text-slate-700">2</td>
            <td className="px-4 py-3 text-slate-700">Mugisha</td>
            <td className="px-4 py-3 text-slate-700">Musanze</td>
            <td className="px-4 py-3 text-slate-700">078477795</td>
            <td className="px-4 py-3">
                <div className="flex gap-2">
                <a
                    href="#"
                    className="rounded bg-cyan-500 px-3 py-1 text-xs font-semibold text-white hover:bg-cyan-600"
                >
                    View
                </a>
                <a
                    href="#"
                    className="rounded bg-purple-600 px-3 py-1 text-xs font-semibold text-white hover:bg-purple-700"
                >
                    Edit
                </a>
                <a
                    href="#"
                    className="rounded bg-rose-500 px-3 py-1 text-xs font-semibold text-white hover:bg-rose-600"
                >
                    Delete
                </a>
                </div>
            </td>
            </tr>
        </tbody>

        <tbody>
            {students.map((item) => (
              <tr key={item.id} className="border-t border-slate-200 bg-white">
                <td className="px-4 py-3 text-slate-700">{item.id}</td>
                <td className="px-4 py-3 text-slate-700">{item.name}</td>
                <td className="px-4 py-3 text-slate-700">{item.place}</td>
                <td className="px-4 py-3 text-slate-700">{item.phone}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <a href="#" className="rounded bg-cyan-500 px-3 py-1 text-xs font-semibold text-white hover:bg-cyan-600">View</a>
                    <a href="#" className="rounded bg-purple-600 px-3 py-1 text-xs font-semibold text-white hover:bg-purple-700">Edit</a>
                    <a href="#" className="rounded bg-rose-500 px-3 py-1 text-xs font-semibold text-white hover:bg-rose-600">Delete</a>
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
