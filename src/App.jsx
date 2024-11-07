import { useEffect, useState } from "react";
import { Button, Typography, Spin } from "antd";
import axios from "axios";

const { Title, Paragraph } = Typography;

function App() {
  const [quote, setQuote] = useState(""); //тут храним цитаты
  const [loading, setLoading] = useState(false); //тут отслеживаем состояние загрузки

  const fetchQuote = async () => {
    setLoading(true); //тут вкл индтикатор загрузки
    try { 
      const response = await axios.get(""); //тут делаем запрос к API с цитатами
      setQuote(response.data.content); //тут получаем цитату и обновл состояние
    } catch (error) {
      console.error("Error fetching quote", error);
      setQuote("Не удалось получить цитату. Попробуйте позже.");
    } finally {
      setLoading(false); //тут откл индикатор загрузки
    }
  }
}

export default App;
