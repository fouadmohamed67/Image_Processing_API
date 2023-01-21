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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const checImageExist = (imageName, folderName) => __awaiter(void 0, void 0, void 0, function* () {
    const image_path = path_1.default.resolve("src/images/" + folderName + "/" + imageName + ".png");
    if (fs_1.default.existsSync(image_path)) {
        return true;
    }
    else {
        return false;
    }
});
const checkISPositiveNumber = (dimantion) => {
    const num = +dimantion;
    if (num > 0) {
        return true;
    }
    else {
        return false;
    }
};
exports.default = { checImageExist, checkISPositiveNumber };
