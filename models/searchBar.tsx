import React from "react";
import { FocusRing } from "react-focus-rings";
import "focus-rings/src/styles.css";

function SearchBar() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <FocusRing focusTarget={inputRef} ringTarget={containerRef}>
      <div className={styles.container} ref={containerRef}>
        <input type="text" ref={inputRef} placeholder="Search" />
        <div className={styles.icon}>
          <ClearIcon />
        </div>
      </div>
    </FocusRing>
  );
}
