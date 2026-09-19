import { PORT } from "./config/config.js";
import { server } from "./server/server.js";

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
