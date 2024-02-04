import {test } from 'node:test';
import assert from 'node:assert';
import 'dotenv/config';
import process from 'node:process';
import KeyVox from '../src/KeyVox.js';

const kv = new KeyVox(process.env.KEY, {
    baseURL: process.env.BASE_URL
});

test('tags.list()', {skip: true}, async () => {
    const list = await kv.tags.list();

    console.log(list.data.tags[0]);
});

test('tags.retrieve()', {skip: false}, async () => {
    const idOrSlug = process.env.TAG_ID;

    const tag = await kv.tags.retrieve(idOrSlug);

    console.log(tag.data.articles)
});