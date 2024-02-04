declare module 'keyvox-node' {
    class KeyVox {
        apiKey: string;
        baseURL: string;

        constructor(apiKey: string, options: {
            baseURL: string
        });

        articles: {
            list(options?: {
                itemsPerPage?: number;
                page?: number;
            }): Promise<Object>;

            retrieve(idOrSlug: string, options?: {
                tags?: boolean,
                author?: boolean
            }): Promise<Object>;
        }
    }

    export default KeyVox;
}