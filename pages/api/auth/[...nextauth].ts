import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { NextApiRequest, NextApiResponse } from "next";
import { httpRequest } from "../../../src/https/http";
import { _key } from "../../../src/utils";

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, {
    providers: [
      Providers.Credentials({
        name: "Login",
        async authorize(credentials: any) {
          try {
            const user = await httpRequest({
              url: "Account/Login",
              method: "POST",
              body: {
                username: credentials.username,
                password: credentials.password,
              },
            });

            // if (!user.status) throw new Error(user.message);
            return user.data;
          } catch ({ message }) {
            throw new Error(message);
          }
        },
      }),
    ],
    session: {
      jwt: true,
    },
    jwt: {
      secret: _key,
      maxAge: 24 * 60 * 60,
    },
    pages: {
      signIn: "/login",
    },
    callbacks: {
      jwt: async (token, user, account, profile, isNewUser) => {
        if (user) token.user = user;
        return Promise.resolve(token);
      },
      session: async (session, user) => {
        session.user = user.user;
        return Promise.resolve(session);
      },
    },
  });
