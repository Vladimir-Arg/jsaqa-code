import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 50000,
    retries: 0,
    testIgnore: 'App.spec.js',
    use: {
        headless: true,
        //actionTimeout: 20000,
        ignoreHTTPSErrors: true,
        video: 'off'
    },
    projects: [
        { 
        name: 'Chromium',
        use: {browserName: 'chromium'}
        },/*
        { 
        name: 'Firefox',
        use: {browserName: 'firefox'}
        },
        { 
        name: 'Webkit',
        use: {browserName: 'webkit'}
        } */
    ]
}
export default config