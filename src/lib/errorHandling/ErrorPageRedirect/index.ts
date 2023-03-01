import { IncomingMessage, ServerResponse } from "http";

export function RedirectErrorFunction(res: ServerResponse<IncomingMessage>, err:any): void {
    console.log(err);
        const [statusCode, message] = err.message.split("::::");
        res.statusCode = parseInt(statusCode);
        res.writeHead(302, {
            Location: `/?error=${message}`
        });
        res.end();
    return;
}