import { request, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { checaAdminCadastro } from "./middlewares/checaAdminCadastro";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticatedUserController = new AuthenticateUserController;
const createComplimentController = new CreateComplimentController();



router.post("/users", createUserController.handle);
router.post("/tags", createTagController.handle);
router.post("/login", authenticatedUserController.handle);
router.post("/compliments", createComplimentController.handle);


export {router};