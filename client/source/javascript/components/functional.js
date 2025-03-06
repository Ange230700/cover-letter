// client\source\javascript\components\functional.js

// Generate the header with sender and recipient info
function generateCoverLetterHeader(data) {
  return `
    <header class="cover-letter-header">
      <div class="header-top">
        <section class="sender-info">
          <p>${data.header.senderName}</p>
          <p>${data.header.senderAddress}</p>
          <p>${data.header.senderEmail}</p>
          <p>${data.header.senderPhone}</p>
        </section>
        <section class="date">
          <p>${data.header.date}</p>
        </section>
      </div>
      <section class="recipient-info">
        <p>${data.header.recipientCompany}</p>
        <p>${data.header.recipientName}</p>
        <p>${data.header.recipientAddress}</p>
      </section>
    </header>
  `;
}

// Generate the salutation section
function generateCoverLetterSalutation(data) {
  return `<section class="cover-letter-salutation"><p>${data.salutation}</p></section>`;
}

// Generate the body with introduction, main content, and conclusion
function generateCoverLetterBody(data) {
  return `
    <section class="cover-letter-body">
      <p>${data.body.introduction}</p>
      <p>${data.body.mainContent}</p>
      <p>${data.body.conclusion}</p>
    </section>
  `;
}

// Generate the closing/signature
function generateCoverLetterClosing(data) {
  return `
    <section class="cover-letter-closing">
      <p>${data.closing.regards}</p>
      <p>${data.closing.signature}</p>
    </section>
  `;
}

// Generate the complete cover letter content
function generateCoverLetterContent(data) {
  return `
    ${generateCoverLetterHeader(data)}
    <main>
      ${generateCoverLetterSalutation(data)}
      ${generateCoverLetterBody(data)}
      ${generateCoverLetterClosing(data)}
    </main>
  `;
}

export {
  generateCoverLetterHeader,
  generateCoverLetterSalutation,
  generateCoverLetterBody,
  generateCoverLetterClosing,
  generateCoverLetterContent,
};
