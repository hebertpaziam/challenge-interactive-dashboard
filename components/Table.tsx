import { ReactNode } from 'react';

export type TableProps = { children?: ReactNode };
export type TableRowProps = { children?: ReactNode };
export type TableDataProps = {
  children?: ReactNode;
  colspan?: number;
  featured?: boolean;
};

const Row = ({ children }: TableRowProps) => (
  <tr className="hover:bg-indigo-100">{children}</tr>
);
const HeadData = ({ children, colspan, featured }: TableDataProps) => (
  <th
    colSpan={colspan}
    className={`py-2 px-4 border-b-2 border-indigo-300 text-left leading-tight font-bold rounded-lg ${featured ? "border-r-2" : ""}`}
  >
    {children}
  </th>
);
const BodyData = ({ children, colspan, featured }: TableDataProps) => (
  <td colSpan={colspan} className={`py-2 px-4 border-b border-indigo-300 ${featured ? "border-r-2" : ""}`}>
    {children}
  </td>
);

const FootData = ({ children, colspan, featured }: TableDataProps) => (
  <td
    colSpan={colspan}
    className={`py-2 px-4 border-t-2 border-indigo-300 font-bold ${featured ? "border-r-2" : ""}`}
  >
    {children}
  </td>
);

const Table = ({ children }: TableProps) => {
  return (
    <div className="min-w-full border-2 border-indigo-300 rounded-lg">
      <table className="min-w-full overflow-x-auto rounded-lg">
        {children}
      </table>
    </div>
  );
};

Table.Row = Row;
Table.HeadData = HeadData;
Table.BodyData = BodyData;
Table.FootData = FootData;

export { Table };
