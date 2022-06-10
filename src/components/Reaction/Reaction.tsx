import React, { useCallback, useEffect, useState } from 'react';
import { GithubSelector } from '@charkour/react-reactions';
import { IReactions, IUserReaction } from 'store/types/reaction.types';
import api from 'store/api';
import { AiFillLike } from 'react-icons/ai';
import styled from 'styled-components';

const TooltipText = styled.div`
  background: rgba(28, 56, 151, 0.9);
  color: #fff;
  width: 200px;
  text-align: center;
  line-height: 44px;
  border-radius: 3px;
  cursor: pointer;
`;
const TooltipBox = styled.div`
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  width: 230px;
  padding: 8px 8px;
  border-radius: 4px;
`;
const TooltipCard = styled.div`
  margin: 16px;
`;

const Reaction = ({ refId, refType }: { refId: string; refType: string }) => {
  const [reactions, setReactions] = useState<IReactions[] | null>([]);
  const [userReaction, setUserReaction] = useState<IUserReaction | null>(null);

  const fetchAllReactions = useCallback(async () => {
    const { data }: { data: IReactions[] } = await api.get(
      `/reactions?refId=${refId}&refType=${refType}`
    );
    if (!data) return;
    setReactions(data);
  }, [refId, refType]);

  const fetchUserReaction = useCallback(async () => {
    const { data }: { data: IUserReaction } = await api.get(
      `/reactions/user?refId=${refId}&refType=${refType}`
    );
    setUserReaction(data);
  }, [refId, refType]);

  const handleReaction = async (reaction: string) => {
    const { data }: { data: IUserReaction } = await api.post(`/reactions`, {
      refId,
      refType,
      reaction,
    });

    if (!data) return;

    if (data) {
      fetchAllReactions();
      fetchUserReaction();
    }
  };

  useEffect(() => {
    fetchAllReactions();
    fetchUserReaction();
  }, [fetchAllReactions, fetchUserReaction]);

  return (
    <section className='flex justify-between items-center'>
      {userReaction ? (
        <div className='flex items-center gap-2 justify-start '>
          <span
            style={{
              cursor: 'pointer',
              fontSize: '2.5rem',
            }}
            onClick={() => handleReaction(userReaction?.reaction)}
          >
            {userReaction?.reaction}{' '}
          </span>
        </div>
      ) : (
        <div className='flex items-center gap-2 justify-start'>
          <ToottipWrapper>
            <Box>
              <GithubSelector onSelect={handleReaction} />
            </Box>
            <AiFillLike
              style={{
                cursor: 'pointer',
                fontSize: '2.5rem',
              }}
            />
          </ToottipWrapper>
        </div>
      )}
    </section>
  );
};

export default Reaction;

const Box = styled.div`
  display: none;
  position: absolute;
  top: -9rem;
  left: -1rem;
`;

const ToottipWrapper = styled.div`
  position: relative;
  padding: 0.5rem;
  cursor: pointer;

  &:hover ${Box} {
    display: block;
  }
`;
