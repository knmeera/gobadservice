import { Router } from "express";
import {
    getPosts,
} from "../controllers/posts.controller";

const router = Router();

router.get("/posts", getPosts);

export default router;
