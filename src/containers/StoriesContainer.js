import { getStoryIds, getStory } from "../services/hnApi";
import { Story } from "../components/Story";
import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

export const StoriesContainer = () => {
	const [storyIds, setStoryIds] = useState([]);

	useEffect(() => {
		getStoryIds().then((data) => setStoryIds(data));
		// storyIds && getStory(storyIds[0]).then((data) => console.log(data));
	}, []);

	return storyIds.map((storyId) => <Story key={storyId} storyId={storyId} />);
};
