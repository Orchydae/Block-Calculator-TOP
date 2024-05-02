const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const calculatorRouter = require('./Calculator');


app.use("/calculator", calculatorRouter);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});