import {clsxm} from "@ssd/utils";

interface Props {
  primary?: boolean;
  size?: 'small' | 'large';
  label?: string;
}

export const Button = ({
  primary = false,
  label = 'Boop',
  size = 'small',
}: Props) => {
  return (
    <button
      className={clsxm("text-white py-2 px-4 bg-green-500 text-sm", {
        "bg-red-500": primary,
        "text-lg": size === 'large',
      })}
    >
      {label}
    </button>
  );
};