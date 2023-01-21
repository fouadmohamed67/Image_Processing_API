"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const converter_1 = __importDefault(require("./routes/api/converter"));
const apiMiddleware_1 = __importDefault(require("./middleware/apiMiddleware"));
const app = (0, express_1.default)();
app.use('/api', apiMiddleware_1.default, converter_1.default);
app.listen(5000, () => {
    console.log('working on port 5000');
});
exports.default = app;
