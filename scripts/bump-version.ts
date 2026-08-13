/// <reference types="node" />
import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PACKAGE_FILE = path.join(ROOT, "package.json");
const PACKAGE_LOCK_FILE = path.join(ROOT, "package-lock.json");
const BUN_LOCK_FILE = path.join(ROOT, "bun.lock");
const SEMVER_RE = /^(\d+)\.(\d+)\.(\d+)$/;

type BumpType = "major" | "minor" | "patch";

function readVersion(filePath: string): string {
  const content = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const version = content.version as string | undefined;

  if (!version || !SEMVER_RE.test(version)) {
    throw new Error(`Could not find a semantic version in '${path.basename(filePath)}'.`);
  }

  return version;
}

function bump(version: string, type: BumpType): string {
  const [, major, minor, patch] = SEMVER_RE.exec(version)!.map(Number);

  switch (type) {
    case "major": return `${major + 1}.0.0`;
    case "minor": return `${major}.${minor + 1}.0`;
    case "patch": return `${major}.${minor}.${patch + 1}`;
  }
}

function replaceVersion(filePath: string, oldVersion: string, newVersion: string): void {
  const updated = fs.readFileSync(filePath, "utf8").replace(
    `"version": "${oldVersion}"`,
    `"version": "${newVersion}"`,
  );

  fs.writeFileSync(filePath, updated, "utf8");
}

function run(command: string, args: string[]): void {
  execFileSync(command, args, {
    cwd: ROOT,
    stdio: "inherit",
  });
}

const bumpType = process.argv[2] as BumpType | undefined;

if (!bumpType || !["major", "minor", "patch"].includes(bumpType)) {
  console.error("Usage: bun run bump {major|minor|patch}");
  process.exit(1);
}

const currentVersion = readVersion(PACKAGE_FILE);

if (fs.existsSync(PACKAGE_LOCK_FILE)) {
  const lockVersion = readVersion(PACKAGE_LOCK_FILE);

  if (currentVersion !== lockVersion) {
    console.error(
      `Version mismatch: '${path.basename(PACKAGE_FILE)}' has ${currentVersion}, '${path.basename(PACKAGE_LOCK_FILE)}' has ${lockVersion}.`,
    );
    process.exit(1);
  }
}

const newVersion = bump(currentVersion, bumpType);
replaceVersion(PACKAGE_FILE, currentVersion, newVersion);

console.log(`Bumped version: ${currentVersion} → ${newVersion}`);
console.log("Syncing lock files...");

run("bun", ["install", "--ignore-scripts"]);
run("npm", ["install", "--package-lock-only", "--ignore-scripts"]);

if (!fs.existsSync(BUN_LOCK_FILE)) {
  console.warn("bun did not create bun.lock; check the installed Bun version if this is unexpected.");
}

console.log("Done.");
