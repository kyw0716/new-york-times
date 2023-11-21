import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 145px);
  margin-top: 60px;

  display: flex;
  flex-direction: column;
`;

export const LoadingContainer = styled.div`
  width: 100%;
  padding-top: 10px;

  display: flex;
  justify-content: center;
`;

// 로딩 스피너를 회전시키는 애니메이션 키프레임 정의
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// 스피너 컴포넌트를 만듭니다.
export const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1); /* 스피너 테두리 스타일 */
  border-top: 4px solid #767676; /* 스피너 상단 색상 */
  border-radius: 50%; /* 원 모양으로 만들기 */
  width: 40px; /* 가로 크기 */
  height: 40px; /* 세로 크기 */
  animation: ${spin} 0.8s linear infinite; /* 애니메이션 적용 */
`;
