import pandas as pd
import matplotlib.pyplot as plt

# Загружаем CSV
df = pd.read_csv("file.csv")  # Укажи правильное имя файла

# Преобразуем колонку времени в формат datetime
df["time"] = pd.to_datetime(df["time"], format="%b %d, %I:%M:%S %p %Z", errors="coerce")

# Отсортируем по времени
df = df.sort_values("time")

# Строим график
plt.figure(figsize=(12, 6))
plt.plot(df["time"], range(len(df)), marker="o", linestyle="-", label="Твиты Илона Маска")

plt.xlabel("Время")
plt.ylabel("Количество твитов")
plt.title("График активности Илона Маска в Twitter")
plt.legend()
plt.xticks(rotation=45)
plt.grid(True)

plt.show()
