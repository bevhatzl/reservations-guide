import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

function DatePickerInput() {
  const [guest_DOB, onChange] = useState(new Date());

  return (
    <div>
      <DatePicker
        onChange={onChange}
        value={guest_DOB}
        name="guest_DOB"
      />
    </div>
  );
}

export default DatePickerInput;

