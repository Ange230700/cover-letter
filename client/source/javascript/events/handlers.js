// client\source\javascript\events\handlers.js

import { generateCoverLetterContent } from "../components/functional.js";
import {
  getHtmlElement,
  setHtmlElementContent,
} from "../document/manipulation.js";
import coverLetterData from "../data/coverLetterData.js";

function handleCoverLetterContentLoading() {
  const coverLetterWrapper = getHtmlElement("#letter-wrapper");
  const content = generateCoverLetterContent(coverLetterData);
  setHtmlElementContent(coverLetterWrapper, content);
}

export { handleCoverLetterContentLoading };
