interface CalendarProps {
  className: string;
  date: Date | null;
  changeHandler: (value: Date) => void;
}

export type { CalendarProps };
