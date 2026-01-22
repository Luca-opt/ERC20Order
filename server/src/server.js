const { app } = require("./app.js");
const { env } = require("./config");

const PORT = env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
