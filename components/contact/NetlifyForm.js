import React from 'react';

function NetlifyForm({ name, children, successRedirect, ...props }) {
  return (
    <form
      name={name}
      method="POST"
      data-netlify="true"
      className="bg-background p-4 md:p-8 rounded shadow-md max-w-2xl"
      action={successRedirect || null}
      {...props}
    >
      <input type="hidden" name="form-name" value={name} />
      {children}
    </form>
  );
}

export default NetlifyForm;
