"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = __importDefault(require("../../utils/validate"));
const resize_1 = __importDefault(require("../../utils/resize"));
var path = require('path');
const Router = express_1.default.Router();
Router.get('/images', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let width = req.query.width + "";
    let height = req.query.height + "";
    let filename = req.query.filename + "";
    const result = yield validate_1.default.checImageExist(filename, "full");
    const result_width = yield validate_1.default.checkISPositiveNumber(width);
    const result_height = yield validate_1.default.checkISPositiveNumber(height);
    if (result && result_height && result_width) {
        const resCahedImage = yield validate_1.default.checImageExist(filename + "_" + height + "_" + width, "thumb");
        if (resCahedImage) {
            console.log("exist before ");
            res.sendFile(path.resolve('src/images/thumb/' + filename + "_" + height + "_" + width + '.png'));
        }
        else {
            console.log("resize image and then store at thumb");
            yield (0, resize_1.default)(filename, width, height);
            res.sendFile(path.resolve('src/images/thumb/' + filename + "_" + height + "_" + width + '.png'));
        }
    }
    else {
        res.send({ "message": " invalid parametrs in Url" });
    }
}));
exports.default = Router;
