import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

function Logout() {
  
  localStorage.clear();
  window.location.reload();
  window.location.href = "/login";

  return (
    <div>

    </div>
  );
}

export default Logout;
