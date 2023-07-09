import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const PostTime = (postDate) => {
  const timeAgo = dayjs(postDate).fromNow();
  return timeAgo;
};
