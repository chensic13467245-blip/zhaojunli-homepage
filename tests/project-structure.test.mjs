import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("contains every public site route", async () => {
  const routeFiles = [
    "app/page.tsx",
    "app/(site)/about/page.tsx",
    "app/(site)/research/page.tsx",
    "app/(site)/projects/page.tsx",
    "app/(site)/publications/page.tsx",
    "app/(site)/awards/page.tsx",
    "app/(site)/team/page.tsx",
    "app/(site)/news/page.tsx",
    "app/(site)/contact/page.tsx",
  ];

  await Promise.all(routeFiles.map((file) => access(new URL(file, root))));
});

test("uses the standard Next.js deployment scripts", async () => {
  const packageJson = JSON.parse(await readFile(new URL("package.json", root), "utf8"));
  assert.equal(packageJson.scripts.dev, "next dev");
  assert.equal(packageJson.scripts.build, "next build");
  assert.equal(packageJson.scripts.start, "next start");
  assert.equal(packageJson.dependencies.next, "16.2.6");
});

