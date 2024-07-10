export type SelectFieldProps = {
  label: string;
  value: any;
  options: Record<string, any>[];
  onChange: (e: any) => void;
};

export const SelectField = ({ label, value, options, onChange }: SelectFieldProps) => {
  return (
    <div className="relative w-52">
      <label className="absolute -top-2 left-2 block px-1 rounded text-xs bg-white z-10" htmlFor={label}>
        {label}
      </label>
      <select
        id={label}
        onChange={(e) => onChange(e.target.value)}
        defaultValue={value}
        className="block w-full px-2 py-4 border  border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="" disabled hidden>
          Escolha uma opção
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
