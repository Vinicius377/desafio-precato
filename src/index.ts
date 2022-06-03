import express from "express";

const PORT = process.env.PORT || 2222;
const app = express();

app.listen(PORT, () => console.log(`server is runnig at port ${PORT}`));
