// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User";

export default class UsersController {
  async store({ request }) {
    const dados = await request.only(["email", "password"]);
    return await User.create(dados);
  }

  async login({ request, auth }) {
    const { email, password } = await request.body();
    return await auth.user("api").attempt(email, password);
  }
}
