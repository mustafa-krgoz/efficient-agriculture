import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Kullanıcı adı ve şifrenin boş olup olmadığını kontrol et
    if (username.trim() !== '' && password.trim() !== '') {
      // Giriş mantığını burada gerçekleştir
      console.log('Admin Girişi:', username);
      console.log('Şifre:', password);
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

export default LoginForm;

