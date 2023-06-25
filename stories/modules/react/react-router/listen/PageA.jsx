import { useCallback } from "react";
import { useEffect, useState } from "react";
import { Link, useBeforeUnload } from "react-router-dom";

function PageA() {

  const [state, setState] = useState(null);

  useBeforeUnload(useCallback(() => {
    localStorage.stuff = state;
    console.log("页面A离开了");
  }), [state]);

  useEffect(() => {
    if (state === null && localStorage.stuff != null) {
      setState(localStorage.stuff);
    }
  }, [state]);

  return (
    <div>
      <Link to="/">返回</Link>
      <div>PageA 页面</div>
    </div>
  )
}

export default PageA;