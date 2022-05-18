import { getStoryIds, getStory } from "../services/hnApi";
import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
export const StoriesContainer = () => {
	const [storyIds, setStoryIds] = useState([]);

	useEffect(() => {
		getStoryIds().then((data) => setStoryIds(data));
		storyIds && getStory(storyIds[0]).then((data) => console.log(data));
	}, []);

	return <Box>{JSON.stringify(storyIds)}</Box>;
};
