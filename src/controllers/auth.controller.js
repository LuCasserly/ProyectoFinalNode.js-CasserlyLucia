import jwt from "jsonwebtoken";

const users = [
  {id: 1, username: "admin", password: "admin123", role: "admin"},
  {id: 2, username: "user1", password: "user123", role: "user"},
  {id: 3, username: "lucia", password: "lucia123", role: "user"},
];

export const loginUser = (req, res) => {
  try {
    const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username y password son requeridos" });
    }
    
  const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      const token = jwt.sign(
        { 
          id: user.id,
          username: user.username, 
          role: user.role 
        }, 
        process.env.JWT_SECRET, 
        { expiresIn: "1h" }
      );
      
      return res.json({ 
        token,
        user: {
          id: user.id,
          username: user.username,
          role: user.role
        }
      });
    }
    
    res.status(401).json({ error: "Credenciales inválidas" });
    
  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};