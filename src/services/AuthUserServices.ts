import { prisma } from "../config/prisma";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export const AuthUserServices = async (email: string, password: string) => {
  const emailExist = await prisma.user.findFirst({
    where: { email },
  });

  if (!emailExist) {
    throw new Error("email ou senha incorretos");
  };

  const verificarSenha = await compare(password, emailExist.password);

  if(!verificarSenha){
    throw new Error("email ou senha incorretos");
  };

  const segredo = process.env.JWT_SECRET as string;

  const geradorJwt = sign(
    { email: emailExist.email, role: emailExist.role },
    segredo,
    { 
    subject: String(emailExist.id),                          
    expiresIn: '1h'                                  
  });
  
  return {id: emailExist.id,name: emailExist.name, email: emailExist.email, role: emailExist.role, token: geradorJwt};
};
