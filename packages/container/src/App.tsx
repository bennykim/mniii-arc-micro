import { mount as mountApp1 } from "app1";
import { mount as mountApp2 } from "app2";
import { useEffect, useRef } from "react";

function App() {
  const app1Ref = useRef<HTMLDivElement>(null);
  const app2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (app1Ref.current) {
      mountApp1(app1Ref.current);
    }
    if (app2Ref.current) {
      mountApp2(app2Ref.current);
    }
  }, []);

  return (
    <div>
      <div ref={app1Ref}></div>
      <div ref={app2Ref}></div>
    </div>
  );
}

export default App;
