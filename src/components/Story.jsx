import { Box, Link, Flex } from "@chakra-ui/react";
import { RatingStar } from "rating-star";
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
				<Flex justify="center" direction="column">
					Stars:{" "}
					{<RatingStar maxScore={5} rating={story.score} id={story.id} />}
				</Flex>
				<Box>Author: {story.by}</Box>
			</Flex>
		</>
	) : null;
};
