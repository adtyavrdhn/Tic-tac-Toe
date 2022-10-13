import { codeToTest } from "../utility/Code";
import { test, run } from "good-vibes";

test("My first test", (context) => {
  const expected = {
    name: { first: "Hello", last: "World" },
    age: 999,
  };
  context.log("Lets do this!");
  context.check(expected, codeToTest("Hello", "World", 999));
  context.done();
});

run(); // runs al
