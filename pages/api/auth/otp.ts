
import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

import {
  _iv,
  _key,
  encryptData,
  decryptionData,
} from "../../../src/utils";

export const MAX_AGE = 60 * 60 * 8;

export default async function main(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      try {
        const { otp = null } = req.body;

        if (!otp) throw new Error("No username provided.");

        const encryptedLoginDetail = encryptData({ otp }, _key, _iv)

        const response = await fetch("https://sterlingdoubbleapi-dev.sterlingapps.p.azurewebsites.net/api/Explorer/SendVerifyOTP", {
          method: "post",
          body: encryptedLoginDetail,
          headers: {
            'Content-Type': 'application/json'
          },
        });

        const encryptedResponse = await response.text();
        const responseData = JSON.parse(decryptionData(encryptedResponse, _key, _iv));
        if (responseData.status === true) {
          const cookie = serialize("user", encryptedResponse, {
            maxAge: MAX_AGE,
            expires: new Date(Date.now() + MAX_AGE * 1000),
            httpOnly: true,
            // secure: process.env.NODE_ENV === 'production',
            path: '/',
            sameSite: 'lax',
          })

          res.setHeader('Set-Cookie', cookie)
        }

        return res.status(200).json(encryptedResponse);
      } catch (e) {
        return res.status(500).json({ error: e.message });
      }
    default:
      return;
  }
}
