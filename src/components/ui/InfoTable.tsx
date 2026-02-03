import { ReactNode } from 'react';

interface InfoTableRow {
  label: string;
  value: string | ReactNode;
}

interface InfoTableProps {
  rows: InfoTableRow[];
}

export default function InfoTable({ rows }: InfoTableProps) {
  return (
    <table className="w-full border-collapse border border-border-light">
      <tbody>
        {rows.map((row, i) => (
          <tr
            key={i}
            className={i % 2 === 0 ? 'bg-white' : 'bg-background-table-stripe'}
          >
            <td className="py-1 px-2 font-bold text-text-secondary text-xs align-top whitespace-nowrap border border-border-light">
              {row.label}:
            </td>
            <td className="py-1 px-2 text-text-primary text-xs border border-border-light">
              {row.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
