import {test } from 'node:test';
import assert from 'node:assert';
import 'dotenv/config';
import process from 'node:process';
import KeyVox from '../src/KeyVox.js';

const kv = new KeyVox(process.env.KEY, {
    baseURL: process.env.BASE_URL
});

test('articles.list()', {skip: true}, async () => {

    const list = await kv.articles.list({
        page: 1,
        itemPerPage: 2
    })

    console.log(list)
});

test('articles.retrieve()', {skip: true}, async () => {
    const idOrSlug = process.env.ARTICLE_ID;
    const article = await kv.articles.retrieve(idOrSlug, {
        tags: 1,
        author: 1
    });

    console.log(article);
});