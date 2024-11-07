import { useEffect, useState } from "react";
import { Button, message, Spin } from "antd";

function App() {
  const [quote, setQuote] = useState(""); //тут храним цитаты
  const [loading, setLoading] = useState(false); //тут отслеживаем состояние загрузки

  useEffect(() => {
    const fetchQuote = async () => {
      setLoading(true); //тут вкл индтикатор загрузки
      try {
        const response = await fetch("https://zenquotes.io/api/random"); //тут делаем запрос к API с цитатами
        if (!response.ok) throw new Error("Ошибка при получении цитаты");
        const data = await response.json();
        setQuote(data.content); //тут получаем цитату и обновл состояние
      } catch (error) {
        message.error(error.message);
      } finally {
        setLoading(false); //тут откл индикатор загрузки
      }
    };

    fetchQuote();
  }, []);

  const handleGenerateQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://zenquotes.io/api/random"); //тут делаем запрос к API с цитатами
      if (!response.ok) throw new Error("Ошибка при получении цитаты");
      const data = await response.json();
      setQuote(data.content); //тут получаем цитату и обновл состояние
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="quote-container">
      <h1>Слуйчаная цитата благодарности</h1>
      {loading ? (
        <Spin />
      ) : (
        <p className="quote-text">
          {quote || 'Нажмите "Сгенерировать", чтобы получить цитату'}
        </p>
      )}
      <Button type="primaty" onClick={handleGenerateQuote}>
        Сгенерировать
      </Button>
    </div>
  );
}

export default App;
