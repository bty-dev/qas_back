import express from 'express';
import cors from "cors";
import projectsRoutes from "./routes/projects.routes.js";
import userRoutes from "./routes/user.routes.js";

const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(projectsRoutes);
app.use(userRoutes);


app.listen(PORT, () => {
    console.log(`Server started: ${PORT}`);
});