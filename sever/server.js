import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

const mockUser = {
  username: "moaz@gmail.com", 
  password: "123456",
  name: "Moaz Khaled"
};

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // ضفنا هنا التأخير الوهمي لمدة ثانيتين (2000 مللي ثانية)
  setTimeout(() => {
    if (username === mockUser.username && password === mockUser.password) {
      res.cookie('authToken', 'mock_jwt_token_12345', {
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
        maxAge: 3600000 
      });

      return res.status(200).json({
        status: 'success',
        message: 'Logged in successfully',
        user: { name: mockUser.name, username: mockUser.username }
      });
    }

    return res.status(401).json({
      status: 'fail',
      message: 'Invalid username or password'
    });
  }, 2000); // <-- ده وقت التأخير
});

app.get('/api/auth/me', (req, res) => {
  const token = req.cookies.authToken;

  if (token) {
    return res.status(200).json({
      status: 'success',
      user: { name: mockUser.name, username: mockUser.username }
    });
  }

  return res.status(401).json({
    status: 'fail',
    message: 'Not authenticated'
  });
});

app.post('/api/logout', (req, res) => {
  res.clearCookie('authToken', {
    httpOnly: true,
    secure: false,
    sameSite: 'strict'
  });

  return res.status(200).json({
    status: 'success',
    message: 'Logged out successfully'
  });
});

app.listen(8000, () => {
  console.log('Server is running on port 8000 🚀');
});