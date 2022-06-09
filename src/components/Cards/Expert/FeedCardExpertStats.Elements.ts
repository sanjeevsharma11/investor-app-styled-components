import styled from 'styled-components';

export const ExpertCard = styled.section`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

export const ExpertCardHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: space-between;
  grid-gap: 10px;
  margin-bottom: 10px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  gap: 10px;
  grid-column: 1 / 4;
`;

export const ExpertAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const ExpertName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: background: hsla(0, 0%, 0%, 1);
  line-height: 19.36px;
`;

export const MemberSince = styled.p`
  font-size: 10px;
  font-weight: 400;
  color:background: hsla(0, 0%, 44%, 1);
  line-height: 12.1px;
`;

export const NameAndMemberSince = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  grid-column: 4 / 5;

  svg {
    cursor: pointer;
    width: 20px;
    transition: all 0.2s ease-in-out;
    transform: ${({ showExpertDetails }: { showExpertDetails: boolean }) =>
      showExpertDetails ? 'rotate(-90deg)' : 'rotate(0deg)'};
  }
`;

export const AccuracyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ExpertAccuracyHeading = styled.h3`
  font-size: 12px;
  font-weight: 500;
  color: background: hsla(0, 0%, 0%, 1);
  line-height: 15px;
`;

export const ExpertAccuracyValue = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ gain }: { gain: number }) =>
    gain > 0
      ? 'hsla(138, 87%, 40%, 1)'
      : gain < 0
      ? 'hsla(0, 100%, 64%, 1)'
      : 'hsla(200, 95%, 14%, 1)'};
  line-height: 17px;

  &:after {
    content: '%';
  }
`;

export const ExpertDetailContainer = styled.div(
  ({ showExpertDetails }: { showExpertDetails: boolean }) => [
    `
        opacity: 0;
        background: #fff;
        display: grid;        
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        place-items: center;
        transition: all 0.2s ease-in-out;
        height: 0;
      `,
    showExpertDetails &&
      `
        opacity: 1;
        height: auto;
        padding: 20px;
    `,
  ]
);

export const ExpertDetailColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  justify-content: center;
  align-items: center;
`;

export const ExpertDetailsHeading = styled.h4`
  font-size: 12px;
  font-weight: 500;
  color: background: hsla(0, 0%, 0%, 1);
  line-height: 14.52px;
`;

export const ExpertDetailsValue = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ gain }: { gain: number }) =>
    gain > 0
      ? 'hsla(138, 87%, 40%, 1)'
      : gain < 0
      ? 'hsla(0, 100%, 64%, 1)'
      : 'hsla(200, 95%, 14%, 1)'};
  line-height: 17px;
  display: flex;
  align-items: center;
`;
