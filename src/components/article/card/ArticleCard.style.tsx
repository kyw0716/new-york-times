import styled from 'styled-components';

export const Container = styled.div`
  height: 84px;
  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;

  background-color: #fff;
  border-radius: 8px;

  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`;

export const HeadLine = styled.h1`
  font-size: 18px;
  font-weight: 700;

  height: max-content;

  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  line-height: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 10px;
`;

export const ReporterAndOrganization = styled.div`
  display: flex;
  gap: 8px;
`;

export const EllipsisSpan = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: #6d6d6d;
`;

export const UnStyledButton = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;
