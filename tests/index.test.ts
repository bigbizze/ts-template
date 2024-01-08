import { describe, expect, test } from "@jest/globals";
import { main } from "../src";

describe("main entry", () => {
  test("hello world", async () => {
    expect(await main()).toBe("hello world");
  });
});
