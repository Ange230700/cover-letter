// source\javascript\events\listeners.js

import { handleCoverLetterContentLoading } from "./handlers.js";

function waitForCoverLetterContentLoading() {
  document.addEventListener(
    "DOMContentLoaded",
    handleCoverLetterContentLoading,
  );
}

export { waitForCoverLetterContentLoading };
