// import React, { forwardRef } from 'react'

import { forwardRef } from "react";

function Child(props, ref) {
  return <input type="text" {...props} ref={ref} />;
}

const ForwadedFun = forwardRef(Child);
export default ForwadedFun;
