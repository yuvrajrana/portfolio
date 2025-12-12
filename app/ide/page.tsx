"use client";

import { useState, useRef } from "react";
import dynamic from "next/dynamic";

const BUTTON_STYLE = {
  padding: "6px 12px",
};
// Load Ace editor dynamically (SSR-safe)
const AceEditor = dynamic(
  async () => {
    const ace = await import("react-ace");
    await import("ace-builds/src-noconflict/mode-javascript");
    await import("ace-builds/src-noconflict/theme-monokai");
    return ace;
  },
  { ssr: false }
);

export default function IDEPage() {
  const defaultCode = `// Welcome to the Online JavaScript IDE!\n`;

  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState<string[]>([]);
  const originalConsole = useRef(console.log);

  const runCode = async () => {
    const logs: string[] = [];
    console.log = (...args: any[]) => {
      logs.push(args.map(String).join(" "));
    };

    try {
      const asyncWrapper = `(async () => { ${code} })()`;
      const result = await eval(asyncWrapper);
      if (result !== undefined) logs.push(String(result));
    } catch (err: any) {
      logs.push(`Error: ${err.message}`);
    }

    setOutput(logs);
    console.log = originalConsole.current;
  };

  const resetCode = () => setCode(defaultCode);
  const clearConsole = () => setOutput([]);

  return (
    <div style={{ display: "flex", height: "100vh", padding: 20, boxSizing: "border-box" }}>
      {/* Editor Panel */}
      <div style={{ flex: 1, marginRight: 10, display: "flex", flexDirection: "column" }}>
        <div style={{ marginBottom: 10 }}>
          <button onClick={runCode} style={{ marginRight: 10, ...BUTTON_STYLE }}>
            Run
          </button>
          <button onClick={resetCode} style={BUTTON_STYLE}>
            Reset
          </button>
        </div>
        <AceEditor
          mode="javascript"
          theme="monokai"
          value={code}
          onChange={setCode}
          name="JS_IDE"
          editorProps={{ $blockScrolling: true }}
          width="100%"
          height="100%"
          style={{ flex: 1 }}
        />
      </div>

      {/* Console Panel */}
      <div style={{ flex: 1, padding: 0, borderRadius: 4, display: "flex", flexDirection: "column" }}>
        <div style={{ marginBottom: 10 }}>
           <button onClick={resetCode} style={BUTTON_STYLE}>
            Clear Console
          </button>
        </div>
        <div style={{ background: "#1e1e1e", color: "#fff", whiteSpace: "pre-wrap", overflowY: "auto", flex: 1 }}>
          {output.length === 0 ? "" : output.join("\n")}
        </div>
      </div>
    </div>
  );
}
