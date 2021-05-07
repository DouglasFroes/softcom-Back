import { IMailProvider, IMessage } from '../IMailProvider'

export class MailTrapMailProvider implements IMailProvider {
  async sendMail(message: IMessage): Promise<void> {
    console.log(message)
  }
}
