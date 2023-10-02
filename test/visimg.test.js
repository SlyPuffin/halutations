import { myFunc } from "../src/visimg";

describe("My Stack", () => {
  it("is created empty", () => {
    const stack = myFunc();
    expect(stack).toBe("Hello, World");
  });
  it.todo("can push to the top");
  it.todo("can pop off");
});
