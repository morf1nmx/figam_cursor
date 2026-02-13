
import DeviceInfo from "react-native-device-info";
export const login = async (email: string, password: string) => {
  try {
    const response = await fetch('http://10.0.2.2:8005/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en login:', error);
    return { ok: false, message: 'Error de conexión' };
  }
};

export const sendMessageToChat = async (message: string) => {
  try {
    const response = await fetch('http://10.0.2.2:8005/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en /api/chat:', error);
    return { ok: false, message: 'Error de conexión' };
  }
};


export const getDeviceTemperature = async () => {
  try {
    const temp = await DeviceInfo.getBatteryLevel(); // battery level (0-1)
    console.log("Nivel de batería:", temp);
    return temp;
  } catch (error) {
    console.error("Error obteniendo nivel de batería:", error);
    return null;
  }
};




