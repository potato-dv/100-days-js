import { server } from "./server/server.js";
import { PORT } from "./config/config.js";

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});