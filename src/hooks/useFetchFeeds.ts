import { useEffect, useState } from 'react';
import api from 'store/api';
import { IFeed } from 'store/types/feed.types';

const useFetchFeeds = ({
  skip = 0,
  limit = 10,
}: {
  skip: number;
  limit: number;
}) => {
  const [feeds, setFeeds] = useState<IFeed[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const fecthFeeds = async () => {
      try {
        const { data } = await api.get(`/feeds`, {
          params: { skip, limit },
        });

        setFeeds((prevFeeds) => {
          if (prevFeeds) {
            return [
              ...prevFeeds,
              ...data.data.filter(
                (feed: IFeed) =>
                  !prevFeeds.find((prevFeed) => prevFeed._id === feed._id)
              ),
            ];
          } else {
            return data.data;
          }
        });

        setLoading(false);
        setHasMore(data.data.length > 0);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    };

    fecthFeeds();
  }, [skip, limit]);

  return { feeds, loading, error, hasMore };
};

export default useFetchFeeds;
