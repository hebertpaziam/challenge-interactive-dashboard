"use client";
import { useEffect, useState } from 'react';

import { SelectField } from './SelectField';

export type FiltersProps = {
  onChange: (e: any) => void;
};

export const Filters = ({ onChange }: FiltersProps) => {
  const [sumTerm, setSumTerm] = useState<string | undefined>();
  const [viewTerm, setViewTerm] = useState<string | undefined>();
  const [detailTerm, setDetailTerm] = useState<string | undefined>();

  useEffect(() => {
    onChange({ sumTerm, viewTerm, detailTerm });

    console.log({ sumTerm, viewTerm, detailTerm });
  }, [sumTerm, viewTerm, detailTerm]);

  return (
    <form className="flex gap-3">
      <SelectField
        label="Soma"
        value={sumTerm}
        onChange={setSumTerm}
        options={[
          { value: "sum", label: "Soma" },
          { value: "average", label: "Media" },
          { value: "max", label: "Max" },
          { value: "min", label: "Min" },
        ]}
      />
      <SelectField
        label="Visualizar por"
        value={viewTerm}
        onChange={setViewTerm}
        options={[
          { value: "sum", label: "Soma" },
          { value: "average", label: "Media" },
          { value: "max", label: "Max" },
          { value: "min", label: "Min" },
        ]}
      />
      <SelectField
        label="Detalhar por"
        value={detailTerm}
        onChange={setDetailTerm}
        options={[
          { value: "sum", label: "Soma" },
          { value: "average", label: "Media" },
          { value: "max", label: "Max" },
          { value: "min", label: "Min" },
        ]}
      />
    </form>
  );
};
