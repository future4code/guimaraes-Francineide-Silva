import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class MovieController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { title, description, duration_in_minutes, year_of_release} = req.body;

      const userBusiness = new UserBusiness();
      await userBusiness.create({ title, description, duration_in_minutes, year_of_release });

      res.status(201).send({ message: "Filme cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
