import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

// Guards D0.2 (name), D0.3 (license) and D0.5 (ESM on Node 24+) until real tests exist.
test("package.json matches the D0.2, D0.3 and D0.5 decisions", () => {
  const pkg: unknown = JSON.parse(
    readFileSync(new URL("../package.json", import.meta.url), "utf8"),
  );

  expect(pkg).toMatchObject({
    name: "foureyes",
    license: "Apache-2.0",
    private: true,
    type: "module",
    engines: { node: ">=24" },
  });
});
