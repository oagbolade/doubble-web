

import { NextApiRequest, NextApiResponse } from "next";

import {
  _iv,
  _key,
  encryptData,
  decryptionData,
} from "../../../src/utils";


export default async function main(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      try {
        const { emailAddress = null, password = null, confirmPassword = null } = req.body;

        if (!emailAddress) throw new Error("No username provided.");

        const encryptedLoginDetail = encryptData({ emailAddress, password, confirmPassword }, _key, _iv)

        const response = await fetch("https://sterlingdoubbleapi-dev.sterlingapps.p.azurewebsites.net/api/Account/ConfirmForgotPassword", {
          method: "post",
          body: encryptedLoginDetail,
          headers: {
            'Content-Type': 'application/json'
          },
        })

        const encryptedResponse = await response.text();

        return res.status(200).json(encryptedResponse);
      } catch (e) {
        return res.status(500).json({ error: e.message });
      }
    default:
      return;
  }
}
