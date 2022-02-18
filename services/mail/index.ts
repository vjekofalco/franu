import nodemailer, { Transporter } from "nodemailer"

import { getKitchenFormTranslationLabel } from "../../common/kitchen-forms"
import { getApplianceTranslationLabel } from "../../common/appliances"

export const sendMail = async (data) => {
  const { userData } = data

  try {
    let transporter: Transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    })

    let options = {
      from: `${userData.email}`,
      to: [process.env.GMAIL_USER, process.env.GMAIL_USER_TWO],
      subject: "Novi zahtijev za kuhinju",
      html: composeMessage(data),
    }

    await transporter.sendMail(options)
  } catch (e) {
    console.error(
      `Sending request E-mail to ${userData.email} failed. User name: ${userData.firstName} ${userData.lastName}, phone: ${userData.phone}`,
      e
    )
  }
}

const composeMessage = (data) => {
  const { userData, requestInfo } = data

  return `<div>
        <div>
            <b>Kupac: </b> ${userData.firstName} ${userData.lastName}
        </div>
        <div style="margin-top: 12px;">
            <b>Tel: </b> ${userData.phone}
        </div>
        <div style="margin-top: 12px;">
            <b>Email: </b> ${userData.email}
        </div>
        ${
          userData.address
            ? `<div style="margin-top: 12px;">
              <b>Adresa: </b> ${userData.address}
            </div>`
            : ""
        }
        ${
          userData.kitchenSize
            ? `<div style="margin-top: 12px;">
              <b>Dužina kuhinje: </b> ≈ ${userData.kitchenSize} m
            </div>`
            : ""
        }
        <div style="margin-top: 12px;">
            <b>Budget:</b> ${userData.budget} €
        </div>
        ${
          requestInfo.kitchenShape
            ? `<div style="margin-top: 12px;">
            <b>Oblik Kuhinje:</b> ${getKitchenFormTranslationLabel(
              requestInfo.kitchenShape
            )}
        </div>`
            : ""
        }
        ${
          requestInfo.appliances?.length > 0
            ? `<div style="margin-top: 12px;">
            <b>Aparati:</b> ${requestInfo.appliances
              .map((a) => getApplianceTranslationLabel(a))
              .join(", ")}
        </div>`
            : ""
        }
        ${
          userData.message
            ? `<div style="margin-top: 12px;">
            <b>Dodatne Info:</b>${userData.message}
        </div>`
            : ""
        }
    </div>`
}
