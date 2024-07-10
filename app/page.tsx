'use client';

import React, { useState } from 'react';

import { Filters } from '@/components/Filters';
import { Table } from '@/components/Table';

export default function Home() {
  const [filters, setFilters] = useState({});
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-10">
      <Filters onChange={(data) => setFilters(data)} />

      <Table>
        <thead>
          <tr>
            <Table.HeadData featured>Ano</Table.HeadData>
            <Table.HeadData>Sobrenome</Table.HeadData>
            <Table.HeadData>Idade</Table.HeadData>
          </tr>
        </thead>
        <tbody>
          <Table.Row>
            <Table.BodyData featured>Felix</Table.BodyData>
            <Table.BodyData>Torres</Table.BodyData>
            <Table.BodyData>18</Table.BodyData>
          </Table.Row>
          <Table.Row>
            <Table.BodyData featured>Felix</Table.BodyData>
            <Table.BodyData>Torres</Table.BodyData>
            <Table.BodyData>18</Table.BodyData>
          </Table.Row>
          <Table.Row>
            <Table.BodyData featured>Felix</Table.BodyData>
            <Table.BodyData>Torres</Table.BodyData>
            <Table.BodyData>18</Table.BodyData>
          </Table.Row>
          <Table.Row>
            <Table.BodyData featured>Felix</Table.BodyData>
            <Table.BodyData>Torres</Table.BodyData>
            <Table.BodyData>18</Table.BodyData>
          </Table.Row>
        </tbody>
        <tfoot>
          <tr>
            <Table.FootData colspan={3}>Total: 4</Table.FootData>
          </tr>
        </tfoot>
      </Table>
    </main>
  );
}
