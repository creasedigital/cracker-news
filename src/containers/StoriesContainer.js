import { getStoryIds } from "../services/hnApi";
import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
export const StoriesContainer = () => {
	const [storyIds, setStoryIds] = useState([]);

	useEffect(() => {
		getStoryIds().then((res) => setStoryIds(res));
	}, []);

	return <Box>{JSON.stringify(storyIds)}</Box>;
};
