import { request, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { checaAdminCadastro } from "./middlewares/checaAdminCadastro";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { checaAuthenticated } from "./middlewares/checaAuthenticated";
import { ListUserSentComplimentsController } from "./controllers/ListUserSentComplimentsController";
import { ListUserReceivedComplimentsController } from "./controllers/ListUserReceivedComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticatedUserController = new AuthenticateUserController;
const createComplimentController = new CreateComplimentController();
const listUserSentComplimentsController = new ListUserSentComplimentsController();
const listUserReceivedComplimentsController = new ListUserReceivedComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();



router.post("/users", createUserController.handle);
router.post("/tags", checaAuthenticated, checaAdminCadastro, createTagController.handle);
router.post("/login", authenticatedUserController.handle);
router.post("/compliments",checaAuthenticated , createComplimentController.handle);
router.get("/users/compliments/sent",checaAuthenticated, listUserSentComplimentsController.handle);
router.get("/users/compliments/received",checaAuthenticated, listUserReceivedComplimentsController.handle);
router.get("/tags",checaAuthenticated, listTagsController.handle);
router.get("/users", checaAuthenticated, listUsersController.handle);

export {router};