// Определяем интерфейсы для пользователя и initDataUnsafe
interface TelegramUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
  }
  
  interface InitDataUnsafe {
    user?: TelegramUser;
  }
  
  // Расширяем интерфейс для Telegram Web App
  interface TelegramWebApp {
    initData: string;
    initDataUnsafe: InitDataUnsafe;
    close: () => void;
    MainButton: {
      text: string;
      show: () => void;
      hide: () => void;
    };
    HapticFeedback: {
      impactOccurred: (style: "light" | "medium" | "heavy") => void;
    };
  }
  
  // Расширяем глобальный объект Window
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }
  