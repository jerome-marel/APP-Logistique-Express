import express from "express";
import bodyParser from "body-parser";
import warehouseRoutes from "./routes/warehouse";
import sequelize from "./src/config/database";

// import { BrandWarehouseAttributes, BrandWarehouseCreationAttributes } from "./types/brandWarehouse";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/warehouses", warehouseRoutes);

// Gestion des erreurs 404
app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

// Gestion globale des erreurs
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
  }
);

// Synchronisation des modèles avec la base de données

//Suppression de toutes les tables pour le développement
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Database & tables created!");

    // Démarrage du serveur
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error("Unable to connect to the database:", error);
  });

export default app;
