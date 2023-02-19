import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { FormFields } from "./navPanel";

export const formResolver = joiResolver(
  Joi.object<FormFields>({
    query: Joi.string().trim().max(64).required(),
  })
);
