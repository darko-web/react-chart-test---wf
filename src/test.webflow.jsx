import { component } from "@webflow/react";

export default component({
  name: "TestBox",
  label: "Test Box",
})(function TestBox() {
  return <div style={{ padding: "20px", background: "tomato", color: "white" }}>Hello from TestBox</div>;
});
