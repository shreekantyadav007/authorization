The application uses JWT Token to authenticate the user. The user must register himself, after login use the credential, then click on the protected link, If you are a valid login user then you can see your name there, else it will show access denied.

Frontend link:
https://cute-moonbeam-2b2726.netlify.app/

Backend link:
https://autherntication-backend.vercel.app/protected

Backend github repo link:
https://github.com/shreekantyadav007/autherntication_backend.git


![image](https://github.com/user-attachments/assets/35ff3599-086f-48e2-a602-d6f1e4f812a6)


Task 31
(middelware)

// Protected route
const authenticateMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Check if the Authorization header is present
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization token required' });
    }

    // Extract token from the header
    const token = authHeader.split(' ')[1];

    try {
        // Verify the token
        const decoded = jwt.verify(token, SECRET_KEY);

        // Add the user data to the request object for access in subsequent middleware/routes
        req.user = decoded;

        // Proceed to the next middleware/route
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};

app.get('/protected', authenticateMiddleware, (req, res) => {
    // Access the authenticated user data
    res.json({ message: `Welcome, ${req.user.username}! This is a protected route.` });
});

Task 32
(direct check)
// Protected Route
app.get('/protected', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'Token required' });

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        res.json({ message: `Hello, ${decoded.username}!` });
    } catch (err) {
        res.status(403).json({ message: 'Invalid or expired token' });
    }
});
