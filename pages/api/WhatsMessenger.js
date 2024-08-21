const twilio = require('twilio');

class WhatsAppMessenger {
  constructor(accountSid, authToken, fromNumber) {
    this.client = twilio(accountSid, authToken);
    this.from = `whatsapp:${fromNumber}`;
  }

  async send(to) {
    try {
      const result = await this.client.messages.create({
        body: 'message',
        from: this.from,
        to: `whatsapp:${to}`
      });
      console.log("Message sent:", result.sid);
      return result;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  }
}

module.exports = WhatsAppMessenger;
