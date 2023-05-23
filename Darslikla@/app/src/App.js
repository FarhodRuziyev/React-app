import "./App.css";
import { Switch } from "antd";

import { Button, Space } from "antd";

function App() {
  return (
    <div className="App">
      <h1>appjs</h1>

      <Button type="primary">Primary Button</Button>

      <Button shape="round">Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Switch defaultChecked />

      {/* <Routes>
        <Route path="/about" element={<About />} />

        <Route path="/users" element={<Users />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </div>
  );
}

export default App;
