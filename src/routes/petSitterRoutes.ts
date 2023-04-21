import express from "express";
import * as petSitterController from "../controllers/petSitter";

const router = express.Router();

//Get all
router.get("/", petSitterController.getPetSitters);
//Get one
router.get("/:id", petSitterController.getPetSitter);

//Update
router.post("/updatePetSitter/:id", petSitterController.updatePetSitter);

export default router;
