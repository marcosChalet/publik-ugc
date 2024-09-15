import express from "express";
import { ok } from "../controllers/ok.js";
import { home } from "../controllers/home.js";
export const router = express.Router();

router.get("/ok", ok);
router.get("/", home);
