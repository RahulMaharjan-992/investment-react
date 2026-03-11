import { useState } from "react";

export default function Time({value, setValue}) {
  return (
    <div id="user-input input">
      <p>
        Time:
        <input
          type="number"
          onChange={(event) => setValue(+event.target.value)}
        />
      </p>
    </div>
  );
}
