import type { ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
}

export default function AuthInput({
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <div className="mb-5">
      <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
        {icon && <span className="mr-3 text-gray-500">{icon}</span>}
        <input
          type={type}
          className="bg-transparent outline-none w-full text-gray-700"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
