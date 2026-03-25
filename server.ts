import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Telegram
  app.post("/api/contact", async (req, res) => {
    const { name, phone, comment, answers } = req.body;
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Telegram credentials missing");
      return res.status(500).json({ error: "Server configuration error" });
    }

    let message = `🚀 *Новая заявка iMperius*\n\n`;
    message += `👤 *Имя:* ${name}\n`;
    message += `📞 *Телефон:* ${phone}\n`;
    if (comment) message += `💬 *Комментарий:* ${comment}\n`;
    
    if (answers && answers.length > 0) {
      message += `\n📊 *Результаты квиза:*\n`;
      answers.forEach((ans: string, i: number) => {
        message += `${i + 1}. ${ans}\n`;
      });
    }

    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      });

      if (response.ok) {
        res.json({ success: true });
      } else {
        const errData = await response.json();
        console.error("Telegram API error:", errData);
        res.status(500).json({ error: "Failed to send message" });
      }
    } catch (error) {
      console.error("Server error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
