import { useState } from "react";

export default function Interest({value, setValue}) {
  return (
    <div id="user-input input">
      <p>
        Interest:
        <input
          type="number"
          onChange={(event) => setValue(+event.target.value)}
        />
      </p>
    </div>
  );
}
