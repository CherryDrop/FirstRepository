
export default class Api {

    static baseUrl = process.env.ECOMMERCE_API_URL + '/graphql';
    public static async get<T>(path: string): Promise<T> {
        const response = await fetch(`${this.baseUrl}${path}`);
        return response.json();
    }
    // make a graphql request
    public static async graphql(query: string, variables: any): Promise<{data: any}> {
        const apiKey = process.env.ECOMMERCE_API_KEY

        if (this.baseUrl === undefined || !apiKey ) {
            throw new Error('API URL or API Key not set')
        }

        const response = await fetch(`${this.baseUrl}/graphql`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                query,
                variables,
            }),
        });
        return response.json();
    }
}