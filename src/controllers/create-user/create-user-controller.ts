import { ICreateUserUseCase } from "../../use-cases/create-user/protocols"
import { IHttpRequest, IHttpResponse } from "../protocols"
import { ICreateUserController } from "./protocols"

export class CreateUserController implements ICreateUserController {
  constructor(private createUserUseCase: ICreateUserUseCase) {}

  async handle(request: IHttpRequest): Promise<IHttpResponse<string>> {
    const { name, email, password } = request.body

    try {
      await this.createUserUseCase.execute({ name, email, password })

      return {
        statusCode: 201,
        data: "Criado com sucesso.",
      }
    } catch (err) {
      return {
        statusCode: 201,
        data: "Criado com sucesso.",
      }
    }
  }
}
