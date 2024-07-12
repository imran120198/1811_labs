
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { description, style } = req.body;

    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Generate two pickup lines in a ${style} style for someone who ${description}`,
        max_tokens: 100,
        n: 2,
        stop: null,
        temperature: 0.7,
      });

      const pickupLines = response.data.choices.map(choice => choice.text.trim());

      res.status(200).json({ pickupLines });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
