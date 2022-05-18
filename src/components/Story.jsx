import { Box, Link, Flex } from "@chakra-ui/react";
import ReactStars from "react-stars";
import { useState, useEffect } from "react";
import { getStoryIds, getStory } from "../services/hnApi";

export const Story = ({ storyId }) => {
	const [story, setStory] = useState({});

	useEffect(() => {
		getStory(storyId).then((data) => data && data.url && setStory(data));
	}, []);

	// return JSON.stringify(story);

	return story && story.url ? (
		<>
			<Box>
				<Link href={story.url}>
					<Box as="p">{story.title}</Box>
				</Link>
			</Box>
			<Flex align="center" justify="space-between" m={10}>
				<Flex align="center">
					Stars:{" "}
					{<ReactStars count={story.score} size={32} color1={"#ff3366"} />}
				</Flex>
				<Box>Author: {story.by}</Box>
			</Flex>
		</>
	) : null;
};
