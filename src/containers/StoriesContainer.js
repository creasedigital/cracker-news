import { getStoryIds, getStory } from "../services/hnApi";
import { Story } from "../components/Story";
import { useState, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";

export const StoriesContainer = () => {
	const [storyIds, setStoryIds] = useState([]);

	useEffect(() => {
		getStoryIds().then((data) => setStoryIds(data));
		// storyIds && getStory(storyIds[0]).then((data) => console.log(data));
	}, []);

	return (
		<>
			<Heading as="h1" mb={2} color="#2e2e2c">
				Cracker New Stories
			</Heading>
			{storyIds.map((storyId) => (
				<Story key={storyId} storyId={storyId} />
			))}
		</>
	);
};
