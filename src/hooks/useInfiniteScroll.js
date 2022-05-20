import { STORY_INCREMENT, MAX_STORIES } from "../constants";
import { useState, useEffect } from "react";

export const useInfiniteScroll = () => {
	const [loading, setLoading] = useState(false);
	const [count, setCount] = useState(STORY_INCREMENT);

	const handleScroll = () => {};
};
