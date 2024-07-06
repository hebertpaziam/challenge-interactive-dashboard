'use client';
import { useEffect } from 'react';

import { fetchEmployees } from '@/api/employees.api';

export default function Home() {
  useEffect(() => {
    fetchEmployees()
      .then((employees) => {
        console.log(employees);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
