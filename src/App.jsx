import { useEffect, useState } from "react";
import { Button, message, Spin } from "antd";
import './index.css';

const { Title, Paragraph } = Typography;

function App() {
  const [quote, setQuote] = useState(""); //тут храним цитаты
  const [loading, setLoading] = useState(false); //тут отслеживаем состояние загрузки

  useEffect(() => {
  const fetchQuote = async () => {
    setLoading(true); //тут вкл индтикатор загрузки
    try { 
      const response = await fetch(""); //тут делаем запрос к API с цитатами
      if (!response.ok) throw new Error('Ошибка при получении цитаты');
      const data = await response.json();
      setQuote(data.content); //тут получаем цитату и обновл состояние
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false); //тут откл индикатор загрузки
    }
  };
  
    fetchQuote();
  },[]);

  return (
    <div>

    </div>
  )



}

export default App;
