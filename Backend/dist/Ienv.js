"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
// Load environment variables
(0, dotenv_1.config)();
// Type assertion ensures process.env has the correct shape
const env = process.env;
exports.default = env;
