
export default class Api {

    static baseUrl = 'http://backend:3041';
    public static async get<T>(path: string): Promise<T> {
        const response = await fetch(`${this.baseUrl}${path}`);
        return response.json();
    }
    // make a graphql request
    public static async graphql<T>(query: string, variables: any): Promise<T> {
        const response = await fetch(`${this.baseUrl}/graphql`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables,
            }),
        });
        return response.json();
    }
}