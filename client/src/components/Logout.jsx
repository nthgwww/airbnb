import axios from 'axios';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext.jsx';

export default function Logout() {
  const { setUser } = useContext(UserContext);

  async function handleLogout() {
    try {
      await axios.post('/logout');
      // Đăng xuất thành công, set thông tin người dùng thành null
      setUser(null);
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Logout failed:', error);
    }
  }

  // Gọi hàm handleLogout khi component được render, bạn có thể sử dụng useEffect nếu cần
  handleLogout();

  // Điều hướng trang đến trang đăng nhập
  return <Navigate to={'/login'} />;
}
