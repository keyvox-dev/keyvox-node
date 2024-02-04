import Article from './Article.js';

class KeyVox {

    constructor(apiKey, options) {
        this.apiKey = apiKey;
        this.baseURL = options?.baseURL ?? 'https://keyvox.dev/api';
        this.articles = new Article(this.apiKey, this.baseURL, this.#fetchData.bind(this));
    }

    async #fetchData(url, options) {
        try {
            const headers = {
                key: this.apiKey
            }

            url = new URL(url)
            if (options) {
                for (const [key, value] of Object.entries(options)) {
                    url.searchParams.append(key, value.toString())
                }
            }

            url = url.toString()

            const response = await fetch(url, {
                headers
            })

            if ( ! response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }
}

export default KeyVox;