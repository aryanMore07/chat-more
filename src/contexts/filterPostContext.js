import { useContext, useReducer } from "react";
import { createContext } from "react";
import { PostContext } from "../../src/contexts/postContext";
import { UserContext } from "./userContext";

export const FilteredPostContext = createContext();

const fitlerReducerFunction = (state, action) => {
    switch (action.type) {
        case "FILTER_INPUT":
            return {
                ...state,
                userFilterInput: action.payload,
            };
        default:
            return state;
    }
};

export const FilteredPostProvider = ({ children }) => {
    const { postData } = useContext(PostContext);
    const { state: userState } = useContext(UserContext);
    const [state, dispatch] = useReducer(fitlerReducerFunction, {
        userFilterInput: "LATEST",
    });
    const userFollowedPost = postData.filter(
        (post) =>
            userState?.userDetails?.username === post.username ||
            userState?.userDetails?.following?.some(
                (user) => user.username === post.username
            )
    );
    const filterPostData =
        state.userFilterInput === "LATEST"
            ? [...userFollowedPost].sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            )
            : [...userFollowedPost.filter(({ likes }) => likes.likeCount > 0)].sort(
                (a, b) => b.likes.likeCount - a.likes.likeCount
            );
    return (
        <FilteredPostContext.Provider value={{ state, dispatch, filterPostData }}>
            {children}
        </FilteredPostContext.Provider>
    );
};
