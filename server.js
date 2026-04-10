const express = require("express");
const colors = require("colors");
const env = require("dotenv");
const { db } = require("./database/config");
const routes = require("./routes/route");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const { sendReminderEmails } = require('./corporate/events/controller');

const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const swaggerDocument = JSON.parse(fs.readFileSync('./swagger.json', 'utf8'));

env.config();

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// ✅ Root route
app.get("/", (req, res) => {
  res.send("BuzzBreach Backend is running 🚀");
});

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use("/api/v1", routes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await db.get();
    console.log("Database connected".green);

    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`.yellow.bold);
      console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`.cyan.bold);

      // ✅ Run safely AFTER startup
      setTimeout(() => {
        sendReminderEmails();
      }, 10000);
    });

  } catch (err) {
    console.error("Startup failed:", err.message);
    process.exit(1);
  }
};

startServer();