

export const main = async () => {
  console.log("hello world");
  return "hello world"
};

if (require.main === module) {
  main().catch(console.error);
}
