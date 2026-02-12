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
