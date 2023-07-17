import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({

    projectId: 'thmphcec',
    dataset: 'production',
    title: 'Espens-infoside',
    apiVersion: '2021-03-25',
    basePath: '/admin',
    plugins: [deskTool()],

});

export default config;

