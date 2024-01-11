
import { serialize } from "cookie";
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
        const {
          username = null,
          password = null,
          emailAddress = null,
          bvn = null,
          lastName = null,
          firstName = null,
          gender = null,
          dateOfBirth = null,
          mobilePhoneNumber = null,
        } = req.body;

        if (!username) throw new Error("No username provided.");
        if (!password) throw new Error("No password provided");
        if (!emailAddress) throw new Error("No password provided");
        if (!bvn) throw new Error("No bvn provided");
        if (!lastName) throw new Error("No last name provided");
        if (!firstName) throw new Error("No first name provided");
        if (!dateOfBirth) throw new Error("No date of birth provided");
        if (!mobilePhoneNumber) throw new Error("No mobile phone number provided");

        const encryptedLoginDetail = encryptData({
          username,
          password,
          emailAddress,
          bvn,
          lastName,
          firstName,
          gender,
          mobilePhoneNumber,
          dateOfBirth
        }, _key, _iv)
        // /api/Account/RegisterByBVN
        const response = await fetch("https://sterlingdoubbleapi-dev.sterlingapps.p.azurewebsites.net/api/Account/RegisterByBVN", {
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
