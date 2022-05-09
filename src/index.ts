import promise_then_catch from "promise-then-catch/lib";

export const main = async () => {
  const hello = 0;
};

if (require.main === module) {
  promise_then_catch(main);
}
