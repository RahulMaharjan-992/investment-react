import { useState } from "react";

export default function Income({ value, setValue }) {
  return (
    <div id="user-input input">
      <p>
        Income:
        <input
          type="number"
          onChange={(event) => setValue(+event.target.value)}
        />
      </p>
    </div>
  );
}
