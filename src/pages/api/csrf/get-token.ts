import nextConnect from "next-connect";
import { RedirectErrorFunction } from "src/lib/errorHandling/ErrorPageRedirect";
import { getCsrfTokenShortcut } from "src/lib/requestUtils";

const apiRoute = nextConnect({
    // Handle any other HTTP method
    onNoMatch(req, res) {
        const resObj = { error: `Method '${req.method}' Not Allowed` }
        res.statusCode = 405;
        res.write(JSON.stringify(resObj));
        res.end();
    },
    onError(error, _, res) {
        const resObj = { error: `Sorry something Happened! ${error.message}` }
        res.statusCode = 501;
        res.write(JSON.stringify(resObj));
        res.end();
    }
});

apiRoute.get(async (req, res) => {
    try {
        const csrfToken = getCsrfTokenShortcut(req);
        if (!csrfToken) { 
            throw new Error("400::::Header 'x-csrf-token' is missing");
        }

        res.statusCode = 200;
        res.write(JSON.stringify({
            csrfToken
        }));

        return res.end();
    } catch (err) {
        return RedirectErrorFunction(res, err)
    }
});

export default apiRoute;