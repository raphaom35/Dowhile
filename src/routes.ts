import { Router } from "express";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateMessageController } from "./controller/CreateMessageController";
import { Get3LastMessagesController } from "./controller/GetLast3MessagesController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";


const router =Router();


router.post("/authenticate",new AuthenticateUserController().handle)
router.post("/messages",ensureAuthenticated,new CreateMessageController().handle)
router.get("/messages/last3", new Get3LastMessagesController().handle);
export {router}