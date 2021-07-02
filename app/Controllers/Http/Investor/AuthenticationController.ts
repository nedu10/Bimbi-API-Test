// import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import SignUpFeature from "App/Features/Authentication/SignUpFeature";

export default class AuthenticationController {
  public async registration({ request, response }) {
    let signUpResponse = await new SignUpFeature({
      ...request.post(),
    }).sign_up({});

    return response.status(signUpResponse.status_code).send(signUpResponse);
  }
}
