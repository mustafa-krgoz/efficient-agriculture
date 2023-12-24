import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Kullanıcı girişi işlemleri burada yapılır
    console.log('Admin Girişi:', username);
    console.log('Şifre:', password);
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

      <button onClick={handleLogin}>Giriş Yap</button>
    </div>
  );
};

export default LoginForm;
