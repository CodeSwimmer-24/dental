import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format, isSameDay, setHours, setMinutes } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";
import "./Scheduler.css";

const Scheduler = () => {
  // State to hold selected date from calendar
  const [selectedDate, setSelectedDate] = useState(null);

  // State to hold selected time
  const [selectedTime, setSelectedTime] = useState(null);

  // Array to store confirmed date-time appointments
  const [appointments, setAppointments] = useState([]);

  // Confirm button handler – adds the selected date & time to appointments
  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      // Create new Date object from selectedDate
      const fullDateTime = new Date(selectedDate);

      // Set hours and minutes from selectedTime
      fullDateTime.setHours(selectedTime.getHours());
      fullDateTime.setMinutes(selectedTime.getMinutes());
      fullDateTime.setSeconds(0);
      fullDateTime.setMilliseconds(0);

      // Add the new full date-time to the appointments array
      setAppointments((prev) => [...prev, fullDateTime]);

      // Reset selected date and time after confirming
      setSelectedDate(null);
      setSelectedTime(null);
    }
  };

  // This function is used to add a red class to the date if it's booked
  const getDayClassName = (date) => {
    return appointments.some((appt) => isSameDay(appt, date))
      ? "red-highlight" // add this class if the date is already booked
      : "";
  };

  // Check if a particular time on selectedDate is already booked
  const isTimeBooked = (time) => {
    if (!selectedDate) return false;

    return appointments.some(
      (appt) =>
        isSameDay(appt, selectedDate) &&
        appt.getHours() === time.getHours() &&
        appt.getMinutes() === time.getMinutes()
    );
  };

  return (
    <div className="scheduler-container">
      <h2 className="title">📅 Schedule Appointment</h2>

      <div className="datepicker-card">
        {/* ---------- Date Picker ---------- */}
        <label>Select Date:</label>
        <DatePicker
          selected={selectedDate} // currently selected date
          onChange={(date) => {
            setSelectedDate(date); // update selected date
            setSelectedTime(null); // reset time if date changes
          }}
          dateFormat="PPP" // eg: Apr 17, 2025
          placeholderText="Choose a date"
          className="custom-datepicker-input"
          dayClassName={getDayClassName} // used to highlight red dates
          minDate={new Date()} // disable past dates
          inline // show calendar inline
        />

        {/* ---------- Time Picker ---------- */}
        <label>Select Time:</label>
        <DatePicker
          selected={selectedTime} // currently selected time
          onChange={(time) => setSelectedTime(time)} // update selected time
          showTimeSelect // show only time picker
          showTimeSelectOnly
          timeIntervals={30} // intervals like 8:00, 8:30, etc.
          timeCaption="Time"
          dateFormat="h:mm aa" // eg: 08:30 AM
          placeholderText="Choose a time"
          className="custom-datepicker-input"
          minTime={setHours(setMinutes(new Date(), 0), 8)} // 8:00 AM
          maxTime={setHours(setMinutes(new Date(), 0), 20)} // 8:00 PM
          timeClassName={
            (time) => (isTimeBooked(time) ? "red-time-slot" : undefined) // make booked time red
          }
        />

        {/* ---------- Confirm Button ---------- */}
        <button
          className="confirm-btn"
          onClick={handleConfirm}
          disabled={!selectedDate || !selectedTime} // disable if no date/time
        >
          Confirm
        </button>
      </div>

      {/* ---------- Display Booked Appointments List ---------- */}
      {appointments.length > 0 && (
        <div className="highlight-box">
          <h4>Confirmed Appointments:</h4>
          <ul>
            {appointments.map((appt, idx) => (
              <li key={idx}>{format(appt, "PPpp")}</li> // nicely formatted datetime
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Scheduler;
