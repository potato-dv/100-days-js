export function sendError(res, status, code, message, details) {
    const error = {
        code,
        message
    };

    if (details !== undefined) {
        error.details = details;
    }

    res.status(status).json({ error });
}