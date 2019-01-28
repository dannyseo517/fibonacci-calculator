module.exports = {
    "roots": [
        "<rootDir>"
    ],
    "collectCoverageFrom" : ["app/**/*.tsx"],
    "coveragePathIgnorePatterns": [
        "app/index.tsx",
        "app/store.tsx"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx$",
    "moduleDirectories": [
        ".",
        "app",
        "node_modules"
    ],
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|less|scss)$": "<rootDir>/__tests__/fileMock.js",
        "^App/(.*)$": "app/$1",
        "^Assets/(.*)$": "public/assets/$1",
        "^Actions/(.*)$": "app/actions/$1",
        "^Common/(.*)$": "app/components/common/$1",
        "^Components/(.*)$": "app/components/$1",
        "^Constants/(.*)$": "app/constants/$1",
        "^Helpers/(.*)$": "app/helpers/$1",
        "^Styles/(.*)$": "app/styles/$1",
        "^Reducers/(.*)$": "app/reducers/$1"
    },
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    "setupFilesAfterEnv": ["<rootDir>/__tests__/setupEnzyme.ts"],
}