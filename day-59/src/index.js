import { PORT } from "./config/config.js";
import { app } from "./server/server.js";

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});