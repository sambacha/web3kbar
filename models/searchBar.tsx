import React from "react";
import { FocusRing, useFocusRing } from "@react-aria/focus";

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
