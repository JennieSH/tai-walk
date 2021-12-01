import styled from "@emotion/styled";
import "react-calendar/dist/Calendar.css";

export const StyledCalendar = styled.div`
  position: relative;
  width: 100%;

  .calendar-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding: 0 16px 0 30px;
    color: ${({ theme }) => theme.color.secondary};
    background-color: ${({ theme }) => theme.color.white};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    cursor: pointer;
  }

  // override react-calendar css
  .calendar {
    position: absolute;
    z-index: 3;
    top: 58px;
    left: 0;
    width: 100%;
    min-width: 283px;
    border-color: ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.borderRadius.default};

    abbr[title] {
      color: ${({ theme }) => theme.color["gary-300"]};
      text-decoration: none;
    }

    .react-calendar__tile--active,
    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
      background: ${({ theme }) => theme.color.primary};
    }

    .react-calendar__tile--now {
      background: ${({ theme }) => theme.color["green-100"]};
    }
  }
`;
