import { Box, Link, Flex, Center } from "@chakra-ui/react";
import { RatingStar } from "rating-star";
import { useState, useEffect, memo } from "react";
import { getStoryIds, getStory } from "../services/hnApi";
import { mapTime } from "../mappers/mapTime";

export const Story = memo(function Story({ storyId }) {
	const [story, setStory] = useState({});

	useEffect(() => {
		getStory(storyId).then((data) => data && data.url && setStory(data));
	}, []);

	// return JSON.stringify(story);

	return story && story.url ? (
		<Flex flexDirection="column" align="start" bg="#393939" px={10} my={8}>
			<Box>
				<Link
					href={story.url}
					textDecoration="none"
					color="white"
					_hover={{ fontWeight: "bold" }}
				>
					<Box as="p">{story.title}</Box>
				</Link>
			</Box>
			<Flex
				w="75%"
				align="center"
				justify="space-between"
				my={4}
				px={2}
				bgColor="#e9e9e9"
			>
				<Flex align="center" justify="space-between">
					<Box as="p" fontStyle="italic">
						Stars:{" "}
					</Box>
					<Box>
						{<RatingStar maxScore={5} rating={story.score} id={story.id} />}
					</Box>
				</Flex>
				<Box>
					Author: {story.by} {"  "} - {`${mapTime(story.time)} ago`}
				</Box>
			</Flex>
		</Flex>
	) : null;
});
