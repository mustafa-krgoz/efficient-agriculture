import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Kullanıcı adı ve şifrenin boş olup olmadığını kontrol et
    if (username.trim() !== '' && password.trim() !== '') {
      // Giriş mantığını burada gerçekleştir
      console.log('Admin Girişi:', username);
      console.log('Şifre:', password);

      // Axios kullanarak giriş isteğini gönder
      axios.get(`http://localhost:4500/api/people/${username}`, {
        username: username,
        password: password,
      })
      .then(response => {
        // Handle successful login response
        if(username===response.data.Username && password===response.data.Password)
          console.log('Login Successful. You Are Being Redirected!');
        else
          console.log('Login Failed');
      })
      .catch(error => {
        // Handle login error
        console.error('Login error:', error);
      });
    } else {
      // Hata mesajı görüntüle veya boş alanları başka bir şekilde işle
      console.log('Lütfen kullanıcı adı ve şifreyi girin.');
    }
  };

  return (
    <div className="login-form-container">
      <div>
        <label>Admin Girişi</label>
        <div>
          <FontAwesomeIcon icon={faUser} />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label>Şifre</label>
        <div>
          <FontAwesomeIcon icon={faLock} />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {/* Giriş Yap butonu */}
      <button onClick={handleLogin}>Giriş Yap</button>
    </div>
  );
};

export default Login;
