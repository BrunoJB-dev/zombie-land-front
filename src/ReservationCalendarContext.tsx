import type React from 'react';
import { createContext, useState, useContext} from 'react';

type ReservationCalendarContextType = {
  startDate: Date | null;
  setStartDate: (date: Date | null) => void;
  number: number;
  setNumber: (number: number) => void;
};

const ReservationCalendarContext = createContext<ReservationCalendarContextType | null>(null);

export const useReservationCalendar = () => useContext(ReservationCalendarContext);

export const ReservationCalendarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
    const [number, setNumber] = useState(1);  
  return (
        <ReservationCalendarContext.Provider value={{ startDate, setStartDate, number, setNumber }}>
            {children}
        </ReservationCalendarContext.Provider>
    );
};