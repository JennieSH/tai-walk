import { useState } from "react";
import ReactCalendar from "react-calendar";
import { StyledCalendar } from "./styles";
import { CalendarProps } from "./types";
import Icon from "@/components/Icon";
import { formatTime } from "@/utils/format";

const Calendar = ({ className }: CalendarProps) => {
  const [isCalendarShow, setCalendarShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const dateHandler = (value: Date) => {
    setDate(value);
    setCalendarShow(!isCalendarShow);
  };
  return (
    <StyledCalendar className={className}>
      <button className="calendar-input" onClick={() => setCalendarShow(!isCalendarShow)}>
        {formatTime(date)}
        <Icon name="calendar" width="20px" height="20px" />
      </button>

      {isCalendarShow && (
        <ReactCalendar locale="en" className="calendar" onChange={dateHandler} value={date} />
      )}
    </StyledCalendar>
  );
};

export default Calendar;
