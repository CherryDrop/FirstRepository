import nextConnect from "next-connect";
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
    const csrfToken = getCsrfTokenShortcut(req);
    if (!csrfToken) { 
        res.statusCode = 400; 
        res.write(JSON.stringify({
            error:"Header 'x-csrf-token' is missing"
        })); 
        res.end(); 
        return; 
    }
    res.statusCode = 200;
    res.write(JSON.stringify({
        csrfToken
    }));
    return res.end();
});

export default apiRoute;