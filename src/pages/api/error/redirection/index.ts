import nextConnect from "next-connect";

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
    const queryParams = req.url.split("?")[1];
    if (!queryParams) { res.statusCode = 500; res.write(JSON.stringify({error:"Something went wrong, unknown error"})); res.end(); return; }
    const queryParamsArray = queryParams.split("&");
    const errorMessage = queryParamsArray.find((item) => item.includes("error"))?.split("=")[1];
    const errorStatus = queryParamsArray.find((item) => item.includes("status"))?.split("=")[1];
    const pipeline = queryParamsArray.find((item) => item.includes("pipeline"))?.split("=")[1];

    if (!errorMessage || !errorStatus || !pipeline) { res.statusCode = 500; res.write(JSON.stringify({error:"Something went wrong, unknown error"})); res.end(); return; }

    if (pipeline === "authentication") {
        res.writeHead(302, {
            Location: `/?error=${errorMessage}&status=${errorStatus}&pipeline=${pipeline}`
        });
        res.end();
        return;
    }

    if (pipeline === "authorization") {
        res.writeHead(302, {
            Location: `/api/auth0/login?error=${errorMessage}&status=${errorStatus}&pipeline=${pipeline}`
        });
        res.end();
        return;
    }

    res.statusCode = 500;
    res.write(`Something went wrong: ${errorMessage} ${errorStatus} ${pipeline}`);
    res.end();
});

export default apiRoute;