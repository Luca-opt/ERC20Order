module.exports = (e) => {
  if (!e) return;
  if (typeof e === "string") {
    console.error(e);
    return;
  }
  if (e instanceof Error) {
    console.error(e.message);
    return;
  }
  try {
    console.error(JSON.stringify(e));
  } catch {
    console.error("Unknown error");
  }
};